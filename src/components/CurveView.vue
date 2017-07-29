<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <div class="switch-box">
        <div class="icons-switch-bg">
          <ul class="switch-btn">
            <li :class="{active:choseType=='day'}" @click="switchType('day')">日</li>
            <li :class="{active:choseType=='week'}" @click="switchType('week')">周</li>
            <li :class="{active:choseType=='month'}" @click="switchType('month')">月</li>
          </ul>
        </div>
      </div>
      
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
        // legend:{
        //   textStyle:{    //图例文字的样式
        //     color:'#fff',
        //     fontSize:12
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle: {
                color: '#fff',
                //fontSize:'16'
            }
          },    
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },

        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
                color: '#fff',
                //fontSize:'16'
            }
          },
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
      this.changeChart('day');
    },
    methods: {
      switchType(type){
        this.choseType = type;
        this.changeChart(type);
      },
      changeChart(type){
        this.line.xAxis.data = this.putHatRate[type].map(item => item.name)
        this.line.series[0].data = this.putHatRate[type].map(item => item.value)
      }
    }
  };
</script>

<style scoped lang="less">
@import '../common/less/icons.less';
  .echarts {
    width: 770px;
    height: 320px;
  }

  .title {
    position: relative;
    height: 36px;
    line-height: 36px;
  }
  .switch-box{
    position: absolute;
    top:0;
    right: 0px;
    width: 208px;
    height: 36px;
    ul.switch-btn { 
      // position: absolute;
      
      // right: 0;
      display: block;
      padding: 0;
      margin: 0;
      list-style: none;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      width: 208px;
      height: 36px;
      //line-height: 36px;
      //border-radius: 5px;
      //border: 1px solid #ccc;
      li {
        color: #fff;
        float: left;
        cursor: pointer;
        width: 68px;
        height: 36px;
        padding: 0;
        margin: 0;
        line-height: 36px;
        text-align: center;
        //border-right: 1px solid #ccc;
        // &:last-child {
        //   border-right: none;
        // }
        &.active {
          color:blue;
          background-color:rgba(0,0,0,0.5); 
        }
      }
    }
  }
  
</style>
