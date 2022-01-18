<template>
  <div id="app">
    <div class="nav">
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
      <div class="header">
        <div class="header-l">
          <div class="logo">
            <img src="../public/images/logo.png" alt="">
          </div>
          <div class="menu">
            <div @click="go(item)" class="menu-list" v-for="item in menuList" :key="item.id">
              {{ item.title }}
            </div>
          </div>
        </div>
        <div class="header-r">
          <div class="tel">
            <img src="../public/images/tel.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {id: 1, title: '西墨'},
        {id: 2, title: '关于'},
        {id: 3, title: '案例'},
        {id: 4, title: '联系'}
      ],
    }
  },
  methods: {
    go(val) {
      if(val.id === 1) {
        this.$router.push({name: 'Home'})
      } else {
        this.$router.push({path: '/about'})
      }
    }
  }
}
</script>

<style lang="less">
.header {
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 14px;
  .header-l {
    display: flex;
    align-items: center;
  }
}
.logo {
  margin-right: 35px;
}
.menu {
  display: flex;
  font-size: 14px;
  color: #000000;
  font-family: SimSong-Bold;
  .menu-list {
    cursor: pointer;
    margin-right: 20px;
    &:nth-child(4) {
      margin-right: 0;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
