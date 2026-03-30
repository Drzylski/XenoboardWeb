<template>
  <b-container :id="'topic-'+props.uuid" fluid class="card-body">
    <BRow>
      <BCol class="col-auto">
          <div class="pb-3"><svg class="discussion-symbol" style="text-align: left !important;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1M26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3.5l-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9M144 272a32 32 0 1 0 0-64a32 32 0 1 0 0 64m144-32a32 32 0 1 0-64 0a32 32 0 1 0 64 0m80 32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></path></svg>
          </div>
            <!--font-awesome-icon :icon="['fab','github']" /-->
          <svg class="closed-symbol" v-if="closed" style="text-align: left !important;" height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.686 502.686" xml:space="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <title>Closed</title> <path style="fill:#FFFFFF;" d="M403.676,221.014v-68.746C403.697,68.293,335.339,0,251.407,0 C167.411,0,99.096,68.293,99.096,152.268v68.768H66.373v281.65h369.939V221.014H403.676z M156.453,152.268 c0-52.309,42.581-94.825,94.933-94.825c52.266,0,94.825,42.538,94.825,94.825v68.768H156.453V152.268z M277.551,425.462h-52.266 l7.83-77.202c-9.664-6.018-16.178-16.76-16.178-29.077c0-18.961,15.402-34.362,34.47-34.362 c18.961,0,34.319,15.402,34.319,34.362c0,12.317-6.407,23.038-16.157,29.077L277.551,425.462z"></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
          <svg class="sticky-symbol" v-if="sticky" style="text-align: left !important;" height="21" width="21" fill="#FFFFFF" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Sticky</title> <path d="M18.973 17.802l-7.794-4.5c-0.956-0.553-2.18-0.225-2.732 0.731-0.552 0.957-0.224 2.18 0.732 2.732l7.793 4.5c0.957 0.553 2.18 0.225 2.732-0.732 0.554-0.956 0.226-2.179-0.731-2.731zM12.545 12.936l6.062 3.5 2.062-5.738-4.186-2.416-3.938 4.654zM8.076 27.676l5.799-7.044-2.598-1.5-3.201 8.544zM23.174 7.525l-5.195-3c-0.718-0.414-1.635-0.169-2.049 0.549-0.415 0.718-0.168 1.635 0.549 2.049l5.196 3c0.718 0.414 1.635 0.169 2.049-0.549s0.168-1.635-0.55-2.049z"></path> </g></svg>

      </BCol>
      <BCol class="card-title  col-md-7 col-8 ">
          <div class="pb-2">
              <NuxtLink :to="{ name: 'ViewTopic-id', params: { id: props.uuid}, state: { item: toRaw({id: '12345', test: 'Test'}) }}">
                <span class="title-text page-link">
                {{ props.title }}
                </span>
              </NuxtLink>
          </div>
          <span class="info-text">By {{ props.author }} on {{ FormatDate(createdDate) }} in {{ category }}</span>
          <span class="tag-card" v-for="(item,index) in tags" :key="item"> {{ item }} </span>
          <br class="replies mobile-replies">
          <span class="replies mobile-replies pe-3">Replies: {{ replies }}</span>
          <span class="replies mobile-replies pe-3">Views: {{ views }}</span>
          <span class="mobile-replies">
          <svg class="icon" fill="#FFFFFF" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M7.65336736,21.1256786 C7.2933164,21.6534897 6.68712411,22 6,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,11 C2,9.8954305 2.8954305,9 4,9 L6,9 C6.198171,9 6.38961023,9.02882212 6.57035446,9.08250314 C7.6444817,7.51807482 11.2554748,3.57449216 12.2202699,2.37298955 L12.5204954,1.99910538 L13,1.99910538 C13.6147967,1.99901314 14.1422801,2.04513312 14.748281,2.22159137 C16.091867,2.61282321 17,3.52709845 17,4.99910538 C17,5.51921677 16.9079007,6.07373891 16.7382242,6.68923415 C16.6259612,7.09646424 16.4872151,7.50766133 16.2970775,8.01801005 C16.2391583,8.17347129 16.007193,8.78168345 15.9547911,8.92337824 C15.9451954,8.94932503 15.9359266,8.9745589 15.9269768,8.99910538 L19,8.99910538 C20.8695981,8.99910538 22,10.316625 22,11.9991054 C22,17.9426745 20.7551411,21.9991054 18,21.9991054 L11.0344006,21.9985135 C10.3408482,22.0111947 9.50544052,21.9186578 8.66312366,21.6172857 C8.29521907,21.4856533 7.9567386,21.3218904 7.65336736,21.1256786 Z M8,17.9991054 C8,18.9013355 8.45196659,19.4175764 9.33687634,19.7341879 C9.91062406,19.9394688 10.5253746,20.0075638 10.963066,19.9997143 C10.9703499,19.9995545 10.9703499,19.9995545 11,19.9991054 L18,19.9991054 C19.015127,19.9991054 20,16.7898506 20,11.9991054 C20,11.3589955 19.6912225,10.9991054 19,10.9991054 L15,10.9991054 C13.8054549,10.9991054 13.5555377,10.0754586 13.8046536,9.07541689 C13.8632547,8.84017106 13.9489218,8.5812741 14.0789589,8.22965366 C14.1358033,8.07594642 14.3689242,7.46470447 14.4229225,7.31976744 C14.5944107,6.85947528 14.7161494,6.4986824 14.8101464,6.1577119 C14.9359344,5.70142019 15,5.31568707 15,4.99910538 C15,4.54813166 14.7621788,4.30870189 14.1891338,4.1418399 C13.9483736,4.07173418 13.7113931,4.0330943 13.4599624,4.01423587 C11.914268,5.86195611 8.40663864,9.70054105 8.14171093,10.3190878 C8.04443154,10.5462133 8,10.7589101 8,10.9991054 L8,17.9991054 Z M4,11 L4,20 L6,20 L6,11 L4,11 Z"></path> </g></svg>
            &nbsp;<span class="mobile-likes">{{ likes }}</span>
            </span>
      </BCol>
      <BCol class="card-info desktop-replies ">
          <span class="replies desktop-replies">Replies: {{ replies }}</span><br/>
          <span class="info-text desktop-replies">Views: {{ views }}</span>
          <div>
            <svg class="icon" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M7.65336736,21.1256786 C7.2933164,21.6534897 6.68712411,22 6,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,11 C2,9.8954305 2.8954305,9 4,9 L6,9 C6.198171,9 6.38961023,9.02882212 6.57035446,9.08250314 C7.6444817,7.51807482 11.2554748,3.57449216 12.2202699,2.37298955 L12.5204954,1.99910538 L13,1.99910538 C13.6147967,1.99901314 14.1422801,2.04513312 14.748281,2.22159137 C16.091867,2.61282321 17,3.52709845 17,4.99910538 C17,5.51921677 16.9079007,6.07373891 16.7382242,6.68923415 C16.6259612,7.09646424 16.4872151,7.50766133 16.2970775,8.01801005 C16.2391583,8.17347129 16.007193,8.78168345 15.9547911,8.92337824 C15.9451954,8.94932503 15.9359266,8.9745589 15.9269768,8.99910538 L19,8.99910538 C20.8695981,8.99910538 22,10.316625 22,11.9991054 C22,17.9426745 20.7551411,21.9991054 18,21.9991054 L11.0344006,21.9985135 C10.3408482,22.0111947 9.50544052,21.9186578 8.66312366,21.6172857 C8.29521907,21.4856533 7.9567386,21.3218904 7.65336736,21.1256786 Z M8,17.9991054 C8,18.9013355 8.45196659,19.4175764 9.33687634,19.7341879 C9.91062406,19.9394688 10.5253746,20.0075638 10.963066,19.9997143 C10.9703499,19.9995545 10.9703499,19.9995545 11,19.9991054 L18,19.9991054 C19.015127,19.9991054 20,16.7898506 20,11.9991054 C20,11.3589955 19.6912225,10.9991054 19,10.9991054 L15,10.9991054 C13.8054549,10.9991054 13.5555377,10.0754586 13.8046536,9.07541689 C13.8632547,8.84017106 13.9489218,8.5812741 14.0789589,8.22965366 C14.1358033,8.07594642 14.3689242,7.46470447 14.4229225,7.31976744 C14.5944107,6.85947528 14.7161494,6.4986824 14.8101464,6.1577119 C14.9359344,5.70142019 15,5.31568707 15,4.99910538 C15,4.54813166 14.7621788,4.30870189 14.1891338,4.1418399 C13.9483736,4.07173418 13.7113931,4.0330943 13.4599624,4.01423587 C11.914268,5.86195611 8.40663864,9.70054105 8.14171093,10.3190878 C8.04443154,10.5462133 8,10.7589101 8,10.9991054 L8,17.9991054 Z M4,11 L4,20 L6,20 L6,11 L4,11 Z"></path> </g></svg>
              &nbsp;<span class="">{{ likes }}</span>
            <!--span @click="showReportForm" class="icon-padding report-icon">
              <svg class="icon" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </!--span-->
          </div>  
      </BCol>

      <BCol class="card-info ">
        <div>
          <svg class="card-author-image" height="8.2vh" width="8vh" xmlns="http://www.w3.org/2000/svg">
            <image class="card-author-img" height="8.6vh" width="8.2vh" href="~/assets/seifer-almasy.jpg" opacity="0.9" @click="showUserProfile()"/>
          </svg> 
          <!--NuxtImg class="card-author-image" src="/seifer-almasy.jpg" alt="Banner" width="70px" sizes="sm:20px md:30px lg:50px xl:60px" quality="100" /-->
          </div>
          <span class="info-text mobile-replydate">{{ FormatDate(latestReplyDate) }}</span>
          <div><span class="desktop-replies last-reply">{{ latestReplyName }} Replied</span></div>
          <span class="desktop-replies info-text">On: {{ FormatDate(latestReplyDate) }}</span>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>
import FormatDate from '../utils/FormatDate'

interface Props {
  id?: number
  title?: string
  author?: string
  createdDate?: Date
  category?: string
  views?: number
  replies?: number
  image?: string
  latestReplyName?: string
  latestReplyId?: string
  latestReplyDate?: Date
  tags?: string[]
  sticky?: boolean
  closed?: boolean
  uuid?: string
  likes?: number
}

const props = withDefaults(defineProps<Props>(), {
  id: -1,
  title: 'Topic',
  author: 'Unknown',
  createdDate: ''+new Date().getDate(),
  category: 'Unknown',
  views: 0,
  replies: 0,
  image: '',
  latestReplyDate: ''+new Date().getDate(),
  latestReplyName: 'Unknown',
  latestReplyId: '-1',
  tags: () => [],
  sticky: false,
  closed: false,
  uuid: 'null',
  likes: 0
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

const emit = defineEmits(['userProfile', 'reportModal']);

function emitUserProfile() {
  emit('userProfile', userData);
}


function showUserProfile(){
    emitUserProfile();
  }

</script>

<style scoped>

.icon-padding{
  padding-left: 20px;
}

.logo-text {
  font-size: 2.5vw;
}

.card-title{
  text-align:start !important;
}

.title-text{
  font-size: 18px;
  cursor: pointer;
}

.info-text{
  font-size: 14px;
  color: #BBBBBB;
}

.replies{
  font-size: 16px;
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
  font-size: 14px;
}

.tags{

}

.card-info{
  text-align:end ;
}

.mobile-likes{
  font-size: 8px;
}



</style>