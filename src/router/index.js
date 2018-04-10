import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Movies from '@/pages/Movies'
=======
import Music from '@/pages/Music'
import Movie from '@/pages/Movie'
>>>>>>> 添加电影单页

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'Movies',
      component: Movies
=======
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/',
      name: 'Movie',
      component: Movie
>>>>>>> 添加电影单页
    }
  ]
})
