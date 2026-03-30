<template>
  <div fluid class=" pt-5 pb-5 black-background" >

    <!--Email-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formEmail">Email:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formEmail" class="" type="email" v-model="email"></BInput>
      </BCol>
    </BRow>

    <!--Confirm Email-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formConfirmEmail">Confirm Email:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formConfirmEmail" class="" type="email" v-model="confirmEmail"></BInput>
      </BCol>
    </BRow>

    <!--Update Email Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5 col-10">
          <BButton  class="submit-button mt-1" @click="submitUpdateEmail" >Update Email</BButton>
      </BCol>
    </BRow>

    <!--Password-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formPassword">Password:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput ref="deleteRef" id="formPassword" class="" type="password" v-model="password"></BInput>
      </BCol>
    </BRow>

    <BPopover :target="() => $refs.deleteRef" placement="auto-end">
      <template #title>Password Requirements</template>
        * Some password rules I need to decide on at some point
    </BPopover>

    <!--Confirm Password-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formConfirmPAssword">Confirm Password:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formConfirmPassword" class="" type="password" v-model="confirmPassword"></BInput>
      </BCol>
    </BRow>

    <!--Update PAssword Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5 col-10">
          <BButton  class="submit-button mt-1" @click="submitUpdatePassword" >Update Password</BButton>
      </BCol>
    </BRow>

    <!--Delete  Account Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formConfirmPAssword">Delete Account:</label>
      </BCol>
      <BCol class="pt-2 pb-2  ps-4 col-10">
          <BButton variant="danger"  class="delete-button mt-1 danger" @click="submitDeleteAccount" >Delete Account</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';
import {ref} from 'vue'
import FormatDate from '../utils/FormatDate'

const email = ref<string>('test@hotmail.com'); 
const confirmEmail = ref<string>('test@hotmail.com');
const password = ref<string>(''); 
const confirmPassword = ref<string>('');  
const formValid = ref<boolean>(false);

function getUserData(){
    //TODO:
  }

function submitUpdateEmail(){
    //TODO:
    alert("Submitted!");
  }

function submitUpdatePassword(){
    //TODO:
    alert("Submitted!");
  }

function submitDeleteAccount(){
    //TODO:
    confirm("Are you sure you want to delete your account?");
  }  


</script>

<style scoped>

.profile-image{
  border-radius: 50%;
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
}

.black-background{
  background-color: black; 
  border-radius: 20px;
}

.delete-button{
    display: flex !important;
    justify-content: flex-start !important;
    justify-items: flex-start !important;
    align-items:flex-start !important;
    align-content:flex-start !important;
    margin-right: auto !important;
    border: 1px solid #BBBBBB !important;
  }

</style>