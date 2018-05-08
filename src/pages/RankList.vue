<template>
  <div class="rank-list">
    <h1 class="rank-list-title">榜单
      <router-link :to="{ name: 'MovieSearch' }">
        <i class="icon-search"></i>
      </router-link>
    </h1>

    <div class="rank-tab">
      <ul>
        <li v-for="(tabName, index) in tabList"
            :key="tabName"
            @click="active = index"
            :class="{ active: index === active}">{{tabName}}</li>
      </ul>
    </div>

    <div v-if="movie.id" v-for="movie in rankList" :key="movie.id" class="rank-list-item">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
        <div class="cover" :style="{ 'background-image': `url(${movie.images.small})` }"></div>
      </router-link>
      <p class="info">
        <span class="name">{{movie.title}}</span>
        <i class="grades">{{movie.rating.average}}</i>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'rankList',
  data() {
    return {
      active: -1,
      tabList: [
        'Top250',
        '口碑榜',
        '北美票房榜',
        '新片榜'
      ],
      movie: {
        images: {
          small: ''
        },
        rating: {
          average: ''
        },
        id: null,
      }
    }
  },
  computed: {
    rankList() {
      switch (this.active) {
        case 0:
          return this.$store.getters.setRanksTop250
          break;
        case 1:
          console.log(this.$store.getters.setRanksWeekly);
          return this.$store.getters.setRanksWeekly
          break;
        case 2:
          return this.$store.getters.setRanksUS
          break
        case 3:
          return this.$store.getters.setRanksNew
          break;
        default:
          console.log('123');
      }
    }
  },
  watch: {
    active(index) {
      // 监听到切换了 index
      console.log(index)

      // 根据 index 获取不同的数据
      switch (index) {
        case 0:
          this.$store.dispatch('getRanksTop250')
          break;
        case 1:
          this.$store.dispatch('getRanksWeekly')
          break;
        case 2:
          this.$store.dispatch('getRanksUS')
          break
        case 3:
          this.$store.dispatch('getRanksNew')
          break;
        default:
          console.log('123');
      }
    }
  },
  mounted() {
    this.active = 0
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .rank-list {
    padding: 1px 16px;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-attachment: fixed;
    background-color: #f5f5f5;
  }

  .rank-list-title {
    margin-top: 30px;
    margin-bottom: 20px;
    letter-spacing: 0.3px;
    color: #333;
    font-weight: 400;
    font-size: 34px;
    line-height: 30px;

    .icon-search {
      float: right;
      display: flex;
      width: 50px;
      height: 30px;
      background-image: url('../assets/search-black.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .rank-tab {
    overflow: hidden;
    margin-bottom: 20px;

    ul {
      margin: 0;

      li {
        width: calc(25% - 10px);
        height: 30px;
        padding: 5px 0;
        margin: 0 5px;
        font-weight: bold;
        float: left;
        text-align: left;
      }

      .active {
        border-bottom: 2px solid #80DDA0;
      }
    }
  }

  .rank-list-item {
    width: calc(50% - 10px);
    margin: 0 5px 10px 5px;
    height: 30vh;
    border-radius: 8px;
    overflow: hidden;
    background: linear-gradient(white, white);
    text-align: center;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.08);
    float: left;

    .cover {
      width: 100%;
      height: 85%;
      background-repeat: no-repeat;
      background-position: center 15%;
      background-size: cover;
    }

    .info {
      width: 100%;
      margin: 0;
      padding: 5px 10px;
      font-size: 14px;
      overflow: hidden;

      .name {
        width: 75%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        float: left;
      }

      .grades {
        font-size: 16px;
        color: #FE2A3C;
        float: right;
      }
    }

  }
</style>
