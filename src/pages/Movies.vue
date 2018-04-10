<template>
  <div class="music-list">
    <h1 class="music-list-title">电影</h1>
    <div v-for="item in list" :key="item.id" class="music-list-item">
      <div class="cover" :style="{ 'background-image': `url(${item.images.small})` }"></div>
      <p class="name">{{item.title}}</p>
      <p class="pubdate">{{item.mainland_pubdate}}</p>
    </div>
    <h1 class="music-list-title">电影2</h1>
    <div v-for="item in list2" :key="item.id2" class="music-list-item">
      <div class="cover" :style="{ 'background-image': `url(${item.images.small})` }"></div>
      <p class="name">{{item.title}}</p>
      <p class="name">{{item.durations}}</p>
      <p class="pubdate">{{item.original_title}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Movies',
  data() {
    return {
      list: [
        {
          iod: '',
          title: '',
          mainland_pubdate: '',
          images: {}
        }
      ],
      list2: [
        {
          iod: '',
          title: '',
          durations: '',
          original_title: '',
          images: {}
        }
      ]
    }
  },
  created: function() {
    let url = '/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=5&client=&udid='

    axios.get(url).then(res => {
        console.log("获取信息成功");
        console.log(res.data);
        this.list2 = res.data.subjects
        console.log("获取信息结束")
    })
  },
  async mounted() {
    console.log('1');
    const res = await axios.get('/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=3&client=&udid=')
    this.list = res.data.subjects
    console.log('2');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .music-list {
    padding: 1px 16px;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-attachment: fixed;
    background-image: linear-gradient(212deg, rgba(0, 202, 157, 0.99), #aeefaa 69%, #fbffc1);
  }

  .music-list-title {
    margin-top: 30px;
    margin-bottom: 20px;
    letter-spacing: 0.3px;
    color: #fff;
    font-weight: 400;
    font-size: 34px;
  }

  .music-list-item {
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
