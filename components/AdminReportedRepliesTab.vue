<template>
  <div fluid class=" pt-3 pb-5 admin-tab-background" >

    <b-container class=" header-opacity pt-0 mb-0 pb-0" style="opacity: 0.9;">
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h2 ><BBadge>Admin Reported Replies</BBadge></h2>
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
          <template #cell(author)="data">
            <span>{{ data.item.author }}</span>
          </template>
          <template #cell(reported)="data">
            <span>{{ data.item.reported }}</span>
          </template>
          <template #cell(reporter)="data">
            <span>{{ data.item.reporter }}</span>
          </template>
          <template #cell(reportedDate)="data">
            <span>{{ FormatDate(data.item.reportedDate) }}</span>
          </template>
          <template #cell(deleted)="data">
            <span>{{ data.item.deleted }}</span>
          </template>
          <template #cell(removeReport)="data">
            <BButton variant="success">X</BButton>
          </template>
          <template #cell(delete)="data">
            <BButton variant="danger">X</BButton>
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
const perPage = ref(10);
const currentPage = ref(1);

const tableRef = useTemplateRef<ComponentExposed<typeof BTable<SortReply>>>('tableRef')

interface SortReply {
  id: string
  reply: string
  title: string
  topicId: string
  author: string
  reported: boolean
  reporter: string
  reportedDate: Date
  reportedReason: string
  deleted: boolean
}

const replies: TableItem<SortReply>[] = [
  {id: '41',reply: 'Hello! Welcome to the site!', title: 'My first Post', topicId: '100', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '42',reply: 'It is a pleasure to have you here.', title: 'My first Post', topicId: '100', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '43',reply: 'This game really does suck', title: 'This game sucks', topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '44',reply: 'I hate this game', title: 'This game sucks',  topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '45',reply: 'I hear you', title: 'This game sucks', topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '46',reply: 'If a lot of people love each other, the world would be a better place', title: 'This game sucks', topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '41',reply: 'Hello! Welcome to the site!', title: 'My first Post', topicId: '100', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '42',reply: 'It is a pleasure to have you here.', title: 'My first Post', topicId: '100', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '43',reply: 'This game really does suck', title: 'This game sucks', topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '44',reply: 'I hate this game', title: 'This game sucks',  topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '45',reply: 'I hear you', title: 'This game sucks', topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '46',reply: 'If a lot of people love each other, the world would be a better place', title: 'This game sucks', topicId: '101', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
]

const fields: TableFieldRaw<SortReply>[] = [
  {key: 'index', sortable: false},
  {key: 'reply', sortable: true},
  {key: 'title', sortable: true},
  {key: 'author', sortable: true},
  {key: 'reported', sortable: true},
  {key: 'reporter', sortable: true},
  {key: 'reportedDate', sortable: true},
  {key: 'reportedReason', sortable: true},
  {key: 'deleted', sortable: true},
  {key: 'removeReport', sortable: false},
  {key: 'delete', sortable: false},
]

const totalRows = computed(() => tableRef.value?.items.length ?? replies.length)

function getUserReplies(){
    //TODO:
  }

  function deleteReply(){
    //TODO:
  }

  function removeReport(){
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