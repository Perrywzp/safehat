<template>
	<div>
		<!-- <slot name="title"></slot> -->
		<ul ref="summaryUi" class='font-style'>
			<li>
        <div>{{summary.putHatNum}}<span>/{{summary.hatSum}}</span></div>
			</li>
      <li>
        <div>{{summary.putHatRate}}%</div>
			</li>
      <li>
        <div>{{summary.unusualNum}}<span>/{{summary.hatSum}}</span></div>
			</li>
      <li>
        <div>{{summary.unusualRate}}%</div>
			</li>
      <li>
        <div>{{summary.onlineGroup}}</div>
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
        type: Object,
        default:()=>{return {}}
      }
    },
    // created(){
    //   this.$nextTick(()=>{
          
    //       console.log(this.$refs.summaryLi);
    //       PS.initialize(this.$refs.summaryLi[0]);
    //     })  
    // },  

    // mounted(){    
    // //   console.log(this.$refs.summaryLi[0]);     
    //   this.$nextTick(()=>{
    //       // console.log(this.$refs.summaryUi.getElementsByTagName('li'));
    //       // console.log(this.$refs.summaryLi);
    //       // var oLi = this.$refs.summaryUi.getElementsByTagName('li');
    //       // console.log(oLi.length);

    //     PS.initialize(this.$refs.lis[0]); 

    //       // this.summary.forEach((item, index)=>{
    //       //   if(index == 1 || index == 3) return ;
    //       //   console.log(this.$refs.lis[index]);
    //       //   PS.initialize(this.$refs.lis[index]); 
    //       // })


    //   })    
    // }  
    // nextTick(){
    //   console.log(this.$refs.summaryUi.getElementsByTagName('li'));
    //       console.log(this.$refs.summaryLi);
    //       var oLi = this.$refs.summaryUi.getElementsByTagName('li');
    //       console.log(oLi.length);
    // }
    // forceUpdate(){
    //   console.log(this.$refs.summaryUi.getElementsByTagName('li'));
    //       console.log(this.$refs.summaryLi);
    //       var oLi = this.$refs.summaryUi.getElementsByTagName('li');
    //       console.log(oLi.length);  
    // }
      
      //PS.initialize(this.$refs.summaryLi[2],{minScrollbarLength:20});
      //PS.initialize(this.$refs.summaryLi[4],{minScrollbarLength:20});
    // }
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
      font-family: 'ds-digital';
      font-size: 52px;
      color: #4EC6FE;
      li{
        list-style-type:none;
        display:inline-block;
        text-align:center;
        span{
          font-size: 36px;
        }
        &:nth-child(1){
          width: 250px;
          position:relative;
          overflow:hidden;
        }
        &:nth-child(2){
          .position_box(116px,160px);
        }
        &:nth-child(3){
          .position_box(71px,232px);
        }
        &:nth-child(4){
          .position_box(105px,160px);
        }
        &:nth-child(5){
          .position_box(84px,125px);
        }
      }
    }
    
</style>
