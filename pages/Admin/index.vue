<template>
  <div>
    <!--BContainer class="admin-header-background header-opacity mt-4 mb-4 p-2" style="opacity: 0.9;">
    <BRow class="ps-3 pe-3 pb-1 pt-1">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h2 >Admin</h2>
        </div>
      </BCol>
    </BRow>
  </!--BContainer-->

  <!--Admin container-->
    <b-container fluid id="admin-container" class="admin-container mt-4 pt-1 mb-5  shadow " >
      <!--Admin Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h5>Admin</h5>
        </BCol>
      </BRow> 
  <!--Admin Content-->
      <BRow class="p-1 mb-2  admin-content-body ">
        <BCol class="col-12 card-padding p-1 mb-5" >
          <div class="">
             <BTabs content-class="mt-2" active-nav-item-class="font-weight-bold bg-dark text-light" inactive-nav-item-class="text-light" >
              <BTab title="Users" class="" active lazy>
                <AdminUsersTab class="shadow"></AdminUsersTab>
              </BTab>
              <BTab title="Topics" lazy>
                <AdminTopicsTab class="shadow"></AdminTopicsTab>
              </BTab>
              <BTab title="Replies" lazy>
                <AdminRepliesTab class="shadow"></AdminRepliesTab>
              </BTab>
              <BTab title="Reported Topics" lazy>
                <AdminReportedTopicsTab class="shadow"></AdminReportedTopicsTab>
              </BTab>
              <BTab title="Reported Replies" lazy>
                <AdminReportedRepliesTab class="shadow"></AdminReportedRepliesTab>
              </BTab>
              <BTab title="News Cards" lazy>
                <AdminNewsCards class="shadow"></AdminNewsCards>
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
import AdminNewsCards from '../../components/AdminNewsCards.vue';
import AdminRepliesTab from '../../components/AdminRepliesTab.vue';
import AdminReportedRepliesTab from '../../components/AdminReportedRepliesTab.vue';
import AdminReportedTopicsTab from '../../components/AdminReportedTopicsTab.vue';
import AdminTopicsTab from '../../components/AdminTopicsTab.vue';
import AdminUsersTab from '../../components/AdminUsersTab.vue';

useSeoMeta({
  robots: 'noindex, nofollow', //Do not index
  title: 'Xenoboard Admin',
  ogTitle: 'Xenoboard Admin',
  description: 'Xenoboard Admin page. For admins only',
  ogDescription: 'Xenoboard Admin page. For admins only',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://xenoboard.net/Admin',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
}) 


useHead({
  htmlAttrs: {
    class: 'admin-html'
  }
})

definePageMeta({
  layout: 'admin',
})

</script>

<style scoped>

</style>