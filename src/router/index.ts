import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue';
import Certifications from '../views/Certs.vue';
import Portfolio from '../views/Portfolio.vue';
import Experience from '../views/Experience.vue';
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/certs',
      name: 'Certifications',
      component: Certifications
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ],
  linkActiveClass: "active",
})

export default router
