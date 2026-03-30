<template>
  <div>
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

  <!--header container-->
  <b-container class="header-background header-opacity shadow">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h2 class="header-text-h2" >Welcome to <span class="xeno-text">Xenoboard</span></h2>
          <h6 >Welcome to the ultimate source of video game knowledge. </h6>
          <BButton v-if="isAuthorized" class="signup-button xeno-text " @click="showRegisterModal" >
            SIGN UP
          </BButton>
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Forums container-->
  <b-container fluid class="topics-container topics-opacity mt-4 pt-1 shadow" >
    <!--Forums Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 " >Forums</h4>
        
      </BCol>
    </BRow>
    

    <!--Forum Content-->
    <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0">
      <BCol v-for="(item,index) in forumList" :key="item.value.id" class="col-12 card-padding">
        <ForumCard class="mt-1 topic-card"  v-bind:class="{'card-colour':isEven(index), 'card-colour-dark':!isEven(index)}"
          :id="item.value.id"
          :title=item.value.title
          :description=item.value.description
          :category=item.value.category
          :posts=item.value.posts
          :image=item.value.image
          :latestReplyName=item.value.latestReplyName
          :latestReplyDate=item.value.latestReplyDate
          :latestTopicTitle="item.value.latestTopicTitle"
          :latestTopicId="item.value.latestTopicId"
          :uuid="item.value.uuid"
          @user-profile="showUserModal"
        ></ForumCard>
      </BCol>
    </BRow>
  </b-container>

  <!--Stats container-->
  
  <div class="stat-header shadow">
    <div class="alien-svg ufo" style="display: none; z-index:999999 !important;height:100px;">
        <img class="ufo-img" src="~/assets/ufo2.png" width="100"  />
      </div>
      <div class="alien-svg alien" style="display: none; height:100px;">
        <img class="alien-img" src="~/assets/greenalien.png" width="100"  />
      </div>
    <img  class="alien-img alien-abs1" src="~/assets/greenalien.png" width="50"  />
    <img  class="alien-img alien-abs2" src="~/assets/greenalien.png" width="50"  />
    <img  class="alien-img alien-abs3" src="~/assets/greenalien.png" width="50"  />
  <b-container fluid class="topics-container topics-opacity mt-4 pt-1 stat-header" >
    <!--Stats Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 " >Stats</h4>
      </BCol>
      <BCol class="A-Button">
          <NuxtLink :to="{ path: '/TopSecret'}">
          <BButton v-if="isAuthorized" class="alien-button mt-1" @click="showNewTopicModal"  >
            <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M421.844,68.703C377.531,24.406,318.641,0,256,0C193.375,0,134.484,24.406,90.156,68.703 C45.859,113,21.469,171.906,21.469,234.547c0,68.75,35.609,123.5,66.656,163.516C130.875,453.188,182.625,512,256,512 s125.125-58.813,167.891-113.938c31.031-40.016,66.641-94.766,66.641-163.516C490.531,171.906,466.141,113,421.844,68.703z M385.063,367.953c-35.625,45.922-77.906,94.891-129.063,94.891s-93.438-48.969-129.047-94.875 c-27.859-35.938-56.344-79.891-56.344-133.422c0-49.516,19.281-96.078,54.297-131.094C159.938,68.438,206.484,49.156,256,49.156 s96.063,19.281,131.094,54.281c35.016,35.031,54.297,81.594,54.297,131.109C441.391,288.078,412.906,332.031,385.063,367.953z"></path> <path class="st0" d="M285.656,363.078c6.844,0,12.375-5.531,12.375-12.359c0-6.813-5.531-12.344-12.375-12.344 c-6.828,0-12.328,5.531-12.328,12.344C273.328,357.547,278.828,363.078,285.656,363.078z"></path> <path class="st0" d="M213.969,350.719c0,6.828,5.531,12.359,12.375,12.359c6.828,0,12.344-5.531,12.344-12.359 c0-6.813-5.516-12.344-12.344-12.344C219.5,338.375,213.969,343.906,213.969,350.719z"></path> <path class="st0" d="M291.672,387.156h-71.344c-6.031,0-10.922,4.875-10.922,10.891s4.891,10.922,10.922,10.922h71.344 c6.031,0,10.922-4.906,10.922-10.922S297.703,387.156,291.672,387.156z"></path> <path class="st0" d="M221.938,297.688c6.875-0.641,12.297-5.969,10.156-17.375c-5.563-29.094-19.281-53.313-44.141-68.625 c-20.188-12.469-50.156-18.781-74.594-12.766c-7.625,1.859-10.359,8.406-8.172,19.281c3.781,18.984,12.375,45.828,32.125,61.016 C159.063,295.938,191.703,300.531,221.938,297.688z"></path> <path class="st0" d="M398.625,198.922c-24.422-6.016-54.375,0.297-74.594,12.766c-24.828,15.313-38.563,39.531-44.109,68.625 c-2.172,11.406,3.266,16.734,10.141,17.375c30.234,2.844,62.859-1.75,84.625-18.469c19.75-15.188,28.344-42.031,32.125-61.016 C409,207.328,406.281,200.781,398.625,198.922z"></path> </g> </g></svg>
          </BButton>
          </NuxtLink>
      </BCol>
    </BRow>
    
    <!--Stats Content-->
    <div class="stat-container ">
    <BRow class=" ps-1 pe-1 pt-0 pb-0">
      <BCol class="col-6 stat-padding">
          <div class="stat-body">
            <span>Total Topics:</span> <span class="stat-value">{{ forumStats.totalTopics }}</span>
          </div>
      </BCol>
      <BCol class="col-6 stat-padding">
          <div class="stat-body">
            Total Replies: <span class="stat-value">{{ forumStats.totalReplies }}</span>
          </div>
      </BCol>
    </BRow>

    <BRow class=" ps-1 pe-1 pt-0 pb-0">
      <BCol class="col-6 stat-padding">
          <div class="stat-body">
            Total Members: <span class="stat-value">{{ forumStats.totalMembers }}</span>
          </div>
      </BCol>
      <BCol class="col-6 stat-padding">
          <div class="stat-body">
            Online Members: <span class="stat-value">{{ forumStats.membersOnline }}</span>
          </div>
      </BCol>
    </BRow>

    <BRow class=" ps-1 pe-1 pt-0 pb-0">
      <BCol class="col-12 stat-padding">
          <div class="stat-body">
            Latest Member: <span class="stat-value">{{ forumStats.latestMember }}</span>
          </div>
      </BCol>
    </BRow>
    </div>
  </b-container>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BButton } from 'bootstrap-vue-next';
import { useOpenModal } from '../composables/OpenModal';
import { useCloseModal } from '../composables/CloseModal';
import type IUserData from '../../types/UserData';
import { useSeoMeta } from 'nuxt/app';

  const title = ref('Forums - Xenoboard');
  const description = ref('Xenoboard forums page. Choose one of 4 forum topics to explore. Or was it 5? Who knows. Thats a secret.');
  const showPostTopicModal = ref(false);
  const isAuthorized = ref(true);
  const showRegister = ref<boolean>(false);
  const showUserProfile = ref<boolean>(false);  
    
  useSeoMeta({
  title: 'Xenoboard Forums',
  ogTitle: 'Forums - Xenoboard',
  description: 'Xenoboard forums page. Choose one of 4 forum topics to explore. Or was it 5? Who knows. Thats a secret.',
  ogDescription: 'Forums for Xenoboard. Choose one of 4 forum topics to explore. Or was it 5? Who knows. Thats a secret.',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://xenoboard.net/Forums',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, forums, discussions, bazaar, events, news',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})  

definePageMeta({
    layout: 'default'
  })

  useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  },
  { name: 'keywords', hid: 'keywords-forums', content: 'Xenoboard, Xeno, forums, discussions, bazaar, events, news'  }]
})

  const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Forums', title: 'Forums'}]);

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

  const testForum1 = ref({ 
    id: 1,
    title: 'Discussions',
    description: 'A forum for general discussions about video game related topics',
    category: 'Discussions',
    posts: 123,
    image: null,
    latestReplyName: 'Damian Zylski',
    latestReplyId: '123',
    latestReplyDate: new Date('05/08/2025'),
    latestTopicTitle: 'My First Post',
    latestTopicId: '1',
    uuid: 'c3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

  const testForum2 = ref({
    id: 2,
    title: 'Bazaar',
    description: 'A place to sell all of your unwanted treasure for maximum profits',
    category: 'Bazaar',
    posts: 5,
    image: null,
    latestReplyName: 'Bob Smith',
    latestReplyId: '323',
    latestReplyDate: new Date('06/28/2025'),
    latestTopicTitle: 'Selling my Playstation 5',
    latestTopicId: '2',
    uuid: 'z3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

  const testForum3 = ref({
    id: 3,
    title: 'Events',
    description: 'A place to post about community events and other such topics. Such as contests, etc',
    category: 'Events',
    posts: 21,
    image: null,
    latestReplyName: 'Janek Brzenczyszczykiewicz',
    latestReplyId: '523',
    latestReplyDate: new Date('05/21/2025'),
    latestTopicTitle: 'Hosting a Smash Bros tournament - Testing a longer title -- Testing a longer title - Testing a longer title - Testing a longer title - Testing a longer title',
    latestTopicId: '3',
    uuid: 'g3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

  const testForum4 = ref({
    id: 4,
    title: 'News',
    description: 'News that you can use about our site and about important events in the gaming world',
    category: 'News',
    posts: 7,
    image: null,
    latestReplyName: 'Barney Stinson',
    latestReplyId: '623',
    latestReplyDate: new Date('08/15/2025'),
    latestTopicTitle: 'Nintendo Stock takes a dip',
    latestTopicId: '4',
    uuid: 'r3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

  const forumStats = ref({
    totalTopics: 101,
    totalReplies: 345,
    totalMembers: 52,
    membersOnline: 7,
    latestMember: 'Boris Grishenko',
  });

  const userData: IUserData =  {
    id: '777',
    image: '-666',
    username: '',
};


  const forumList = ref([testForum1, testForum2, testForum3, testForum4]);

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

  .stat-value{
    font-weight: 900 !important;
    color: #EEEEEE;
    font-size: 20px;
  }

  .stat-padding{
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .header-background{
    background-color: #080a0b;
    color: #EEEEEE !important;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid #080a0b;
    align-content: start;
    align-items: start;
    text-align: start;
    max-width: none;
    opacity: 0.6;
    position: relative;

  }

  .stat-body{
    padding: 15px;
    background-color: #2A3439;
    opacity: 1 !important;
    color: #BBBBBB
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
    font-size: 28px;
    padding-right: 30px;
  }

  

  .header-opacity{
    opacity: 0.85;
  }

  .section-header{
     
  }

  .header-background:hover > .shulk-svg{
    display:initial !important;
  }

   @keyframes shulk-appear {
  to{
    bottom: 45vw;
    opacity:1;
  }
  from{
    bottom: 38vw;
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

.container-sm {
  position: fixed ;
  bottom: 80% ;
  opacity:0.1 ;
  right: 50%;
  transform: translateX(-6%) ;
 
  animation: meteor-appear 5s ease forwards ;
}

.container-md {
  position: fixed ;
  bottom: -80% ;
  opacity:0 ;
  right: 50%;
  transform: translateX(-60%) ;
 
  animation: alien 5s ease forwards ;
}

.signup-button{
  margin-left: auto !important;
  border: 1px solid #FFFFFF !important;
  background-color: #2A3439 !important;
  opacity: 1 !important;
  margin-left: 20px !important;
  text-align: center;
  font-size: 17px;
}

.stat-container{
 z-index: 3 !important;
 position: relative !important;
}

.stat-header{
 z-index: 1 !important;
 position: relative !important;
}

.ufo-svg {

}

.ufo-svg img {
    
}

.alien-svg {

}

.stat-header:hover > .alien-svg  {
  display: initial !important;
}

.stat-header:hover > .alien-abs1 {
  opacity: 1;
  -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

.stat-header:hover > .alien-abs2 {
  opacity: 1;
  -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

.stat-header:hover > .alien-abs3 {
  opacity: 1;
  -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

.alien-abs1{
  position: absolute !important;
  left: 50vw !important;
  top: -50px !important;
    z-index: 1 !important;
    opacity: 0;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    pointer-events: none;
}

.alien-abs2{
  position: absolute !important;
  left: 75vw !important;
  top: -55px !important;
    z-index: 1 !important;
    opacity: 0;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    pointer-events: none;
}

.alien-abs3{
  position: absolute !important;
  left: 25vw !important;
  top: -65px !important;
    z-index: 1 !important;
    opacity: 0;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    pointer-events: none;
}

.alien{
   animation: alien 1s forwards ;  
	top: 0;
	left: 0;
	transform: translateX(-120%) translateY(-120%) rotateZ(0);
	position: fixed;
	animation-delay: 1s;
	z-index: 1 !important;
}

.ufo{
   animation: ufo 10s linear infinite;  
	top: 0;
	left: 0;
	transform: translateX(-120%) translateY(-120%) rotateZ(0);
	position: fixed;
	animation-delay: 1s;
	z-index: -999999 !important;
}

.alien-svg img {
    
}

@keyframes ufo {

	0% {
    
		transform: translateX(-100%)  translateY(10vw);
    rotate: 30deg;
    opacity: 0.8;
	}

	50% {
		transform: translateX(100vw) translateY(20vw);
    rotate: 0deg;
    opacity: 1; 
	}

  100% {
   
		transform: translateX(-100%)  translateY(10vw);
    rotate: -30deg;
    opacity: 1;
	}

}

@keyframes alien {

	0% {
    
		transform: translateX(50vw)  translateY(25vw);
    opacity: 0.5;
	}

	100% {
		transform: translateX(51vw) translateY(16vw);
    opacity: 1; 
	}

}

.stat-header:hover > .section-header > .A-Button > .alien-button {
  opacity: 1 !important;
  -webkit-transition: opacity 100s;
    -moz-transition: opacity 100s;
    -o-transition: opacity 100s;
    transition: opacity 100s;
}

.alien-button{
  display: flex !important;
  justify-content: flex-end !important;
  justify-items: flex-end !important;
  align-items:flex-end !important;
  align-content:flex-end !important;
  margin-left: auto !important;
  border: 1px solid #FFFFFF !important;
  background-color: #005500 !important;
  opacity: 0 !important;
  text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
  -webkit-transition: opacity 10s;
    -moz-transition: opacity 10s;
    -o-transition: opacity 10s;
    transition: opacity 10s;
}


</style>