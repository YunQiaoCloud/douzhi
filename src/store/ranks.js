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
  setRanks(data, rankList) {
    data.list = rankList
  }
}
/* eslint-enable no-param-reassign */

// actions
const actions = {
  async getRanks({ commit }) {
    const res = await axios.get('/api/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&count=250')
    const rankList = res.data.subjects
    commit('setRanks', rankList)
  }
}

export default {
  state,
  mutations,
  actions
}
