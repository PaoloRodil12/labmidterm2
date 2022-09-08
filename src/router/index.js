import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/StringAppView.vue'
import Dashboard from '../views/Dashboard.vue'
import Quiz from '../views/Quiz.vue'
import Axios from '../views/Axios.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
    path: '/Dashboard',
    name: 'dashboard',
    component: Dashboard
    },
    {
      path: '/Quiz',
      name: 'quiz',
      component: Quiz
      },
      {
        path: '/Axios',
        name: 'axios',
        component: Axios
        },

  ]
})

export default router
