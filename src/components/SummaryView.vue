<template>
	<div>
		<!-- <slot name="title"></slot> -->
		<ul>
			<li v-for="item in summary">
        <div class = 'test-font'>{{item.value}}</div>
        <!-- <div class = 'name_unit'>{{item.name}}({{item.unit}})</div> -->
			</li>
		</ul>
	</div>
</template>
<script>
  export default {
    name: 'SummaryView',
    props:{
      summary: {
        type: Array,
        default:()=>{return []}
      }
    }
  }
</script>
<style scoped lang="less">
  @import '../assets/font/ds-digital/ds-ditital.css';
  .position_box(@margin-left,@width){
    margin-left:@margin-left;
    width: @width
  }
    ul{
      padding: 0;
      margin: 0;
      margin-left:505px;
      li{
        list-style-type: none;
        //border:1px solid red;
        display: inline-block;
        // width: 16.6667%;
        text-align: center;
        // .value{
        //     font: bold 36px "Arial",Negreta;
        // }
        // .name_unit{
        //     font: bold 18px "Arial",Negreta;
        // }
        .test-font{
            font-family: 'ds-digital';
            font-size: 52px;
            color: blue;
        }
        &:nth-child(1){
          width: 250px;
        }
        &:nth-child(2){
          .position_box(110px,160px);
        }
        &:nth-child(3){
          .position_box(108px,232px);
          // margin-left:108px;
          // width: 232px;
        }
        &:nth-child(4){
          .position_box(105px,160px);
          // margin-left:105px;
          // width: 160px;
        }
        &:nth-child(5){
          .position_box(87px,125px);
          // margin-left:87px;
          // width: 125px;
        }
      }
    }
    
</style>
