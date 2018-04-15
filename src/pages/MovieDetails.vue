<template lang="html">
  <div class="movie-list">
    <h1 class="movie-list-title">电影</h1>
    <div class="movie-list-item">
      <div class="cover" :style="{ 'background-image': `url(${movieDetails.images.small})` }"></div>
      <p class="name">{{movieDetails.title}}</p>
      <p class="pubdate">{{movieDetails.mainland_pubdate}}</p>
      <p>{{movieDetails.id}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  computed: {
    movieDetails() {
      // 计算属性返回 store 里的数据
      //console.log(this.$store.state.movies.list);
      let movieDetails = this.$store.state.movies.list[0]
      const array = this.$store.state.movies.list
      let resultArr = []
      for(let movie of array) {
        console.log(movie);
        console.log(movieDetails.id);
        // if (movie.id = movieDetails.id) {
        //   resultArr.push(movie)
        //   // console.log(resultArr);
        //   return movie
        // }
      }
      // console.log(movie);
      //resultArr.push(movie)
      // array.forEach((id) => {
      //   console.log(id.id)
      //   resultArr.push(id)
      // })
      console.log(resultArr);
      return movieDetails
    }
  },
  async created() {
    // store 执行获取 movies
    this.$store.dispatch('getMovies')
  }
}
</script>

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
