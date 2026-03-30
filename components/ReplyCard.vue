<template>
  <b-container :id="'reply-'+props.uuid" fluid class="card-body">
    <BRow>
      <BCol class="reply-card-title col-10 ">
        <div class="icon-menu">
          <span class="icon-padding" style="font-size: 10px;">#{{ cardNum }}</span>
          <span class="icon-padding like-icon" @click="likeContent">
            <svg class="icon" fill="#FFFFFF" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M7.65336736,21.1256786 C7.2933164,21.6534897 6.68712411,22 6,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,11 C2,9.8954305 2.8954305,9 4,9 L6,9 C6.198171,9 6.38961023,9.02882212 6.57035446,9.08250314 C7.6444817,7.51807482 11.2554748,3.57449216 12.2202699,2.37298955 L12.5204954,1.99910538 L13,1.99910538 C13.6147967,1.99901314 14.1422801,2.04513312 14.748281,2.22159137 C16.091867,2.61282321 17,3.52709845 17,4.99910538 C17,5.51921677 16.9079007,6.07373891 16.7382242,6.68923415 C16.6259612,7.09646424 16.4872151,7.50766133 16.2970775,8.01801005 C16.2391583,8.17347129 16.007193,8.78168345 15.9547911,8.92337824 C15.9451954,8.94932503 15.9359266,8.9745589 15.9269768,8.99910538 L19,8.99910538 C20.8695981,8.99910538 22,10.316625 22,11.9991054 C22,17.9426745 20.7551411,21.9991054 18,21.9991054 L11.0344006,21.9985135 C10.3408482,22.0111947 9.50544052,21.9186578 8.66312366,21.6172857 C8.29521907,21.4856533 7.9567386,21.3218904 7.65336736,21.1256786 Z M8,17.9991054 C8,18.9013355 8.45196659,19.4175764 9.33687634,19.7341879 C9.91062406,19.9394688 10.5253746,20.0075638 10.963066,19.9997143 C10.9703499,19.9995545 10.9703499,19.9995545 11,19.9991054 L18,19.9991054 C19.015127,19.9991054 20,16.7898506 20,11.9991054 C20,11.3589955 19.6912225,10.9991054 19,10.9991054 L15,10.9991054 C13.8054549,10.9991054 13.5555377,10.0754586 13.8046536,9.07541689 C13.8632547,8.84017106 13.9489218,8.5812741 14.0789589,8.22965366 C14.1358033,8.07594642 14.3689242,7.46470447 14.4229225,7.31976744 C14.5944107,6.85947528 14.7161494,6.4986824 14.8101464,6.1577119 C14.9359344,5.70142019 15,5.31568707 15,4.99910538 C15,4.54813166 14.7621788,4.30870189 14.1891338,4.1418399 C13.9483736,4.07173418 13.7113931,4.0330943 13.4599624,4.01423587 C11.914268,5.86195611 8.40663864,9.70054105 8.14171093,10.3190878 C8.04443154,10.5462133 8,10.7589101 8,10.9991054 L8,17.9991054 Z M4,11 L4,20 L6,20 L6,11 L4,11 Z"></path> </g></svg>
            &nbsp;{{ props.likes }}
          </span>
          <span @click="showReportForm" class="icon-padding report-icon">
            <svg class="icon" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          <span class="icon-padding edit-icon" @click="showEditForm">
            <svg class="icon" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pencil</title> <path d="M0 32l12-4 20-20-8-8-20 20zM4 28l2.016-5.984 4 4zM8 20l12-12 4 4-12 12z"></path> </g></svg>
          </span>
          <span class="icon-padding delete-icon" @click="showDeleteConfirm">
            <svg class="icon" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          </div>
          <span class="body-text">
            {{ body }}
          </span>
          <!--span v-if="!props.isTopic" class="title-text">{{ props.title }}</!--span-->
      </BCol>
      <BCol class="card-info col-2">
          <!--svg class="author-image" height="52" width="50" xmlns="http://www.w3.org/2000/svg">
            <image height="54" width="51" href="~/assets/seifer-almasy.jpg" opacity="0.9" />
          </!--svg--> 
          <svg class="card-author-image" height="8.2vh" width="8vh" xmlns="http://www.w3.org/2000/svg">
            <image class="card-author-img" height="8.6vh" width="8.2vh" href="~/assets/seifer-almasy.jpg" opacity="0.9" @click="showUserProfile()" />
          </svg> <br>
          <span class="info-text">By {{ props.author }} on {{ FormatDate(createdDate) }}</span>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>
import type  ITopicData  from '../types/TopicData';
import type IReplyData  from '../types/ReplyData';
import type IReportData  from '../types/ReportData';
import FormatDate from '../utils/FormatDate';

interface Props {
  id?: number
  title?: string
  author?: string
  body: string
  tags: string[]
  category: string
  createdById: number
  updatedById: number
  createdDate?: Date
  updatedDate: Date
  latestReplyName: string
  latestReplyDate: Date
  latestReplyId: string
  image?: string
  uuid?: string
  likes: number
  reported: boolean
  topicId: number
  isTopic: boolean
  cardNum: number
}

const props = withDefaults(defineProps<Props>(), {
  id: -1,
  title: 'Topic',
  author: 'Unknown',
  body: 'content',
  tags: () => [],
  category: 'Unknown',
  createdById: -1,
  updatedById: -1,
  createdDate: ''+new Date().getDate(),
  updatedDate: ''+new Date().getDate(),
  latestReplyName: 'Unknown',
  latestReplyDate: ''+new Date().getDate(),
  latestReplyId: '-1',
  image: '',
  uuid: 'null',
  likes: 0,
  reported: false,
  topicId: -1,
  isTopic: false,
  cardNum: 1
})

const userData = ref({ 
    id: props.latestReplyId,
    image: props.image,
    username: props.latestReplyName,
    quote: '',
    joinDate: new Date('05/08/2025'),
    lastLogin: new Date('05/08/2025'),
    posts: 0,
    replies: 0,
    uuid: 'c3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

 function showReportForm(){
    emitReport();
  }

function showEditForm(){
  emitEdit();
}

function showDeleteConfirm(){
  if(props.isTopic){
    confirm('Delete this topic?');
  }
  else{
    confirm('Delete this reply?');
  }
}

const reportData = ref(
  {
    id: props.uuid,
    userId: 123,
    isTopic: props.isTopic
  }
) as IReportData;

const emit = defineEmits(['userProfile', 'reportModal', 'editModal']);

function emitReport() {
  emit('reportModal', reportData);
}

function emitUserProfile() {
  emit('userProfile', userData);
}


function showUserProfile(){
    emitUserProfile();
  }

const topicData = defineModel('topicData',{default: {
      id: 'null',
      userId: '-1',
      title: 'null',
      body: 'null',
      category: 0,
      tags: [],
      files: [],
      name: 'TopicData'} as ITopicData, required: false, type: Object });

const replyData = defineModel('replyData',{default: {
      id: 'null',
      userId: '-1',
      body: 'null',
      files: [],
      name: 'ReplyData'} as IReplyData, required: false, type: Object });

function emitEdit() {

  if(props.isTopic){

    topicData.value.id = props.uuid;
    topicData.value.title = props.title;
    topicData.value.body = props.body;
    topicData.value.category = props.category;
    topicData.value.tags = props.tags;
    topicData.value.name = 'TopicData';

    emit('editModal', topicData);
  }
  else{

    replyData.value.id = props.uuid;
    replyData.value.body = props.body;
    replyData.value.name = 'ReplyData';

    emit('editModal', replyData);
  }
}

function likeContent() {
  alert("Thank you for liking!");
}

</script>

<style scoped>

.body-text{
  text-align: left !important;
  align-items: start !important;
  align-content: start !important;
  justify-content: start !important;
  justify-items: start !important;
  display: flex !important;
}

.logo-text {
  font-size: 2.5vw;
}

.card-title{
  text-align:start !important;
  line-height: 1.3vw;
}

.title-text{
  font-size: 2.7vh;
  line-height: 1.5vw;
}

.info-text{
  font-size: 1.8vh;
  color: #BBBBBB;
}

.replies{
  font-size: 2.2vh;
}

.mobile-replies{
  display: none;
}

.mobile-replydate{
  display: none;
}

.desktop-replies{
  display: inline-block;
}

.last-reply{
  font-size: 2vh;
}

.tags{

}

.tag-card {
  background-color: grey;
  padding: 2px;
  border-radius: 5px ;
  font-size: 1.5vh;
  white-space: nowrap;
  margin: 2px;
}

.card-author-image{
  border-radius: 50%;
  margin: 0 !important;
  padding: 0 !important;
}

.card-info{
  text-align:end ;
}

.icon-padding{
  padding-right: 20px;
}

.reply-card-title{
  text-align: start !important;
  
}

.icon-menu{
  padding-bottom: 10px;
}

.icon{
  cursor: pointer !important
}


</style>