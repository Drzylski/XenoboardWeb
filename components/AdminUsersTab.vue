<template>
  <div fluid class=" pt-3 pb-5 admin-tab-background" >

    <b-container class=" header-opacity pt-0 mb-0 pb-0 " style="opacity: 0.9;">
    <BRow class="ps-3 pe-3 pb-1   ">
      <BCol class="col-12" >
        <div style="text-align: center; color: #EEEEEE">
          <h2 ><BBadge >Admin Users</BBadge></h2>
        </div>
      </BCol>
    </BRow>
  </b-container>

    <!--User Table-->
    
    <BRow class=" me-3 ms-3  " style="border: 5px #FFFFFF solid; border-radius: 10px;">
      <BCol class=" p-0  col-12 ">
          <BTable
            ref="tableRef"
            striped
            bordered
            hover
            dark
            responsive
            :fields="fields"
            :items="users"
            primary-key="id"
            variant="dark"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
          >
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>
          <template #cell(username)="data">
            
              <span>{{ data.item.username }}</span>
            
          </template>
          <template #cell(joinDate)="data">
            <span>{{ FormatDate(data.item.joinDate) }}</span>
          </template>
          <template #cell(approved)="data">
            <span>{{ data.item.approved }}</span>
          </template>
          <template #cell(deleted)="data">
            <span>{{ data.item.deleted }}</span>
          </template>
          <template #cell(approve)="data">
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

interface SortUser {
  id: string
  username: string
  joinDate: Date
  approved: boolean
  deleted: boolean
};

const users: TableItem<SortUser>[] = [
  {id: '40', username: 'SeiferAlmasy', joinDate: new Date('4/14/2026'), approved: true,deleted:false},
  {id: '21', username: 'Zylski', joinDate: new Date('7/23/2026'), approved: true,deleted:false},
  {id: '89', username: 'Janek', joinDate: new Date('9/04/2026'), approved: true,deleted:false},
  {id: '38', username: 'Ultima666', joinDate: new Date('12/24/2026'), approved: true,deleted:false},
  {id: '40', username: 'SeiferAlmasy', joinDate: new Date('4/14/2026'), approved: true,deleted:false},
  {id: '21', username: 'Zylski', joinDate: new Date('7/23/2026'), approved: true,deleted:false},
  {id: '89', username: 'Janek', joinDate: new Date('9/04/2026'), approved: true,deleted:false},
  {id: '38', username: 'Ultima666', joinDate: new Date('12/24/2026'), approved: true,deleted:false},
  {id: '40', username: 'SeiferAlmasy', joinDate: new Date('4/14/2026'), approved: true,deleted:false},
  {id: '21', username: 'Zylski', joinDate: new Date('7/23/2026'), approved: true,deleted:false},
  {id: '89', username: 'Janek', joinDate: new Date('9/04/2026'), approved: true,deleted:false},
  {id: '38', username: 'Ultima666', joinDate: new Date('12/24/2026'), approved: true,deleted:false},
];

const fields: TableFieldRaw<SortUser>[] = [
  {key: 'index', sortable: false},
  {key: 'username', sortable: true},
  {key: 'joinDate', sortable: true},
  {key: 'approved', sortable: true},
  {key: 'deleted', sortable: true},
  {key: 'approve', sortable: false},
  {key: 'delete', sortable: false},
];

const tableRef = useTemplateRef<ComponentExposed<typeof BTable<SortUser>>>('tableRef')

const totalRows = computed(() => tableRef.value?.items.length ?? users.length);

function getUsers(){
    //TODO:
  }

  function approveUser(id: string){
    //TODO:
  }

  function deleteUser(id: string){
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