import {createApp} from 'vue'
import {createPinia} from 'pinia'
// Vuetify
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import {fa} from "vuetify/iconsets/fa";
import {aliases, mdi} from "vuetify/lib/iconsets/mdi";

import "vuetify/_styles.scss"
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import 'vue3-carousel/dist/carousel.css'
import "@/assets/styles/main.scss"

//Axios
import Axios from 'axios';
import App from './App.vue'
import router from './router'
import {API_ENDPOINT, API_KEY} from "@/constants";

Axios.defaults.baseURL = API_ENDPOINT;
Axios.defaults.headers.common["x-api-key"] = API_KEY


const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
    components,
    directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
