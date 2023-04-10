<template>
  <header class="header">
    <v-row class="header-row">
      <v-col cols="3">
        <div class="logoName">
          {{ PROJECT_NAME }}
        </div>
      </v-col>
      <v-col cols="6">
        <search-movie/>
      </v-col>
      <v-col cols="3" class="header-actions">
        <v-icon icon="mdi-tooltip-question" @click="toggleDialog"></v-icon>
      </v-col>
    </v-row>
  </header>
</template>

<script setup>
import {PROJECT_NAME} from "@/constants";
import SearchMovie from "@/components/search/searchMovie.vue";
import {useStoreDialogFAQ} from "@/stores/StoreDialogFAQ";
const storeDialogFAQ = useStoreDialogFAQ();

const toggleDialog = () => {
  storeDialogFAQ.toggleDialog()
}
</script>
