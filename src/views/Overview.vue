<template>
  <div>
    <LayoutView>
      <div slot="overview"></div>
      <div slot="event"></div>
      <div slot="unusual">
        <pie-view :pieData="unusual">
          <h3 slot="title">异常事件</h3>
        </pie-view>
      </div>
      <div slot="hatNum">
        <pie-view :pieData="hatNum">
          <h3 slot="title">各组安全帽在线数</h3>
        </pie-view>
      </div>
      <div slot="putHatRank"></div>
      <div slot="putHatRate">
        <unusual></unusual>
      </div>
    </LayoutView>
  </div>
</template>

<script>
  import LayoutView from '../components/LayoutView.vue'
  import Unusual from '../components/Unusual'
  import PieView from '../components/PieView.vue'
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
      this.axios.all(_.values(OverviewApi).map((url)=> { return this.axios.get(url)}))
        .then((results) =>{
          console.log(results);
          this.$nextTick(function(){
            this.overview = results[0].data.data; // 总览
            this.event = results[1].data.data;  // 事件中心
            this.unusual = results[2].data.data;  // 异常事件
            this.hatNum = results[3].data.data;  // 各组安全帽在线数
            this.putHatRank = results[4].data.data;  // 排名
            this.putHatRate = results[5].data.data;  // 日周月带帽率
          })
        })
    },
    components:{
      Unusual,
      LayoutView,
      PieView
    }
  }
</script>

<style lang="less">
  @import '../common/css/grid-layout.css';
  .fill-10 {
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
