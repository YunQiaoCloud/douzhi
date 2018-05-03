<template lang="html">
  <!-- <div v-if="movie.id" v-for="movie in rankList" :key="movie.id" class="movie-list-item">
    <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
      <div class="cover" :style="{ 'background-image': `url(${movie.images.small})` }"></div>
    </router-link>
    <p class="name">{{movie.title}}</p>
    <p class="pubdate">{{movie.mainland_pubdate}}</p>
  </div> -->
  <p>asasdad,{{ movie.id }}</p>
</template>

<script>
export default {
  name: 'RankList',
  data() {
    return {
      movie: {
        id: null
      }
    }
  },
  computed: {
    rankList() {
      console.log(this.$store.state.ranks.list);
      return this.$store.state.ranks.list
    }
  },
  async created() {
    // store 执行获取 movies
    this.$store.dispatch('getRanks')
  }
}
</script>

<style lang="scss">
</style>
