import axios from 'axios'

// state
const state = {
  listTop250: [{
    title: '',
    images: {}
  }],
  listUS: [{
    title: '',
    images: {}
  }]
}

const getters = {
  setRanksTop250(data) {
    console.log(data)
    return { title: '测试' }
  },
  setRanksUS() {
    return { title: '测试2' }
  }
}

// mutations
/* eslint-disable no-param-reassign */
const mutations = {
  setRanksTop250(data, rankListTop250) {
    data.listTop250 = rankListTop250
  },
  setRanksUS(data, rankListUS) {
    data.listUS = rankListUS
  }
}
/* eslint-enable no-param-reassign */

// actions
const actions = {
  async getRanksTop250({ commit }) {
    const res = await axios.get('/api/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&count=250')
    const rankListTop250 = res.data.subjects
    commit('setRanksTop250', rankListTop250)
  },
  async getRanksUS({ commit }) {
    const res = await axios.get('/api/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b&count=250')
    const rankListUS = res.data.subjects
    commit('setRanksUS', rankListUS)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
