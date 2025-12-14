import { createRouter, createWebHistory } from 'vue-router'
import StatusPage from '@/pages/status/StatusPage.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/status'
    },
    {
      path: '/',
      component: DefaultLayout,
      children: [
      {
          path: '/status',
          name: 'status',
          component: StatusPage,
        }
      ]
    }
  ],
})

export default router
