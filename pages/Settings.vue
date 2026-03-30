<template>
  <div>

  <!--Settings container-->
    <b-container fluid id="settings-container" class="topics-container mt-4 pt-1  shadow topics-opacity" >
      <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
      <!--Settings Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          
        </BCol>
      </BRow> 

      <!--Settings Content-->
      <BRow class="p-4  grey-body ">
        <BCol class="col-12 card-padding p-5" >
          <div class="">
             <BTabs content-class="mt-3" active-nav-item-class="font-weight-bold bg-dark text-light" inactive-nav-item-class="text-light">
              <BTab title="User Profile" class="" active lazy>
                <UserProfileTab class="shadow"></UserProfileTab>
              </BTab>
              <BTab title="Topics" lazy>
                <UserTopicsTab class="shadow"></UserTopicsTab>
              </BTab>
              <BTab title="Replies" lazy>
                <UserRepliesTab class="shadow"></UserRepliesTab>
              </BTab>
              <BTab title="Account" lazy>
                <UserAccountTab class="shadow"></UserAccountTab>
              </BTab>
            </BTabs>
          </div>
        </BCol>
      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import UserAccountTab from '../components/UserAccountTab.vue';
import UserProfileTab from '../components/UserProfileTab.vue';
import UserRepliesTab from '../components/UserRepliesTab.vue';
import UserTopicsTab from '../components/UserTopicsTab.vue';

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Settings', title: 'Settings'}]);

useSeoMeta({
  title: 'Xenoboard - Settings',
  ogTitle: 'Settings - Xenoboard',
  description: 'Settings page for Xenoboard. Adjust user profile settings here, view your topics and replies, and make account changes here',
  ogDescription: 'The settings page for Xenoboard. Adjust user profile settings here, view your topics and replies, and make account changes here',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Settings',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, settings, user, profile, user profile, account, list',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})  

</script>

<style scoped>


</style>