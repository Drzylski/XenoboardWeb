<template>
  <main id="layout-body " class="admin-body">
    <header class=""><AdminNavBar></AdminNavBar></header>
      <div class="">
        <slot />
      </div>
    <footer class=""><AdminFooter></AdminFooter></footer>
  </main>
</template>

<script setup lang="ts">
import AdminFooter from '../components/AdminFooter.vue';
import AdminNavBar from '../components/AdminNavBar.vue';

useHead({
  htmlAttrs: {
    class: 'admin-html'
  }
})


</script>



<style scoped>

.quack{
  color:white
}

.admin-html{
  background-color: #5e5e65;
}

.admin-body{
    /*background : linear-gradient(90deg, #3a3d45 0.30%, #4a4d55 50%, #3a3d45 100%);
    background-color: #080a0b;*/
    background-color: #262626;
    position: relative;
    line-height: 1.1 !important;
    font-family:"Roboto", 'Tahoma', sans-serif !important;
    --va-font-family: "Roboto" !important;
    color: #FFFFFF;
    max-width: 100%;
}

</style>
