<template>
  <Carousel :itemsToShow="5.2" :wrapAround="true" :transition="500" class="carousel">
    <Slide v-for="slide in top10Movies" :key="slide.id">
      <router-link :to="`/moviePage/${slide.id}`" class="slide">
        <div class="slide-img">
          <img :src="slide.poster?.previewUrl">
        </div>
        <div class="slide-text">{{ slide.name }}</div>
      </router-link>
    </Slide>
    <template #addons>
      <Navigation/>
    </template>
  </Carousel>
</template>
<script setup>
import {Carousel, Navigation, Slide} from 'vue3-carousel'
import {computed, onMounted} from "vue";
import {useStoreSearchMovie} from "@/stores/StoreSearchMovies";

const storeSearchMovies = useStoreSearchMovie();

onMounted(async () => {
  const options = {
    top10: true,
    requestOnSlider: true,
  }
  await storeSearchMovies.searchMovies(options)
})

const top10Movies = computed(() => {
  return storeSearchMovies.top10MoviesData;
})
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
