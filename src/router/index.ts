import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignInView from '@/views/SignInView.vue'
import OtpVerify from '@/views/OtpVerify.vue'
import DashboardView from '@/views/DashboardView.vue'
import StatisticsView from '@/views/StatisticsView.vue'
import DiaryView from '@/views/DiaryView.vue'
import SettingsView from '@/views/SettingsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue'),
    },
    {
      path: '/otpverification',
      name: 'otpverification',
      component: () => import('../views/OtpVerify.vue'),
    },
    {
      path: '/securitypin',
      name: 'securitypin',
      component: () => import('../views/SecurityPin.vue'),
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView,
    },
        {
      path: '/diary',
      name: 'diary',
      component: DiaryView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
  ],
})

export default router
