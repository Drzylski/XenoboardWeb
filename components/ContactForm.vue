<template>
  <div fluid class="">
    
    <!--Email-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text ">
          <label class="label label-default" for="formEmail">Email:</label>
      </BCol>
    </BRow>
    <BRow>
      <BCol class="pt-2 pb-2 ps-5 ms-4  pe-5  col-11">
          <BInput id="formEmail" class="" type="email" v-model="email" placeholder="Email..."></BInput>
      </BCol>
    </BRow>

    <!--Body-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default"  for="formBody">Message:</label>
      </BCol>
    </BRow>
    <BRow>
      <BCol class="pt-1 pb-1 ps-5 ms-4 pe-5 me-5 mb-1 mt-1  col-11 ">
        <BFormTextarea id="formBody" class="" v-model="body" size="lg" placeholder="Message..." rows="4"></BFormTextarea>
      </BCol>
    </BRow>

    <!--Submit Button-->
    <BRow class="pt-3 pb-5">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitContactForm" >Submit</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';

const email = ref<string>();
const body = ref<string>();
const formValid = ref<boolean>(false);

function submitContactForm(){
    //TODO:
    alert("Submitted!");
  }


</script>

<style scoped>

  .header {
    color:#BBBBBB !important; 
    width:100%;
    padding-top: 5px;
    padding-bottom: 5x;
    background: #404F56;
    border-bottom:2px solid #6B8491;
    border-radius: 15px 15px 0 0 ;
  }

  .loading-text {
    color:#FFFFFF
  }

</style>