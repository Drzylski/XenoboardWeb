<template>
  <div fluid class=" pt-3 pb-5 admin-tab-background" >

    <b-container class=" header-opacity pt-0 mb-0 pb-0" style="opacity: 0.9;">
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h2 ><BBadge>Admin Reported Topics</BBadge></h2>
        </div>
      </BCol>
    </BRow>
  </b-container>

    <!--Topic Table-->
    
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
            :items="topics"
            primary-key="id"
            variant="dark"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
          >
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>
          <template #cell(title)="data">
            <NuxtLink :to="{ path: '/ViewTopic/'+data.item.id}">
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

interface SortTopic {
  id: string
  title: string
  author: string
  reported: boolean
  reporter: string
  reportedDate: Date
  reportedReason: string
  deleted: boolean
};

const topics: TableItem<SortTopic>[] = [
  {id: '40', title: 'My first Post',  author: 'SeiferAlmasy', reported: false,reporter: 'Zylski', reportedDate: new Date('4/14/2026'), reportedReason: 'bad', deleted: false},
  {id: '21', title: 'This game sucks', author: 'SeiferAlmasy',  reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'),  reportedReason: 'Curse word',deleted: false},
  {id: '89', title: 'A deep introspection on video games',  author: 'SeiferAlmasy',  reported: false,reporter: 'Zylski', reportedDate: new Date('4/14/2026'), reportedReason: ':(', deleted: false},
  {id: '38', title: 'Hosting smash bros event', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '40', title: 'My first Post',  author: 'SeiferAlmasy', reported: false,reporter: 'Zylski', reportedDate: new Date('4/14/2026'), reportedReason: 'bad', deleted: false},
  {id: '21', title: 'This game sucks', author: 'SeiferAlmasy',  reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'),  reportedReason: 'Curse word',deleted: false},
  {id: '89', title: 'A deep introspection on video games',  author: 'SeiferAlmasy',  reported: false,reporter: 'Zylski', reportedDate: new Date('4/14/2026'), reportedReason: ':(', deleted: false},
  {id: '38', title: 'Hosting smash bros event', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
  {id: '40', title: 'My first Post',  author: 'SeiferAlmasy', reported: false,reporter: 'Zylski', reportedDate: new Date('4/14/2026'), reportedReason: 'bad', deleted: false},
  {id: '21', title: 'This game sucks', author: 'SeiferAlmasy',  reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'),  reportedReason: 'Curse word',deleted: false},
  {id: '89', title: 'A deep introspection on video games',  author: 'SeiferAlmasy',  reported: false,reporter: 'Zylski', reportedDate: new Date('4/14/2026'), reportedReason: ':(', deleted: false},
  {id: '38', title: 'Hosting smash bros event', author: 'SeiferAlmasy', reported: false, reporter: 'Zylski',reportedDate: new Date('4/14/2026'), reportedReason: 'I dont like it', deleted: false},
];

const fields: TableFieldRaw<SortTopic>[] = [
  {key: 'index', sortable: false},
  {key: 'title', sortable: true},
  {key: 'author', sortable: true},
  {key: 'reported', sortable: true},
  {key: 'reporter', sortable: true},
  {key: 'reportedDate', sortable: true},
  {key: 'reportedReason', sortable: true},
  {key: 'deleted', sortable: true},
  {key: 'removeReport', sortable: false},
  {key: 'delete', sortable: false},
];

const tableRef = useTemplateRef<ComponentExposed<typeof BTable<SortTopic>>>('tableRef')

const totalRows = computed(() => tableRef.value?.items.length ?? topics.length);

function getUserTopics(){
    //TODO:
  }

   function removeReport(id: string){
    //TODO:
  }

  function deleteTopic(id: string){
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