<template>

  <div class="py-2 lg:px-2">

    <!--The Editor. Make sure license is gpl and promotion is off-->
		<Editor v-model="editorText" style="z-index: 999999 !important;"
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
            'preview searchreplace visualblocks visualblocks autosave directionality nonbreaking pagebreak quickbars visualblocks visualchars save emoticons',
            toolbar: 'blocks fontsize | bold italic underline superscript strikethrough removeformat align numlist bullist charmap link ' +
            'code | visualchars pagebreak accordion image ltr rtl searchreplace fullscreen emoticons',
            }"
    ></Editor>

	</div>
</template>

<script lang="ts" setup>

//Import tinymce vue module. package.json entries are shown to the right
import Editor from "@tinymce/tinymce-vue"; // Package.json -> "@tinymce/tinymce-vue": "^5.1.1", "tinymce": "^8.0.2" 

 //Handle imports for TinyMce required files. Tried importing a bunch of ways. this is what works for me. Maybe there's a better way. 
 if (process.client) { 

  await import("tinymce/themes/silver"); 
  await import("tinymce/models/dom");
  await import("tinymce/icons/default");
  await import("tinymce/skins/content/default/content");
  await import("tinymce/skins/ui/oxide/skin");
  await import("tinymce/skins/ui/oxide/content");
  await import("tinymce/plugins/accordion");
  await import("tinymce/plugins/anchor");
  await import("tinymce/plugins/autosave");
  await import("tinymce/plugins/advlist");
  await import("tinymce/plugins/charmap");
  await import("tinymce/plugins/autolink");
  await import("tinymce/plugins/insertdatetime");
  await import("tinymce/plugins/preview");
  await import("tinymce/plugins/searchreplace");
  await import("tinymce/plugins/visualblocks");
  await import("tinymce/plugins/autoresize");
  await import("tinymce/plugins/codesample");
  await import("tinymce/plugins/directionality");
  await import("tinymce/plugins/emoticons");
  //await import("tinymce/plugins/emoticons/js");
  await import("tinymce/plugins/importcss");
  await import("tinymce/plugins/nonbreaking");
  await import("tinymce/plugins/pagebreak");
  await import("tinymce/plugins/quickbars");
  await import("tinymce/plugins/visualchars");
  await import("tinymce/plugins/save");
  await import("tinymce/plugins/link");
  await import("tinymce/plugins/lists");
  await import("tinymce/plugins/table");
  await import("tinymce/plugins/image");
  await import("tinymce/plugins/code");
  await import("tinymce/plugins/wordcount");
  await import("tinymce/plugins/fullscreen");

  await import("~/assets/tinymce802/plugins/emoticons/plugin.min.js");
  await import("~/assets/tinymce802/plugins/emoticons/js/emojis.js");
  await import("~/assets/tinymce802/plugins/emoticons/js/emojiimages.js");
  await import("~/assets/tinymce802/plugins/emoticons/js/emojiimages.min.js");
  await import("~/assets/tinymce802/plugins/emoticons/js/emojis.min.js");
 } 

//Editor text, the defineModel way. Retrieves text to Parent component
const editorText = defineModel('editorText', { required: true });
const editorLoading = defineModel('editorLoading');


//Once component mounted, get rid of loading screen
 onMounted(() => {
  editorLoading.value = false;
 });

//Legacy code. Returns value to parent component, don't really need below code thanks to defineModel but leaving for reference. Not used. Can be removed. 
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

<script lang="ts">

import tinymce from "tinymce";

export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			tinymce: tinymce,
		},
	};
});

</script>

<style scoped>

:deep( .form-group--error .tox-tinymce) {
    border: 1px solid red;
  }

</style>