<template>
  <div>

    <b-container class="header-background header-opacity shadow" style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >Below is a bunch of legal mumbo jumbo explaining legal stuff with the site.</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Legal container-->
    <b-container fluid id="legal-container" class="topics-container mt-4 pt-1 shadow topics-opacity  " >
      <!--Legal Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Legal</h4> 
        </BCol>
      </BRow> 

      <!--Legal Content-->
      <BRow class="p-4  grey-body ">
        <BCol class="col-12 card-padding p-5" >
          <div class="">
            The Xenoboard site is for educational purposes only. We are not responsible for any damages and offer no warranties of any kind. All images, videos, names that are not our original works
            are property of their respective owners and we make no claim to own this content. said content is used as fair use. If issues arise from us hosting such content, please contact us. The Xenoboard site and all original work is property of Damian Zylski and reproduction is 
            prohibited. 
          </div>
        </BCol>
      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
import BreadCrumbs from '../components/BreadCrumbs.vue';

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Legal', title: 'Legal'}]);

useSeoMeta({
  title: 'Xenoboard - Legal',
  ogTitle: 'Legal - Xenoboard',
  description: 'The legal page for Xenoboard. Legal information regarding Xenoboard can be found here.',
  ogDescription: 'Legal page for Xenoboard. Legal information regarding Xenoboard can be found here',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Legal',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, legal, law, laws',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})

</script>

<style scoped>


</style>