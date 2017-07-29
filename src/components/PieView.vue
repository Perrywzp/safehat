<template>
  <div>
    <slot name="title"></slot>
    <div class="echarts" ref="echartsDom">
      <IEcharts :option="getPie" :resizable="true"></IEcharts>
    </div>
    <ul class="legend" ref="pieDom">
      <li v-for="(item,index) in pieData">
        <span class="legend-span" v-bind:style="{backgroundColor:colors[index]}" ></span>
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
        colors:{
          type: Array,
          default:()=>{return ['#aad','#dds','#c3s']}
        },
        pieData:{
            type: Array,
            default: () => []
        },
        pos:{
          type: Object,
          default:()=>{
            return {
              left: 20 ,
              bottom: 30
            }
          }
        },

        echartsPos:{
          type: Object,
          default:()=>{
            return {
              marginLeft: 20 ,
              marginTop: 30
            }
          }
        }
    },
    mounted(){
      this.$refs.pieDom.style.left = this.pos.left +'px';
      this.$refs.pieDom.style.bottom = this.pos.bottom +'px';
      //console.log(this.pos.left);
      //console.log(this.$refs.pieDom.style.left);
      this.$refs.echartsDom.style.marginLeft = this.echartsPos.marginLeft +'px';
      this.$refs.echartsDom.style.marginTop = this.echartsPos.marginTop +'px';

      console.log(length);


    },
    computed: {
      getPie(){
          return {
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: this.colors,
            series : [
              {
                type: 'pie',
               // radius : '55%',
                center: ['50%', '50%'],
                radius:['51%','89%'],
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
    // margin-left:280px;
    // margin-top:16px;
  }
  .legend{
    position: absolute;
    // left: 121px;
    // bottom: 12px;
    padding: 0;
    width: 160px;
    li{
      
      list-style-type: none;
      line-height: 30px;
      color: #fff; 
      .legend-span{
        display: inline-block;
        width: 12px;
        height: 12px;
        //background-color: #ccc;
      }
      strong{
        position: absolute;
        right:0;
      }      
    }
  }
</style>
