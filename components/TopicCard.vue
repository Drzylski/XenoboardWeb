<template>
  <b-container :id="'topic-'+props.uuid" fluid class="p-3 card-body">
    <BRow>
      <BCol class="col-auto">
          <svg style="text-align: left !important;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1M26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3.5l-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9M144 272a32 32 0 1 0 0-64a32 32 0 1 0 0 64m144-32a32 32 0 1 0-64 0a32 32 0 1 0 64 0m80 32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></path></svg>
          <!--font-awesome-icon :icon="['fab','github']" /-->
      </BCol>
      <BCol class="">
          <span style="text-align: center !important;">&nbsp;&nbsp;&nbsp;&nbsp;{{ props.title }}</span>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>
//import { BCol, BContainer, BRow } from 'bootstrap-vue-next';

interface Props {
  id?: number
  title?: string
  author?: string
  createdDate?: string
  category?: string
  views?: number
  replies?: number
  image?: string
  latestReplyName?: string
  latestReplyDate?: string
  tags?: string[]
  sticky?: boolean
  closed?: boolean
  uuid?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
  title: 'Topic',
  author: 'Unknown',
  createdDate: ''+new Date().getDate(),
  category: 'Unknown',
  views: 0,
  replies: 0,
  image: '',
  latestReplyDate: ''+new Date().getDate(),
  tags: () => [],
  sticky: false,
  closed: false,
  uuid: 'null'
})

// const props = defineProps({
//   id: Number,
//   title: String
// })

//defineExpose({props})


</script>

<style scoped>

#logo-text {
  font-size: 2.5vw;
}

</style>