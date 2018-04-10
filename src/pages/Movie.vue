<template>
  <div class="movie-list">
    <h1 class="movie-list-title">音乐</h1>
    <div v-for="item in movieList" :key="item.token" class="movie-list-item">
      <div class="cover" :style="{ 'background-image': `url(${item.cover})` }"></div>
      <p class="name">{{item.name}}</p>
      <p class="location">{{item.location}}</p>
    </div>
    <p>{{ data }}</p>
    <!-- <button @click="myajax" type="button" name="button">test</button> -->
  </div>
</template>

<script>

export default {

  name: 'Movie',
  data() {
    return {
      data: ''
    }
  },
  created: function() {
    let url = 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid='

    this.$axios.get(url).then(res => {
        console.log("获取信息成功");
        console.log(res.data);
    })
  }
  // methods: {
  //   myajax: function() {
  //     let url = 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd'
  //
  //     this.$http.get(url).then(response => {
  //         console.log("获取信息成功");
  //         console.log(response);
  //     }, response => {
  //         console.log("获取信息失败");
  //         console.log(response);
  //     })
  //   }
  // }
}
</script>

<style lang="css">
</style>
