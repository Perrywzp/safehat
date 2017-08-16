<template>
  <div>
    <slot name="title"></slot>
    <div class="echarts" ref="echartsDom">
      <IEcharts :option="getPie" :resizable="true"></IEcharts>
    </div>
    <ul class="legend" ref="pieDom">
      <li v-for="(item, index) in pieData">
        <span class="legend-span" v-bind:style="{backgroundColor:colors[index]}" ></span>
        <span>{{item.name}}</span>
        <strong>{{formatVal(item)}}</strong>
      </li>
    </ul>
  </div>
</template>

 <script type="text/babel">
  import PS from 'perfect-scrollbar'
  import IEcharts from 'vue-echarts-v3/src/full.vue';
  export default {
    name: 'PieView',
    components: {
      IEcharts
    },
    props: {
        modelFlag:{
          type: String,
          default: ()=>''
        },
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
      this.$refs.echartsDom.style.marginLeft = this.echartsPos.marginLeft +'px';
      this.$refs.echartsDom.style.marginTop = this.echartsPos.marginTop +'px';
      PS.initialize(this.$refs.pieDom,{
        minScrollbarLength:20
      });
    },
    methods: {
      formatVal(item){
        return this.modelFlag === 'check' && item.value + '/' + item.total || item.value;
      },
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
                center: ['50%', '50%'],
                radius:['51%','89%'],
                data: this.pieData,
                label:{ normal: { show: false}}
              }
            ]
          }
      }
    }
  };
</script>

<style scoped lang="less">
  @import '../common/less/icons.less';
  .echarts {
    width:250px;
    height: 250px;
  }
  .title-png{
    position: absolute;
    right: 30px;
    top: 20px;
    width: 108px;
    height: 27px;
    background-image: url("/static/image/pos.png")
  }
  .legend{
    position: absolute;
    height: 121px;
    overflow: hidden;
    padding: 0;
    width: 176px;
    li{

      list-style-type: none;
      line-height: 30px;
      color: #fff;
      .legend-span{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right:10px;
      }
      strong{
        position: absolute;
        right:16px;
        color: #02f0fd;
      }
    }
  }
</style>
