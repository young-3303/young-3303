<template>
<div class="equipment">
  <span class="info3">和对讲&nbsp;APP/PC</span>
  <span class="word4">
    TALK&nbsp;TO&nbsp;EACH&nbsp;OTHER
  </span>
  <span class="word5">
    和对讲是一款方便语音对讲的软件，为用户量身打造的即时通信工具，改变微信语音聊天需要不断点击的通信方式，
          <br />
    一对多发起实时语音对讲，黑屏状态下也能听到对讲语音，可设置群组成员，在线就可以随时保持通信状态。
  </span>
  <img style="margin-top: 20px" src="@/assets/img/equipment.png" alt="">
  <img src="@/assets/img/equipment1.png" alt="">
</div>
</template>

<script>
export default {
  name: "equipment"
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
  width: 207px;
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