<template>
  <main id="layout-body" class="layout-body" >
    <header class=""><NavBar :alien="false"></NavBar></header>
      <div class="about-body">
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

.quack{
  color:white
}

 .matrix{
    background-image: url("~/assets/matrix1.gif");
  }

  .about-body{
    background : linear-gradient(90deg, #6B8491 0.30%, #7B94A1 50%, #6B8491 100%);
    position: relative;
    line-height: 1.2 !important;
    font-family: 'Tahoma', "Roboto", sans-serif !important;
    --va-font-family: Tahoma !important;
}

</style>
