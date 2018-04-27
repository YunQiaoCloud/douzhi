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
      <div class="cover"
          :style="{ 'background-image': `url(${searchResults.images.small})` }"></div>
      <p>{{ searchResults.title }}</p>
      <p>{{ searchResults.mainland_pubdate }}</p>
      <p class="movie-grades">{{ searchResults.rating.average }}</p>
      <p class="movie-original-title"
         v-for="genres in searchResults.genres" :key="genres.id">{{ genres }}</p>
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
      searchResults: {
        images: {
          small: ''
        },
        rating: {
          average: ''
        }
      }
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

      if (index === -1) {
        index = 0
      }

      this.$set(this, 'searchResults', moviesList[index])
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

  .movie-search-results {
    width: 30vw;
    height: 15vh;

    .cover {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center 15%;
      background-size: cover;
    }
  }
</style>
