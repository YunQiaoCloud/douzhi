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
    <div class="movie-search-results" v-if="searchResults.id">
      <router-link :to="{ name: 'MovieDetails', params: { id: searchResults.id } }">
        <div class="search-results-image"
            :style="{ 'background-image': `url(${searchResults.images.small})` }">
        </div>
      </router-link>
      <div class="search-results-info">
        <router-link :to="{ name: 'MovieDetails', params: { id: searchResults.id } }">
          <h2>
            {{ searchResults.title }}
            <i class="movie-grades">{{ searchResults.rating.average }}</i>
          </h2>
        </router-link>
        <p class="movie-genres"
        v-for="genres in searchResults.genres" :key="genres.id">{{ genres }}</p>
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
      searchResults: {
        images: {
          small: ''
        },
        rating: {
          average: ''
        },
        id: null,
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
    }
  },
  async created() {
    // store 执行获取 movies
    this.$store.dispatch('getMovies')
  }
}
</script>

<style lang="scss">
  .movie-search {
    width: 100%;
  }

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

  .movie-search-input {
    width: 100%;
    height: 5vh;
    margin-bottom: 20px;
    text-align: center;

    input {
      width: 90%;
      height: 100%;
      padding: 5px 20px;
      background-color: #f5f5f5;
    }
  }

  .movie-search-results {
    width: 90%;
    height: 80px;
    margin: 0 5%;

    .search-results-image {
      width: 80px;
      height: 80px;
      background-repeat: no-repeat;
      background-position: center 15%;
      background-size: cover;
      border-radius: 50% 50%;
      float: left;
    }

    .search-results-info {
      margin-left: 10px;
      float: left;

      h2 {
        margin: 5px 0;
      }

      .movie-grades {
        margin-left: 5px;
        font-size: 16px;
        color: #FE2A3C;
      }

      .movie-genres {
        float: left;
        border: 1px solid #f5f5f5;
        padding: 5px 10px;
        margin: 15px 5px 0 0;
        border-radius: 5px 5px;
      }
    }
  }
</style>
