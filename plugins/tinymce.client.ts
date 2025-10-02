import tinymce from "tinymce";
import "tinymce/themes/silver";
import "tinymce/models/dom";
import "tinymce/icons/default";
import "tinymce/skins/content/default/content";
import "tinymce/skins/ui/oxide/skin";
import "tinymce/skins/ui/oxide/content";

import "tinymce/plugins/accordion";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autosave";
import "tinymce/plugins/advlist";
import "tinymce/plugins/charmap";
import "tinymce/plugins/autolink";
import "tinymce/plugins/media";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/preview";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/emoticons";
//import "tinymce/plugins/emoticons/js";
import "tinymce/plugins/importcss";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/quickbars";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/save";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";
import "tinymce/plugins/image";
import "tinymce/plugins/code";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/fullscreen";

import '~/plugins/tinymce802/plugins/emoticons/plugin.min.js';
import '~/plugins/tinymce802/plugins/emoticons/js/emojis.js';
import '~/plugins/tinymce802/plugins/emoticons/js/emojiimages.js';
import '~/plugins/tinymce802/plugins/emoticons/js/emojiimages.min.js';
import '~/plugins/tinymce802/plugins/emoticons/js/emojis.min.js';

export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			tinymce: tinymce,
		},
	};
});