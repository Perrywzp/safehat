<template>
  <div>
    <slot name="title"></slot>
    <ul ref="rankUl">
      <li v-for="(item, index) in rankData">
        <span class="serial">{{index + 1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="icons-rank-bar-bg bar">
          <i :style="{width: item.value+'%'}" class="icons-rank-bar "></i>
        </span>
        <span class="value">{{item.value}}%</span>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
@import '../common/less/icons.less';
  @serial-width: 16px;
  ul{
    display: block;
    list-style: none;
    font-size: 12px;
    padding: 0 18px 0 0;
    margin: 0;
    height:283px;
    position:absolute;
    overflow:hidden;
  }
  li{
    margin:10px 0;
    span{
      display: inline-block;
      vertical-align: middle;
    }
    .serial{
      width: @serial-width;
      height: @serial-width;
      line-height: @serial-width;
      margin-right:5px;
      text-align: center;
      border-radius: 3px;
      border:1px solid #659910;
      font-weight: bold;
      color:#659910; 
      background-color:rgba(0,0,0,0); 
    }
    &:nth-child(1),&:nth-child(2),&:nth-child(3){
       font-weight: bold;
      .serial{
        color:#05472c; 
        background-color: #a6ff1b;
      }
    }
    
    .name{
      width: 110px;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bar{
      width: 186px;
      height: 6px;
      
      i{
        border-radius: 3px;
        display: block;
        //background-color: orange;
        width: 20%;
        height: 100%;
      }
    }
    .value{
      color: #02f0fd;
      margin-left: 3px;
    }
  }
</style>
<script>
  import PS from 'perfect-scrollbar'
  export default {
    name: 'RankView',
    props:{
      rankData: {
        type: Array,
        default:()=>{return []}
      }
    },
    mounted(){
      PS.initialize(this.$refs.rankUl,{minScrollbarLength:20})
    }
  }
</script>
