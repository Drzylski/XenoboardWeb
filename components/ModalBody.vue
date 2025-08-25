<template>
  <div fluid class="modal-overlay">
    <div class="modal-body">
    <div class="topcorner" style="color:white" @click="closeModal">
        <b-button  style="background-color: transparent;">
            X
        </b-button>
    </div>
    <BRow>
      <BCol >
        <div class="header">
          <h4 class="pt-2">
              {{subComponent.title}}
          </h4>
        </div>
      </BCol>
    </BRow>
    <BRow>
      <BCol class="pt-2 pb-2">
          <component :is="subComponent.component" />
      </BCol>
    </BRow>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCloseModal } from '../composables/CloseModal';

const emit = defineEmits(['closeModal']);

const props = defineProps<{
  subComponentName: string
}>()

const name = props.subComponentName;

const subcomponentMap = {
  NewTopicForm: {component: resolveComponent('NewTopicForm'),title: 'Post Topic'},
}

const subcomponentTitle = {
  NewTopicForm: 'Post Topic',
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