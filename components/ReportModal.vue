<template>
  <div fluid class="modal-scroll">

    <!--Reason-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default"  for="formBody">Reason:</label>
      </BCol>
      <BCol v-show="editorLoading != null && editorLoading == false" class="pt-2 pb-2  pe-5">
        <ClientOnly fallback-tag="span" fallback="Loading on server...">
          <LazyTinyEditor id="formBody" :image="false" :height="200" :menu-bar="true" :paste-as-text="true"  @editorvalue="(value) => reason = value" v-model:editor-text="reason" v-model:editor-loading="editorLoading"> </LazyTinyEditor>
        </ClientOnly>
      </BCol>
      <BCol v-if="editorLoading == null || editorLoading == true" class="pt-2 pb-2  pe-5">
        <div><BSpinner class="light" large label="Loading..." variant="light" style="width: 5rem; height: 5rem;"></BSpinner></div>
        <span class="loading-text">Loading...</span>
      </BCol>
    </BRow>

    <!--Submit Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitReportForm" >Report</BButton>
          {{ modalData.id }} {{ modalData.userId }} {{ modalData.isTopic }}
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';
//import TinyEditor from './TinyEditor.vue';

const reason = ref<string>();
const formValid = ref<boolean>(false);

const props = defineProps<{
  modalData: object
}>()

 //Check for if editor is loading necessary files. 
const editorLoading = ref<boolean>();

function submitReportForm(){
    //TODO:
    alert("Submitted!");
  }


</script>

<style scoped>

  .help-links {
  white-space: initial;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  color: #EEEEEE;
}

</style>