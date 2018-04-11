<template>
  <div id="app" class="app">
    <router-view/>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './components/Tab'

export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="scss">
// 基础颜色与 mixin 都定义在 index，index 必须在所有scss之前引用
@import url('../static/index.scss');
@import url('../static/normalize.scss');

.app {
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 70px;
}
</style>
