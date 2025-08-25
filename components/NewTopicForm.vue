<template>
  <div fluid>
    <BRow>
      <BCol class="pt-2 pb-2">
          {{ subject }}
          <BInput type="text" v-model="subject"></BInput><br>
          Hello QUACK hello!<br>
          Hello<br>
          Hello
      </BCol>
    </BRow>
  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';

const subject = ref(null);


</script>

<style scoped>

  .header {
    color:#BBBBBB !important; 
    width:100%;
    padding-top: 5px;
    padding-bottom: 5x;
    background: #404F56;
    border-bottom:2px solid #6B8491;
    border-radius: 15px 15px 0 0 ;
  }

</style>