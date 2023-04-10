<template>
  <div class="moviePage">
    <v-row v-if="movieData">
      <v-col cols="4">
        <div class="moviePage-img">
          <img :src="movieData.poster?.url" alt="">
        </div>
      </v-col>
      <v-col cols="8">
        <v-row class="moviePage-row">
          <v-col cols="12">
            <div class="moviePage-title">
              <h1>{{ movieData.name }}</h1>
            </div>
          </v-col>
          <v-col cols="8">
            <div class="moviePage__info">
              <div class="moviePage__info-header">
                <h2>О {{computedTitle}}</h2>
                <div class="ageRating" v-if="movieData.ageRating" :class="computedAgeRatingClass">
                  Возврастное ограничение: {{ movieData.ageRating }}+
                </div>
              </div>
              <div class="moviePage__info-item" v-for="item in movieInfo" :key="item.id">
                <div class="infoItem-name">
                  {{ item.name }}:
                </div>
                <div class="infoItem__values">
                  <div class="infoItem__values-value">
                    {{ joinValues(item.value) }}
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="4" v-if="computedRating.length">
            <h2>Рейтинг</h2>
            <div class="moviePage__rating">
              <div class="moviePage__rating-item"
                   v-for="item in computedRating"
                   v-html="item.html"
                   :key="item.id"
              >
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="moviePage-description">
              <span>Описание:</span> {{ movieData.description }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useStoreMovieData} from "@/stores/StoreMovieData";
import {REQUIRED_FIELDS_MOVIE_INFO} from "@/constants/moviePage";
import {cloneDeep} from "lodash";
import {nameMatching} from "@/helpers/nameMatching";
import {editMovieInfoItems} from "@/helpers/editMovieInfoItems";
import {editMovieTitle} from "@/helpers/editMovieTitle";
import {setAgeRatingClass} from "@/helpers/setAgeRatingClass";
import {joinArray} from "@/helpers/joinArray";
import {setRating} from "@/helpers/setRating";

const storeMovieData = useStoreMovieData();
const route = useRoute();
const movieId = ref(route.params.id);
const movieInfo = ref([]);

const movieData = ref({})
onMounted(async () => {
  await storeMovieData.getMovie(movieId.value);
  movieData.value = storeMovieData.movieData;
  setMovieInfo();
})

const setMovieInfo = () => {
  const requiredFiled = cloneDeep(REQUIRED_FIELDS_MOVIE_INFO);
  let id = 0;
  requiredFiled.map((item) => {
    const valueItem = movieData.value[item];
    const itemReadyForEditing = {
      name: item,
      value: valueItem
    }
    movieInfo.value.push({
      id: `${movieId.value}_${id++}`,
      name: nameMatching(item),
      value: editMovieInfoItems(itemReadyForEditing)
    })
  })
}

const computedTitle = computed(() => {
  return editMovieTitle(movieData.value.type);
})

const computedRating = computed(() => {
  const rating = movieData.value.rating;
  const votes = movieData.value.votes;

  if(rating) {
    return setRating(rating, votes, ['kp', 'imdb']);
  }

  return '';
})

const computedAgeRatingClass = computed(() => {
  return setAgeRatingClass(movieData.value.ageRating)
})

const joinValues = (values) => {
  return joinArray(values, ', ')
}

</script>
