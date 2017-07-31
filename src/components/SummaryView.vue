<template>
	<div>
		<!-- <slot name="title"></slot> -->
		<ul>
			<li v-for="(item,index) in summary" ref="summaryLi" v-if="index!=2" >
        <div class = 'test-font'>{{item.value}}64564564765868<span v-if="index==0 || index==3">/{{summary[2].value}}</span></div>
        <!-- <div class = 'name_unit'>{{item.name}}({{item.unit}})</div> -->
			</li>
		</ul>
	</div>
</template>
<script>
  import PS from 'perfect-scrollbar'
  export default {
    name: 'SummaryView',
    props:{
      summary: {
        type: Array,
        default:()=>{return []}
      }
    },
    mounted(){
      PS.initialize(this.$refs.summaryLi,{minScrollbarLength:20});
    }
  }
</script>
<style scoped lang="less">
  @import '../assets/font/ds-digital/ds-ditital.css';
  //@import '../../node_modules/element-ui/lib/theme-default/index.css';
  //@import '../../node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.css';
  .position_box(@margin-left,@width){
    position:relative;
    overflow:hidden;
    margin-left:@margin-left;
    width: @width
  }
    ul{
      padding: 0;
      margin: 0;
      margin-left:505px;
      li{
        list-style-type:none;
        display:inline-block;
        text-align:center;
        .test-font{
            font-family: 'ds-digital';
            font-size: 52px;
            color: #4EC6FE;
        }
        &:nth-child(1){
          width: 250px;
          position:relative;
          overflow:hidden;
        }
        &:nth-child(2){
          .position_box(110px,160px);
        }
        &:nth-child(3){
          .position_box(108px,232px);
        }
        &:nth-child(4){
          .position_box(105px,160px);
        }
        &:nth-child(5){
          .position_box(87px,125px);
        }
      }
    }
    
</style>
