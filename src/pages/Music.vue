<template>
  <div class="music-list">
    <h1 class="music-list-title">音乐</h1>
    <div v-for="item in musicList" :key="item.token" class="music-list-item">
      <div class="cover" :style="{ 'background-image': `url(${item.cover})` }"></div>
      <p class="name">{{item.name}}</p>
      <p class="location">{{item.location}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      musicList: [
        {
        token: '111',
        name: 'Mary Burgess',
        gender: 'female', // male or
        age: '21',
        location: 'Steattle, USA',
        cover: 'http://i0.sinaimg.cn/ent/y/2008-01-25/U107P28T3D1891962F326DT20080125115731.jpg'
      },
        {
        token: '1112',
        name: 'Mary Burgess',
        gender: 'female', // male or
        age: '21',
        location: 'Steattle, USA',
        cover: 'http://i0.sinaimg.cn/ent/y/2008-01-25/U107P28T3D1891962F326DT20080125115731.jpg'
      }
      ]
    }
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

    .location {
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 16px;
      color: #9b9b9b;
    }
  }
</style>
