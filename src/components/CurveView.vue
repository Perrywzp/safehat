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
  import Echarts from 'echarts';
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
      choseType:'week',
      
      line: {
        grid:{
          show:true,
          borderColor:'#34508C',
          // backgroundColor:'#34508C'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine:{  
            show:true,
            lineStyle:{
              color: '#34508C'
            }
          },
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
          splitLine:{  
            show:true,
            lineStyle:{
              color: '#34508C'
            }
          },
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
            symbol:'none',//去掉点
            smooth:true,
            itemStyle:{
              normal:{
                areaStyle:{
                  type:'default',
                  color: new Echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(255,0,0,1)'},
                        {offset: 0.7, color: 'rgba(55,29,86,0.7)'},
                        {offset: 1, color: 'rgba(0,0,0,0)'}
                    ]
                  )
                }
              }
            },
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }),

    methods: {
      switchType(type){
        this.choseType = type;
        this.changeChart(type);
      },
      changeChart(type){
        this.line.xAxis.data = this.putHatRate[type].map(item => item.name)
        this.line.series[0].data = this.putHatRate[type].map(item => item.value)
      }
    },
     mounted(){
      this.switchType("week");
    }
  };
</script>

<style scoped lang="less">
@import '../common/less/icons.less';
  .echarts {
    width: 770px;
    height: 344px;
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
      display: block;
      padding: 0;
      margin: 0;
      list-style: none;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      width: 208px;
      height: 36px;
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
        &.active {
          color:#20f0fd;
          background-color:rgba(116,180,220,0.2); 
        }
      }
    }
  }
  
</style>
