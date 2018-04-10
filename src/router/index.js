import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/pages/Movies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    }
  ]
})
