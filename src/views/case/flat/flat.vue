<template>
<div class="flat">
  <span class="info3">最美聆诵小程序</span>
  <span class="word4">
    LISTENING&nbsp;APPLET
  </span>
  <span class="word5">
   聆诵小程序内设丰富的大量朗读文章，用户可以任意挑选自己喜欢的背景音乐和动态背景画面，场景化的朗读文章更加充满感情和色彩；
          <br />
          定期的线上朗读比赛活动，吸引了大量的用户，例如：学校师生线上朗读比赛，机关单位读党史等；
          <br />
  </span>
  <img style="margin-top: 20px" src="@/assets/img/flat1.png" alt="">
  <img src="@/assets/img/flat2.png" alt="">
</div>
</template>

<script>
export default {
  name: "flat"
}
</script>

<style scoped lang="less">
.info3 {
  width: 275px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  letter-spacing: 1.2000000476837158px;
  font-family: SimSong-Bold;
  text-align: left;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.word4 {
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  letter-spacing: 0.4000000059604645px;
  font-family: SimSong-Regular;
  text-align: left;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  margin-bottom: 20px;
}
.word5 {
  width: 666px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  letter-spacing: 0.800000011920929px;
  font-family: SimSong-Regular;
  text-align: left;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
</style>