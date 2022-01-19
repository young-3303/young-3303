<template>
  <div class="case">
<!--    <h1>case</h1>-->
    <div v-if="$route.name === 'car'" class="leftNav">
      <div class="level1">
        All Works
      </div>
      <div class="level2">
        Service
      </div>
      <div class="level3">
        <div class="item" @click="go(item)" v-for="item in MenuList[0].children[0].children" :key="item.title">
          {{item.title}}
        </div>
      </div>
    </div>
<!--    <div class="rightMain"></div>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "case",
  data() {
    return {
      activeNav: 'car',
      MenuList: [
        {
          level: 1,
          title: 'All Works',
          children: [
            {
              level: 2,
              title: 'Service',
              children: [
                {
                  level: 3,
                  title: '车载中控',
                  name: 'carControl'
                },
                {
                  level: 3,
                  title: 'TV电视',
                  name: 'tv'
                },
                {
                  level: 3,
                  title: '智能设备',
                  name: 'equipment'
                },
                {
                  level: 3,
                  title: 'Web端',
                  name: 'web'
                },
                {
                  level: 3,
                  title: 'Molile & H5',
                  name: 'H5'
                },
                {
                  level: 3,
                  title: '品牌 & 平面',
                  name: 'flat'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    go(val) {
      this.activeNav = val.name
      this.$router.push({name: val.name})
    }
  }
};
</script>

<style scoped lang="less" src="./case.less">

</style>
