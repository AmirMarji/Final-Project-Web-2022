import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkoutListView from '../views/WorkoutListView.vue'
import AddWorkoutView from '../views/AddWorkoutView.vue'
import EditWorkoutView from '../views/EditWorkoutView.vue'
import StatsView from '../views/StatsView.vue'
import AdminView from '../views/AdminView.vue'
import NotFoundView from '../views/NotFoundView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,

    /* 
    TODO:
    list of current workouts
    add workouts and edditing workouts
    statistics page
    ADMIN
    */
    {
      path: '/workout',
      name: 'workout',
      component: WorkoutListView
    }
    ,
    {
      path: '/addworkout',
      name: 'addworkout',
      component: AddWorkoutView
    }
    ,
    {
      path: '/editworkout',
      name: 'editworkout',
      component: EditWorkoutView
    }
    ,
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    }
    ,
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
    ,
    {
      //not sure why this aint working but whatever for now
      path: '/404',
      name: 'notfoundview',
      component: NotFoundView
    }
    
  ]
})

export default router
