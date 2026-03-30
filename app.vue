<template>
  <div>
    <NuxtRouteAnnouncer />
    <!--App.vue-->
      <NuxtLayout  >
      <!--Nuxt Page-->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  
</script>

<style>

@import "vue-multiselect/dist/vue-multiselect.min.css";
/*@import "@nuxt/ui";*/

@font-face {
    font-family: "Xenogears";
    src: local("Xenogears"),
     url(~/assets/Xenogears.ttf) format("truetype");
}

  html {
    background-color: #404F56;
  }

  body{
    background : linear-gradient(90deg, #6B8491 0.30%, #7B94A1 50%, #6B8491 100%);
    position: relative;
    line-height: 1.2 !important;
    font-family: 'Tahoma', "Roboto", sans-serif !important;
    --va-font-family: Tahoma !important;
}

   a {
    color: inherit ;
    text-decoration: none;
  }

/*See non scoped styles in app.vue as well.*/

.header-body{
    background-color: #404F56;
    color: #EEEEEE;
    padding: 1.5vw;
}

.alien-header{
    background-color: #002400;
    color: #EEEEEE;
    padding: 1.5vw;
}

.admin-header-body{
    background-color: #5e5e65;
    color: #EEEEEE;
    padding: 1.5vw;
}

.admin-footer-body{
    background-color: #5e5e65 !important;
    color: #EEEEEE !important;
    
}

.alien-footer{
    background-color: #002400 !important;
    color: #EEEEEE !important;
    
}

.admin-html{
  background-color: #5e5e65;
}

.alien-html{
  background-color: #002400;
}

 .header-opacity{
    opacity: 0.85;
  }

#layout-body{
    position: relative;
    color: #FFFFFF;
    font-optical-sizing: auto !important;
    font-weight: 400 !important;
    font-style: normal !important;
    font-variation-settings: "width" 100 !important;
    font-size: 16px !important;
}

.default-opacity{
  opacity: 0.6;
}

.layout-body{
    position: relative;
    color: #FFFFFF;
    font-optical-sizing: auto !important;
    font-weight: 400 !important;
    font-style: normal !important;
    font-variation-settings: "width" 100 !important;
    font-size: 16px !important;
}


.multiselect {
  min-height: 36px;
}

.multiselect__placeholder {
  color: #777777;
  font-size: 16px;
  font-weight: 400;
  margin: 0px;
  padding: 0px;
}

.content-body{
    width: 90% !important;
    margin: auto !important;
    padding: 20px !important;
}

.about-body{
    width: 100% !important;
    margin: auto !important;
    padding: 0px !important;
}

.footer-body{
    background-color: #404F56 !important;
    color: #EEEEEE !important;
    
}

.icon{
  cursor: pointer;
}

.topics-container{
  background-color: #0A0C0D !important;
  color: #EEEEEE !important;
  border-radius: 10px 10px 10px 10px !important;
  border-bottom: 2px solid #0A0C0D !important;
  align-content: center !important;
  align-items: center !important;
  text-align: center !important;
  max-width: none !important;
  padding-bottom: 5px !important;
}

.admin-container{
  background-color: #080a0b !important;
  color: #EEEEEE !important;
  border-radius: 10px 10px 10px 10px !important;
  border-bottom: 2px solid #080a0b !important;
  align-content: center !important;
  align-items: center !important;
  text-align: center !important;
  max-width: none !important;
  padding-bottom: 5px !important;
  width: 95% ;
  position: relative;
  margin-left: auto !important;
  margin-right: auto !important;
}

.alien-container{
  background-color: #080a0b !important;
  color: #EEEEEE !important;
  border-radius: 10px 10px 10px 10px !important;
  border-bottom: 2px solid #080a0b !important;
  align-content: center !important;
  align-items: center !important;
  text-align: center !important;
  max-width: none !important;
  padding-bottom: 5px !important;
  width: 93% ;
  position: relative;
  margin-left: auto !important;
  margin-right: auto !important;
}

.card-body{
  padding: 15px !important;
  animation: left 2s ease;
  transition: filter 0.2s ease-in-out;
  -moz-transition: filter 0.2s ease-in-out;
  -webkit-transition: filter 0.2s ease-in-out;
}

.card-author-image{
  border-radius: 50%;
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
}

.header-background{
    background-color: #080a0b ;
    color: #EEEEEE !important;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid #080a0b;
    align-content: start;
    align-items: start;
    text-align: start;
    max-width: none;
    opacity: 0.6;
    position: relative;

  }

  .admin-header-background{
    background-color: #262626 ;
    color: #EEEEEE !important;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid #262626;
    align-content: center;
    align-items: center;
    text-align: start;
    max-width: none;
    width: 95% ;
    opacity: 0.6;
    position: relative;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .black-background{
  background-color: black; 
  border-radius: 20px;
}

 .admin-tab-background{
  background-color: #181818; 
  border-radius: 20px;
}

.card-body:hover{
    position: relative;
    left: -5px;
    animation: left 2s ease;
    filter: brightness(120%);
    transition: filter 0.2s ease-in-out;
    -moz-transition: filter 0.2s ease-in-out;
    -webkit-transition: filter 0.2s ease-in-out;
}

.page-link { 
  text-decoration: underline !important;
  color: #AAAAFF !important
}

.topics-opacity{
  opacity: 0.85;
}

.card-padding{
  padding-left: 5px !important;
  padding-right: 5px !important;
}

.card-colour{
  background-color: #2A3439;
  opacity: 1 !important;
}

.card-colour-dark{ 
  background-color: #14191C; 
  opacity: 1 !important;
}

.post-button{
  display: flex !important;
  justify-content: flex-end !important;
  justify-items: flex-end !important;
  align-items:flex-end !important;
  align-content:flex-end !important;
  margin-left: auto !important;
  border: 1px solid #FFFFFF !important;
  background-color: #2A3439 !important;
  opacity: 1 !important;
}

  .post-button:hover{
  background-color: #14191C !important;
}

.grey-body{
    padding: 15px !important;
    background-color: #2A3439 !important;
    opacity: 1 !important;
    color: #BBBBBB !important
  }

  .admin-content-body{
    padding: 15px !important;
    background-color: #3a3d45 !important;
    opacity: 1 !important;
    color: #BBBBBB !important
  }

.tag-card {
  background-color: grey;
  padding: 2px;
  border-radius: 5px ;
  font-size: 15px;
  white-space: nowrap;
  margin: 2px;
}

.modal-overlay {
  z-index: 1000;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); /* for Safari */
}

.modal-body {
  background-color: #6B8491;
  height: fit-content;
  margin-top: auto;
  margin-bottom:auto;
  padding: 0px !important;
  border-bottom:20px solid #404F56;
  text-align: center;
  border-radius: 20px;
  color: #000000;
}

.modal-width-small{
  width: 50%; 
  max-width: 50%;
}

.modal-width-medium{
  width: 60%; 
  max-width: 60%;
}

.modal-width-large{
  width: 80%; 
  max-width: 80%;
}

.modal-width-mobile{
  width: 100%; 
  max-width: 100%;
}

.modal-label-text{
  color:#FFFFFF !important; 
  white-space: initial;
  text-align: left !important;
  font-size: 2.5vh;
  padding-left: 5% !important;
}

.modal-input-text{
  
}

.modal-scroll{
  overflow-y: auto;
  margin-bottom:10px;
  max-height:80vh;
  overflow-x:hidden;
}

.shadow{
  box-shadow: 10px 10px 10px #000000 !important;
}

.topcorner{
  position:absolute;
  top:6px;
  right:24px;
  color:#FEFEFE;
}

.xeno-text {
    font-family: "Xenogears" !important;
    transition: text-shadow 2s, color 2s,;
    cursor: pointer;
}

.xeno-crazy-text:hover {
  animation: shift 2s ease-in-out infinite alternate;
  transform: skewX(0deg);
}

.xeno-text:hover {
  color: #FF0000;
  position: relative;
  text-shadow: 0 0 10px #FF0000, 0 0 20px #FF0000, 0 0 30px #FF0000;
  z-index: 2; 
  transition: text-shadow 2s, color 2s,;
}

.xeno-wrapper {
   display: flex;
}

@keyframes shift {
   0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
      transform: skewX(0deg);
   }

   41% {
      transform: skewX(10deg);
   }

   42% {
      transform: skewX(-10deg);
   }

   59% {
      transform: skewX(40deg) skewY(10deg);
   }

   60% {
      transform: skewX(-40deg) skewY(-10deg);
   }

   63% {
      transform: skewX(10deg) skewY(-5deg);
   }

   70% {
      transform: skewX(-50deg) skewY(-20deg);
   }

   71% {
      transform: skewX(10deg) skewY(-10deg);
   }
}

.submit-button{
    display: flex !important;
    justify-content: flex-end !important;
    justify-items: flex-end !important;
    align-items:flex-end !important;
    align-content:flex-end !important;
    margin-left: auto !important;
    border: 1px solid #BBBBBB !important;
    background-color: #404F56 !important;
    opacity: 1 !important;
    color: #DDDDDD !important;
  }
  

  .submit-button:hover {
    background-color: #202F36 !important;
  }

  .blur-effect{
    filter: blur(5px);
  }

  .nav-button {
  border-radius: 5px;
  background-color: #2A3439 !important;
  border: 1px solid grey !important;
  font-size: 2.2vh !important;
  transition: background-color 1s;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #14191C !important;
  transition: background-color 1s !important;
  
}

  /* ***MOBILE AND LOW RESOLUTION STYLES*** */

  @media (max-width: 1000px) {
    .content-body {
      width: 100% !important;
      padding: 10px !important;
    }

    .card-author-image{
      width: 12vh;
      height: 12vh;
    }

    .card-author-img{
      width: 12vh;
      height: 12.6vh;
    }

    .nav-button{
      font-size: 3.5vh !important;
    }

    .nav-text{
      font-size: 2.0vw !important;
    }

    .tag-card {
      font-size: 10px;
    }

    .header-body {
     
    }

    

    .title-text{
      font-size: 19px !important;
      
    }

    .card-title{
      
    }

    .modal-width-small{
      width: 80% !important; 
      max-width: 80% !important;
    }

    .modal-label-text{
      font-size: 3.5vh;
    }

    .modal-body {
      height: 102.5vh !important;
    }

    .mobile-forum{
      display: inline-block !important;
    }

    .desktop-forum{
      display: none !important;
    }

    .post-text{
      padding-top: 5px !important;
      font-size: 20px !important;
    }
  }

  @media (max-width: 799px) {

    .content-body {
      padding: 3px !important;
    }

    .tag-card {
      font-size: 6px;
    }


    .nav-button{
      font-size: 7.0vh !important;
      padding: 5px !important;
    }

    .title-text{
      
    }

    .card-title{
      margin: 0 !important;
      padding: 0 !important;
    }

    .card-info{
      margin-left: 0 !important;
      padding-left: 0 !important;
      padding-right: 20px !important;
    }

    .card-author-image{
      width: 15vh;
      height: 15vh;
    }

    .card-author-img{
      width: 15vh;
      height: 15.9vh;
    }

    .sidenav-button-text{
      font-size: 10.0vh !important;
      margin-bottom: 2px !important;
      margin-top: 0 !important;
    }

    #main-logo-text {
      font-size: 130% !important;
    }

    .menu-icon svg {
      width: 25px;
      height: 25px;
    }

    .nav-text{
      display: none !important;
    }

    .nav-text-group{
      display: none !important;
    }

    #main-logo-text{
      margin-top: 0px !important;
    }

    .header-body {
     padding: 15px;
    }

    .header-text{
      display: inline-block !important;
      padding: 1vh !important; 
      padding-top: 8vh !important;
    }

     .mobile-replies{
      display: inline-block !important;
    }

    .mobile-replydate{
      display: block !important;
    }

    .desktop-replies{
      display: none !important;
    }

    .card-body{
      padding: 8px !important;
    }

    .info-text{
      font-size: 8px !important;
    }

    .replies{
      font-size: 8px !important;
    }

    .tag-card{

    }

    .modal-width-small{
      width: 98% !important; 
      max-width: 98% !important;
    }

    .modal-body{
      width: 98% !important; 
      max-width: 98% !important;
    }

    .modal-label-text{
      font-size: 4.5vh;
      padding-left: 20px !important;
    }

    .modal-body {
      margin-top: 1px !important;
      margin-bottom:1px !important;
      padding-bottom: 1x !important;
      height: 100% !important;
      border-radius: 0%;
      border: none;
    }

    .modal-header{
      margin-top: 0px !important;
      border-radius: 0% !important;
    }

    .modal-header h4{
      font-size: 15px !important;
    }

    .topcorner{
      top: 2px !important;
    }

    .modal-close-button{
    padding: 0px 10px 0px 10px !important;
    
    height: 10% !important;
  }

  .desktop-footer{
    display: none !important;
  }

  .mobile-footer{
    display: inline-block !important;
    text-align: center !important;
    padding-left: 0 !important;
    margin-left: 0 !important;
  }

  .logo-text{
    padding-left: 0 !important;
    font-size: 2.5vw !important;
  }

  .footer-links{
     padding-top: 10px !important;
    text-align: center !important;
    padding-right: 0 !important;
    padding-bottom: 10px !important;
    font-size: 4.5vh !important;
  }

  .copyright-text {
    font-size: 4vh !important;
  }

  }

  @media (max-width: 640px){
    .monado-img{
      top: -45px !important;
    }

    .shulk-img{
      top: 45px !important;
    }

    .nav-button{
      font-size: 6.0vh !important;
      padding: 5px !important;
    }

    .modal-width{
      width: 98% !important; 
      max-width: 98% !important;
    }
  }


  @media (max-width: 480px){

    .modal-width{
      width: 98% !important; 
      max-width: 98% !important;
    }

    .info-text{
      font-size: 5px !important;
    }

    .nav-button{
      font-size: 5.0vh !important;
      padding: 5px !important;
    }

    .tag-card {
      font-size: 4px;
    }

    .discussion-symbol {
      height: 20px !important;
      width: 20px !important;
    }

    .closed-symbol {
      height: 10px !important;
      width: 10px !important;
    }

    .sticky-symbol {
      height: 15px !important;
      width: 15px !important;
    }

    .header-logo{
      display: inline-block !important;
      margin-left: 3vw !important; 
      padding: 1vw !important; 
    }

    .header-logo svg{
      height: 50px !important;
      width: 83px !important;
    }

    .header-logo svg image{
      height: 50px !important;
      width: 83px !important;
    }

    .header-text-h1{
      font-size: 24px !important;
    }

    .header-text-h2{
      font-size: 16px !important;
    }

    .title-text{
      font-size: 18px !important;
      
    }

    .card-author-image{
      width: 17vh;
      height: 17.8vh;
    }

    .card-author-img{
      width: 17vh;
      height: 18vh;
    }

    .modal-header h4{
      font-size: 14px !important;
    }

    .topcorner{
      top: -2px !important;
    }

    .modal-close-button{
    padding: 0px 8px 0px 8px !important;
    margin: 4px 0px 0px 0px !important;
    
    }


  }

</style>
