<template>
  <header-app/>
  <RouterView />
  <dialog-faq/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from "@/components/global/headerApp.vue";
import DialogFaq from "@/components/global/dialogFaq.vue";
</script>

<style scoped>

</style>
