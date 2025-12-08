<template>
  <div fluid class="">

    <!--UFileUpload 
      v-model="fileRecords"  
      label="Drop your file or click here"
      description="(max. 5MB)"
      multiple
      name="zzzz"
       >
       
    </!--UFileUpload-->

    <!--BFormFile></!--BFormFile-->

    <VaFileUpload
        v-model="files"
        dropzone
        color="primary"
        deletedFileMessage="File removed"
        dropZoneText="Drop your file or click here (max. 5MB)"
        uploadButtonText="Add file"
        undo
        :undoDuration="1000"
        file-types="jpg,png,jpeg,pdf,gif"
        fileIncorrectMessage="Only jpg, png, jpeg, pdf, and gif types allowed!"
        type="list"
      >
      <!--Custom Drop Zone-->
      <div class="custom-upload-file-area">
        <span class="iconify i-lucide:upload text-muted shrink-0 m-2 mt-4"></span>
        <p class="mb-2">
          Drop your file or click here
        </p>
        <button class="va-button va-button--normal upload-button mb-1" type="button">
          <span class="va-button__content">Add File</span>
        </button>
        <p class="file-data-text">
          (max. 5MB)
        </p>
      </div>
    </VaFileUpload>


  </div>
</template>

<script lang="ts" setup>

const files = defineModel({ required: true });
const disableAddFiles = ref<boolean>(false);

//Disable file input if more than 1 file
watch(
  files,
  (newValue, oldValue) => {  
    var inputs = document.getElementsByClassName("va-file-upload__field__input");

    if(newValue.length > 0){
      if(inputs.length > 0) inputs[0].setAttribute("disabled",'true');

      //Also check file size, remove file if too big
      var file = newValue[0];
      if (file.size > 5120 * 1024) {
        //If bigger than 5mb
        files.value = [];
        console.log('File too big!'); //TODO: Create some user seen message that file too big. 
      }
    }
    else{
      if(inputs.length > 0) inputs[0].removeAttribute("disabled");
    }
  },
)


// function handleFiles(){
//     //TODO:
//     alert("Files uploaded!");
//   };


</script>

<style scoped >

:deep(.va-file-upload .va-file-upload-list-item__size){
  color: #555555 !important;
}

:deep(.va-file-upload){
  background-color: #EEEEEE !important;
  transition: background-color 1s;
}

:deep(.va-file-upload:hover){
  background-color: #DDEEEE !important;
  transition: background-color 1s;
}

:deep(.va-list-item){
  background-color: #DDDDDD !important;
}

:deep(.relative){
  background-color: #EEEEEE !important;
  border-radius: 5px !important;
}

.upload-button {
  border-color: transparent;
  color: rgb(255, 255, 255); 
  background: transparent; 
  --va-background-color: #154EC1; 
  --va-background-color-opacity: 1; 
  --va-background-mask-color: transparent; 
  --va-background-mask-opacity: 0;
}

.file-data-text {
  color:#666666;
}

</style>