<template>
  <div fluid class="modal-scroll">

    <!--Subject-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formSubject">Subject:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5">
          <BInput id="formSubject" class="" type="text" v-model="subject"></BInput>
          {{ subject }}
      </BCol>
    </BRow>

    <!--Body-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default"  for="formBody">Body:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5">
        <TinyEditor id="formBody" :image="false" :height="200" :menu-bar="true" :paste-as-text="true"  @editorvalue="(value) => body = value" v-model="body"> </TinyEditor>
        {{ body }}
      </BCol>
    </BRow>

    <!--Category-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default"  for="formCategory">Category:</label>
      </BCol>
      <BCol class="pt-2 pb-2 pe-5">
          <multiselect
              id="formCategory"
              track-by="text"
              :close-on-select="true"
              :show-labels="true"
              label="text"
              placeholder="Category"
              noOptions="No Options Found"
              :options="catOptions"
              open-direction="bottom"
              v-model="category"
          >  
          </multiselect>
          <span v-if="category != null">{{ category.value }}</span>
      </BCol>
    </BRow>

    <!--Tags-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formTags">Tags:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5">
          <BFormTags id="formTags" input-id="formTags" placeholder="Enter tags for post, or leave blank" v-model="tags"></BFormTags>
          {{ tags }}
      </BCol>
    </BRow>

    <!--Submit Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitNewTopic" >Submit</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BFormTextarea, BInput } from 'bootstrap-vue-next';
import Multiselect from 'vue-multiselect';
//import editor from '~/plugins/tinymce-vue';
import TinyEditor from './TinyEditor.vue';
//import TinyEditor from './TinyEditor.vue';

const subject = ref<string>();
const body = ref<string>();
const category = ref<number>();
const tags = ref<string[]>([]);
const formValid = ref<boolean>(false);

const catOptions = ref([
    {value: '0', text: 'Discussions'},
    {value: '1', text: 'Rants'},
    {value: '2', text: 'Community'},
    {value: '3', text: 'News'},
  ]);

const props = defineProps<{
  modalData: object
}>()

function submitNewTopic(){
    //TODO:
    alert("Submitted!");
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