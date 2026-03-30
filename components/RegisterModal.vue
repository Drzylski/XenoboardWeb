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

    <!--Password Confirm-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formConfirmPassword">Confirm Password:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formConfirmPassword" class="" type="password" v-model="confirmPassword"></BInput>
      </BCol>
    </BRow>

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

    <!--DOB-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formDob">Date of Birth:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formDob" class="" type="date" v-model="dob"></BInput>
          <BFormDatepicker id="formDob" class="" v-model="dob" locale="en"></BFormDatepicker>
      </BCol>
    </BRow>

    <!--Accept Terms-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          
      </BCol>
      <BCol class="pt-2 pb-2 ps-0 pe-5 modal-label-text">
        <label class="label label-default" for="formAcceptTerms">Please accept the <a class="terms" href="#">Terms and Conditions:</a></label>
          <BFormCheckbox
            id="formAcceptTerms"
            v-model="acceptTerms"
            name="formAcceptTerms"
            :value="true"
            :unchecked-value="false"
          >
          </BFormCheckbox>
      </BCol>
    </BRow>

    <!--Submit Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitRegisterForm" >Submit</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';

const username = ref<string>();
const password = ref<string>();
const confirmPassword = ref<string>();    
const email = ref<string>(); 
const confirmEmail = ref<string>();
const dob = ref<Date>();      
const acceptTerms = ref<boolean>(false);   
const formValid = ref<boolean>(false);

const props = defineProps<{
  modalData: object
}>()

function submitRegisterForm(){
    //TODO:
    alert("Submitted!");
  }


</script>

<style scoped>

  .terms{
    color:#404F56
  }

</style>