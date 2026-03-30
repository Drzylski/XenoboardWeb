<template>
  <ClientOnly >
    <LazySideNavBar v-show="showSideNav" v-model="showSideNav" class="side-nav" @open-login="showLoginModal" @open-register="showRegisterModal"></LazySideNavBar>
  </ClientOnly>
   <ModalBody v-if="showLogin" @close-modal="closeLoginModal" :subComponentName="'LoginModal'" :modalWidth="80" :modalData="modalData">
    <template v-slot:modal-title>
      Login
    </template>
  </ModalBody>
  <ModalBody v-if="showRegister" @close-modal="closeRegisterModal" :subComponentName="'RegisterModal'" :modalWidth="70" :modalData="modalData">
    <template v-slot:modal-title>
      Sign Up
    </template>
  </ModalBody>
  <b-container fluid class=" mb-1" :class="classObject" >
    <BRow>
      <BCol class="col-auto xeno-wrapper">
          <span class="menu-icon me-4" @click="openCloseSideNav">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          
            <NuxtLink class="main-text" :to="{ path: '/'}" >
              <span id="main-logo-text" class="xeno-text xeno-crazy-text" >
                  Xenoboard
              </span>
            </NuxtLink>
          
      </BCol>
      <BCol class=" float-end" >
        <BRow class="justify-content-end nav-buttons-group">
          <BCol class="col-auto">
            <NuxtLink :to="{ path: '/Assistant'}">
              <svg class="icon ps-0 ms-0" width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ai assistant</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(64.000000, 64.000000)"> <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
            </NuxtLink>
            <NuxtLink :to="{ path: '/Search'}">
              <svg id="popover-search" class="icon ps-0 ms-4" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <title>search</title> <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </NuxtLink>
            <span v-if="!authorized" @click="showLoginModal" class="ms-4 nav-button">Login</span>
            <span v-if="!authorized" @click="showRegisterModal" class="nav-button">Sign&nbsp;Up</span>
            <span v-if="authorized" class="ms-4" >
              <BDropdown size="sm"  variant="link" toggle-class="text-decoration-none p-0 m-0" no-caret class="p-0 m-0" style="padding: 0 !important; margin: 0 !important; display: inline-block !important;"  >
                <template #button-content >
                  <NuxtImg class="card-author-image" src="/seifer-almasy.jpg" alt="Banner" width="70px" sizes="sm:20px md:30px lg:50px xl:60px" quality="100" v-if="!authorized" style="display:inline-flex !important;" />
                  <span class="visually-hidden">User Options</span>
                </template>
                <NuxtLink :to="{ path: '/Admin'}">
                  <BDropdownItem >Admin</BDropdownItem >
                </NuxtLink>
                <NuxtLink :to="{ path: '/Settings'}">
                  <BDropdownItem >Settings</BDropdownItem >
                </NuxtLink>  
                <BDropdownItem href="#">Log Out</BDropdownItem >
              </BDropdown>
            </span>
          </BCol>
        </BRow>
        <BRow class="mt-3 justify-content-end nav-text-group">
          <BCol class="col-auto">            
            <b-dropdown split class="pe-2 me-2" variant="dark">
              <template #button-content>
                <NuxtLink :to="{ path: '/Forums'}">
                  <span class=" ">Forums</span>
                </NuxtLink>
              </template>
              <b-dropdown-item >
                <NuxtLink :to="{ path: '/Forums'}">
                  <span class=" ">Forums Home</span>
                </NuxtLink>
              </b-dropdown-item>
              <BDropdownDivider></BDropdownDivider>
              <b-dropdown-item >
                <NuxtLink :to="{ path: '/Forums/Discussions'}">
                  <span class=" ">Discussions</span>
                </NuxtLink>
              </b-dropdown-item>
              <b-dropdown-item >
                <NuxtLink :to="{ path: '/Forums/News'}">
                  <span class=" ">News</span>
                </NuxtLink>
              </b-dropdown-item>
              <b-dropdown-item >
                <NuxtLink :to="{ path: '/Forums/Bazaar'}">
                  <span class=" ">Bazaar</span>
                </NuxtLink>
              </b-dropdown-item>
              <b-dropdown-item >
                <NuxtLink :to="{ path: '/Forums/Events'}">
                  <span class=" ">Events</span>
                </NuxtLink>
              </b-dropdown-item>
            </b-dropdown>
            <NuxtLink :to="{ path: '/Guidelines'}">
              <span class="nav-text p-2 m-2">Guidelines</span>
            </NuxtLink>
            <NuxtLink :to="{ path: '/Tags'}">
              <span class="nav-text p-2 m-2">Tags</span>
            </NuxtLink>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


interface Props {
  alien: boolean
}

const props = withDefaults(defineProps<Props>(), {
  alien: false,
})

//Select the style based on truth values
const classObject = computed(() => ({
  'header-body': !props.alien,
  'alien-header': props.alien
}))

//Lazy Load with dynamic import
const SideNavBar = defineAsyncComponent(() => 
  import('./SideNavBar.vue')
)

const showSideNav = ref<boolean>(false);
const showRegister = ref<boolean>(false);
const showLogin = ref<boolean>(false);
const authorized = ref<boolean>(false);  

function openCloseSideNav(){
    showSideNav.value = !showSideNav.value;
  };

function showRegisterModal(){
  showRegister.value = useOpenModal(showRegister.value);
}

function closeRegisterModal(){
  showRegister.value = useCloseModal(showRegister.value);
}

function showLoginModal(){
  showLogin.value = useOpenModal(showLogin.value);
}

function closeLoginModal(){
  showLogin.value = useCloseModal(showLogin.value);
}

</script>

<style scoped>

#main-logo-text {
  display: flex !important;
  margin: auto;
  font-size: 300%;
  align-content: center !important;
  align-items: center !important;
}

.menu-icon {
  display: block;
  margin: auto;
  cursor: pointer;
}

.main-text {
  display: block !important;
  margin: auto !important;
  cursor: pointer !important;
}

.menu-icon * {
  transition: stroke 1s;
}

.menu-icon:hover *{
  stroke: #555555;
  transition: stroke 1s;
}

.nav-text{
  font-size: 1.0vw;
  transition: color 1s;
  cursor: pointer;
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

.btn-group button *  {
  background-color: #2A3439 !important;
}

:deep(.dropdown-menu li *){
  background-color: #FFFFFF !important;
}

</style>