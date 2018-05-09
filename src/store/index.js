import Vue from 'vue'
import Vuex from 'vuex'
import movies from './movies'
import ranks from './ranks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movies,
    ranks
  }
})
