import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignInView from '@/views/SignInView.vue'
import OtpVerify from '@/views/OtpVerifyView.vue'
import DashboardView from '@/views/DashboardView.vue'
import StatisticsView from '@/views/StatisticsView.vue'
import DiaryView from '@/views/DiaryView.vue'
import SettingsView from '@/views/Settings/SettingsView.vue'
import AddDiaryView from '@/views/AddDiaryView.vue'


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
      component: () => import('../views/OtpVerifyView.vue'),
    },
    {
      path: '/securitypin',
      name: 'securitypin',
      component: () => import('../views/SecurityPinView.vue'),
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
    {
      path: '/add-diary',
      name: 'add-diary',
      component: AddDiaryView,
    },
    {
      path: '/diary/:id',
      name: 'diary-detail',
      component: () => import('../views/DiaryDetailView.vue'),
    },
    {
      path: '/settings/personaldetails',
      name: 'personaldetails',
      component: () => import('../views/Settings/PersonalView.vue'),
    },
    {
      path: '/settings/notifications',
      name: 'notifications',
      component: () => import('../views/Settings/NotificationView.vue'),
    },
    {
      path: '/settings/location',
      name: 'location',
      component: () => import('../views/Settings/LocationView.vue'),
    },
    {
      path: '/settings/facelock',
      name: 'facelock',
      component: () => import('../views/Settings/FacelockView.vue'),
    },
    {
      path: '/settings/pinsetting',
      name: 'pinsetting',
      component: () => import('../views/Settings/PinSettingView.vue'),
    },
    {
      path: '/settings/help',
      name: 'help',
      component: () => import('../views/Settings/HelpView.vue'),
    },
  ],
})

export default router
