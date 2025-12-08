<template>
  <ClientOnly >
    <SideNavBar v-show="showSideNav" v-model="showSideNav" class="side-nav"></SideNavBar>
  </ClientOnly>
  <b-container fluid class="header-body mb-1">
    <BRow>
      <BCol class="col-auto xeno-wrapper">
          <span class="menu-icon me-4" @click="openCloseSideNav">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          <span id="main-logo-text" class="xeno-text xeno-crazy-text" style="margin: auto;">Xenoboard</span>
      </BCol>
      <BCol>
          <span></span>
      </BCol>
      <BCol class="col-auto" >
        <BRow class="justify-content-end nav-buttons-group">
          <BCol class="col-auto">
            <span class="nav-button">Login</span>
            <span class="nav-button">Sign&nbsp;Up</span>
          </BCol>
        </BRow>
        <BRow class="mt-3 justify-content-end nav-text-group">
          <BCol class="col-auto">
            <span class="nav-text p-2 m-2">Guidelines</span>
            <span class="nav-text p-2 m-2">Tags</span>
            <span class="nav-text p-2 m-2">Forums</span>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>
import { BOffcanvas } from 'bootstrap-vue-next';

//Lazy Load with dynamic import
const SideNavBar = defineAsyncComponent(() => 
  import('./SideNavBar.vue')
)


const showSideNav = ref<boolean>(false);

function openCloseSideNav(){
    showSideNav.value = !showSideNav.value;
  };

</script>

<style scoped>

#main-logo-text {
  font-size: 300%;
}

.menu-icon {
  display: block;
  margin: auto;
  cursor: pointer;
}


.nav-text{
  font-size: 1.0vw;
  transition: color 1s;
}

.nav-text:hover{
  color: #777777;
  transition: color 1s;
}

.side-nav{
  width: 400px;
}

.nav-text-group{

}

.nav-buttons-group{
  
}

</style>