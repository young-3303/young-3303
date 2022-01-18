<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img src="../../public/images/logo.png" alt="">
      </div>
      <div class="menu"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="less">
  .home {
    display: flex;
    width: 1440px;
    height: 950px;
    margin: 0 auto;
    background: #ffffff;
  }
</style>
