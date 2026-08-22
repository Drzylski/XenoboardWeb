<template>
  <div fluid class="modal-scroll">

    <!--Subject-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formSubject">Subject:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5">
          <BInput id="formSubject" class="" type="text" v-model="subject"></BInput>
      </BCol>
    </BRow>

    <!--Body-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default"  for="formBody">Body:</label>
      </BCol>
      <BCol v-if="editorLoading == null || editorLoading == true" class="pt-5 pb-5  pe-5 me-5 mb-5 mt-5">
        <div><BSpinner class="light" large label="Loading..." variant="light" style="width: 5rem; height: 5rem;"></BSpinner></div>
        <span class="loading-text">Loading...</span>
      </BCol>
      <BCol v-show="editorLoading != null && editorLoading == false" class="pt-2 pb-2  pe-5 ">
        <ClientOnly fallback-tag="span" fallback="Loading on server...">
          <LazyTinyEditor id="formBody" :image="false" :height="200" :menu-bar="true" :paste-as-text="true"  @editorvalue="(value) => body = value" v-model:editor-text="body" v-model:editor-loading="editorLoading"> </LazyTinyEditor>
        </ClientOnly>
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
      </BCol>
    </BRow>

    <!--Tags-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2 col-2 modal-label-text">
          <label class="label label-default" for="formTags">Tags:</label>
      </BCol>
      <BCol class="pt-2 pb-2  pe-5">
          <BFormTags id="formTags" input-id="formTags" placeholder="Enter tags for post, or leave blank" v-model="tags"></BFormTags>
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

    <!--Submit Button-->
    <BRow class="pt-3">
      <BCol class="pt-2 pb-2  pe-5">
          <BButton  class="submit-button mt-1" @click="submitNewTopic()" >Submit</BButton>
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import { BInput } from 'bootstrap-vue-next';
import Multiselect from 'vue-multiselect';
import { useGetCategoryValue } from '../composables/GetCategoryValue';
import { useToastSuccess } from '../composables/ToastSuccess';
import { useToastError } from '../composables/ToastError';
import { useTopicService } from '../services/TopicService';

const props = defineProps<{
  modalData: object
}>()

const subject = ref<string>();
const body = ref<string>();
const category = ref<number>();
const tags = ref<string[]>([]);
//const files = ref<File[]>([]);
const files = ref<File[]>([]);
const formValid = ref<boolean>(false);

  //Check for if editor is loading necessary files. 
const editorLoading = ref<boolean>();

function tinyEditorFinishedLoading(){
  editorLoading.value = false;
}  

//Check if this is an edit. Id will not be null if this is an edit
if(props.modalData.id != null){
  console.log(props.modalData.category);
  body.value = props.modalData.body;
  subject.value = props.modalData.title;
  category.value = useGetCategoryValue(props.modalData.category);
  tags.value = props.modalData.tags;
  files.value = props.modalData.files;
}



const catOptions = ref([
    {value: '0', text: 'Discussions'},
    {value: '1', text: 'Bazaar'},
    {value: '2', text: 'Events'},
    {value: '3', text: 'News'},
    {value: '4', text: 'Top Secret'},
  ]);

//Submits a new topic
async function submitNewTopic(){
    //TODO: this method is for testing purposes currently and does not reflect what it should actually do yet

    //Package topic
    //TODO: Create a type for this
    const newTopicDto = {
      id: 1,
      uuid: 'b9467df4-546a-4941-be7d-3a0d88b9ad8b',
      title: subject.value,
      body: body.value,
      category: category.value.value,
      tags: tags.value,
      files: [],
      update: true
    }

    //Package files
    //TODO: Create a type for this
    const fileUploadListDto = {
      id: 1,
      files: files.value,
    }

    let formData = new FormData();
    formData.append('userId', '1');
    formData.append('files', files.value);

    const data = {
      files: files.value,
      newTopicDto: newTopicDto
    }

    

    try{
        //Update or create topic
        const response = await useTopicService().UpdateTopic('1', newTopicDto);
        useToastSuccess('Topic Created!');

        const topicId = response.data.id;

        //Upload files if any
        if(fileUploadListDto.files && fileUploadListDto.files.length > 0){
          const response = await useTopicService().UploadTopicFiles(topicId, fileUploadListDto);
          if(response.status == 200) useToastSuccess('Files processed successfully');
          else useToastError('File processing failed');
        }
      }
      catch(error){
        useToastError('Error '+error);
        console.error(error);
      }

    //alert("Submitted!");
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

  .loading-text {
    color:#FFFFFF
  }

</style>