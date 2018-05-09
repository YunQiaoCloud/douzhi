<template lang="html">
  <div class="movie-search">
    <div class="movie-search-title">
      <router-link :to="{ name: 'RankList' }">
        <p><span class="movie-search-back"></span>搜索电影</p>
      </router-link>
    </div>

    <div class="movie-search-input">
      <input type="text"
             v-model="searchValue"
             placeholder="请输入电影名称">
    </div>

    <div v-for="movie in searchResults"
         :key="movie.id"
         v-if="movie.id"
         class="movie-search-results">

      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
        <div class="search-results-image"
            :style="{ 'background-image': `url(${ $_.get(movie.images, 'small') })` }">
        </div>
      </router-link>

      <div class="search-results-info">
        <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
          <h2>
            {{ movie.title }}
          </h2>
          <i class="movie-grades">{{ $_.get(movie.rating, 'average') }}</i>
        </router-link>

        <p class="movie-genres"
        v-for="genres in movie.genres" :key="genres.id">{{ genres }}</p>
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
      searchValue: ''
    }
  },
  computed: {
    searchResults() {
      return this.$store.state.movies.searchMovie
    }
  },
  watch: {
    searchValue: _.debounce(function movieSearch(value) {
      if (!value) { return }

      this.$store.dispatch('getSearchMovie', value)
    }, 1000)
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
    margin: 20px 5%;

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
      width: 70%;
      margin-left: 10px;
      float: left;

      h2 {
        width: 85%;
        margin: 5px 0;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        float: left;
      }

      .movie-grades {
        margin: 5px 0;
        font-size: 16px;
        font-weight: bold;
        color: #FE2A3C;
        float: right;
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
