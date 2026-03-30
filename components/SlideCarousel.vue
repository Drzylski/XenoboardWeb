<template>
  <div>
    <Carousel v-bind="carouselConfig" >
      <Slide v-for="(slide, index) in slides" :key="slide.id">
        <div class="carousel__item">
          <BCard
            :title="slide.value.title"
            :img-src="getimg(slide.value.imageUrl)"
            :img-alt=slide.value.title
            img-height="200"
            img-width="200"
            img-bottom
            overlay
            tag="article"
            style="max-width: 20rem;"
            class="mb-4 mt-3 b-img-bottom shadow"
          >
            <b-card-text style="height: 100px;overflow-y: auto;">
              {{ slide.value.content }}
            </b-card-text>

            <BButton class="" :href=slide.value.linkUrl variant="dark">Read More</BButton>
          </BCard>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import type ISlideData from '../types/SlideData';

  const carouselLoading = defineModel('carouselLoading');

  //Once component mounted, get rid of loading screen
  onMounted(() => {
    carouselLoading.value = false;
  });

  const carouselConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  clamp: false, 
  gap: 20,
  height: 450,
}

  interface Props {
    slides: ISlideData [] | null //TODO: Replace with interface type
  }

  const props = withDefaults(defineProps<Props>(), {
    slides: null,
  })

  //Gets image url from Assets folder
  function getimg(link: string) {
    
      //TODO: NOTE: No SSR support for this'
      
      const imgUrl = new URL('../assets/'+link, import.meta.url).href

      //console.log(imgUrl);

      return imgUrl;
  }

</script>

<style scoped>

.card {
  background-color: #404F56 !important;
  color: #EEEEEE
}

.carousel {
  color: white !important;
  --vc-pgn-background-color: white;
  --vc-nav-background: rgba(236, 235, 235, 0.3);
  --vc-nav-color: white;
  --vc-nav-color-hover: red;
  --vc-nav-border-radius: 50%;
  --vc-nav-width: 50px;
  --vc-nav-height: 50px;
  --vc-pgn-active-color: red;
  --vc-pgn-height: 5px;
  --vc-pgn-width: 10px;
}

.carousel > .svg:hover {
  --vc-nav-color: red;
}

.carousel > svg {
  fill: white;
}

.carousel__pagination-button {
  height: 5px;
  width: 5px;
  border-radius: 5px;
  background-color: white !important;
}

.card-img-top {
    width: 100% !important;
    height: 15vw !important;
    object-fit: cover !important;
}


</style>