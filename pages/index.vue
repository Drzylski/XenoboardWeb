<template>
  <div>
  <ModalBody v-if="showPostTopicModal" @close-modal="closeNewTopicModal" :subComponentName="'NewTopicForm'" :modalWidth="80" :modalData="modalData">
    <template v-slot:modal-title>
      Post Topic
    </template>
  </ModalBody>

  <!--Upper image/header container-->
  <b-container class="header-background header-opacity" >
    <BRow class="header-image p-3">
      <BCol class="col-sm-3 col-12 header-logo ">
         <svg height="150" width="250" xmlns="http://www.w3.org/2000/svg">
          <image height="150" width="250" href="~/assets/x.png" opacity="0.9" />
        </svg> 
      </BCol>
      <BCol class="col-sm-9 col-12 header-text show" >
        <h1 class="header-text-h1 xeno-text xeno-crazy-text">Xenoboard</h1>
        <h2 class="header-text-h2" >The ultimate source of knowledge</h2>
      </BCol>
    </BRow>
  </b-container>

  <!--Recent Topics container-->
  <b-container fluid class="topics-container topics-opacity mt-4 pt-1">

    <!--Recent Topics Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3">
      <BCol class="col-auto">
        <h4 class="pt-2">Recent Topics</h4>
      </BCol>
      <BCol >
          <BButton v-if="isAuthorized" class="post-button mt-1" @click="showNewTopicModal" >New Topic</BButton>
      </BCol>
    </BRow>

    <!--Recent Topics Content-->
    <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0">
      <BCol v-for="(item,index) in topicList" :key="item.value.id" class="col-12 card-padding">
        <TopicCard class="mt-1 "  v-bind:class="{'card-colour':isEven(index), 'card-colour-dark':!isEven(index)}"
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

  const title = ref('Xenoboard Home');
  const description = ref('The Xenoboard Homepage');
  const showPostTopicModal = ref(false);
  const isAuthorized = ref(true);

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

  const testTopic1 = ref({ 
    id: 1,
    title: 'My first post!',
    author: 'Damian Zylski',
    createdDate: new Date('05/08/2025'),
    category: 'Discussions',
    views: 2,
    replies: 0,
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
    createdDate: new Date('05/14/2025'),
    category: 'Rants',
    views: 34,
    replies: 0,
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
    title: 'A deep introspection on the cognitive effects of video games',
    author: 'Ted Smith',
    createdDate: new Date('05/18/2025'),
    category: 'Discussions',
    views: 20,
    replies: 1,
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

  //defineExpose({testTopic1,testTopic2,testTopic3,topicList});

  var num = 666;

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

  .topics-container{
    background-color: #0A0C0D !important;
    color: #EEEEEE !important;
    border-radius: 10px 10px 10px 10px !important;
    border-bottom: 2px solid #0A0C0D !important;
    align-content: center !important;
    align-items: center !important;
    text-align: center !important;
    max-width: none !important;
    padding-bottom: 5px !important;
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

  .topics-opacity{
    opacity: 0.85;
  }

  .header-opacity{
    opacity: 0.85;
  }

  .card-padding{
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  .card-colour{
    background-color: #2A3439;
    opacity: 1 !important;
  }

  .card-colour-dark{ 
    background-color: #14191C; 
    opacity: 1 !important;
  }

  .post-button{
    display: flex;
    justify-content: flex-end;
    justify-items: flex-end;
    align-items:flex-end;
    align-content:flex-end;
    margin-left: auto;
    border: 1px solid #FFFFFF;
    background-color: #2A3439;
    opacity: 1 !important;
  }

   .post-button:hover{
    background-color: #14191C;
  }

</style>