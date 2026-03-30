<template>
  <div>
  <ModalBody v-if="showPostTopicModal" @close-modal="closeNewTopicModal" :subComponentName="'NewTopicForm'" :modalWidth="80" :modalData="modalData">
    <template v-slot:modal-title>
      Post Topic
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
      <BCol class="col-sm-9 col-12" >
        <h2 class="header-text-h2" style="display: inline-block;">{{ $route.params.type }}</h2>
        <h6 style="display: inline-block;">{{ categoryDescription }}</h6>
      </BCol>
    </BRow>
  </b-container>

  <!--Forum Topics container-->
  <b-container fluid class="topics-container topics-opacity mt-4 pt-1 shadow" >
    <!--Forum Topics Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 " >Forum Topics</h4>
        
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
        <TopicCard class="mt-1 topic-card"  v-bind:class="{'card-colour':isEven(index), 'card-colour-dark':!isEven(index)}"
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BButton } from 'bootstrap-vue-next';
import { useOpenModal } from '../composables/OpenModal';
import { useCloseModal } from '../composables/CloseModal';
import GetCategoryDescription from '../../utils/GetCategoryDescription';
import type IUserData from '../../types/UserData';
import { useRoute, useSeoMeta } from 'nuxt/app';

  const route = useRoute();

  const title = ref('Xenoboard Forums - '+route.params.type);
  const description = ref('Xenoboard '+route.params.type+' forums page. ');
  const showPostTopicModal = ref(false);
  const isAuthorized = ref(true);
  const showUserProfile = ref<boolean>(false);  

  const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Forums', title: 'Forums'},{path: 'Forums/'+useRoute().params.type, title: ''+useRoute().params.type}]);

  const categoryDescription = ref<string>(GetCategoryDescription(useRoute().params.type));


  useSeoMeta({
  title: title.value,
  ogTitle: 'Forums - Xenoboard - '+route.params.type,
  description: description,
  ogDescription: route.params.type+'Forums for Xenoboard.',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://xenoboard.net/Forums/*',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, forums, '+route.params.type,
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})   

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

  function isEven(n) {
    return n % 2 == 0;
  }

  function showNewTopicModal(){
    showPostTopicModal.value = useOpenModal(showPostTopicModal.value);
  }

  function closeNewTopicModal(){
    showPostTopicModal.value = useCloseModal(showPostTopicModal.value);
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

  definePageMeta({
    layout: 'default'
  })

  useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})



</script>

<style scoped>

  .topic-card{
    cursor: pointer;
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


</style>