<template>
  <div>

    <b-container class="header-background header-opacity shadow " style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >These are the guidelines of the Xenoboard site. They are your commandments. Know them, follow them, believe in them.</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Guidelines container-->
    <b-container fluid id="guidelines-container" class="topics-container mt-4 pt-1 shadow topics-opacity" >
      <!--Guidelines Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Guidelines</h4> 
        </BCol>
      </BRow> 

      <!--Guidelines Content-->
      <BRow class="m-lg-4 m-xl-4 m-md-3 m-sm-1 zohar-background m-lg-5 m-xl-5 m-md-4 m-sm-1">
        <BCol class="col-auto card-padding" >
          <div class="guidelines">
            <h1 class="guideline">I. Treat your fellow members with respect. No hateful, racist, sexual, abusive, harrassing remarks are allowed</h1>
            <h1 class="guideline">II. Keep the politics of the site. This is a video game discussion site <NuxtLink :to="{ path: '/TopSecret'}"><span class="hidden-text">(and aliens)</span></NuxtLink></h1>
            <h1 class="guideline">III. Do not circumvent any security features or gain unauthorized access to site areas or user accounts</h1>
            <h1 class="guideline">IV. No Sexually explicit images</h1>
            <h1 class="guideline">V. No violating copyrighted material</h1>
            <h1 class="guideline">VI. No posting or promoting anything related to illegal activities</h1>
            <h1 class="guideline">VII. If it's not allowed on other sites, it's probably not allowed here</h1>
            <h1 class="guideline">VIII. Question Everything</h1>
          </div>
        </BCol>
      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
import BreadCrumbs from '../components/BreadCrumbs.vue';

//preload image
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      URL: '~/assets/zohar.png',
    },
  ],
});

useSeoMeta({
  title: 'Xenoboard - Guidelines',
  ogTitle: 'Guidelines - Xenoboard',
  description: 'The guidelines page for Xenoboard. See the rules, policies, and guidelines of the site here',
  ogDescription: 'Guidelines page for Xenoboard. See the rules of the site here',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Guidelines',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, guidelines, rules, policies',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})  

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Guidelines', title: 'Guidelines'}]);

</script>

<style scoped>

.zohar-background{
  background-image: url(~/assets/zohar.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;
  opacity: 0.7
}

.guidelines{
  text-align: left;
  margin-left: 20px;
  display: inline-block;
  
}

.guideline{
  padding: 20px;
  font-weight: 900;
  color: #FFFFFF;
}

.hidden-text{
  opacity: 0.02;
}

</style>