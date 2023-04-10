<template>
  <div class="searchMovie">
    <v-text-field prepend-inner-icon="mdi-magnify" hide-details v-model="searchString"></v-text-field>
    <div class="topFive" v-if="!loading">
      <top-five-movie class="item" v-for="movie in searchMoviesData" :key="movie.id" :movie="movie"/>
    </div>
    <div class="loader" v-else>
      <v-progress-linear indeterminate model-value="20"></v-progress-linear>
    </div>
  </div>
</template>
<script setup>
import {useStoreSearchMovie} from "@/stores/StoreSearchMovies";
import {computed, ref, watch} from "vue";
import {debounce} from "lodash";
import TopFiveMovie from "@/components/searchMovie/topFiveMovie.vue";

const searchString = ref('')
const storeSearchMovies = useStoreSearchMovie();
const loading = ref(false)

watch(
    () => searchString.value,
    (val) => {
      val.length ? searchMovies() : null;
    }
)
const searchMovies = debounce(() => {
  loading.value = true
  const options = {
    searchString: searchString.value,
    moviesOnPage: 5,
  }
  storeSearchMovies.searchMovies(options).then(() => {
    loading.value = false
  })
}, 500)

const searchMoviesData = computed(() => {
  return storeSearchMovies.searchMoviesData;
})
</script>
