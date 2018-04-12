import axios from 'axios'

//state
const state = {
  list: [{
    title: '',
    mainland_pubdate: '',
    images: {}
  }]
}

//mutations
const mutations = {
  setMovies(state, movieList) {
    state.list = movieList
  }
}

//actions
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
