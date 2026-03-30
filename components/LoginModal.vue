<template>
  <div fluid class="modal-scroll">

    <!--Username-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formUsername">Username:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formUsername" class="" type="text" v-model="username"></BInput>
      </BCol>
    </BRow>

    <!--Password-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formPassword">Password:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formPassword" class="" type="password" v-model="password"></BInput>
      </BCol>
    </BRow>

    <!--Help Links-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-6">
          <span class="help-links">Forgot Username</span>
      </BCol>
      <BCol class="pt-2 pb-2 col-4">
          <span class="help-links">Forgot Password</span>
      </BCol>
    </BRow>



    <!--Submit Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitLoginForm" >Login</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';

const username = ref<string>();
const password = ref<string>();
const formValid = ref<boolean>(false);

const props = defineProps<{
  modalData: object
}>()

function submitLoginForm(){
    //TODO:
    alert("Submitted!");
  }


</script>

<style scoped>

  .help-links {
  white-space: initial;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  color: #EEEEEE;
}

</style>