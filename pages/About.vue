<template>
  <ModalBody v-if="showRegister" @close-modal="closeRegisterModal" :subComponentName="'RegisterModal'" :modalWidth="70" :modalData="modalData">
    <template v-slot:modal-title>
      Sign Up
    </template>
  </ModalBody>
  <div class="pt-4 pb-0 mb-0  ">

    <!--Mission Statement container-->
  <b-container class="header-background about-width about-padding about-opacity shadow ">
    <BreadCrumbs class="breadcrumb" :breadcrumbs="breadcrumbsList" style="padding: 0; margin: 0;  text-align: left;" ></BreadCrumbs>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <h4 class="xeno-text xeno-crazy-text">Xenoboard</h4>
          <h6 >{{ missionStatement }} <br><br>Xenoboard is founded of the principles of knowledge and integrity and is a leader in it's field. It fosters an inclusive environment 
            that has been transforming the industry for years and years.<br><br>Xenoblade was founded in a random potato field in Idaho. At some point, the owner discovered a glowing potato and upon interacting with it, was wisked away into a far away world. The glowing potato spoke, and offered words of wisdom. <br><br> 
            After visiting and returning from the dimensional fissure, xenoboard was born, and a pursuit of the truth has driven it's mission.</h6>
        </div>
      </BCol>
    </BRow>
    <BRow class="ps-3 pe-3 pb-3">
      <BCol class="col-12" >
        <div style="text-align: center;">
          <NuxtImg class="wilhelm-img vector-ceo" src="/wilhelm.png" alt="Wilhelm"  sizes="sm:50px md:100px lg:100px xl:100px" quality="100" loading="eager" @click="musicOnOff()"  />
            <audio controls loop hidden ref="musicPlayer">
              <source src="~/assets/ShipOfRegretAndSleep.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio> 
        </div>
        <div style="text-align: center;" class="pt-2">
          <BBadge>President and CEO of Vector Industries</BBadge>
        </div>
      </BCol>
    </BRow>
    <BRow class="ps-3 pe-3 pb-3 pt-5">
      <BCol class="col-4" >
        <div style="text-align: center;">
          <NuxtImg class="wilhelm-img grey-border" src="/wilhelm2.jpg" alt="Wilhelm"  sizes="sm:50px md:100px lg:300px xl:300px" quality="100" loading="eager" />
        </div>
      </BCol>
      <BCol class="col-4" >
        <div style="text-align: center;">
          <NuxtImg class="symbol-img " src="/symbol.png" alt="Symbol"  sizes="sm:50px md:100px lg:200 xl:200" quality="100" loading="eager"/>
        </div>
      </BCol>
      <BCol class="col-4" >
        <div style="text-align: center;">
          <NuxtImg class="wilhelm-img grey-border" src="/wilhelm.jpg" alt="Wilhelm"  sizes="sm:50px md:100px lg:300px xl:300px" quality="100" loading="eager"/>
        </div>
      </BCol>
    </BRow>
  </b-container>

  <!--Video container-->
    <b-container fluid class="topics-container  mt-4 pt-1 mb-4  about-width about-padding about-opacity shadow" >
      <!--Video Header-->
      <BRow class="section-header  ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
        </BCol>
      </BRow> 

      <!--Video Content-->
      <BRow class=" about-body p-4 mt-5">
        <BCol class="col-12 card-padding mt-4 mb-4" >
           <h4>Here is a video of Wilhelm giving a heartfelt speech.</h4>
        </BCol>
      </BRow>
      <BRow class=" about-body p-4 ">
        <BCol class="col-12 card-padding mb-5" >
           <video class="grey-border" width="640vh" height="480vh" controls>
              <source src="~/assets/wilhelm-video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video> 
        </BCol>
      </BRow>
    </b-container>

  <!--Features container-->
    <b-container fluid class="topics-container  mt-4 pt-1 mb-5  about-width about-padding about-opacity shadow" >
      <!--Features Header-->
      <BRow class="section-header  ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " >Features</h4> 
        </BCol>
      </BRow> 

      <!--Feature Content-->
      <BRow class=" about-body p-4 ">
        <BCol class="col-12 card-padding" >
          
            <BCard title="Topics" bg-variant="secondary" body-bg-variant="dark" text-variant="white" header="🗒" img-src="https://kashmirconvener.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-18-at-6.03.25-AM-769x1024.jpeg" class="text-center m-3 " img-height="250" img-width="100" style="max-width: 20rem; display: inline-block;">
              <BCardText style="height: 100px;overflow-y: auto;">A huge knowledgebase with new topics being posted everyday</BCardText>
            </BCard>

            <BCard title="Members" bg-variant="secondary" body-bg-variant="dark" text-variant="white" header="⚒" img-src="https://wallpaperaccess.com/full/8281313.jpg" class="text-center m-3 " img-height="250" img-width="100" style="max-width: 20rem; display: inline-block;">
              <BCardText style="height: 100px;overflow-y: auto;">Hundreds of members with new members joing every day</BCardText>
            </BCard>

            <BCard title="Technology" bg-variant="secondary" body-bg-variant="dark" text-variant="white" header="⚛" img-src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="text-center m-3 " img-height="250" img-width="100" style="max-width: 20rem; display: inline-block;">
              <BCardText style="height: 100px;overflow-y: auto;">Built using cutting edge technology and modern standards</BCardText>
            </BCard>
         
        </BCol>
      </BRow>
    </b-container>

    <BContainer fluid class=" matrix-para para-padding " >
      <NuxtImg class="wormhole-img wormhole-matrix rotate-item " src="/wormhole3.png" alt="wormhole"  sizes="sm:50px md:100px lg:900px xl:900px" quality="100" />
    </BContainer>

    <b-container fluid class="topics-container about-opacity" style="border-radius: 0px 0px 0px 0px !important;" >
      <!--choice Header-->
      <BRow class="section-header  ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " ></h4> 
        </BCol>
      </BRow> 

      <!--choice Content-->
      <BRow class=" about-body p-4 matrix-back "  >
        <BCol class="col-12 card-padding pt-4 pb-4 mt-5" >
          <h2>Navigating the puzzle of life you have many choices, we can help you make the right choice.</h2>
          <NuxtImg class="matrixcube-img pb-5 mb-5 pt-5 rotate-item" src="/matrix-cube.png" alt="cube"  sizes="sm:100px md:200px lg:500px xl:500px" quality="100" />
          <div><NuxtImg class="redblue-img pb-5" src="/redblue.png" alt="pills"  sizes="sm:100px md:200px lg:300px xl:300px" quality="100" /></div>
        </BCol>
      </BRow>
    </b-container>

    <BContainer fluid class=" space-para" >
      <NuxtImg class=" matrix-code " src="/matrix4.png" alt="code"  sizes="sm:200px md:400px lg:900px xl:900px" quality="100" />
      <NuxtImg class="nebula-img nebula" src="/spacegas.png" alt="nebula"  sizes="sm:200px md:400px lg:900px xl:900px" quality="100" />
    </BContainer>

    <b-container fluid class="topics-container about-opacity" style="border-radius: 0px 0px 0px 0px !important;" >
      <!--Space Header-->
      <BRow class="section-header  ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " ></h4> 
        </BCol>
      </BRow> 

      <!--Space Content-->
      <BRow class=" about-body p-4 planets-back "  >
        <BCol class="col-12 card-padding pt-4 pb-4 mt-5" >
          <h2>In a galaxy of mysteries far far away, we transmit a signal of knowledge across the stars</h2>
          <NuxtImg class="sun-img pb-5 mb-5 pt-5 mt-4 rotate-item" src="/sun.png" alt="sun"  sizes="sm:100px md:200px lg:350px xl:350px" quality="100" />
          <div><NuxtImg class="redblue-img pb-5" src="/greenalien.png" alt="pills"  sizes="sm:50px md:100px lg:200px xl:200px" quality="100" /></div>
        </BCol>
      </BRow>
    </b-container>

    <BContainer fluid class=" space-para" >
      <NuxtImg class="meteor-img wormhole-matrix shrink-item  " src="/meteor3.png" alt="meteor"  sizes="sm:200px md:400px lg:900px xl:900px" quality="100" />
      <NuxtImg class="wormhole-img wormhole-matrix rotate-item mt-5 pt-5 " src="/blackhole2.png" alt="wormhole"  sizes="sm:200px md:400px lg:900px xl:900px" quality="100" />
    </BContainer>
    <BContainer fluid class=" space-para para-padding" >
      <NuxtImg class="moon-img wormhole-matrix rotate-item " src="/blood-moon.png" alt="moon"  sizes="sm:200px md:400px lg:900px xl:900px" quality="100" />
    </BContainer>

    <b-container fluid class="topics-container about-opacity" style="border-radius: 0px 0px 0px 0px !important; " >
      <!--Grahf Header-->
      <BRow class="section-header  ps-3 pb-1 pt-1 pe-3"  >    
        <BCol class="col-auto" >          
          <h4 class="pt-2 " ></h4> 
        </BCol>
      </BRow> 

      <!--Grahf Content-->
      <BRow class=" about-body p-4 moon-back "  >
        <BCol class="col-12 card-padding pt-4 pb-4 mt-5 " >
          <h2 class="">Doth thou seeketh the power? Join <span class="xeno-text xeno-crazy-text">Xenoboard</span> today!</h2>
          <NuxtImg class="grahf-img grahf mt-5 join-padding grey-border  " src="/grahf.jpg" alt="grahf"  sizes="sm:200px md:300 lg:700px xl:700px" quality="100" />
          <h1 class="xeno-text xeno-crazy-text pt-5 mt-5">Xenoboard</h1>

          <BButton  class="signup-button xeno-text mt-5 mb-5 " @click="showRegisterModal" >
            SIGN UP
          </BButton>
        </BCol>
      </BRow>
    </b-container>
    

    

  </div>
</template>

<script lang="js">
import BreadCrumbs from '../components/BreadCrumbs.vue';
 import test from '../middleware/test';
 import mixins from "~/mixins/mixins.js"

//This page is written using the Options API
export default {
  name: 'About',
  layout: 'about',
  mixins: [mixins],
  middleware:  [
    test
  ],
  components: {
    BreadCrumbs
  },
  data () {
    return {
      title: 'Xenoboard About',
      metaDescription: 'The Xenoboard About page, a description and history of the site',
      metaKeywords: 'Xenoboard, About, Xeno, History, Mission, Statement',
      missionStatement: 'Xenoboard was founded in 2025 with the goal of being the ultimate source of knowledge for all video game related topics. Created in collaboration with Vector Industries and Damian Zylski, Xenoboard uses cutting edge technologies to bring you information you can find nowhere else. Information so rare it might be from another planet. The truth is out there. ',
      loading: false,
      breadcrumbsList: [{path: 'About', title: 'About'}],
      showRegister: false,
      playMusic: false,
    }
  },
  head() {
    return {
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: 'http://Xenoboard.net/About'
        }
      ],
      meta: [
        {
          hid: 'aboutPage',
          name: 'aboutPage',
          content: 'The Xenoboard About Page'
        },
        {
          name: 'description',
          hid: 'description-about',
          content: (this.metaDescription != null) ? this.metaDescription : this.missionStatement,
        },
        {
          name: 'keywords',
          hid: 'keywords-about',
          content: (this.metaKeywords != null) ? this.metaKeywords : 'About, About Us, History, Xenoboard, Mission, Statement',
        }
      ]
    }
  },
  created(){
    this.isCreated();
  },
  mounted() {
    this.isMounted();
  },
  computed: {
    missionStatementCharLength(){
      return this.missionStatement.length;
    }
  },
  watch:{
    missionStatementCharLength(newValue, oldValue) {
      if (newValue) {
        if (newValue > 10){
          console.log('Greater than 10');
        } else {
          console.log('Less than 10');
        }
      }
    },
    playMusic(newValue, oldValue) {
      if (newValue) {
         this.$refs.musicPlayer.play();
      }
      else{
         this.$refs.musicPlayer.pause();
      }
    },
  },
  methods:{
    isCreated(){
      var test = 'created '+this.test;

      console.log(test);
    },
    isMounted(){
      var test = 'mounted';

      console.log(test);
      
    },
     showRegisterModal(){
      this.showRegister = true;
    },

    closeRegisterModal(){
      this.showRegister = false;
    }
    ,musicOnOff(){
      this.playMusic = !this.playMusic;
    }
    

  }
}
</script>

<script lang="js" setup>

definePageMeta({
  layout: 'about',
})

</script>

<style scoped>

body, html {
  height: 100% !important;
}

.header-background{
    background-color: #080a0b;
    color: #EEEEEE !important;
    border-radius: 10px 10px 10px 10px !important;
    border: 2px solid #080a0b;
    align-content: start;
    align-items: start;
    text-align: start;
    max-width: none;
    opacity: 0.9;
    position: relative;
    background-image: url(~/assets/vector.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size:auto;
  }

  .about-body{
    padding: 15px;
    background-color: #2A3439;
    opacity: 1 !important;
    color: #BBBBBB;
    align-items: center !important;
    align-content: center !important;
    align-self: center !important;
    margin: auto !important;
  }

  .card{
    border-radius: 20px 20px 20px 20px !important;
    border: 7px solid #080a0b;
  }

  .matrix{
    background-image: url("~/assets/matrix1.gif");
  }

  .matrix-back{
    background-image: url("~/assets/matrix2.gif");
    background-size:contain;
  }

  .planets-back{
    background-image: url("~/assets/planets.gif");
    background-size:contain;
  }

  .moon-back{
    background-image: url("~/assets/redmoon.gif");
    background-size:contain;
  }

  .about-width{
    width: 90% !important;
  }

  .about-padding{
    padding: 20px !important;
  }

  .about-opacity{
    opacity: 0.98 !important;
  }

  .space-para{
    position: relative !important;
    background-color: black;
    background-image: url(~/assets/space.gif);
    min-height: 100% !important;
    height: 2000px !important; 
    background-attachment: fixed !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .matrix-para{
    position: relative !important;
    background-color: black;
    background-image: url(~/assets/matrix1.gif);
    min-height: 100% !important;
    height: 2000px !important; 
    background-attachment: fixed !important;
    background-position: center !important;
    background-repeat:repeat !important;
  }

  .nebula{
    margin: auto !important;
    display: block;
  }

  .matrix-code{
    margin: auto !important;
    display: block;
    width: 90%;
    padding-bottom: 0
  }

   .wormhole-matrix{
    margin: auto !important;
    display: block;
  }

  .rotate-planets{
    background-image: url(planets.gif);
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  @keyframes shrink-grow {
    0% {transform: scale(-1, 1); }
    50% { transform:  scale(1, -1); }
    100% { transform:  scale(-1, 1); }
}

 @keyframes spin {
    0% {transform: rotate(0deg); }
    100% { transform:  rotate(360deg); }
}

.para-padding{
  padding-top: 800px;
}

.rotate-item{
  
  animation: spin 10s linear infinite;
}

.shrink-item{
  
  animation: shrink-grow 10s linear infinite;
}

.signup-button{
  margin-left: auto !important;
  border: 1px solid #FFFFFF !important;
  background-color: #2A3439 !important;
  opacity: 1 !important;
  margin-left: 20px !important;
  text-align: center;
  font-size: 17px;
}

video {
  max-width: 100% !important;
  height: auto !important;
}

.grey-border{
  border: 5px #555555 solid;
  border-radius: 10px;
}

.join-padding{

}

@keyframes spaz {
    0% {transform: rotate(0deg) scalex(-1);; }
    100% { transform:  rotate(360deg) scalex(1);  }
}

.grahf{

}

.grahf:hover{
  animation: spaz 5s linear infinite !important;
}

.play-music{
  
}

.vector-ceo{
  cursor: pointer !important;
}


</style>