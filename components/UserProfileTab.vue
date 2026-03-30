<template>
  <div fluid class=" pt-5 pb-5 black-background" >

    <!--Username-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formUsername">Username:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formUsername" class="" type="text" v-model="username"></BInput>
      </BCol>
    </BRow>

    <!--Banner-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formQuote">Banner:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-md-8 col-10">
          <BInput id="formBanner" class="" type="text" v-model="banner"></BInput>
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

    <!--image-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formDob">Profile Image:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5 col-auto">
          <svg class="profile-image" height="150px" width="150px" xmlns="http://www.w3.org/2000/svg">
            <image class="profile-img" height="160px" width="150px" href="~/assets/seifer-almasy.jpg" opacity="0.9" />
          </svg> 
          <div>
          <BButton class="mt-2" variant="dark">Update Image</BButton>
          </div>
      </BCol>
    </BRow>

    <!--Image-->
    <BRow class="pt-3">
      
    </BRow>

    <!--Submit Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitUpdateProfile" >Update Profile</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';
import FormatDate from '../utils/FormatDate'

const username = ref<string>('SeiferAlmasy');   
const dob = ref<Date>(new Date('1990/01/21').toISOString().substr(0, 10));  
const banner = ref<string>('Dost thou seeketh the power?');  
const image = ref<string>('-1');    
const formValid = ref<boolean>(false);

function getUserProfile(){
    //TODO:
  }

function uploadProfilePicture(){
    //TODO:
  }  

function submitUpdateProfile(){
    //TODO:
    alert("Submitted!");
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

</style>