<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <ul class="switch-btn">
        <li :class="{active:choseType=='day'}" @click="switchType('day')">日</li>
        <li :class="{active:choseType=='week'}" @click="switchType('week')">周</li>
        <li :class="{active:choseType=='month'}" @click="switchType('month')">月</li>
      </ul>
    </div>
    <div class="echarts">
      <IEcharts :option="line" :resizable="true"></IEcharts>
    </div>

  </div>

</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.vue';
  export default {
    name: 'CurveView',
    components: {
      IEcharts
    },
    props: {
      putHatRate: {
        type: Object
      }
    },
    data: () => ({
      choseType: 'day',
      line: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },

        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }),
    mounted(){
      this.line.xAxis.data = this.putHatRate.day.map(item => item.name)
      this.line.series[0].data = this.putHatRate.day.map(item => item.value)
    },
    methods: {
      switchType(type){
        this.choseType = type;
        this.line.xAxis.data = this.putHatRate[type].map(item => item.name)
        this.line.series[0].data = this.putHatRate[type].map(item => item.value)
      }
    }
  };
</script>

<style scoped lang="less">
  .echarts {
    width: 450px;
    height: 250px;
  }

  .title {
    position: relative;
    height: 45px;
    line-height: 45px;
  }

  ul.switch-btn {
    position: absolute;
    top:0;
    right: 0;
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 165px;
    height: 45px;
    line-height: 45px;
    border-radius: 5px;
    border: 1px solid #ccc;
    li {
      float: left;
      cursor: pointer;
      width: 53px;
      height: 44px;
      padding: 0;
      margin: 0;
      line-height: 44px;
      text-align: center;
      border-right: 1px solid #ccc;
      &:last-child {
        border-right: none;
      }
      &.active {
        color: red;
      }
    }
  }
</style>
