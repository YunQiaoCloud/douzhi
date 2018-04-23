<template lang="html">
  <div class="movie-search">
    <div class="movie-search-title">
      <p><span class="movie-search-back" v-on:click="back"></span>搜索电影</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSearch',
  methods: {
    back() {
      this.$router.go(-1)
    }
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
