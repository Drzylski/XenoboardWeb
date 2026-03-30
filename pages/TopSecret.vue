<template>
  <div>

    <b-container class="header-background header-opacity shadow mt-5 mb-5 alien-container " style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3  ">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h1 id="top-secret">TOP SECRET</h1>
        </div>
      </BCol>
    </BRow>
  </b-container>

    <b-container class="header-background header-opacity shadow mt-5 mb-5 alien-container alien-appear " style="opacity: 0.9;">
      <div class="alien-svg ufo" style="display: none; z-index:999999 !important;height:100px;">
        <img class="ufo-img" src="~/assets/ufo2.png" width="100"  />
      </div>
      <div class="alien-svg alien" style="display: none; height:100px;">
        <img class="alien-img" src="~/assets/greenalien.png" width="100"  />
      </div>
      <img  class="alien-img alien-abs1" src="~/assets/greenalien.png" width="50"  />
      <img  class="alien-img alien-abs2" src="~/assets/greenalien.png" width="50"  />
      <img  class="alien-img alien-abs3" src="~/assets/greenalien.png" width="50"  />
    <BRow class="ps-3 pe-3 pb-5 pt-5 mb-3 mt-3 alien-background">
      <BCol class="col-12" >
        <div style="text-align: center;">
           <audio controls autoplay loop hidden>
              <source src="~/assets/x-files.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio> 
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Forums container-->
  <BContainer fluid class="topics-container topics-opacity mt-5 mb-5 pt-1 shadow alien-container " style="position: relative;z-index: 1 !important"  >
    <!--Forums Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 " >Forums</h4>
        
      </BCol>
    </BRow>
    

    <!--Forum Content-->
    <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0">
      <BCol v-for="(item,index) in forumList" :key="item.value.id" class="col-12 card-padding">
        <ForumCard class="mt-1 topic-card"  
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
  </BContainer>

  <b-container class="header-background header-opacity shadow mt-5 mb-5 pt-4 alien-container " style="opacity: 0.9;">
    <BRow class="ps-3 pe-3  ">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >All information on this page is CLASSIFIED INFORMATION. In accordance with DoDI 5230.24, all information here must be kept secret</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
import BreadCrumbs from '../components/BreadCrumbs.vue';

useHead({
  htmlAttrs: {
    class: 'alien-html'
  }
})

definePageMeta({
  layout: 'topsecret',
})

useSeoMeta({
  title: 'Xenoboard - Top Secret',
  ogTitle: 'Top Secret - Xenoboard',
  description: 'Top Secret page for Xenoboard. See classified info here about aliens, ufos, abductions, and government secrets. The truth is out there. Far out.',
  ogDescription: 'The Top Secret page for Xenoboard. See classified info here about aliens, ufos, abductions, and government secrets. The truth is out there. Far out.',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/TopSecret',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, Aliens, alien, ufo, government, top secret, secret, classified, conspiracy',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
}) 

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'TopSecret', title: 'Top Secret'}]);

const testForum1 = ref({ 
    id: 5,
    title: 'Top Secret',
    description: 'A forum for discussion of Top Secret topics. Aliens, UFOs, Classified information, Government Secrets, Etc. The Truth is out there. Far out.',
    category: 'Top Secret',
    posts: 654,
    image: null,
    latestReplyName: 'Mr Truth',
    latestReplyId: '123',
    latestReplyDate: new Date('09/08/2025'),
    latestTopicTitle: 'They abducted me last night. Again.',
    latestTopicId: '77',
    uuid: 'c3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

  const forumList = ref([testForum1]);

  function showUserModal(){
    alert('CLASSIFIED');
  };

</script>

<style scoped>

.alien-background{
  background-image: url(~/assets/alien-head.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

#top-secret{
  color: #FF0000;
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
		transform: translateX(40vw) translateY(16vw);
    opacity: 1; 
	}

}

.ufo-svg {

}

.ufo-svg img {
    
}

.alien-svg {

}

.alien-appear:hover > .alien-svg  {
  display: initial !important;
}

.alien-appear:hover > .alien-abs1 {
  opacity: 1;
  -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

.alien-appear:hover > .alien-abs2 {
  opacity: 1;
  -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

.alien-appear:hover > .alien-abs3 {
  opacity: 1;
  -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

</style>