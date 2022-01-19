<template>
  <div class="car">
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
    <div class="Pager">
      <span>prev</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>Next</span>
    </div>
    <div class="subFoot">
      <p>©cimore&nbsp;2018-2021</p>
      <p>粤ICP备2021116722号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "car",
  data() {
    return {
      imgList: [
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng43cc9cea37501c7a1aa3203a19ef23ddb998f68051f840c3f8f84f7f5d233794'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb3d382d54e7c3ba5ac8f9afe663377b1a52d3d421086e6a3d486ae0045246f18'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngde0413c6c4029e26ffdfcba3aa9eeb265fa29dc45a75d9da8d697e551353bd73'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5d0a38e9a0cf115ef897ac42ed52c3a64870ab76edd373731196049d14cd0d86'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng43cc9cea37501c7a1aa3203a19ef23ddb998f68051f840c3f8f84f7f5d233794'},
        {
          url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0b8a0c3f6c6e724bc9871ba0593f451afe53e516e4c7857a6ff58adde52efa67',
          size: 'large'
        },
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8b697ac6adb8290033015097f447f24beb8dc38f8e7a28ba177baefdc8de46ad'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng50fa4c388f611a4d8b3dab8c5c1ab3b150efa71c498ba19db479140b26290c97'},
        {url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb3d382d54e7c3ba5ac8f9afe663377b1a52d3d421086e6a3d486ae0045246f18'}
      ],
    }
  }
}
</script>

<style scoped lang="less">
.car {
  flex: 1;
  .imgList {
    //margin-top: 62px;
    width: 1196px;
    .imgItem {
      width: 296px;
      height: 200px;
    }
  }
  .Pager {
    margin-bottom: 240px;
    span {
      font-size: 18px;
      font-family: SimSong-Regular, SimSong;
      font-weight: 400;
      color: #000000;
      margin-right: 26px;
    }
  }
  .subFoot {
    p {
      margin: 0;
      &:nth-child(1) {
        font-size: 12px;
        font-family: SimSong-Regular, SimSong;
        font-weight: 400;
        color: #999999;
        line-height: 22px;
      }
      &:nth-child(2) {
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        font-family: SimSong-Regular;
        //text-align: left;
        white-space: nowrap;
        line-height: 22px;
      }
    }
  }
}
</style>