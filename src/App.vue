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
              <div class="activeLine" v-show="item.id === activeId"></div>
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
    <div class="fixedBox">
      <div class="serveItem">
        <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdda576b6775ca31db2babd6f3fa1edc4baa4b8c7c083f4c1b04b9bcd27ff1be9"
            alt="">
        <span class="paragraph1">
          在线
          <br/>
          客服
        </span>
      </div>
      <div class="serveItem">
        <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1784c17042123cbd15aa284fcbd007a3ca6d02eb16aacd8f471eed14c890bfcf"
            alt="">
        <span class="paragraph1">
          扫码
          <br/>
          咨询
        </span>
      </div>
      <div class="serveItem">
        <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng23f12467a1da56c97656695fb951f091753adae4a6a10c52d93f06aff2aa4e5c"
            alt="">
        <span class="paragraph1">
          关注
          <br/>
          我们
        </span>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeId: 1,
      menuList: [
        {id: 1, title: '西墨'},
        {id: 2, title: '关于'},
        {id: 3, title: '案例'},
        {id: 4, title: '联系'}
      ]
    };
  },
  methods: {
    go(val) {
      this.activeId = val.id;
      if (val.id === 1) {
        this.$router.push({name: 'Home'});
      } else if (val.id === 4) {
        this.$router.push({path: '/contact'});
      } else if (val.id === 2) {
        this.$router.push({name: 'About'});
      } else if (val.id === 3) {
        this.$router.push({name: 'case'});
      }
    }
  }
};
</script>

<style lang="less">
.fixedBox {
  background-color: rgba(33, 33, 33, 0.98);
  border-radius: 2px;
  height: 240px;
  padding-top: 14px;
  width: 50px;
  margin: 13px 0 0 80px;
  position: fixed;
  right: 0;
  top: 20%;
  z-index: 10;
  .serveItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 26px;
  }

  .paragraph1 {
    width: 22px;
    height: 24px;
    overflow-wrap: break-word;
    color: rgba(244, 244, 244, 1);
    font-size: 10px;
    letter-spacing: 1px;
    font-family: PingFangHK-Regular;
    text-align: center;
    line-height: 12px;
    white-space: nowrap;
    margin-top: 5px;
    display: block;
  }
}

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

  .activeLine {
    width: 42px;
    height: 1px;
    background: #000000;
    transform: translate(-6px, -10px);
    position: absolute;
    z-index: 1;
  }

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
  height: 100vh;
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
