import axios from 'axios'

// state
const state = {
  list: [{
    title: '',
    mainland_pubdate: '',
    images: {}
  }]
}

// mutations
/* eslint-disable no-param-reassign */
const mutations = {
  setMovies(data, movieList) {
    data.list = movieList
  }
}
/* eslint-enable no-param-reassign */

// actions
const actions = {
  async getMovies({ commit }) {
    const res = await axios.get('/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=10&client=&udid=')
    const movieList = res.data.subjects
    commit('setMovies', movieList)
  }
}

export default {
  state,
  mutations,
  actions
}
