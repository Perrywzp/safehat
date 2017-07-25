<template>
  <div class="event-box">
    <slot name="title"></slot>
    <div class="scroll-box" ref="scrollBox">
      <ul>
        <li v-for="(item, index) in eventData" >
          <div class="avatar">
            <img :src="item.personPic" :alt="item.personName" @error="setDftImg">
            <span class="status">{{item.statusStr}}</span>
          </div>
          <div class="icon"><i></i></div>
          <div class="content">
            <h3>{{item.eventName}}</h3>
            <span class="text">人员姓名:{{item.personName}}</span>
            <span class="text">所在班组:{{item.groupName}}</span>
            <span class="text" v-if="index==0">联系方式:{{item.phone}}</span>
            <span class="text" v-if="index==0">安全帽编号:{{item.hatId}}</span>
          </div>
          <div class="time">{{item.timeStr}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
  .event-box{
    margin-right: -8px;
  }
  .scroll-box{
    position: relative;
    height: 760px;
  }
  ul{
    display: block;
    list-style: none;
    margin: 0;
    padding: 0 16px 0 0;
  }
  li{
    &:first-child{
      .avatar {
        width: 150px;
        height: 150px;
      }
    }
    position: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px 20px;
    .avatar{
      position: relative;
      width: 90px;
      height: 90px;
      img{
        width: 100%;
        height: 100%;
      }
      .status{
        position: absolute;
        right: 0;
        bottom: 0;
        background: #ccc;
        color: #333;
      }
    }
    &>div{
      display: inline-block;
      vertical-align: top;
    }
    .icon{
      width: 35px;
    }
    .content{
      width: 250px;
      h3{
        height: 25px;
        line-height: 25px;
        margin:0;
        padding: 0;
      }
      .text{
        display: inline-block;
      }
    }
    .time{
      position: absolute;
      right: 10px;
      top: 20px;
    }
  }
</style>

<script>
  import PS from 'perfect-scrollbar'
  export default {
    name: 'EventView',
    props:{
      eventData:{
        type: Array,
        default(){return []}
      }
    },
    methods: {
    	setDftImg(e){
        e.target.src= require('../assets/imgs/avatar.jpg')
      }
    },
    mounted(){
    	PS.initialize(this.$refs.scrollBox,{scrollYMarginOffset: 20});
    }
  }
</script>
