import axios from 'axios'

// state
const state = {
  listTop250: [],
  listWeekly: [],
  listUS: [],
  listNew: []
}

const getters = {
  setRanksTop250(data) {
    return data.listTop250
  },
  setRanksWeekly(data) {
    const listWeeklyArray = data.listWeekly
    const listWeekly = []

    listWeeklyArray.forEach((item) => {
      listWeekly.push(item.subject)
    })

    return listWeekly
  },
  setRanksUS(data) {
    const listUSArray = data.listUS
    const listUS = []

    listUSArray.forEach((item) => {
      listUS.push(item.subject)
    })

    return listUS
  },
  setRanksNew(data) {
    return data.listNew
  }
}

// mutations
/* eslint-disable no-param-reassign */
const mutations = {
  setRanksTop250(data, rankListTop250) {
    data.listTop250 = rankListTop250
  },
  setRanksWeekly(data, rankListWeekly) {
    data.listWeekly = rankListWeekly
  },
  setRanksUS(data, rankListUS) {
    data.listUS = rankListUS
  },
  setRanksNew(data, rankListNew) {
    data.listNew = rankListNew
  }
}
/* eslint-enable no-param-reassign */

// actions
const actions = {
  async getRanksTop250({ commit }) {
    const res = await axios.get('/api/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&count=100')
    const rankListTop250 = res.data.subjects
    commit('setRanksTop250', rankListTop250)
  },
  async getRanksWeekly({ commit }) {
    const res = await axios.get('/api/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b&')
    const rankListWeekly = res.data.subjects
    commit('setRanksWeekly', rankListWeekly)
  },
  async getRanksUS({ commit }) {
    const res = await axios.get('/api/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b&')
    const rankListUS = res.data.subjects
    commit('setRanksUS', rankListUS)
  },
  async getRanksNew({ commit }) {
    const res = await axios.get('/api/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&')
    const rankListNew = res.data.subjects
    commit('setRanksNew', rankListNew)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
