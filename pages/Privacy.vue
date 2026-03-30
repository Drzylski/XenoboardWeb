<template>
  <div>

    <b-container class="header-background header-opacity shadow" style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >Below is our privacy policy</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Privacy container-->
    <b-container fluid id="privacy-container" class="topics-container mt-4 pt-1 shadow topics-opacity " >
      <!--Privacy Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Privacy</h4> 
        </BCol>
      </BRow> 

      <!--Privacy Content-->
      <BRow class="p-4  grey-body ">
        <BCol class="col-12 card-padding p-5" >
          <div class="">
            <h1 class="p-lg-5 p-md-4 p-sm-1 pb-4">Товарищ! Капитализм может идти на хуй.</h1>
            <h2 class="p-lg-5 p-md-4 p-sm-1">We do not do anything with your data except for the purposes of handling your account and services on our site that your account interacts with. 
              We don't sell, profit from, or do anything else with data. None of that BS. For better privacy, consider using the DuckDuckgo browser, install uBlock Origin, 
              Privacy Possum, Privacy Badger, disable permissions such as location, data sharing, etc, and disable third party cookies. 
              A vpn can help as well. Turn off targeted advertisements. Screw ads. Don't use any apps owned by Google, Meta, or Microsoft. Don't be logged into said services unless needed</h2>
          </div>
        </BCol>
      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
import BreadCrumbs from '../components/BreadCrumbs.vue';

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Privacy', title: 'Privacy'}]);

useSeoMeta({
  title: 'Xenoboard - Privacy',
  ogTitle: 'Privacy - Xenoboard',
  description: 'The privacy page for Xenoboard. View our privacy policy here.',
  ogDescription: 'Privacy page for Xenoboard. View our privacy policy here',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Privacy',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, privacy, policy, privacy policy, data, user, user data',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})

</script>

<style scoped>


</style>