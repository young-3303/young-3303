<template>
  <div class="case">
    <h1>case</h1>

  </div>
</template>

<script>
export default {
  name: "case",
  data() {
    return {
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
                },
                {
                  level: 3,
                  title: 'TV电视',
                },
                {
                  level: 3,
                  title: '智能设备',
                },
                {
                  level: 3,
                  title: 'Web端',
                },
                {
                  level: 3,
                  title: 'Molile & H5',
                },
                {
                  level: 3,
                  title: '品牌 & 平面',
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
