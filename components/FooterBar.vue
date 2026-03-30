<template>
  <b-container fluid class="p-3 mt-1" :class="classObject" style="z-index:1;position: relative;  ">
    <div class="zohar-svg container" style="display: none; z-index:-2000 !important;height:1px;">
      <img class="zohar-img" src="~/assets/zohar.png" width="5%" style="z-index:-2000;display:block;position: absolute; left:25%; top: 120%;" />
    </div>
    <BRow>
      <BCol class="col-6 desktop-footer">
        <NuxtLink :to="{ path: '/'}">
          <span class="xeno-text logo-text">Xenoboard</span>
        </NuxtLink>
      </BCol>
      <BCol class="col-6  footer-links desktop-footer" >
        <NuxtLink :to="{ path: '/Contact'}">
          <span class="p-3">Contact</span>
        </NuxtLink><wbr>
        <NuxtLink :to="{ path: '/About'}">
          <span class="p-3">About</span>
        </NuxtLink><wbr>
        <NuxtLink :to="{ path: '/Help'}">
          <span class="p-3">Help</span>
        </NuxtLink><wbr>
        <NuxtLink :to="{ path: '/Legal'}">
          <span class="p-3 ">Legal&nbsp;Notice</span>
        </NuxtLink><wbr>
        <NuxtLink :to="{ path: '/Privacy'}">
          <span class="p-3 ">Privacy&nbsp;Policy</span>
        </NuxtLink><wbr>
      </BCol>
      <BCol class="mobile-footer">
        <NuxtLink :to="{ path: '/'}">
          <span class="xeno-text logo-text">Xenoboard</span>
        </NuxtLink>
        <br></br>
        <div class="footer-links">
          <NuxtLink :to="{ path: '/Contact'}">
            <span class="p-3">Contact</span>
          </NuxtLink><wbr>
          <NuxtLink :to="{ path: '/About'}">
            <span class="p-3">About</span>
          </NuxtLink><wbr>
          <NuxtLink :to="{ path: '/Help'}">
            <span class="p-3">Help</span>
          </NuxtLink><wbr>
          <NuxtLink :to="{ path: '/Legal'}">
            <span class="p-3 ">Legal&nbsp;Notice</span>
          </NuxtLink><wbr>
          <NuxtLink :to="{ path: '/Privacy'}">
            <span class="p-3 ">Privacy&nbsp;Policy</span>
          </NuxtLink><wbr>
        </div>

      </BCol>
    </BRow>
    <BRow>
      <BCol class="col-12 copyright-text">
          <span class="copyright-text">Copyright &#169 {{ year }} Damian Zylski</span>
      </BCol>
    </BRow>
  </b-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

//import { BCol, BContainer, BRow } from 'bootstrap-vue-next';

interface Props {
  alien: boolean
}

const props = withDefaults(defineProps<Props>(), {
  alien: false,
})

//Select the style based on truth values
const classObject = computed(() => ({
  'footer-body': !props.alien,
  'alien-footer': props.alien
}))

var year = new Date().getFullYear();

</script>

<style scoped>

.logo-text {
  font-size: 1.5vw;
  padding-left: 10%;
}

.copyright-text {
  font-size: 2vh;
  text-align: center !important;
  margin: auto !important;
}

.footer-links {
  white-space: initial;
  text-align: right;
  font-size: 2.5vh;
  padding-right: 5%;
  cursor: pointer;
}

.p-3:hover{
  color: #777777;
  transition: color 1s;
}

.p-3 {
  transition: color 1s;
}

.footer-link{
  white-space: initial;
}

.desktop-footer{
  display: inline-block;
}

.mobile-footer{
  display: none;
}

.footer-body:hover > .zohar-svg{
    display:initial !important;
  }

  @keyframes zohar-appear {
  to{
    bottom: 8.5vh;
    opacity:.7;
  }
  from{
    bottom: 0vh;
    opacity:0;
  }

}

.container {
  position: absolute;
  bottom: -75%;
  opacity:0;
  left: 50%;
  transform: translateX(-50%);
  animation: zohar-appear 1s ease forwards;
}

</style>