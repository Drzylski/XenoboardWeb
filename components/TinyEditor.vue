<template>
  <div class="py-2 lg:px-2">
		<Editor v-model="editorText"
        :init="{
            promotion: false, 
            branding: true, 
            license_key: 'gpl', 
            height: '300px',
            skin: 'oxide', 
            skin_url: 'default',
            menubar: true,
            toolbar_mode: 'sliding', 
            paste_as_text: true,
            convert_urls: false,
            plugins: 'lists link image table code wordcount accordion anchor charmap advlist autolink fullscreen insertdatetime  ' +
            'media preview searchreplace visualblocks visualblocks autosave directionality nonbreaking pagebreak quickbars visualblocks visualchars save emoticons',
            toolbar: 'blocks fontsize | bold italic underline superscript strikethrough removeformat align numlist bullist charmap link ' +
            'code | visualchars pagebreak accordion image media ltr rtl searchreplace fullscreen emoticons',
            }"
    ></Editor>
	</div>
</template>

<script lang="ts" setup>

import Editor from "@tinymce/tinymce-vue";

//Editor data, the defineModel way
const editorText = defineModel({ required: true });

//Returns value to parent component, don't really need below code thanks to defineModel but leaving for reference
const editorContent = ref<string>();

const emit = defineEmits(['editorvalue']);

function emitValue() {
  emit('editorvalue', editorContent.value);
}

watch(
  editorContent,
  (newValue, oldValue) => {  
    emitValue();
  },
)

</script>

<style scoped>

:deep( .form-group--error .tox-tinymce) {
    border: 1px solid red;
  }

</style>