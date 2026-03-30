<template>
  <main id="layout-body" class="layout-body default-body">
    <header class=""><NavBar :alien="false"></NavBar></header>
      <div class="content-body">
        <slot />
      </div>
    <footer class=""><FooterBar :alien="false"></FooterBar></footer>
  </main>
</template>

<script setup lang="ts">
import FooterBar from '../components/FooterBar.vue';
import NavBar from '../components/NavBar.vue';


</script>

<style scoped>

.html-style {
    background-color: #404F56 !important;
  }

.quack{
  color:white
}

.default-body{
    /*background : linear-gradient(90deg, #6B8491 0.30%, #7B94A1 50%, #6B8491 100%);*/
    position: relative;
    line-height: 1.2 !important;
    font-family: 'Tahoma', "Roboto", sans-serif !important;
    --va-font-family: Tahoma !important;
    background-color: #6b8491;
    background-image: linear-gradient(
      to right, rgba(100, 140, 155, 0.7), rgba(100, 140, 155, 0.98), rgba(100, 140, 155, 0.7)
    ), url("~/assets/mechon.jpg") !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 95%;
}

</style>
