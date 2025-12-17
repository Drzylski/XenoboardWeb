<template>
  <div>
    <a></a>{{ $route.params.id }}
    <h4>Title</h4>

    <div>
      topic card
    </div>

    <div>
      Reply Cards
      {{ breadcrumbsQueue }}
    </div>
  </div>
</template>

<script lang="ts" setup> 

  const breadcrumb: IBreadCrumb = {
    path: null,
    title: null,
};

let message : string = 2;

const test = ref<string>(1);

test.value = 1;

  const breadcrumbsQueue = ref<IBreadCrumb[]>([{path: '', title: ''}]);

</script>

<style scoped>

</style>