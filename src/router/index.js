import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Resume from '@/views/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    }
  ]
})

export default router
