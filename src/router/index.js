import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/pages/Movies'
import MovieSearch from '@/pages/MovieSearch'
import MovieDetails from '@/pages/MovieDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/search',
      name: 'MovieSearch',
      component: MovieSearch
    },
    {
      path: '/details/:id',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
})
