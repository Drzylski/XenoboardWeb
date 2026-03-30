<template>
  <div fluid  class="modal-overlay" @click="closeModal" >
    <div class="modal-body " @click.stop :style="'width: '+props.modalWidth+'% ; max-width: '+props.modalWidth+'% '">
    <div class="topcorner" style="color:white" @click="closeModal">
        <b-button class="modal-close-button" style="background-color: transparent;">
            X
        </b-button>
    </div>
    <div>
      <BRow>
        <BCol >
          <div class="modal-header">
            <h4 class="pt-md-2 pt-0" >
                <slot name="modal-title">Modal</slot>
            </h4>
          </div>
        </BCol>
      </BRow>
      <BRow >
        <BCol class="pt-2 pb-2">
            <component :is="subComponent.component" :modalData="modalData" >

            </component>
        </BCol>
      </BRow>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCloseModal } from '../composables/CloseModal';

const emit = defineEmits(['closeModal']);

const props = defineProps<{
  subComponentName: string,
  modalWidth: number,
  modalData: object
}>()

const name = props.subComponentName;

const subcomponentMap = {
  NewTopicForm: {component: resolveComponent('NewTopicForm'),title: 'Post Topic'},
  NewReplyForm: {component: resolveComponent('NewReplyForm'),title: 'Post Reply'},
  RegisterModal: {component: resolveComponent('RegisterModal'),title: 'Register'},
  LoginModal: {component: resolveComponent('LoginModal'),title: 'Login'},
  ReportModal: {component: resolveComponent('ReportModal'),title: 'Report'},
  UserModal: {component: resolveComponent('UserModal'),title: 'User Profile'},
}

const subcomponentTitle = {
  NewTopicForm: 'Post Topic',
  NewReplyForm: 'Post Reply',
  RegisterModal: 'Register',
  LoginModal: 'Login',
  ReportModal: 'Report',
  UserModal: 'User Profile',
}

const getSubComponent = (name) => {
  return subcomponentMap[name];
}

const subComponent = getSubComponent(name);

function closeModal() {
  emit('closeModal');
}


</script>

<style scoped>

  .modal-header {
    color:#BBBBBB !important; 
    width:100%;
    padding-top: 5px;
    padding-bottom: 5x;
    background: #404F56;
    border-bottom:2px solid #6B8491;
    border-radius: 15px 15px 0 0 ;
    text-align: center ;
    align-items: center ;
    display: block;
  }

  .modal-close-button{
    padding: 5px 12px 5px 12px;
  }

  .modal-close-button:hover{
    background-color: #202F36 !important;

  }

</style>