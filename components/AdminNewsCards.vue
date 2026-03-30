<template>
  <div fluid class=" pt-3 pb-5 admin-tab-background" >

    <b-container class=" header-opacity pt-0 mb-0 pb-0" style="opacity: 0.9;">
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center; color: #EEEEEE">
          <h2 ><BBadge>Admin News Cards</BBadge></h2>
        </div>
      </BCol>
    </BRow>
  </b-container>

    <!--News Cards-->
    
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
            :items="cards"
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
            
              <span>{{ data.item.title }}</span>
            
          </template>
          <template #cell(body)="data">
            <span>{{ data.item.body }}</span>
          </template>
          <template #cell(link)="data">
            <span>{{ data.item.link }}</span>
          </template>
          <template #cell(image)="data">
            <span>{{ data.item.image }}</span>
          </template>
          <template #cell(active)="data">
            <span>{{ data.item.active }}</span>
          </template>
          <template #cell(activate)="data">
            <BButton variant="success">X</BButton>
          </template>
          <template #cell(inactivate)="data">
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
const perPage = ref(5);
const currentPage = ref(1);

interface SortNewsCards {
  id: string
  title: string
  body: string
  image: string
  link: string
  active: boolean
};

const cards: TableItem<SortNewsCards>[] = [
  {id: '40', title: 'Obama says aliens are real', body: 'Obama says aliens are real. The truth is out there. Click here to read more.  ',image:'', link: 'https://www.duckduckgo.com', active: true},
  {id: '21', title: 'Xenoboard opens its doors', body: 'Xenoboard has officially launched and is live now. Have fun exploring the site and seeing what is out there',image:'', link: 'https://www.duckduckgo.com', active: true},
  {id: '89', title: 'Chaos in the world', body: 'Lots of Chaos in the world these days. Use this to see what is happening and where. Be safe out there. ',image:'', link: 'https://www.duckduckgo.com',active:false},
  {id: '38', title: 'New Xenoblade rumors', body: 'A new Xenoblade is rumored to be in the making. It will be coming out at some point in the future. Keeps your eyes posted for more news.',image:'', link: 'https://www.duckduckgo.com', active:true},
  {id: '40', title: 'Obama says aliens are real', body: 'Obama says aliens are real. The truth is out there. Click here to read more.  ',image:'', link: 'https://www.duckduckgo.com', active: true},
  {id: '21', title: 'Xenoboard opens its doors', body: 'Xenoboard has officially launched and is live now. Have fun exploring the site and seeing what is out there',image:'', link: 'https://www.duckduckgo.com', active: true},
  {id: '89', title: 'Chaos in the world', body: 'Lots of Chaos in the world these days. Use this to see what is happening and where. Be safe out there. ',image:'', link: 'https://www.duckduckgo.com',active:false},
  {id: '38', title: 'New Xenoblade rumors', body: 'A new Xenoblade is rumored to be in the making. It will be coming out at some point in the future. Keeps your eyes posted for more news.',image:'', link: 'https://www.duckduckgo.com', active:true},
];

const fields: TableFieldRaw<SortNewsCards>[] = [
  {key: 'index', sortable: false},
  {key: 'title', sortable: true},
  {key: 'body', sortable: true},
  {key: 'link', sortable: true},
  {key: 'image', sortable: true},
  {key: 'active', sortable: true},
  {key: 'activate', sortable: false},
  {key: 'inactivate', sortable: false},
];

const tableRef = useTemplateRef<ComponentExposed<typeof BTable<SortNewsCards>>>('tableRef')

const totalRows = computed(() => tableRef.value?.items.length ?? cards.length);

function getNewsCards(){
    //TODO:
  }

  function activateCard(id: string){
    //TODO:
  }

  function deactivateCard(id: string){
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