<template>
  <div>
    <LayoutView>
      <div slot="overview"></div>
      <div slot="event"></div>
      <div slot="unusual">
        <unusual></unusual>
      </div>
      <div slot="hatNum"></div>
      <div slot="putHatRank"></div>
      <div slot="putHatRate"></div>
    </LayoutView>
  </div>
</template>

<script>
  import LayoutView from '../components/LayoutView.vue'
  import Unusual from '../components/Unusual'
  export default {
    name: 'hello',
    data () {
      return {

      }
    },
    components:{
      Unusual,
      LayoutView
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
