import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('../views/front/IndexView.vue'),
        },
        {
          path: 'about',
          name: '關於卷民',
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: 'about/introduce',
          name: 'introduce',
          component: () => import('../views/front/about/IntroduceView.vue'),
        },
        {
          path: 'about/fee',
          name: 'fee',
          component: () => import('../views/front/about/FeeView.vue'),
        },
        {
          path: 'about/teachers',
          name: 'teachers',
          component: () => import('../views/front/about/TeachersView.vue'),
        },
        {
          path: 'about/map',
          name: 'map',
          component: () => import('../views/front/about/MapView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
