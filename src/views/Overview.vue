<template>
  <div>
    <LayoutView>
      <div slot="overview"></div>
      <div slot="event"></div>
      <div slot="unusual">
        <pie-view :pieData="unusual">
          <h3 slot="title">各组安全帽在线数</h3>
        </pie-view>
      </div>
      <div slot="hatNum">
        <pie-view :pieData="hatNum">
          <h3 slot="title">各组安全帽在线数</h3>
        </pie-view>
      </div>
      <div slot="putHatRank">
        <rank-view :rankData="putHatRank">
          <h3 slot="title">各组戴帽率排行</h3>
        </rank-view>
      </div>
      <div slot="putHatRate">
        <curve-view :putHatRate="putHatRate">
          <h3 slot="title">日／周／月戴帽率</h3>
        </curve-view>
      </div>
    </LayoutView>
  </div>
</template>

<script>
  import LayoutView from '../components/LayoutView.vue'
  import PieView from '../components/PieView.vue'
  import CurveView from '../components/CurveView.vue'
  import RankView from '../components/RankView.vue'
  import * as OverviewApi from '../apis/overview'
  import _ from 'lodash'
  export default {
    name: 'Overview',
    data () {
      return {
        overview: [],
        event: [],
        unusual: null,
        hatNum: null,
        putHatRank: null,
        putHatRate: null,
      }
    },
    created (){
      setInterval(()=>{
        this.axios.all(_.values(OverviewApi).map((url)=> { return this.axios.get(url)}))
          .then((results) =>{
            console.log(results);
//            this.$nextTick(function(){
              this.overview = results[0].data.data; // 总览
              this.event = results[1].data.data;  // 事件中心
              this.unusual = results[2].data.data;  // 异常事件
              this.hatNum = results[3].data.data;  // 各组安全帽在线数
              this.putHatRank = results[4].data.data;  // 排名
              this.putHatRate = results[5].data.data;  // 日周月带帽率
//            })
          })
      }, 5000);

    },
    components:{
      LayoutView,
      PieView,
      CurveView,
      RankView
    }
  }
</script>

<style lang="less">
  @import '../common/css/grid-layout.css';
  .fill-10 {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px 5px 10px;
  }
</style>
