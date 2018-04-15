<template>
  <div class="movie-list">
    <h1 class="movie-list-title">电影</h1>
    <div v-for="movie in movies" :key="movie.id" class="movie-list-item">
      <div class="cover" :style="{ 'background-image': `url(${movie.images.small})` }"></div>
      <p class="name">{{movie.title}}</p>
      <p class="pubdate">{{movie.mainland_pubdate}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Movies',
  computed: {
    movies() {
      // 计算属性返回 store 里的数据
      console.log(this.$store)
      return this.$store.state.movies.list
    }
  },
  async created() {
    // store 执行获取 movies
    this.$store.dispatch('getMovies')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .movie-list {
    padding: 1px 16px;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-attachment: fixed;
    background-image: linear-gradient(212deg, rgba(0, 202, 157, 0.99), #aeefaa 69%, #fbffc1);
  }

  .movie-list-title {
    margin-top: 30px;
    margin-bottom: 20px;
    letter-spacing: 0.3px;
    color: #fff;
    font-weight: 400;
    font-size: 34px;
  }

  .movie-list-item {
    margin: 0 0 30px;
    height: 70vh;
    border-radius: 13px;
    overflow: hidden;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.08);

    .cover {
      width: 100%;
      height: 70%;
      background-repeat: no-repeat;
      background-position: center 15%;
      background-size: cover;
    }

    .name {
      margin-top: 45px;
      margin-bottom: 4px;
      font-size: 24px;
    }

    .pubdate {
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 16px;
      color: #9b9b9b;
    }
  }
</style>
