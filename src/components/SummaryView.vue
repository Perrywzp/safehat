<template>
	<div>
		<!-- <slot name="title"></slot> -->
		<ul ref="summaryUi">
			<li v-for="(item,index) in summary" ref="lis" v-if="index!=2" >
        <div class = 'font-style'>{{item.value}}<span v-if="index==0 || index==3">/{{summary[2].value}}</span><span v-if="index==1 || index==4">%</span></div>
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
      li{
        list-style-type:none;
        display:inline-block;
        text-align:center;
        .font-style{
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
          .position_box(116px,160px);
        }
        &:nth-child(3){
          .position_box(105px,232px);
        }
        &:nth-child(4){
          .position_box(105px,160px);
        }
        &:nth-child(5){
          .position_box(97px,125px);
        }
      }
    }
    
</style>
