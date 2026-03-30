<template>
  <div>

    <b-container class="header-background header-opacity shadow" style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >Here are various help topics to help you get familiar with the Xenoboard site</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

    <!--Help container-->
    <b-container id="help-container" fluid class="topics-container topics-opacity mt-4 pt-1 shadow" >
      <!--Help Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Help</h4> 
        </BCol>
      </BRow> 

      <!--Help Content-->
      <BRow class="topics-opacity help-body p-4 ">
        <BCol class="col-12 card-padding" style="text-align: center !important;">
          <ContentRenderer v-if="help" :value="help" />
        </BCol>
      </BRow>
      <BRow class="topics-opacity help-body p-4 ">
        <BCol class="col-12 card-padding" style="text-align: center !important;">
          <nuxt-link :to="'/help-content-for-the-search-page'">
            <h4>{{ helptopicSearch.title }}</h4>
          </nuxt-link>
          <h6>{{ helptopicSearch.description }}</h6>
        </BCol>

      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';


  const { data: help } = await useAsyncData(() => queryCollection('content').path('/').first());
  const { data: helptopicSearch } = await useAsyncData(() => queryCollection('content').path('/help-search').first());

  const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Help', title: 'Help'}]);

  useSeoMeta({
  title: 'Xenoboard - Help',
  ogTitle: 'Help - Xenoboard',
  description: 'The help page for Xenoboard. See a series of help topics on how to use the site here.',
  ogDescription: 'Help page for Xenoboard. See a series of help topics on how to use the site here.',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Help',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, help, assistance',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})  

</script>

<style scoped>

.help-body{
    padding: 15px;
    background-color: #2A3439;
    opacity: 1 !important;
    color: #BBBBBB
  }

  #help-container{

  }

</style>