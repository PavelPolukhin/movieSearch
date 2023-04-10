<template>
  <router-link :to="`/moviePage/${props.movie.id}`" class="topFiveItem">
    <div class="topFiveItem-img">
      <img :src="props.movie?.poster?.previewUrl">
    </div>
    <div class="topFiveItem-name">
      {{props.movie.name}}
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps(['movie'])
</script>
