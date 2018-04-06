<template>
  <div class="tab-list">
    <a href="javascript:;" class="tab-item">
      <i class="icon icon-music"></i>
      音乐
    </a>
    <a href="javascript:;" class="tab-item">
      <i class="icon icon-music"></i>
      书籍
    </a>
    <a href="javascript:;" class="tab-item">
      <i class="icon icon-music"></i>
      我的
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Tab',

  }
</script>

<style lang="scss">
  .tab-list {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    backdrop-filter: blur(10px);
    background-color: rgba(248,248,248, 0.97);
    box-shadow: 0 -0.5px 0 0 rgba(0, 0, 0, 0.3);

    .tab-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      color: #c1c0c9;
    }

    .icon {
      margin-bottom: 5px;
      display: flex;
      width: 18px;
      height: 22px;
      background-image: url('../assets/wallet@3x.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
</style>
