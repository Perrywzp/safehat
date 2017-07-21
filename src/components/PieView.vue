<template>
  <div>
    <slot name="title"></slot>
    <div class="echarts">
      <IEcharts :option="pie" :loading="loading" :resizable="true"></IEcharts>
    </div>
  </div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.vue';
  export default {
    name: 'view',
    components: {
      IEcharts
    },
    props: {
        pieData:{
            type: Array,
            default: () => []
        }
    },
    data: () => ({
      loading: true,
      pie: {
        title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: []
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[],
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
    }),
    mounted(){
      console.log(this.pieData);
    },
    computed: {
      getLegend: function(){
        return this.pieData.map((item)=> {return item.name})
      }
    }
  };
</script>

<style scoped>
  .echarts {
    width: 300px;
    height: 300px;
  }
</style>
