<template>
  <div class="main-bg">
    <LayoutView>
      <div slot="summary" class="summary-box">
        <summary-view  :summary="summary">
          <!-- <h3 slot="title">总览</h3> -->
        </summary-view>
        <!-- <div class="test-font">1123123123</div> -->
      </div>
      <div slot="event" class="event-box">
        <event-view  :eventData="event">
          <!-- <h3 slot="title">事件中心</h3> -->
        </event-view>
      </div>
      <div slot="unusual" class="unusual-box">
        <pie-view :pieData="unusual" :colors="unusualColors" :pos="{'left': 67, 'bottom': -5}" :echartsPos="{'marginLeft':280,'marginTop':16}">
          <!-- <h3 slot="title">异常事件</h3> -->
        </pie-view>
      </div>
      <div slot="hatNum" class="hatNum-box" ref='hatNum-box'>
        <pie-view :colors="hatNumColors" :pieData="hatNum" :pos="{'left': 348, 'bottom': -5}" :echartsPos="{'marginLeft':41,'marginTop':17}">
          <!-- <h3 slot="title">各组安全帽在线数</h3> -->
        </pie-view>
      </div>
      <div slot="putHatRank" class="putHatRank">
        <rank-view :rankData="putHatRank">
          <!-- <h3 slot="title">各组戴帽率排行</h3> -->
        </rank-view>
      </div>
      <div slot="putHatRate" class="putHatRate">
        <curve-view :putHatRate="putHatRate">
          <!-- <h3 slot="title">日／周／月戴帽率</h3> -->
        </curve-view>
      </div>
    </LayoutView>
  </div>
</template>

<script>
  import LayoutView from '../components/LayoutView.vue'
  import SummaryView from '../components/SummaryView.vue'
  import PieView from '../components/PieView.vue'
  import CurveView from '../components/CurveView.vue'
  import RankView from '../components/RankView.vue'
  import EventView from '../components/EventView.vue'
  import * as OverviewApi from '../apis/overview'
  import _ from 'lodash'
  export default {
    name: 'Overview',
    data () {
      return {
        summary: [],
        event: [],
        unusual: null,
        hatNum: null,
        putHatRank: null,
        putHatRate: null,
        unusualColors:[],
        hatNumColors:[]
      }
    },
    created (){
//      setInterval(()=>{
        this.axios.all(_.values(OverviewApi).map((url)=> { return this.axios.get(url)}))
          .then((results) =>{
            console.log(results);
            this.$nextTick(function(){
              this.summary = results[0].data.data; // 总览
              this.event = results[1].data.data;  // 事件中心
              this.unusual = results[2].data.data;  // 异常事件
              this.hatNum = results[3].data.data;  // 各组安全帽在线数
              this.putHatRank = results[4].data.data;  // 排名
              this.putHatRate = results[5].data.data;  // 日周月带帽率
            })
          })
//      }, 5000);

      this.unusualColors = ['#ffea3e','#ffb901', '#24c7c6', '#6060ff', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
      //console.log(this.colors);
      this.hatNumColors = ['#feea3d','#ffb901', '#ff7345', '#2cda97', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];


    },
    components:{
      LayoutView,
      SummaryView,
      PieView,
      CurveView,
      RankView,
      EventView,
    }
  }
</script>

<style scoped lang="less">
  @import '../common/css/grid-layout.css';
  //@import '../assets/font/ds-digital/ds-ditital.css';
  //@import '../common/less/icons.less';
  .main-bg{
    background: url("../../static/image/bg.jpg") 0 0 no-repeat;
    height:1080px;
    width: 1920px;
    position: relative;
    .fill-10 {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0 10px 5px 10px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      &>div{
        height: 100%;
      }
      .summary-box{
        // border:1px solid red;
        padding-top:170px;
      }
      .event-box{
        padding-top:80px;
      }
      .unusual-box{
        padding-top:174px;
      }
      .hatNum-box{
         padding-top:174px;
      }
      .putHatRank{
        margin-top:120px;
        padding-left: 50px;
        height:290px;
      }
      .putHatRate{
        width: 690px;
        height: 320px;
        margin-top:53px;
        margin-right: -27px;
      }
    }
    // .test-font{
    //   font-family: 'ds-digital';
    //   font-size: 90px;
    //   color: orange;
    // }
  }

</style>
