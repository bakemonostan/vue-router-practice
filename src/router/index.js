import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BootyView from '@/views/BootyView.vue';
import Jobs from '@/views/Jobs';
import JobDetails from '@/views/JobDetails';
import NotFound from '@/views/NotFound';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/booty',
    name: 'booty',
    component: BootyView,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
  },

  //catch all routes/ 404
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

