<template>
  <div>

  <!--New topic form-->
  <ModalBody v-if="showPostTopicModal" @close-modal="closeNewTopicModal" :subComponentName="'NewTopicForm'" :modalWidth="80" :modalData="modalData">
    <template v-slot:modal-title>
      Post Topic
    </template>
  </ModalBody>

  <ModalBody v-if="showRegister" @close-modal="closeRegisterModal" :subComponentName="'RegisterModal'" :modalWidth="70" :modalData="modalData">
    <template v-slot:modal-title>
      Sign Up
    </template>
  </ModalBody>

  <ModalBody v-if="showUserProfile" @close-modal="closeUserModal" :subComponentName="'UserModal'" :modalWidth="90" :modalData="userData">
    <template v-slot:modal-title>
      User Profile
    </template>
  </ModalBody>

  <!--Upper image/header container-->
  <div class="header header-background header-opacity" style="position: relative; z-index: 2;">
    <!--img class="monado-img" src="~/assets/monado.png" width="50" style="" /-->
    <NuxtImg class="monado-img" src="/monado.png" alt="Monado"  sizes="sm:25px md:50px lg:50px xl:50px" quality="100" />
    <NuxtImg class="shulk-img" src="/shulk1.png" alt="Shulk"  sizes="sm:50px md:100px lg:100px xl:100px" quality="100" />
    <div class="shulk-svg container-md" style="display: none; z-index:-1000 !important;height:1px;">
      <!--img class="test-img" src="~/assets/shulk1.png" width="100" style="z-index:-1000;display:block;position: fixed; right:-45vw; top: 0%;" /-->
      <NuxtImg class="test-img" src="/wilhelm.png" alt="Shulk"  sizes="sm:25px md:50px lg:50px xl:50px" quality="100" style="z-index:-1000;display:block;position: fixed; right:-45vw; top: 0%;" />
    </div>
  <b-container class="header-background header-opacity" style="z-index:1;position: relative; ">
    <div class="meteor-svg container-sm" style="display: none; z-index:1000 !important;height:1px;">
      <!--img class="meteor-img" src="~/assets/meteor2.png" width="300vw" style="z-index:-1000;display:block;position: fixed; left:50vw; top: 0%;" /-->
      <NuxtImg class="meteor-img" src="/meteor2.png" alt="Meteor"  sizes="sm:300px md:300px lg:300px xl:300px" quality="100" style="z-index:-1000;display:block;position: fixed; left:50vw; top: 0%;" />
    </div>
    <div class="meteor-svg container-sm meteor-2" style="display: none; z-index:1000 !important;height:1px;">
      <!--img class="meteor-img" src="~/assets/meteor2.png" width="300vw" style="z-index:-1000;display:block;position: fixed; left:50vw; top: 0%;" /-->
      <NuxtImg class="meteor-img" src="/meteor2.png" alt="Meteor2"  sizes="sm:300px md:300px lg:300px xl:300px" quality="100" style="z-index:-1000;display:block;position: fixed; left:50vw; top: 0%;" />
    </div>
    <BRow class="header-image p-3 shadow">
      <BCol class="col-sm-3 col-12 header-logo ">
         <svg height="150" width="250" xmlns="http://www.w3.org/2000/svg">
          <image height="150" width="250" href="~/assets/x.png" opacity="0.9" rel="preload" />
        </svg> 
      </BCol>
      <BCol class="col-sm-9 col-12 header-text show" >
        <h1 class="header-text-h1 xeno-text xeno-crazy-text">Xenoboard</h1>
        <h2 class="header-text-h2" >The ultimate source of knowledge</h2>
      </BCol>
    </BRow>
  </b-container>
  </div>

  <!--News container-->
  <b-container class="topics-container topics-opacity mt-4 pt-1 shadow" >
    <!--News Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 ">News</h4>
      </BCol>
    </BRow>
    <!--News Content-->
    <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0" style="background-color: #14191C;">
      <BCol class="col-1"></BCol>
      <BCol class="col-10 card-padding">
        <div v-if="carouselLoading == null || carouselLoading == true" class="pt-5 pb-5 me-5 mb-5 mt-5" style="padding-left: 50px;">
          <div><BSpinner class="light" large label="Loading..." variant="light" style="width: 5rem; height: 5rem;"></BSpinner></div>
          <span class="loading-text">Loading...</span>
        </div>
        <div v-show="carouselLoading != null && carouselLoading == false">
          <ClientOnly>
            <LazySlideCarousel :slides="slideList" v-model:carousel-loading="carouselLoading"></LazySlideCarousel>
          </ClientOnly> 
        </div>
      </BCol>
      <BCol class="col-1"></BCol>
    </BRow>
  </b-container>

  <!--Recent Topics container-->
  <b-container fluid class="topics-container topics-opacity mt-4 pt-1 shadow" >
    <!--Recent Topics Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 ">Recent Topics</h4>
        
      </BCol>
      <BCol >
        
          <BButton v-if="isAuthorized" class="post-button mt-1" @click="showNewTopicModal"  >
            New Topic
          </BButton>
      </BCol>
    </BRow>
    

    <!--Recent Topics Content-->
    <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0">
      <BCol v-for="(item,index) in topicList" :key="item.value.id" class="col-12 card-padding">
        <TopicCard class="mt-1 topic-card shadow"  v-bind:class="{'card-colour':isEven(index), 'card-colour-dark':!isEven(index)}"
          :id="item.value.id"
          :title=item.value.title
          :author=item.value.author
          :createdDate=item.value.createdDate
          :category=item.value.category
          :views=item.value.views
          :replies=item.value.replies
          :image=item.value.image
          :latestReplyName=item.value.latestReplyName
          :latestReplyDate=item.value.latestReplyDate
          :tags=item.value.tags
          :sticky=item.value.sticky
          :closed=item.value.closed
          :uuid="item.value.uuid"
          :likes="item.value.likes"
          @user-profile="showUserModal"
        ></TopicCard>
      </BCol>
    </BRow>
  </b-container>

  <!--Signup container-->
    <b-container fluid class="topics-container topics-opacity mt-4 pt-1 shadow " >
      <!--Signup Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " ></h4> 
        </BCol>
      </BRow> 

      <!--Signup Content-->
      <BRow class="topics-opacity grey-body p-4 ">
        <BCol class="col-12 card-padding" >
          <div style="text-align: center;">
            <h2 class="header-text-h2 mb-5" >Please check out our About section to learn more about <span class="xeno-text">Xenoboard</span> and feel free to signup today!</h2>
            <BButton class="signup-button xeno-text " @click="showRegisterModal">
              SIGN UP
            </BButton>
          </div>
        </BCol>
      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BButton } from 'bootstrap-vue-next';
import { useOpenModal } from '../composables/OpenModal';
import { useCloseModal } from '../composables/CloseModal';
import SlideCarousel from '../components/SlideCarousel.vue';
import type ISlideData from '../types/SlideData';
import type IUserData from '../types/UserData';
import { useSeoMeta } from 'nuxt/app';

 definePageMeta({
    layout: 'default'
  })

  const title = ref('Xenoboard');
  const description = ref('Xenoboard is the ultimate source of video game knowledge. Founded by Damian Zylski and Vector industries, it is the best place to get all your video game info. Far out');
  const showPostTopicModal = ref(false);
  const isAuthorized = ref(true);
  const showRegister = ref<boolean>(false);
  const showUserProfile = ref<boolean>(false); 

  useSeoMeta({
  title: title.value,
  ogTitle: 'Home - Xenoboard',
  description: description.value,
  ogDescription: 'The Xenoboard is the ultimate source of video game knowledge. Founded by Damian Zylski and Vector industries, it is the best place to get all your video game info. Far out',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://xenoboard.net',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, Zohar, Home, Aliens, alien, ufo, forum, videogames, videogame, messageboard, thread',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})  
    
  useHeadSafe({
  title: title.value,
    meta: [{
      name: 'description',
      content: description.value,
      
    },
    { name: 'keywords', hid: 'keywords-home', content: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, Zohar, Home, Aliens, alien, ufo, forum, videogames, videogame, messageboard, thread'  }
    ],
    link: [
      {
        rel: 'preload',
        as: 'image',
        URL: '~/assets/x.png',
      },
    ],
  })  

    //Check for if carousel is loading necessary files. 
    const carouselLoading = ref<boolean>();

  const modalData: IModalData = {
    id: null,
    title: null,
    body: null,
    author: null,
    category: null,
    tags: null,
    update: null,
    firstName: null,
    lastName: null,
    middleName: null,
    dob: null,
    email: null
};

const userData: IUserData =  {
    id: '777',
    image: '-666',
    username: '',
};

  const testTopic1 = ref({ 
    id: 1,
    title: 'My first post!',
    author: 'Damian Zylski',
    createdById: 1,
    updatedById: 1,
    createdDate: new Date('05/08/2025'),
    updatedDate: new Date('05/08/2025'),
    category: 'Discussions',
    views: 2,
    replies: 0,
    likes: 2,
    image: null,
    latestReplyName: 'Damian Zylski',
    latestReplyDate: new Date('05/08/2025'),
    tags: ['Test','Video Game'],
    sticky: true,
    closed: true,
    uuid: 'c3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

  const testTopic2 = ref({
    id: 2,
    uuid: 'd75bb2bc-325f-415e-b406-777404091268',
    title: 'This game sucks',
    author: 'Seifer Almasy',
    createdById: 2,
    updatedById: 2,
    createdDate: new Date('05/14/2025'),
    updatedDate: new Date('05/14/2025'),
    category: 'Events',
    views: 34,
    replies: 0,
    likes: 10,
    image: null,
    latestReplyName: 'Seifer Almasy',
    latestReplyDate: new Date('05/14/2025'),
    tags: ['Video Game'],
    sticky: false,
    closed: false
  });

  const testTopic3 = ref({
    id: 3,
    uuid: '9ebc2cd6-b555-414a-85aa-b6c2ce5a1be8',
    title: 'A deep introspection on the cognitive effects of video games A deep introspection on the cognitive effects of video games A deep introspection on the cognitive effects of video games',
    author: 'Ted Smith',
    createdById: 3,
    updatedById: 3,
    createdDate: new Date('05/18/2025'),
    updatedDate: new Date('05/18/2025'),
    category: 'Discussions',
    views: 20,
    replies: 1,
    likes: 5,
    image: null,
    latestReplyName: 'Jan Brzenczyszczykiewicz',
    latestReplyDate: new Date('05/30/2025'),
    tags: ['Test','Video Game'],
    sticky: false,
    closed: true
  });

  const topicList = ref([testTopic1, testTopic2, testTopic3]);

  const slide1 = ref<ISlideData>({
    id: '1',
    title: 'Xenoboard opens it\'s doors',
    content: 'Xenoboard has officially launched and is live now. Have fun exploring the site and seeing what is out there',
    imageUrl: 'xenogears1.jpg',
    linkUrl: '/ViewTopic/1',
    external: false,
  });

  const slide2 = ref<ISlideData>({
    id: '2',
    title: 'New Xenoblade Rumors',
    content: 'A new Xenoblade is rumored to be in the making. It will be coming out at some point in the future. Keeps your eyes posted for more news.',
    imageUrl: 'xenoblade-chronicles.jpg',
    linkUrl: '/ViewTopic/2',
    external: false,
  });

  const slide3 = ref<ISlideData>({
    id: '3',
    title: 'The Zohar Project',
    content: 'Introducing the Zohar project. A project of upmost secrecy  At long last it has been found. (We are not affiliated with the Zohar project)',
    imageUrl: 'zohar.jpg',
    linkUrl: 'https://project-zohar.com/',
    external: true,
  });

  const slide4 = ref<ISlideData>({
    id: '4',
    title: 'Alien signals intercepted',
    content: 'Scientists announce they have finally intercepted a message an alien message from another world. Click here to see what the message is.',
    imageUrl: 'signals.jpg',
    linkUrl: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
    external: true,
  });

  const slide5 = ref<ISlideData>({
    id: '5',
    title: 'Nintendo stock dips',
    content: 'Nintendo stock takes a dip. It has fallen and has been down for a while. Now might be a good time to buy some stock. ',
    imageUrl: 'nintendo.jpg',
    linkUrl: 'https://www.nintendoreporters.com/en/news/nintendo-switch-2/nintendo-stock-falls-as-switch-2-memory-costs-surge-and-investors-react/',
    external: true,
  });

  const slide6 = ref<ISlideData>({
    id: '6',
    title: 'Chaos in the world',
    content: 'Lots of Chaos in the world these days. Use this to see what is happening and where. Be safe out there. ',
    imageUrl: 'chaos.jpg',
    linkUrl: 'https://liveuamap.com/',
    external: true,
  });

  const slide7 = ref<ISlideData>({
    id: '7',
    title: 'Obama says aliens are real',
    content: 'Obama says aliens are real. The truth is out there. Click here to read more.  ',
    imageUrl: 'obama-alien.jpg',
    linkUrl: 'https://time.com/7378768/obama-aliens-real-area-51/',
    external: true,
  });

  const slide8 = ref<ISlideData>({
    id: '8',
    title: 'The Epstein Files',
    content: 'The Epstein files. Epstein and all his friends. Click here to view them and prepare to be shocked',
    imageUrl: 'epstein2.png',
    linkUrl: 'https://jmail.world/drive?q=clone',
    external: true,
  });

  const slideList = ref([slide1, slide2, slide3, slide4, slide8, slide7, slide5, slide6]);





  function isEven(n) {
    return n % 2 == 0;
  }

  function showNewTopicModal(){
    showPostTopicModal.value = useOpenModal(showPostTopicModal.value);
  }

  function closeNewTopicModal(){
    showPostTopicModal.value = useCloseModal(showPostTopicModal.value);
  }

  function showRegisterModal(){
  showRegister.value = useOpenModal(showRegister.value);
}

  function closeRegisterModal(){
    showRegister.value = useCloseModal(showRegister.value);
  }

  const showUserModal = (data) => {

    userData.id = data.value.id;
    userData.image = data.value.image;
    userData.username = data.value.username;

    showUserProfile.value = useOpenModal(showUserProfile.value);
  };

  function closeUserModal(){
    showUserProfile.value = useCloseModal(showUserProfile.value);
  }

  //defineExpose({testTopic1,testTopic2,testTopic3,topicList});

  var num = 666;



</script>

<style scoped>

  .topic-card{
    
  }

  .header-background{
    background-color: #080a0b;
    color: #EEEEEE !important;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid #080a0b;
    align-content: center;
    align-items: center;
    text-align: center;
    max-width: none;
    opacity: 0.6;
    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
    position: relative;

  }

   .header-image {

   }

   .header-background::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("~/assets/stars.gif") ;
    opacity: 0;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    z-index: -1;
    border-radius: 10px 10px 10px 10px;
   }

   .header-logo svg{
    opacity: 1;
    transition: opacity 1s;
   }

  .header-background:hover::after {
    opacity: 1;
   }

  .header-background:hover svg{
    opacity: 0.3 !important;
    transition: opacity 1s;
  } 

   @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

  .header-text {
    text-align: center;
    padding-right: 45vh; 
    padding-top: 3vh;
  }

  .header-text-h1{
    font-size: 32px;
  }

   .header-text-h2{
    font-size: 24px;
  }

  

  .header-opacity{
    opacity: 0.85;
  }

  .section-header{
     
  }

  .header-background:hover > .shulk-svg{
    display:none !important;
  }

  .header-background:hover > .meteor-svg{
    display:initial !important;
  }

   @keyframes wilhelm-fly {
  to{
    bottom: 65vw;
    right: 100vw;
    opacity:1;
  }
  from{
    bottom: -10vw;
    right: 0vw;
    opacity:0;
  }
}

   @keyframes meteor-appear {
  to{
    right: 200%;
    opacity:1;
  }
  from{
    bottom: 115%;
    opacity:0.8;
  }
}

@keyframes meteor {

	0% {
    
		transform: translateX(80vw)  translateY(-15vw);
    opacity: 0.8;
	}

	100% {
		transform: translateX(-80vw) translateY(5vw); 
    opacity: 1; 
	}
}

@keyframes meteor2 {

	0% {
    
		transform: translateX(60vw)  translateY(-45vw) ;
    opacity: 0.8;
	}

	100% {
		transform: translateX(-160vw) translateY(-20vw) ; 
    opacity: 1; 
	}
}

.container-sm {
  position: fixed ;
  bottom: 80% ;
  opacity:0.1 ;
  right: 50%;
  transform: translateX(-6%) ;
 
  animation: meteor 5s ease forwards infinite ;
}

.container-md {
  position: fixed ;
  bottom: -10vw ;
  opacity:0 ;
  right: 50vw;
  transform: translateX(-60%) ;
 
  animation: wilhelm-fly 5s ease forwards ;
}

.meteor-2 {
  position: fixed ;
  bottom: 80% ;
  opacity:0.1 ;
  right: 50%;
  transform: translateX(-6%) ;
  rotate: 180deg;
  animation: meteor2 5s ease forwards infinite ;
}

.monado-img{
  z-index:-1000;
  position: absolute; 
  pointer-events: none; 
  opacity: 0; right:30vw; 
  top: -85px;
  -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

@keyframes shulk-appear {
    100% { transform: translateY(-100px); }
}

@keyframes shulk-hide {
    0% {transform: translateY(-100px);}
    100% { transform: translateY(0px); }
}

.shulk-img{
  z-index:-1000;
  position: absolute; 
  pointer-events: none; 
  opacity: 0; 
  transform: translateX(30vh);
  transform: translateY(0px);
  -webkit-transition: opacity 1s;
  -moz-transition: opacity 1s;
  -o-transition: opacity 1s;
  transition: opacity 1s;
  animation: shulk-hide 2s ease forwards;
}

.header{

}

.header:hover > .monado-img {
  opacity: 1;
  -webkit-transition: opacity 3s;
    -moz-transition: opacity 3s;
    -o-transition: opacity 3s;
    transition: opacity 3s;
}

.header:hover > .shulk-img {
  opacity: 1;
  animation: shulk-appear 2s ease forwards;
  filter: brightness(100%);
  -webkit-transition: opacity 3, filter 2s ease-in-out, animation 2s;
    -moz-transition: opacity 3s, filter 2s ease-in-out, animation 2s;
    -o-transition: opacity 3s, filter 2s ease-in-out, animation 2s;
    transition: opacity 3s, filter 2s ease-in-out, animation 2s;
}


</style>