<template>
  <div fluid class=" pt-5 pb-5 black-background" >

    <b-container class="header-background header-opacity mb-5 black-background" style="opacity: 0.9;border: none;">
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >Below is a table of all Replies posted by you. Click on a reply to view the topic associated with it.</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

    <!--Replies Table-->
    
    <BRow class=" me-3 ms-3 " style="border: 5px #FFFFFF solid; border-radius: 10px;">
      <BCol class=" p-0  col-12 ">
          <BTable
             ref="tableRef"
            striped
            bordered
            hover
            dark
            responsive
            :fields="fields"
            :items="replies"
            primary-key="id"
            variant="dark"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
          >
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>
          <template #cell(reply)="data">
              <span>{{ data.item.reply }}</span>
          </template>
          <template #cell(title)="data">
            <NuxtLink :to="{ path: '/ViewTopic/'+data.item.topicId}">
              <span>{{ data.item.title }}</span>
            </NuxtLink>
          </template>
          <template #cell(date)="data">
            <span>{{ FormatDate(data.item.date) }}</span>
          </template>
          </BTable>
          <BPagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="center"
          />
      </BCol>
    </BRow>

  </div>
</template>

<script lang="ts" setup>
import type { BTable, TableFieldRaw, TableItem } from 'bootstrap-vue-next'
import FormatDate from '../utils/FormatDate'
import { computed, useTemplateRef } from 'vue';
import type {ComponentExposed} from 'vue-component-type-helpers'

const filter = ref('');
const perPage = ref(5);
const currentPage = ref(1);

const tableRef = useTemplateRef<ComponentExposed<typeof BTable<SortReply>>>('tableRef')

interface SortReply {
  id: string
  reply: string
  title: string
  date: Date
  topicId: string
}

const replies: TableItem<SortReply>[] = [
  {id: '41',reply: 'Hello! Welcome to the site!', title: 'My first Post', date: new Date('5/14/2026'), topicId: '100'},
  {id: '42',reply: 'It is a pleasure to have you here.', title: 'My first Post', date: new Date('6/14/2026'), topicId: '100'},
  {id: '43',reply: 'This game really does suck', title: 'This game sucks', date: new Date('4/14/2026'), topicId: '101'},
  {id: '44',reply: 'I hate this game', title: 'This game sucks', date: new Date('3/14/2026'), topicId: '101'},
  {id: '45',reply: 'I hear you', title: 'This game sucks', date: new Date('3/14/2026'), topicId: '101'},
  {id: '46',reply: 'If a lot of people love each other, the world would be a better place', title: 'This game sucks', date: new Date('3/14/2026'), topicId: '101'},
]

const fields: TableFieldRaw<SortReply>[] = [
  {key: 'index', sortable: false},
  {key: 'reply', sortable: true},
  {key: 'title', sortable: true},
  {key: 'date', sortable: true},
]

const totalRows = computed(() => tableRef.value?.items.length ?? replies.length)

function getUserReplies(){
    //TODO:
  }


</script>

<style scoped>

.profile-image{
  border-radius: 50%;
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
}

.black-background{
  background-color: black; 
  border-radius: 20px;
}

.pagination *{
  background-color: #222222 !important;
  color: white !important;
}

</style>