<template>
  <b-container fluid class="footer-body p-3 mt-1">
    <BRow>
      <BCol class="col-6 desktop-footer">
          <span class="xeno-text logo-text">Xenoboard</span>
      </BCol>
      <BCol class="col-6  footer-links desktop-footer" >
          <span class="p-3">Contact</span><wbr>
          <span class="p-3">About</span><wbr>
          <span class="p-3">Help</span><wbr>
          <span class="p-3 ">Terms&nbsp;of&nbsp;Use</span><wbr>
          <span class="p-3 ">Privacy&nbsp;Policy</span><wbr>
      </BCol>
      <BCol class="mobile-footer">

        <span class="xeno-text logo-text">Xenoboard</span><br></br>
        <div class="footer-links">
          <span class="p-3">Contact</span><wbr>
          <span class="p-3">About</span><wbr>
          <span class="p-3">Help</span><wbr>
          <span class="p-3 ">Terms&nbsp;of&nbsp;Use</span><wbr>
          <span class="p-3 ">Privacy&nbsp;Policy</span><wbr>
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
//import { BCol, BContainer, BRow } from 'bootstrap-vue-next';

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

</style>