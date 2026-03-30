<template>
  <div>
    <ClientOnly>
      <BOffcanvas 
        id="the-side-bar"
        header-class="pb-1 pt-1 ps-4 pe-4 mb-0 mt-0 bg-black" 
        body-class="pe-0 ps-0 ms-0 me-0 overflow-x-hidden " 
        class="sidenav-body text-white shadow" 
        v-model="showSideNav" 
        placement="start"
        :style=" 'background-color: #404F56;'"
        data-bs-theme="dark"
        ref="offCanvas"
      >
      <template #title>
        <a href="#"><span class="xeno-text xeno-crazy-text sidenav-logo-text" >Xenoboard</span></a>
      </template>
    
        <b-container class="p-0 m-0">
          <BRow>
            <BCol class="col-12">
              <BButton v-b-toggle.the-side-bar class="button-margin p-2 nav-button sidenav-button-text" @click="emitShowLogin">Login</BButton>
            </BCol>
          </BRow>
          <BRow>
            <BCol class="col-12">
              <BButton v-b-toggle.the-side-bar class="button-margin p-2 mb-3 nav-button sidenav-button-text" @click="emitShowRegister">Sign&nbsp;Up</BButton>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
          <BRow class="sidenav-link  me-0 ms-0 mb-2">
            <BCol class="col-12" >

                <BContainer class="p-2 m-0" v-b-toggle.collapse-forum>
                  Forums <svg class="icon  p-0 m-0" fill="#ffffff" width="18px" height="18px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dropdown</title> <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path> </g></svg>
                </BContainer>
              <BCollapse id="collapse-forum" class="mt-2" style="border: 1px #FFFFFF solid;">
                <BRow class="sidenav-collapse-link  me-0 ms-0">
                  <BCol class="col-12" >
                    <NuxtLink :to="{ path: '/Forums'}">
                      <BContainer class="p-2" v-b-toggle.the-side-bar >
                        Forums Home 
                      </BContainer>
                    </NuxtLink>
                  </BCol>
                </BRow>
                <hr class="w-100 p-0 m-0"></hr>
                <BRow class="sidenav-collapse-link  me-0 ms-0">
                  <BCol class="col-12" >
                    <NuxtLink :to="{ path: '/Forums/Discussions'}">
                      <BContainer class="p-2" v-b-toggle.the-side-bar >
                        Discussions
                      </BContainer>
                    </NuxtLink>
                  </BCol>
                </BRow>
                <hr class="w-100 p-0 m-0"></hr>
                <BRow class="sidenav-collapse-link  me-0 ms-0">
                  <BCol class="col-12" >
                    <NuxtLink :to="{ path: '/Forums/News'}">
                      <BContainer class="p-2" v-b-toggle.the-side-bar >
                        News
                      </BContainer>
                    </NuxtLink>
                  </BCol>
                </BRow>
                <hr class="w-100 p-0 m-0"></hr>
                <BRow class="sidenav-collapse-link  me-0 ms-0">
                  <BCol class="col-12" >
                    <NuxtLink :to="{ path: '/Forums/Bazaar'}">
                      <BContainer class="p-2" v-b-toggle.the-side-bar >
                        Bazaar
                      </BContainer>
                    </NuxtLink>
                  </BCol>
                </BRow>
                <hr class="w-100 p-0 m-0"></hr>
                <BRow class="sidenav-collapse-link  me-0 ms-0">
                  <BCol class="col-12" >
                    <NuxtLink :to="{ path: '/Forums/Events'}">
                      <BContainer class="p-2" v-b-toggle.the-side-bar >
                        Events
                      </BContainer>
                    </NuxtLink>
                  </BCol>
                </BRow>
              </BCollapse>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
          <BRow class="sidenav-link me-0 ms-0 mb-2">
            <BCol class="col-12" v-b-toggle.the-side-bar>
              <NuxtLink :to="{ path: '/Tags'}">
                <BContainer class="p-2" v-b-toggle.the-side-bar>
                  Tags
                </BContainer>
              </NuxtLink>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
          <BRow class="sidenav-link me-0 ms-0">
            <BCol class="col-12" v-b-toggle.the-side-bar>
              <NuxtLink :to="{ path: '/Guidelines'}">
                <BContainer class="p-2" v-b-toggle.the-side-bar>
                  Guidelines
                </BContainer>
              </NuxtLink>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
        </b-container>
      </BOffcanvas>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits(['openLogin', 'openRegister']);
 
const showSideNav = defineModel({ required: true });
const hideCanvas = ref<boolean>(false);
const offCanvas = useTemplateRef('offCanvas')

function emitShowLogin(){
  emit('openLogin');
}

function emitShowRegister(){
  emit('openRegister');
} 

</script>



<style scoped>

:deep(.offcanvas){
  color: #EEEEEE !important;
  stroke: #eeeeee !important;
  fill: #eeeeee !important;
}

.sidenav-logo-text{
  font-size: 175% !important;
  text-decoration: none !important;
  color: #EEEEEE !important;
}

.sidenav-button-text{
  margin-left: 0;
  margin-right: 0;
  margin-top: 2px;
  margin-bottom: 2px;

}

.sidenav-link{
  background-color: #2A3439;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
}

.sidenav-collapse-link{
  background-color: #3A4449;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
}

.sidenav-link:hover{
  background-color: #14191C !important;
  transition: background-color 1s !important;
}

.sidenav-collapse-link:hover{
  background-color: #14191C !important;
  transition: background-color 1s !important;
}

a{
  text-decoration: none !important;
}

button{
  width: 100%;
}

</style>