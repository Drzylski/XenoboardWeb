<template>
  <div class="mt-4 pt-1 me-2 ms-2 mb-5 pb-5">
    <b-container fluid class="topics-container topics-opacity mt-3 pt-1 pb-5  me-2" >
    <!--Stats Header-->
    <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
      <BCol class="col-auto" >          
        <h4 class="pt-2 " >Error!</h4>
      </BCol>
    </BRow>
    <BRow class=" ps-1 pe-1 pt-3 pb-0 error-body">
      <BCol class="col-12">
        <h2 class="pb-3" >Uh oh! A {{ error.statusCode }} error has occurred</h2>

        <h6 class="pb-3">Details are: {{ error.message }}</h6>

        <div>
          <svg height="25vw" width="35vw" xmlns="http://www.w3.org/2000/svg">
            <image height="25vw" width="35vw" href="~/assets/shulk-error.png" opacity="0.9" />
          </svg> 
        </div>
      </BCol>
    </BRow>
    <BRow class=" ps-1 pe-1 pt-5 pb-5  error-body">
      <BCol>
        <BButton class="error-button" @click="handleError">Go home</BButton>
      </BCol>
    </BRow>
    </b-container>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

definePageMeta({
  layout: 'default',
})

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>

.error-button{
  display: flex !important;
  justify-content: center !important;
  justify-items: center !important;
  align-items: center !important;
  align-content: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
  border: 1px solid #FFFFFF !important;
  background-color: #2A3439 !important;
  opacity: 1 !important;
}

.error-body{
    padding: 15px;
    background-color: #14191C;
    opacity: 1 !important;
    color: #BBBBBB
  }

</style>