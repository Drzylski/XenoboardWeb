<template>
  <div>

    <b-container class="header-background header-opacity shadow" style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 v-html="legalHeader"></h6>
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
            {{ legalText }}
          </div>
        </BCol>
      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useFetch, useHead, useSeoMeta } from 'nuxt/app';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import { useFetchRequest } from '../composables/FetchRequest.ts';
import HttpMethod from '../utils/HttpMethod.ts';
import { useToastSuccess } from '../composables/ToastSuccess.ts';
import { useToastError } from '../composables/ToastError.ts';
import { useSiteContentService } from '../services/SiteContentService.ts';

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Legal', title: 'Legal'}]);

useHead({
  titleTemplate: null,
})

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

const legalText = ref<string>('Loading...');
const legalHeader = ref<string>('Loading...');

//Get legal text
async function getLegalHeaderText() {
      try{
        const { data : response, error : error} =  await useSiteContentService().getSiteContentByIdFetch('3', '666');
     
        if(error.value) throw error; 
        else{
          if(response.value) legalHeader.value = response.value.content;
          //useToastSuccess('Data Retrieved');
        }
      }
      catch(error){
        useToastError('Error '+error.value.status+' - '+error.value.statusText);
      }
  }

//Get legal text
async function getLegalText() {
      try{
        const { data : response, error : error} =  await useFetch('/api/legal');
     
        if(error.value) throw error; 
        else{
          if(response.value) {legalText.value = response.value.content;}
        }
      }
      catch(error){
        useToastError('Error '+error.value.status+' - '+error.value.statusText);
      }
  }

  getLegalHeaderText();
  getLegalText();

</script>

<style scoped>


</style>