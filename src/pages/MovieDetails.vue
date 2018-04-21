<template lang="html">
  <div class="movie-details">
    <div class="movie-details-image">
      <div class="cover"
          :style="{ 'background-image': `url(${movieDetails.images.large})` }"></div>
    </div>
    <div class="movie-details-info">
      <div class="movie-details-title">
        <p class="movie-title">{{movieDetails.title}}</p>
        <p class="movie-original-title">{{movieDetails.original_title}}</p>
        <p class="movie-grades">{{movieDetails.rating.average}}</p>
      </div>
      <p class="movie-title">演员表</p>
      <div class="casts-list">
        <div v-for="cast in movieDetails.casts" :key="cast.id" class="cast">
          <div class="cast-head"
              :style="{ 'background-image': `url(${cast.avatars.small})` }"></div>
          <p class="cast-name">{{cast.name}}</p>
        </div>
      </div>
      <p class="movie-title">其他信息</p>
      <div class="other-info">
        <p class="movie-title">上映时间：
          <span class="movie-original-title">{{movieDetails.mainland_pubdate}}</span>
        </p>
        <p class="movie-title">影片时长：
          <span class="movie-original-title"
                v-for="durations in movieDetails.durations" :key="durations.id">{{durations}}</span>
        </p>
        <p class="movie-title">原网页链接：
          <a class="movie-original-title" :href="movieDetails.alt">点击查看</a>
        </p>
      </div>
      <p class="movie-title">类型</p>
      <div class="movie-genres">
        <p class="movie-original-title"
           v-for="genres in movieDetails.genres" :key="genres.id">{{genres}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import lodash from 'lodash'

export default {
  name: 'MovieDetails',
  computed: {
    movieDetails() {
      // 获取当前的 params 里的 id
      const movieId = this.$route.params.id
      const moviesList = this.$store.state.movies.list

      let index = lodash.findIndex(moviesList, ['id', movieId])

      if (index === -1) {
        index = 0
      }

      return moviesList[index]
    }
  },
  async created() {
    // store 执行获取 movies
    this.$store.dispatch('getMovies')
  }
}
</script>

<style lang="scss">
.movie-details {
  min-height: 100vh;
  width: 100vw;
}

.movie-details-image {
  width: 100vw;
  height: 70vh;

  .cover {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center 15%;
    background-size: cover;
  }
}

.movie-details-info {
  padding: 20px 10px;

  .movie-details-title {
    border-bottom: 1px solid #f5f5f5;
    margin-top: -20px;
  }
}

.movie-title {
  margin-top: 30px;
  margin-bottom: 20px;
  letter-spacing: 0.3px;
  color: #333;
  font-weight: 400;
  font-size: 30px;
}

.movie-grades {
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 16px;
  color: #FE2A3C;
}

.movie-original-title {
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 16px;
  color: #9b9b9b;
}

.casts-list {
  width: 100%;
  height: 120px;

  .cast {
    float: left;
    width: 80px;
    height: 80px;
    margin: 10px 10px 10px 0;
  }

  .cast-head {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center 15%;
    background-size: cover;
    border-radius: 50% 50%;
  }

  .cast-name {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    color: #333;
    text-align: center;
  }
}

.other-info {

  p {
    font-size: 16px;
    margin: 10px 0;
  }

  span {
    margin-right: 10px;
  }
}

.movie-genres {
  overflow: hidden;

  p {
    float: left;
    border: 1px solid #f5f5f5;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 5px 5px;
  }
}

</style>
