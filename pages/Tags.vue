<template>
  <div>

    <b-container class="header-background header-opacity shadow " style="opacity: 0.9;">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h6 >Click the search button below to search for tags. Scroll through the list or use the text field to type in and see what tags come up as you type. Also check out the tag search on the search page.</h6>
          <h6>This feature is incomplete. Check back later for updates</h6>
        </div>
      </BCol>
    </BRow>
  </b-container>

    <!--Tags container-->
    <b-container fluid id="tags-container" class="topics-container  mt-4 pt-1 shadow" >
      <!--Tags Header-->
      <BRow class="section-header topics-opacity ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Tags</h4> 
        </BCol>
        <BCol class="col-lg-2 col-md-2 col-sm-3 pt-3">
        <h6>{{ tags.length }} total tags</h6>
      </BCol>
      </BRow> 

      <!--Tags Content-->
      <BRow class=" grey-body p-4 ">
        <BCol class="col-12 card-padding" >
          <div >
            <BFormGroup
            class="mt-5 mb-5"
              label="Tag Selector"
              label-for="tags-with-dropdown"
            >
              <BFormTags
                id="tags-with-dropdown"
                v-model="value"
                no-outer-focus
                class="mb-2"
                style="z-index: 999999 !important; background-color: #212529; width: 75%; margin: auto;"
              >
                <template #default="{tags, disabled, addTag, removeTag}">
                  <ul
                    v-if="tags.length > 0"
                    class="list-inline d-inline-block mb-2"
                  >
                    <li
                      v-for="tag in tags"
                      :key="tag"
                      class="list-inline-item"
                    >
                      <BFormTag
                        :title="tag"
                        :disabled="disabled"
                        variant="secondary"
                        @remove="removeTag(tag)"
                        >{{ tag }}</BFormTag
                      >
                    </li>
                  </ul>

                  <BDropdown
                    size="md"
                    variant="secondary"
                    block
                    menu-class="w-75"
                    
                    
                  >
                    <template #button-content> &#x1f50d; <span>Search tags</span> </template>
                    <BDropdownForm @submit.stop.prevent="() => {}" variant="dark"  >
                      <BFormGroup
                        label="Search tags"
                        label-for="tag-search-input"
                        label-cols-md="auto"
                        class="mb-0 dark"
                        label-size="sm"
                        :description="searchDesc"
                        :disabled="disabled"
                        variant="dark"
                      >
                        <BFormInput
                          id="tag-search-input"
                          @click.capture.stop
                          v-model="search"
                          type="search"
                          size="sm"
                          autocomplete="off"
                          variant="dark"
                          class=""
                        />
                      </BFormGroup>
                    </BDropdownForm>
                    <BDropdownDivider />
                    <BDropdownItemButton
                      v-for="option in availableTags"
                      :key="option"
                      @click="onOptionClick({option, addTag})"
                      variant="dark"
                      class="dark"
                    >
                      {{ option }}
                    </BDropdownItemButton>
                    <BDropdownText v-if="availableTags.length === 0">
                      There are no tags available to select
                    </BDropdownText>
                  </BDropdown>
                </template>
              </BFormTags>
            </BFormGroup>
          </div>
        </BCol>
      </BRow>
    </b-container>
  </div>
</template>

<script lang="ts" setup>
  import { useSeoMeta } from 'nuxt/app';
import {computed, ref} from 'vue'

  useSeoMeta({
  title: 'Xenoboard - Tags',
  ogTitle: 'Tags - Xenoboard',
  description: 'Tags page for Xenoboard. Search for topics by tags here',
  ogDescription: 'The tags page for Xenoboard. Search for topics by tags here',
  ogImage: 'http://archive.thegia.com/features/xenoguide/xeno.jpg',
  ogSiteName: 'Xenoboard',
  ogUrl: 'https://Xenoboard.net/Tags',
  twitterCard: 'summary_large_image',
  keywords: 'Xenoboard, Xeno, Xenogears, Xenoblade, Xenosaga, tags, tag, search, list',
  articleAuthor: ['Damian Zylski'],
  articlePublishedTime: '2025-05-05',
  articleModifiedTime: '2026-03-26',
}) 
  
  const tags = ref<string[]>([
  'Video Game',
  'test',
  'Xenoblade',
  'Xenosaga',
  'Xenogears',
  'Aliens',
  'Nintendo',
  ])
  const search = ref<string>('');
  const value = ref<string[]>([]);

  const breadcrumbsList = ref<IBreadCrumb[]>([{path: 'Tags', title: 'Tags'}]);

  const criteria = computed(() => search.value.trim().toLowerCase());

  const availableTags = computed(() => {
  const searchCriteria = criteria.value

  //Filter out already selected tags
  const tagsFiltered = tags.value.filter((opt) => value.value.indexOf(opt) === -1)
  if (searchCriteria) {
    //Show only tags that match criteria
    return tagsFiltered.filter((opt) => opt.toLowerCase().indexOf(searchCriteria) > -1)
  }
  //Show all tags available
  return tagsFiltered

  })

  const searchDesc = computed(() => {
    if (criteria.value && availableTags.value.length === 0) {
      return 'There are no tags matching your search criteria'
    }
    return ''
  })

  const onOptionClick = ({option, addTag}: {option: string; addTag: (tag: string) => void}) => {
    addTag(option)
    search.value = ''
  }

</script>

<style scoped>

 #tags-with-dropdown  *{
  
}

</style>