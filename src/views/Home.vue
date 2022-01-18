<template>
  <div class="home">
    <div class="header">
      <div class="header-l">
        <div class="logo">
          <img src="../../public/images/logo.png" alt="">
        </div>
        <div class="menu">
          <div class="menu-list" v-for="item in menuList" :key="item.id">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="header-r">
        <div class="tel">
          <img src="../../public/images/tel.png" alt="">
        </div>
      </div>
    </div>
    <div class="main">
      <div class="swiper-box">

      </div>
      <div class="word3">坚持以创新设计、专业技术为核心，为企业提供定制解决方案</div>
      <div class="word5">
        产品策略/需求分析、用户体验设计、交互与视觉设计、软件设计开发
      </div>
      <div class="recommend">
        <div class="recommend-list" v-for="(item, index) in reList" :key="index">
          <img :src="item.imgUrl" alt="">
          <div class="info" v-html="item.info">
          </div>
        </div>
      </div>
      <div class="CLASSIC">
        <span>经典案例</span>
        <span>CLASSIC&nbsp;CASES</span>
      </div>
      <div class="imgList">
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px">
          <div class="imgItem">
            <img :src="imgList[0].url" alt="">
          </div>
          <div class="imgItem">
            <img :src="imgList[1].url" alt="">
          </div>
          <div class="imgItem">
            <img :src="imgList[2].url" alt="">
          </div>
          <div class="imgItem">
            <img :src="imgList[3].url" alt="">
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;">
          <div class="imgItem">
            <img :src="imgList[4].url" alt="">
          </div>
          <div class="imgItem" style="width: 592px; height: 412px">
            <img :src="imgList[5].url" alt="">
          </div>
          <div class="imgItem">
            <img :src="imgList[6].url" alt="">
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; transform: translateY(-200px);">
          <div class="imgItem">
            <img :src="imgList[7].url" alt="">
          </div>
          <div class="imgItem">
            <img :src="imgList[8].url" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      menuList: [
        {id: 1, title: '西墨'},
        {id: 2, title: '关于'},
        {id: 3, title: '案例'},
        {id: 4, title: '联系'}
      ],
      reList: [
        {
          imgUrl: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng97483234a3371e479b3674b5b9ed79fca740204c569e242efd3d237a474d7dad',
          info: 'logo设计、企业VI体系、平面广告设计、运营广告设计'
        },
        {
          imgUrl: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3d1cd43359995a0e570a83100634026537e317b1513bf9ae1d83acea88e03b67',
          info: '基于用户研究分析,建立符合用户使用场景和需求场景的交互原型,打造产品定制化视觉设计'
        },
        {
          imgUrl: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng63242cc3620490beb465b136776e1656bbcec13b0fb12dc4a9234080f8c21f58',
          info: '解决产品用户痛点,满足用户需求<br />提升产品创新体验和商业价值'
        },
        {
          imgUrl: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1fa175f2878431c1f79bd567b4df0ee26b2b29b0cd41f883e7bd47a4ac13a1c1',
          info: '基于用户研究分析,建立符合用户使用场景和需求场景的交互原型'
        }
      ],
      imgList: [
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng43cc9cea37501c7a1aa3203a19ef23ddb998f68051f840c3f8f84f7f5d233794'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb3d382d54e7c3ba5ac8f9afe663377b1a52d3d421086e6a3d486ae0045246f18'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngde0413c6c4029e26ffdfcba3aa9eeb265fa29dc45a75d9da8d697e551353bd73'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5d0a38e9a0cf115ef897ac42ed52c3a64870ab76edd373731196049d14cd0d86'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng43cc9cea37501c7a1aa3203a19ef23ddb998f68051f840c3f8f84f7f5d233794'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0b8a0c3f6c6e724bc9871ba0593f451afe53e516e4c7857a6ff58adde52efa67', size: 'large'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8b697ac6adb8290033015097f447f24beb8dc38f8e7a28ba177baefdc8de46ad'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng50fa4c388f611a4d8b3dab8c5c1ab3b150efa71c498ba19db479140b26290c97'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb3d382d54e7c3ba5ac8f9afe663377b1a52d3d421086e6a3d486ae0045246f18'}
      ]
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style scoped lang="less" src="./home.less">

</style>
