<template>
  <div fluid class="modal-scroll">

    <BContainer :id="'user-'+props.modalData.id" style="background-color: black; border-radius: 20px;" class="p-5 mb-5 shadow">
      <!--image-->
    <BRow class="pt-3 pb-3">
      <BCol class="">
        <div>
          <NuxtImg class="profile-image" src="/seifer-almasy.jpg" alt="Banner"  sizes="sm:100px md:100px lg:200px xl:200px" quality="100" loading="eager"/>
        </div>
      </BCol>
    </BRow>

    <!--Name-->
    <BRow class="pt-2">
      <BCol class="">
        <div>
          <span class="username pt-5">{{ userData.username }}</span>
        </div>      
      </BCol>
    </BRow>

    <!--Quote-->
    <BRow class="pt-3">
      <BCol class="">
        <div>
          <span class="user-details pt-5">"{{ userData.quote }}"</span>
        </div>      
      </BCol>
    </BRow>

    <!--stats-->
    <BRow class="pt-5 m-0">
      <BCol class="col-lg-4 col-md-4 col-sm-12 p-2 0">
        <div>
          <span class="user-details pt-5">Posts: <span class="data">{{ userData.posts }}</span></span>
        </div>      
      </BCol>
      <BCol class="col-lg-4 col-md-4 col-sm-12 p-2 ">
        <div>
          <span class="user-details pt-5">Replies: <span class="data">{{ userData.replies }}</span></span>
        </div>      
      </BCol>
      <BCol class="col-lg-4 col-md-4 col-sm-12 p-2">
        <div>
          <span class="user-details pt-5">Likes: <span class="data">{{ userData.likes }}</span></span>
        </div>      
      </BCol>
    </BRow>

    <!--member dates-->
    <BRow class="pt-5 pb-5 mb-5 m-0">
      <BCol class="col-lg-6 col-md-6 col-sm-12 p-1 ">
        <div>
          <span class="user-details pt-5">Join Date: <span class="data">{{ FormatDate(userData.joinDate) }}</span></span>
        </div>      
      </BCol>
      <BCol class="col-lg-6 col-md-6 col-sm-12 p-1">
        <div>
          <span class="user-details pt-5">Last Login: <span class="data">{{ FormatDate(userData.lastLogin) }}</span></span>
        </div>      
      </BCol>
    </BRow>
    </BContainer>


  </div>
</template>

<script lang="ts" setup>
import FormatDate from '../utils/FormatDate'

const props = defineProps<{
  modalData: object
}>()

const userData = ref({ 
    id: props.modalData.id,
    image: props.modalData.image,
    username: props.modalData.username,
    quote: 'Dost thou seeketh the power?',
    joinDate: new Date('05/08/2025'),
    lastLogin: new Date('07/25/2025'),
    posts: 3,
    replies: 14,
    likes: 2,
    uuid: 'c3b96520-be19-4668-a77a-f1ac4aeec73e',
  });

function getUserData(){
    //TODO:
    //userData.id
  }

</script>

<style scoped>

.username{
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 900;
}

.user-details{
  color: #DDDDDD;
  font-size: 25px;
}

.data{
  color: #FFFFFF;
  font-weight: 900;
}

.profile-image{
  border-radius: 50%;
  margin: 0 !important;
  padding: 0 !important;
}

</style>