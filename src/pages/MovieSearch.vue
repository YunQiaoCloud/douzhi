<template lang="html">
  <div class="movie-search">
    <div class="movie-search-title">
      <p><span class="movie-search-back" v-on:click="back"></span>搜索电影</p>
    </div>
    <div class="movie-search-input">
      <input type="text"
             @keyup.enter="onSearch"
             v-model="searchValue"
             placeholder="请输入电影名称">
    </div>
    <div class="movie-search-results">
      <!-- 使用searchResults.images.xxxxx 会报错, searchResults.images应该是个对象啊，为什么-->
      <!-- <div class="cover"
          :style="{ 'background-image': `url(${searchResults.images.small})` }"></div> -->

      <!-- searchResults.images可以读取，searchResults.images.small就会报错 -->
      <p>{{ searchResults.images }}</p>


      <p>{{ searchResults.title }}</p>
      <p>{{ searchResults.mainland_pubdate }}</p>
      <div v-for="cast in searchResults.casts" :key="cast.id" class="cast">
        <div class="cast-head"
            :style="{ 'background-image': `url(${cast.avatars.small})` }"></div>
        <p class="cast-name">{{cast.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'MovieSearch',
  data() {
    return {
      searchValue: '',
      searchResults: []
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    onSearch() {
      const moviesList = this.$store.state.movies.list
      const keyWords = this.searchValue

      let index = _.findIndex(moviesList, ['title', keyWords])

      // console.log(this, this.data, this.title, index, keyWords, moviesList[index])

      if (index === -1) {
        index = 0
      }

      this.$set(this.$data, 'searchResults', moviesList[index])
      console.log(this);
    }
  },
  async created() {
    // store 执行获取 movies
    this.$store.dispatch('getMovies')
  }
}
</script>

<style lang="scss">
  .movie-search-title {

    p {
      font-size: 25px;
      text-align: center;
      padding-right: 50px;
    }

    .movie-search-back {
      float: left;
      display: flex;
      width: 30px;
      height: 20px;
      margin-left: 20px;
      background-image: url('../assets/back.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
</style>
