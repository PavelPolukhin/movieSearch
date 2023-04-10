import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/views/mainPage.vue'
import moviePage from '@/views/moviePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: mainPage
    },
    { path: '/moviePage/:id', component: moviePage}
  ]
})

export default router
