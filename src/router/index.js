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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          resolve({ left: 0, top: 0 });
        }, 300);
      });
    }
  }
})

export default router
