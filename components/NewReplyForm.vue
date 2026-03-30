<template>
  <div fluid class="modal-scroll">

    <!--Body-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default"  for="formBody">Body:</label>
      </BCol>
      <BCol v-show="editorLoading != null && editorLoading == false" class="pt-2 pb-2  pe-5">
        <ClientOnly fallback-tag="span" fallback="Loading on server...">
          <LazyTinyEditor id="formBody" :image="false" :height="200" :menu-bar="true" :paste-as-text="true"  @editorvalue="(value) => body = value" v-model:editor-text="body" v-model:editor-loading="editorLoading"> </LazyTinyEditor>
        </ClientOnly>
      </BCol>
      <BCol v-if="editorLoading == null || editorLoading == true" class="pt-2 pb-2  pe-5">
        <div><BSpinner class="light" large label="Loading..." variant="light" style="width: 5rem; height: 5rem;"></BSpinner></div>
        <span class="loading-text">Loading...</span>
      </BCol>
    </BRow>

    <!--Files-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formTags">Files:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5">
        <ClientOnly fallback-tag="span" fallback="Loading on server...">
          <LazyFileUploadAgent v-model="files"></LazyFileUploadAgent>
        </ClientOnly>
      </BCol>
    </BRow>
    {{ files }}

    <!--Submit Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitNewReply" >Submit</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  modalData: object
}>()

const body = ref<string>();
const files = ref<File[]>([]);
const formValid = ref<boolean>(false);

//Check if this is an edit. Id will not be null if this is an edit
if(props.modalData.id != null){
  body.value = props.modalData.body;
  files.value = props.modalData.files;
}

    //Check for if editor is loading necessary files. 
const editorLoading = ref<boolean>();

function submitNewReply(){
    //TODO:
    alert(props.modalData.id);
  }


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