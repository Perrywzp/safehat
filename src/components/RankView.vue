<template>
  <div>
    <slot name="title"></slot>
    <ul>
      <li v-for="(item, index) in rankData">
        <span class="serial">{{index + 1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="bar">
          <i :style="{width: item.value+'%'}"></i>
        </span>
        <span class="value">{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
  @serial-width: 20px;
  ul{
    display: block;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    margin-bottom: 3px;
    span{
      display: inline-block;
      vertical-align: middle;
    }
    .serial{
      width: @serial-width;
      height: @serial-width;
      line-height: @serial-width;
      text-align: center;
      border-radius: 3px;
      background-color: #ccc;
    }
    .name{
      width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bar{
      width: 240px;
      height: 12px;
      i{
        display: block;
        background-color: orange;
        width: 20%;
        height: 100%;
      }
    }
    .value{
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
    },
    data(){
        return {

        }
    }
  }
</script>
