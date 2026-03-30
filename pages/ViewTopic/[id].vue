<template>
  <ModalBody v-if="showPostReplyModal" @close-modal="closeReplyModal" :subComponentName="'NewReplyForm'" :modalWidth="80" :modalData="replyData" >
      <template v-slot:modal-title>
        Post Reply
      </template>
    </ModalBody>
    <ModalBody v-if="showReportModal" @close-modal="closeReportForm" :subComponentName="'ReportModal'" :modalWidth="80" :modalData="reportData" >
      <template v-slot:modal-title>
        Report
      </template>
    </ModalBody>
    <ModalBody v-if="showPostTopicModal" @close-modal="closeNewTopicModal" :subComponentName="'NewTopicForm'" :modalWidth="80" :modalData="topicData">
      <template v-slot:modal-title>
        Post Topic
      </template>
    </ModalBody>
    <ModalBody v-if="showUserProfile" @close-modal="closeUserModal" :subComponentName="'UserModal'" :modalWidth="90" :modalData="userData">
    <template v-slot:modal-title>
      User Profile
    </template>
  </ModalBody>
  <div>
    <!--Topic container-->
    <b-container fluid class="topics-container topics-opacity mt-0 pt-1 shadow" style="z-index: 100;">
      
      <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>

      <!--Topic Header-->
      <BRow class="section-header topics-opacity ps-3 mt-0 pt-0 pb-0 mb-0 pe-3">
        <BCol class="col-auto">
          <h4 class="pt-0 text-start">{{ testTopic1.title }}</h4> 
        </BCol>
        <BCol >
            <BButton v-if="isAuthorized" class="post-button mt-1" @click="showReplyModal" >Post Reply</BButton>
        </BCol>
      </BRow>
      <BRow class="section-header topics-opacity ps-3 mt-0 pt-0 pb-2 mb-0 pe-3" style="opacity: 1 !important;">
        <BCol class="col-auto" >
           <span v-if="isAdmin" class="admin-option-icon pe-3" >
            
            <BDropdown size="sm"  variant="link" toggle-class="text-decoration-none p-0 m-0" no-caret class="p-0 m-0" style="width: 20px; display: inline-block !important;">
              <template #button-content >
                <svg class="icon admin-option-symbol p-0 m-0" fill="#ffffff" width="18px" height="18px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dropdown</title> <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path> </g></svg>
                <span class="visually-hidden">Admin-Option</span>
              </template>
              <BDropdownItem href="#">Make Sticky</BDropdownItem >
              <BDropdownItem href="#">Close Topic</BDropdownItem >
            </BDropdown>
           </span>
           <span v-if="closed" class="closed-icon pe-3">
              <svg class="closed-symbol" v-if="closed" style="text-align: left !important;" height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.686 502.686" xml:space="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <title>Closed</title> <path style="fill:#FFFFFF;" d="M403.676,221.014v-68.746C403.697,68.293,335.339,0,251.407,0 C167.411,0,99.096,68.293,99.096,152.268v68.768H66.373v281.65h369.939V221.014H403.676z M156.453,152.268 c0-52.309,42.581-94.825,94.933-94.825c52.266,0,94.825,42.538,94.825,94.825v68.768H156.453V152.268z M277.551,425.462h-52.266 l7.83-77.202c-9.664-6.018-16.178-16.76-16.178-29.077c0-18.961,15.402-34.362,34.47-34.362 c18.961,0,34.319,15.402,34.319,34.362c0,12.317-6.407,23.038-16.157,29.077L277.551,425.462z"></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
           </span>
           <span v-if="sticky" class="sticky-icon pe-3">
              <svg class="sticky-symbol" v-if="sticky" style="text-align: left !important;" height="21" width="21" fill="#FFFFFF" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Sticky</title> <path d="M18.973 17.802l-7.794-4.5c-0.956-0.553-2.18-0.225-2.732 0.731-0.552 0.957-0.224 2.18 0.732 2.732l7.793 4.5c0.957 0.553 2.18 0.225 2.732-0.732 0.554-0.956 0.226-2.179-0.731-2.731zM12.545 12.936l6.062 3.5 2.062-5.738-4.186-2.416-3.938 4.654zM8.076 27.676l5.799-7.044-2.598-1.5-3.201 8.544zM23.174 7.525l-5.195-3c-0.718-0.414-1.635-0.169-2.049 0.549-0.415 0.718-0.168 1.635 0.549 2.049l5.196 3c0.718 0.414 1.635 0.169 2.049-0.549s0.168-1.635-0.55-2.049z"></path> </g></svg>
           </span>
        </BCol>
        <BCol class="col-auto">
           <span class="tag-card" v-for="(item,index) in testTopic1.tags" :key="item"> {{ item }} </span>
        </BCol>
      </BRow>

      <!--Topic and Reply Content-->
      <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0">
        <BCol class="col-12 card-padding">
          <ReplyCard class="mt-1 card-colour-dark" 
                :id="testTopic1.id"
                :title=testTopic1.title
                :author=testTopic1.author
                :body=testTopic1.body
                :createdDate=testTopic1.createdDate
                :updatedDate=testTopic1.updatedDate
                :createdById="testTopic1.createdById"
                :updatedById="testTopic1.updatedById"
                :category=testTopic1.category
                :views=testTopic1.views
                :replies=testTopic1.replies
                :image=testTopic1.image
                :latestReplyName=testTopic1.latestReplyName
                :latestReplyDate=testTopic1.latestReplyDate
                :tags=testTopic1.tags
                :likes=testTopic1.likes
                :sticky=testTopic1.sticky
                :closed=testTopic1.closed
                :reported="testTopic1.reported"
                :uuid="testTopic1.uuid"
                :topicId="-1"
                :isTopic="true"
                :cardNum="1"
                @report-modal="showReportForm"
                @edit-modal="showEditForm"
                @user-profile="showUserModal"
                v-model:topicData="topicData"

          ></ReplyCard>
          <span v-for="(item,index) in replyList" :key="item.value.id">
          <ReplyCard class="mt-1  "  v-bind:class="{'card-colour':isEven(index), 'card-colour-dark':!isEven(index)}"
            :id="item.value.id"
            :title=item.value.title
            :author=item.value.author
            :body=item.value.body
            :createdDate=item.value.createdDate
            :updatedDate=item.value.updatedDate
            :createdById="item.createdById"
            :updatedById="item.updatedById"
            :category=item.value.category
            :views=item.value.views
            :replies=item.value.replies
            :image=item.value.image
            :latestReplyName=item.value.latestReplyName
            :latestReplyId=item.value.latestReplyId
            :latestReplyDate=item.value.latestReplyDate
            :tags=item.value.tags
            :likes=item.value.likes
            :sticky=item.value.sticky
            :closed=item.value.closed
            :reported="item.value.reported"
            :uuid="item.value.uuid"
            :isTopic="false"
            :topicId="item.value.topicId"
            :cardNum="index+2"
            @report-modal="showReportForm"
            @edit-modal="showEditForm"
            @user-profile="showUserModal"
            v-model:replyData="replyData"
          ></ReplyCard>
          </span>
        </BCol>
      </BRow>
    </b-container>
  </div>
</template>

<script lang="ts" setup>
  import { useSeoMeta } from 'nuxt/app';
import type BreadCrumbsVue from '../../components/BreadCrumbs.vue';
  //import { ITopicData } from '../types/TopicData.ts';
  import type IReportData  from '../../types/ReportData';
import type IUserData from '../../types/UserData';

  interface Props {
  test?: string
}

const props = withDefaults(defineProps<Props>(), {
  test: 'Topic',
})

const route = useRoute();
const showUserProfile = ref<boolean>(false);  

const testTopic1 = ref({ 
    id: 1,
    title: 'My first post and stuff. Testing a longer title. Testing a longer title. Testing a longer title',
    body: 'This is my very first post! I want to say hello to everyone in the community. I\'m Damian and I love the Xeno series of games. Started off by playing Xenogears '+ 
    'and Xenoblade. Hoping to get into Xenosaga soon. Looking forward to chatting and getting to know everyone. Let me know what are the best ways to use this site. Cheers to everyone.',
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
    latestReplyId: '123',
    latestReplyDate: new Date('05/08/2025'),
    tags: ['Test','Video Game'],
    sticky: true,
    closed: true,
    reported: false,
    uuid: '23b96520-be19-4668-a77a-f1ac4aeec73e',
  });  

useSeoMeta({
  title: 'Xenoboard - View Topic',
  ogTitle: 'View Topic - Xenoboard',
  description: 'Xenoboard topic thread - '+testTopic1.value.title, //Might have to add props for this later
  ogDescription: 'Topic thread - Xenoboard - '+testTopic1.value.title,
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://xenoboard.net/ViewTopic/*',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, Zohar, View, Topic, ViewTopic, View Topic, forum, thread',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})    

//const test = history.state.item; //Null check history if doing this

const userData: IUserData =  {
    id: '777',
    image: '-666',
    username: '',
};

const testReply1 = ref({ 
    id: 1,
    title: 'Re: My first post! and stuff. Testing a longer title. Testing a longer title. Testing a longer title',
    author: 'Seifer Almasy',
    body: 'Hello! Welcome to the site! ',
    createdById: 2,
    updatedById: 2,
    createdDate: new Date('06/16/2025'),
    updatedDate: new Date('05/16/2025'),
    latestReplyName: 'Damian Zylski',
    latestReplyId: '423',
    latestReplyDate: new Date('05/08/2025'),
    image: null,
    uuid: 'd3b96520-be19-4668-a77a-f1ac4aeec73e',
    likes: 1,
    reported: false,
    topicId: 1,
  });

  const testReply2 = ref({
    id: 2,
    title: 'Re: My first post!',
    author: 'Damian Zylski',
    body: 'Thank you! Feels good to be here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdById: 1,
    updatedById: 1,
    createdDate: new Date('07/12/2025'),
    updatedDate: new Date('07/12/2025'),
    latestReplyName: 'Damian Zylski',
    latestReplyId: '723',
    latestReplyDate: new Date('05/08/2025'),
    image: null,
    uuid: 'f3b96520-be19-4668-a77a-f1ac4aeec73e',
    likes: 3,
    reported: false,
    topicId: 1,
  });

  const testReply3 = ref({
    id: 3,
    title: 'Re: My first post!',
    author: 'Jan Brzenczyszczykiewicz',
    body: 'Welcome to my world. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdById: 3,
    updatedById: 3,
    createdDate: new Date('07/13/2025'),
    updatedDate: new Date('07/13/2025'),
    latestReplyName: 'Damian Zylski',
    latestReplyId: '723',
    latestReplyDate: new Date('05/08/2025'),
    image: null,
    uuid: 'a3b96520-be19-4668-a77a-f1ac4aeec73e',
    likes: 24,
    reported: false,
    topicId: 1,
  });

  const testReply4 = ref({
    id: 4,
    title: 'Re: My first post!',
    author: 'Damian Zylski',
    body: 'Glad to be here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdById: 1,
    updatedById: 1,
    createdDate: new Date('08/18/2025'),
    updatedDate: new Date('08/18/2025'),
    latestReplyName: 'Damian Zylski',
    latestReplyId: '923',
    latestReplyDate: new Date('05/08/2025'),
    image: null,
    uuid: 'a3b96520-be19-4668-a77a-f1ac4aeec73e',
    likes: 1,
    reported: false,
    topicId: 1,
  });

  const replyList = ref([testReply1, testReply2, testReply3, testReply4]);

const topicData = defineModel('topicData',{default: {}, required: false, type: Object });
const replyData = defineModel('replyData',{default: {}, required: false, type: Object });

  const showPostReplyModal = ref(false);
  const showPostTopicModal = ref(false);
  const showReportModal = ref(false);
  const closed = ref(true);
  const sticky = ref(true);
  const isAdmin = ref(true);

  const reportData: IReportData =  {
    id: '777',
    userId: '-666',
    isTopic: false,
    name: 'ReportData'
};

  const isAuthorized = ref(true);

  const breadcrumb: IBreadCrumb = {
    path: '',
    title: '',
  };

  const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Forums/Discussions', title: 'Discussions'},{path: 'ViewTopic/'+route.params.id, title: 'View Topic'}]);

  function showReplyModal(){
    replyData.value.id = null;

    showPostReplyModal.value = useOpenModal(showPostReplyModal.value);
  }

  function closeReplyModal(){
    showPostReplyModal.value = useCloseModal(showPostReplyModal.value);
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

  const showReportForm = (data) => {

    reportData.id = data.value.id;
    reportData.userId = data.value.userId;
    reportData.isTopic = data.value.isTopic;

    showReportModal.value = useOpenModal(showReportModal.value);
  };

  const showEditForm = (data) => {

    if (data.value.name === 'TopicData') showPostTopicModal.value = useOpenModal(showPostTopicModal.value);
    else if(data.value.name === 'ReplyData') showPostReplyModal.value = useOpenModal(showPostReplyModal.value);
    else console.log(data.value.name);
  };

  function closeReportForm(){
    showReportModal.value = useCloseModal(showReportModal.value);
  }

  function isEven(n) {
    return n % 2 == 0;
  }

</script>

<style scoped>

  .admin-option-icon .dropdown * {
    z-index: 100000 !important;
  }

  .icon{
    cursor: pointer
  }

  .body-text{
  text-align: left !important;
  align-items: start !important;
  align-content: start !important;
  justify-content: start !important;
  justify-items: start !important;
  display: flex !important;
}

</style>