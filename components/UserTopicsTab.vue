<template>
  <div fluid class=" pt-5 pb-5 black-background" >

    <b-container class="header-background black-background header-opacity mb-5" style="opacity: 0.9; border: none;">
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >Below is a table of all topics posted by you. Click on a topic to view it.</h6>
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

interface SortTopic {
  id: string
  title: string
  date: Date
};

const topics: TableItem<SortTopic>[] = [
  {id: '40', title: 'My first Post', date: new Date('4/14/2026')},
  {id: '21', title: 'This game sucks', date: new Date('7/23/2026')},
  {id: '89', title: 'A deep introspection on video games', date: new Date('9/04/2026')},
  {id: '38', title: 'Hosting smash bros event', date: new Date('12/24/2026')},
];

const fields: TableFieldRaw<SortTopic>[] = [
  {key: 'index', sortable: false},
  {key: 'title', sortable: true},
  {key: 'date', sortable: true},
];

const tableRef = useTemplateRef<ComponentExposed<typeof BTable<SortTopic>>>('tableRef')

const totalRows = computed(() => tableRef.value?.items.length ?? topics.length);

function getUserTopics(){
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