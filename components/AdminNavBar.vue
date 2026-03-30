<template>
  <!--Rather than create this, could have just taken the same approach as the topsecret layout, since there isn't too much different here. Could change as admin site is built-->
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
  <b-container fluid class="admin-header-body mb-1" >
    <BRow>
      <BCol class="col-auto xeno-wrapper">
          <span class="menu-icon me-4" @click="openCloseSideNav">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          
            <NuxtLink class="main-text" :to="{ path: '/'}" >
              <span id="main-logo-text" class="xeno-text xeno-crazy-text" >
                  Admin Xenoboard
              </span>
            </NuxtLink>
          
      </BCol>
      <BCol class=" float-end" >
        <BRow class="justify-content-end nav-buttons-group">
          <BCol class="col-auto">
            <NuxtLink :to="{ path: '/Search'}">
              <svg id="popover-search" class="icon ps-0 ms-0" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </NuxtLink>
            <span v-if="authorized" @click="showLoginModal" class="ms-4 nav-button">Login</span>
            <span v-if="authorized" @click="showRegisterModal" class="nav-button">Sign&nbsp;Up</span>
            <span v-if="!authorized" class="ms-4" >
              <BDropdown size="sm"  variant="link" toggle-class="text-decoration-none p-0 m-0" no-caret class="p-0 m-0" style="padding: 0 !important; margin: 0 !important; display: inline-block !important;"  >
                <template #button-content >
                  <NuxtImg class="card-author-image" src="/seifer-almasy.jpg" alt="Banner" width="70px" sizes="sm:20px md:30px lg:50px xl:60px" quality="100" v-if="!authorized" style="display:inline-flex !important;" />
                  <span class="visually-hidden">User Options</span>
                </template>
                <NuxtLink :to="{ path: '/Admin'}">
                  <BDropdownItem href="#">Admin</BDropdownItem >
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
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>

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