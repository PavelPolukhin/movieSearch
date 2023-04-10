import {defineStore} from "pinia";
import {ref} from "vue";

export const useStoreDialogFAQ = defineStore('useStoreDialogFAQ', () => {
    const showDialog = ref(false);
    const toggleDialog = () => {
        showDialog.value = !showDialog.value
    }

    return{
        showDialog,
        toggleDialog
    }
})
