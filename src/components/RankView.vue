<template>
  <div>
    <slot name="title"></slot>
    <ul>
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
  @serial-width: 15px;
  ul{
    display: block;
    list-style: none;
    font-size: 12px;
    padding: 0;
    margin: 0;
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
      
      border:1px solid green;
      color:green; 
      background-color:rgba(0,0,0,0); 
    }
    &:nth-child(1),&:nth-child(2),&:nth-child(3){
      .serial{
        color:#000; 
        background-color: green;
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
      color: blue;
      margin-left: 3px;
    }
  }
</style>
<script>
  export default {
    name: 'RankView',
    props:{
      rankData: {
        type: Array,
        default:()=>{return []}
      }
    }
  }
</script>
