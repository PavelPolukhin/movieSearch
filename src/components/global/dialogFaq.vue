<template>
  <v-dialog
      transition="dialog-top-transition"
      width="auto"
      v-model="showDialog"
  >
    Dialog 111111
    <v-btn @click="toggleDialog">Close</v-btn>
  </v-dialog>
</template>

<script setup>
import {useStoreDialogFAQ} from "@/stores/StoreDialogFAQ";
import {computed} from "vue";

const storeDialogFAQ = useStoreDialogFAQ();

const showDialog = computed(() => {
  return storeDialogFAQ.showDialog;
})

const toggleDialog = () => {
  storeDialogFAQ.toggleDialog();
}

</script>
