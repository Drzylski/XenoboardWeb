<template>
  <div>
    <!--Home-->
    <a class="breadcrumb breadcrumb-item" href="/">Home</a>&emsp;>&emsp;
    <!--Next Link, Last link will be bolded-->
    <span class="breadcrumb" v-for="(crumb,index) in breadcrumbs" >
      <a v-if="breadcrumbs.length-1 != index" class="breadcrumb" :href="'/'+crumb.path">{{ crumb.title }}&emsp;>&emsp;</a>
      <a v-else href="#" class="breadcrumb-final"><b>{{ crumb.title }}</b></a>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

  //TODO: Finish up bread crumbs, maybe use pinia cache to remember last locations

  const props = defineProps<{
  breadcrumbs: IBreadCrumb[]
}>()

</script>

<style scoped>

  .breadcrumb{
    text-decoration: none;
    color: #DDDDDD;
    display: flex;
    text-align: left ;
  }

  .breadcrumb-final{
    text-decoration: none;
    color: #555555;
    display: flex;
    text-align: left ;
  }

</style>