<template>
  <div>
    <ClientOnly>
      <BOffcanvas 
        header-class="pb-1 pt-1 ps-4 pe-4 mb-0 mt-0 bg-black" 
        body-class="pe-0 ps-0 ms-0 me-0" 
        class="sidenav-body text-white" 
        v-model="showSideNav" 
        placement="start"
        :style=" 'background-color: #404F56;'"
        data-bs-theme="dark"

      >
      <template #title>
        <a href="#"><span class="xeno-text xeno-crazy-text sidenav-logo-text" >Xenoboard</span></a>
      </template>
    
        <b-container class="p-0 m-0">
          <BRow>
            <BCol class="col-12">
              <button class="p-2 nav-button sidenav-button-text">Login</button>
            </BCol>
          </BRow>
          <BRow>
            <BCol class="col-12">
            <button class="p-2 mb-3 nav-button sidenav-button-text">Sign&nbsp;Up</button>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
          <BRow class="sidenav-link ">
            <BCol class="col-12">
            <span class="p-2">Forums</span>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
          <BRow class="sidenav-link ">
            <BCol class="col-12">
            <span class="p-2">Tags</span>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
          <BRow class="sidenav-link ">
            <BCol class="col-12">
            <span class="p-2">Guidelines</span>
            </BCol>
          </BRow>
          <hr class="w-100 p-0 m-0"></hr>
        </b-container>
      </BOffcanvas>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

const showSideNav = defineModel({ required: true });

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
  padding: 10px;
}

.sidenav-link:hover{
  background-color: #14191C !important;
  transition: background-color 1s !important;
}

a{
  text-decoration: none !important;
}

button{
  width: 100%;
}

.header-styles{
  padding: 0 !important;
  margin: 0 !important;
}


</style>