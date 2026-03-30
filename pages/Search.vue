<template>
  <div>
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
          <h6 >Enter a search term and select search options to search for various topics across Xenoboard. Results will automatically populate as you type</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Search container-->
  <b-container fluid class="topics-container topics-opacity mt-4 pt-1 shadow" >
    <!--Search Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 " >Search</h4> 
      </BCol>
      <BCol class="col-lg-2 col-md-2 col-sm-3 pt-3">
        <h6>{{ filterList.length }} results</h6>
      </BCol>
    </BRow>

    <!--Search Bar-->
    <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0">
      <BCol class="col-12 card-padding">
        <BInputGroup class="mt-3 mb-3 ps-2 pe-2">
          <template #prepend>
            <BInputGroupText variant="dark" >
              <svg  class="icon ps-0 ms-0" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </BInputGroupText>
          </template>
          <BFormInput id="search-input" name="search" type="search" v-model="searchVal" placeholder="search..."></BFormInput>
          <template #append>
            <BButton variant="dark">Search</BButton>
          </template>
        </BInputGroup>
      </BCol>
    </BRow>

    <!--Search Options-->
    <BRow class=" ps-0 pe-0 pt-3 pb-3">
      <BCol class="col-auto" >
        <div style=" text-align: left !important;">
        <BFormCheckbox id="search-title" v-model="searchTitle" name="search-title" switch >
          <span >Search Titles</span>
        </BFormCheckbox>
        </div>
      </BCol>
      <BCol class="col-auto">
        <div style=" text-align: left !important;">
        <BFormCheckbox id="search-body" v-model="searchBody" name="search-body" switch >
          <span>Search Body</span>
        </BFormCheckbox>
        </div>
      </BCol>
      <BCol class="col-auto">
        <div style=" text-align: left !important;">
        <BFormCheckbox id="search-tags" v-model="searchTags" name="search-tags" switch >
          <span>Search Tags</span>
        </BFormCheckbox>
        </div>
      </BCol>
      <BCol class="col-auto">
        <div style=" text-align: left !important;">
        <BFormCheckbox id="search-Author" v-model="searchAuthor" name="search-author" switch >
          <span>Search Author</span>
        </BFormCheckbox>
        </div>
      </BCol>
      <BCol class="col-sm-12 col-md-6 col-lg-3 col-12">
        <div class="form-inline pt-1" style="text-align: left;">
          <BInputGroup>
            <template #prepend>
              <BInputGroupText variant="dark" class="text-light" >
                From
              </BInputGroupText>
            </template>
            <BFormInput id="searchDateFrom" class="" type="date" v-model="searchDateFrom"></BFormInput>
            <template #append>
              <BFormDatepicker id="searchDateFrom" class="" v-model="searchDateFrom" locale="en"></BFormDatepicker>
            </template>
            
          </BInputGroup>
        </div>
      </BCol>
      <BCol class="col-sm-12 col-md-6 col-lg-3 col-12">
        <div class="pt-1">
          <BInputGroup>
            <template #prepend>
              <BInputGroupText variant="dark" class="text-light" >
                To
              </BInputGroupText>
            </template>
            <BFormInput id="searchDateTo" class="" type="date" v-model="searchDateTo"></BFormInput>
            <template #append>
              <BFormDatepicker id="searchDateTo" class="" v-model="searchDateTo" locale="en"></BFormDatepicker>
            </template>
          </BInputGroup>
        </div>
      </BCol>
      <BCol class="col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 col-12">
        <div class="pt-1">
          <multiselect
              id="formCategory"
              track-by="text"
              :close-on-select="true"
              :show-labels="true"
              label="text"
              placeholder="Category"
              noOptions="No Options Found"
              :options="catOptions"
              open-direction="bottom"
              v-model="searchCategory"
          >  
          </multiselect>
        </div>
      </BCol>
    </BRow>
    

    <!--Topic Content-->
    <BRow class="topics-opacity ps-0 pe-0 pt-0 pb-0 ">
      <BCol v-for="(item,index) in searchList" :key="item.value.id" class="col-12 card-padding">
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
import Multiselect from 'vue-multiselect';
import type IUserData from '../types/UserData';
import { useOpenModal } from '../composables/OpenModal';
import { useCloseModal } from '../composables/CloseModal';
import { useSeoMeta } from 'nuxt/app';

  const title = ref('Xenoboard - Search');
  const description = ref('The search page for Xenoboard. Use this page to search the site and filter and sort various topics');
  const searchVal = ref<string | null>(null);
  const searchTitle = ref<boolean>(false);  
  const searchBody = ref<boolean>(false);
  const searchTags = ref<boolean>(false);
  const searchAuthor = ref<boolean>(false);
  const searchDateFrom = ref<Date | null>(null);
  const searchDateTo = ref<Date | null>(null);
  const searchCategory = ref<number>();  
  const showUserProfile = ref<boolean>(false);  

  useSeoMeta({
  title: title.value,
  ogTitle: 'Search - Xenoboard',
  description: description.value,
  ogDescription: 'Search page for Xenoboard. Use this page to search the site and filter and sort various topics',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Search',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, search, query, find, browse',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})  
    
  const userData: IUserData =  {
      id: '777',
      image: '-666',
      username: '',
  };  
  

  const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Search', title: 'Search'}]);

  const catOptions = ref([
    {value: '0', text: 'Discussions'},
    {value: '1', text: 'Bazaar'},
    {value: '2', text: 'Events'},
    {value: '3', text: 'News'},
    {value: '4', text: 'Top Secret'},
  ]);

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

  const searchList = ref([testTopic1, testTopic2, testTopic3]);
  const filterList = ref([testTopic1, testTopic2, testTopic3]);

  function isEven(n) {
    return n % 2 == 0;
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



</script>

<style scoped>

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

  .header-opacity{
    opacity: 0.85;
  }

  .topic-card{
    
  }

  .input-group-text{
    background-color: #2A3439;
  }

</style>