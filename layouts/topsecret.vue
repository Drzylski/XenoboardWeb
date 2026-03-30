<template>
  <main id="layout-body" class="alien-body" >
    <header class="" ><NavBar :alien="true"></NavBar></header>
      <div class="">
        <slot />
      </div>
    <footer class=""><FooterBar :alien="true"></FooterBar></footer>
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
    background : linear-gradient(90deg, #6B8491 0.30%, #7B94A1 50%, #6B8491 100%);
    position: relative;
    line-height: 1.2 !important;
    font-family: 'Tahoma', "Roboto", sans-serif !important;
    --va-font-family: Tahoma !important;
}

.alien-body{
    /*background : linear-gradient(90deg, #3a3d45 0.30%, #4a4d55 50%, #3a3d45 100%);
    background-color: #080a0b;*/
    background-color: #003B00;
    background-image: linear-gradient(
      to right, rgba(0, 75, 0, 0.5), rgba(0, 75, 0, 1), rgba(0, 75, 0, 0.5)
    ), url("~/assets/top-secret.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    line-height: 1.1 !important;
    font-family:"Roboto", 'Tahoma', sans-serif !important;
    --va-font-family: "Roboto" !important;
    color: #FFFFFF;
    max-width: 100%;
}

</style>
