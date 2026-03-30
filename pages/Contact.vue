<template>
  <div>
    <!--header container-->
    <b-container class="header-background topics-opacity shadow ">
      <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
      <BRow class="ps-3 pe-3 pb-3">
        <BCol class="col-12" >
          <div style="text-align: center;">
            <h6 >Fill out this contact form and we will get back to you as soon as we can.</h6>
          </div>
        </BCol>
      </BRow>
    </b-container>

    <!--Contact container-->
    <b-container fluid class="topics-container topics-opacity mt-4 pt-1 shadow" >
      <!--Contact Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Contact</h4> 
        </BCol>
      </BRow> 

      <!--Contact Content-->
      <BRow class="topics-opacity contact-body ps-0 pe-0 pt-0 pb-0 ">
        <BCol class="col-12 card-padding">
          <ContactForm ></ContactForm>
        </BCol>
      </BRow>
    </b-container>
  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
import ContactForm from '../components/ContactForm.vue';

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Contact', title: 'Contact'}]);

useSeoMeta({
  title: 'Xenoboard - Contact',
  ogTitle: 'Contact - Xenoboard',
  description: 'The contact page for Xenoboard. Fill out the form to send us a message',
  ogDescription: 'Contact page for Xenoboard. Fill out the form to send us a message',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://xenoboard.net/Contact',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, Contact, message, help',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})  

</script>

<style scoped>

  .header-background{
    background-color: #080a0b !important;
    color: #EEEEEE !important;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid #080a0b;
    align-content: start;
    align-items: start;
    text-align: start;
    max-width: none;
    position: relative;
  }

  .contact-body{
    padding: 15px;
    background-color: #2A3439;
    opacity: 1 !important;
    color: #BBBBBB
  }

</style>