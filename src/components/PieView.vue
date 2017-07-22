<template>
  <div>
    <slot name="title"></slot>
    <div class="echarts">
      <IEcharts :option="getPie" :resizable="true"></IEcharts>
    </div>
    <ul class="legend">
      <li v-for="item in pieData">
        <span>{{item.name}}</span>
        <strong>{{item.value}}</strong>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.vue';
  export default {
    name: 'PieView',
    components: {
      IEcharts
    },
    props: {
        pieData:{
            type: Array,
            default: () => []
        }
    },
    computed: {
      getPie(){
          return {
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
              {
                type: 'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data: this.pieData,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
      }
    }
  };
</script>

<style scoped lang="less">
  .echarts {
    width:250px;
    height: 250px;
  }
  .legend{
    position: absolute;
    right: 0;
    top: 80px;
    padding: 0;
    width: 160px;
    li{
      line-height: 30px;
    }
  }
</style>
