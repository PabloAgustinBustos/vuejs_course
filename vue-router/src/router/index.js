import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView'
import Jobs from '../views/jobs'
import JobsDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },

  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs
  },

  {
    path: "/jobs/:id",
    name: "JobsDetails",
    component: JobsDetails,
    props: true
  },

  {
    path: "/all-jobs",
    redirect: "/jobs"
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
