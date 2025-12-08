<template>
  <b-container :id="'topic-'+props.uuid" fluid class="p-3 card-body">
    <BRow>
      <BCol class="col-auto">
          <svg style="text-align: left !important;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1M26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3.5l-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9M144 272a32 32 0 1 0 0-64a32 32 0 1 0 0 64m144-32a32 32 0 1 0-64 0a32 32 0 1 0 64 0m80 32a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></path></svg>
          <!--font-awesome-icon :icon="['fab','github']" /-->
          <br/>
          <svg v-if="closed" style="text-align: left !important;" height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.686 502.686" xml:space="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <title>Closed</title> <path style="fill:#FFFFFF;" d="M403.676,221.014v-68.746C403.697,68.293,335.339,0,251.407,0 C167.411,0,99.096,68.293,99.096,152.268v68.768H66.373v281.65h369.939V221.014H403.676z M156.453,152.268 c0-52.309,42.581-94.825,94.933-94.825c52.266,0,94.825,42.538,94.825,94.825v68.768H156.453V152.268z M277.551,425.462h-52.266 l7.83-77.202c-9.664-6.018-16.178-16.76-16.178-29.077c0-18.961,15.402-34.362,34.47-34.362 c18.961,0,34.319,15.402,34.319,34.362c0,12.317-6.407,23.038-16.157,29.077L277.551,425.462z"></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
          <svg v-if="sticky" style="text-align: left !important;" height="21" width="21" fill="#FFFFFF" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Sticky</title> <path d="M18.973 17.802l-7.794-4.5c-0.956-0.553-2.18-0.225-2.732 0.731-0.552 0.957-0.224 2.18 0.732 2.732l7.793 4.5c0.957 0.553 2.18 0.225 2.732-0.732 0.554-0.956 0.226-2.179-0.731-2.731zM12.545 12.936l6.062 3.5 2.062-5.738-4.186-2.416-3.938 4.654zM8.076 27.676l5.799-7.044-2.598-1.5-3.201 8.544zM23.174 7.525l-5.195-3c-0.718-0.414-1.635-0.169-2.049 0.549-0.415 0.718-0.168 1.635 0.549 2.049l5.196 3c0.718 0.414 1.635 0.169 2.049-0.549s0.168-1.635-0.55-2.049z"></path> </g></svg>

      </BCol>
      <BCol class="card-title col-6">
          <span class="title-text">{{ props.title }}</span><br/>
          <span class="info-text">By {{ props.author }} on {{ useFormateDateShort(createdDate) }} in {{ category }}</span><br>
          <span class="replies">Replies: {{ replies }}</span><br/>
          <span class="tag-card m-1" v-for="(item,index) in tags" :key="item"> {{ item }} </span>
      </BCol>
      <BCol class="card-info ">
          <span class="replies">Replies: {{ replies }}</span><br/>
          <span class="info-text">Views: {{ views }}</span>
      </BCol>
      <BCol class="card-info col-1 ">
          <!--svg class="author-image" height="52" width="50" xmlns="http://www.w3.org/2000/svg">
            <image height="54" width="51" href="~/assets/seifer-almasy.jpg" opacity="0.9" />
          </!--svg--> 
          <svg class="card-author-image" height="8.2vh" width="8vh" xmlns="http://www.w3.org/2000/svg">
            <image class="card-author-img" height="8.6vh" width="8.2vh" href="~/assets/seifer-almasy.jpg" opacity="0.9" />
          </svg> 
      </BCol>
      <BCol class="card-info">
          <span class="last-reply">Last Reply: {{ latestReplyName }}</span><br/>
          <span class="info-text">On: {{ useFormateDateShort(latestReplyDate) }}</span>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>
import { useFormateDateShort } from '../composables/FormatDateShort'

interface Props {
  id?: number
  title?: string
  author?: string
  createdDate?: Date
  category?: string
  views?: number
  replies?: number
  image?: string
  latestReplyName?: string
  latestReplyDate?: Date
  tags?: string[]
  sticky?: boolean
  closed?: boolean
  uuid?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: -1,
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

</script>

<style scoped>

.logo-text {
  font-size: 2.5vw;
}

.card-title{
  text-align:start !important;
}

.title-text{
  font-size: 2.7vh;
}

.info-text{
  font-size: 1.8vh;
  color: #BBBBBB;
}

.replies{
  font-size: 2.2vh;
}

.last-reply{
  font-size: 2vh;
}

.tags{

}

.tag-card {
  background-color: grey;
  padding: 2px;
  border-radius: 5px ;
  font-size: 1.5vh;
  white-space: nowrap;
}

.card-author-image{
  border-radius: 50%;
  margin: 0 !important;
  padding: 0 !important;
}

.card-info{
  text-align:end !important;
}

</style>