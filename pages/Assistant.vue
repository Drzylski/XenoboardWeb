<template>
  <div>

    <b-container class="header-background header-opacity shadow" style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >Here you can find our AI Assistant. Use it to find answers using the power of AI. (And ponder how it's one day going to take your job and render human thought obsolete) </h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Assistant container-->
    <b-container fluid id="assistant-container" class="topics-container mt-4 pt-1 shadow topics-opacity  " >
      <!--Assistant Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Assistant</h4> 
        </BCol>
      </BRow> 

      <!--Assistant Content-->
      <BRow class="p-4  grey-body ">
        <BCol class="col-12 card-padding p-5" >
          <div class="">
            <BInputGroup class="mt-3 mb-3 ps-2 pe-2">
              <template #prepend>
                <BInputGroupText variant="dark" >
                  <svg class="icon ps-0 ms-0" width="25px" height="25px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ai</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(64.000000, 64.000000)"> <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
                </BInputGroupText>
              </template>
              <BFormInput id="assistant-input" name="assistant" type="search" v-model="askVal" placeholder="Ask Anything..."></BFormInput>
              <template #append>
                <BButton variant="dark">Ask</BButton>
              </template>
            </BInputGroup>
            <NuxtImg class="soon-img mt-5 " src="/coming-soon.jpg" alt="Coming Soon"  sizes="sm:200px md:350px lg:500px xl:500px" quality="100" loading="eager"   />
          </div>
        </BCol>
      </BRow>
    </b-container>

  </div>
</template>

<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
import BreadCrumbs from '../components/BreadCrumbs.vue';

const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Assistant', title: 'Assistant'}]);
const askVal = ref<string | null>(null);

useSeoMeta({
  title: 'Xenoboard - Assistant',
  ogTitle: 'Assistant - Xenoboard',
  description: 'The AI Assistant page for Xenoboard. Use our AI assistant to get all the answers you need.',
  ogDescription: 'AI Assistant page for Xenoboard. Use our AI assistant to get all the answers you need',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Assistant',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, AI, Assistant, Artificial, Assistant, Intelligence, Skynet, War, Terminator, Judgement Day',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
})

</script>

<style scoped>

.input-group-text{
    background-color: #2A3439;
  }

</style>