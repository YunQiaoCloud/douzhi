<template lang="html">
  <div class="movie-details">
    <div class="movie-details-image">
      <div class="cover"
          :style="{ 'background-image': `url(${$_.get(movieDetails.images, 'large')})` }"></div>
    </div>

    <div class="movie-details-info">
      <div class="movie-details-title">
        <p class="movie-title">{{movieDetails.title}}</p>
        <p class="movie-original-title">{{movieDetails.original_title}}</p>
        <p class="movie-grades">{{$_.get(movieDetails.rating, 'average')}}</p>
      </div>

      <p class="movie-title">演员表</p>

      <div class="casts-list">
        <div v-for="cast in movieDetails.casts" :key="cast.id" class="cast">
          <div class="cast-head"
              :style="{ 'background-image': `url(${$_.get(cast.avatars, 'small')})` }"></div>
          <p class="cast-name">{{cast.name}}</p>
        </div>
      </div>

      <p class="movie-title">其他信息</p>

      <div class="other-info">
        <p class="movie-title">上映年份：
          <span class="movie-original-title">{{movieDetails.year}}</span>
        </p>
        <p class="movie-title">原网页链接：
          <a class="movie-original-title" :href="movieDetails.alt">点击查看</a>
        </p>
        <p class="movie-title">影片简介：
          <span class="movie-original-title">{{movieDetails.summary}}</span>
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
import _ from 'lodash'

export default {
  name: 'MovieDetails',
  computed: {
    movieDetails() {
      const movieId = this.$route.params.id
      // 当前电影
      const currentMovie = this.$store.state.movies.currentMovie
      
      if (movieId !== currentMovie.id) {
        return {}
      }

      return currentMovie
    }
  },
  async created() {
    console.log(this.$_.get, 'get')
    // 获取详情
    const movieId = this.$route.params.id
    this.$store.dispatch('getMovie', movieId)
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
    width: 75px;
    height: 75px;
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
    font-size: 14px;
    margin: 10px 0;
  }

  a {
    font-size: 14px;
  }

  span {
    font-size: 14px;
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
