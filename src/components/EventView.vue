<template>
  <div class="event-box">
    <slot name="title"></slot>
    <div class="scroll-box" ref="scrollBox">
      <ul>
        <li v-for="(item, index) in eventData" :class="[{'icons-event-hoverbg':ind === index},{'icons-event-usualbg':ind !== index}]"  v-on:mouseenter="eventChose(index)">
          <div class="avatar">
            <img :src="item.personPic" :alt="item.personName" @error="setDftImg">
            <span class="status">{{item.statusStr}}</span>
          </div>
          <div class="icon"><i></i></div>
          <div class="content">
            <h3>{{item.eventName}}</h3>
            <span v-if="index===ind">{{item.personName}} </span>
            <span v-if="index===ind"> {{item.groupName}}</span>
            <span class="span-block">{{item.phone}}</span>
            <span class="span-block" v-if="index==ind">安全帽编号:{{item.hatId}}</span>
          </div>
          <div class="time">{{item.timeStr}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '../common/less/icons.less';
  .event-box{
    margin-right: -8px;
    color: #fff;
  }
  .scroll-box{
    position: relative;
    height: 700px;
    width: 592px;
  }
  ul{
    display: block;
    list-style: none;
    margin:  0 0 0 32px;
    padding: 0 16px 0 0;
    width: 560px;
  }
  li{
    // &.active{
    //   // .avatar {
    //   //   width: 150px;
    //   //   height: 150px;
    //   // }
    // }
    position: relative;
    //border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 8px 18px;
    .avatar{
      position: relative;
      width: 53px;
      height: 69px;
      img{
        width: 100%;
        height: 100%;
      }
      .status{
        position: absolute;
        right: -452px;
        bottom: 11px;
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
      .span-block{
        display: block;
      }
    }
    .time{
      font-size: 14px;
      position: absolute;
      right: 10px;
      top: 18px;
    }
  }
  .icons-event-hoverbg{
    margin-left:7px; 
    .avatar {
      width: 119px;
      height: 150px;
      margin-top:8px;
      .status{
        right: -386px;
        bottom:73px;
      }
    }
    .icon{
      background-position: -508px 0;
      width:34px;
      height:34px;
    }
    
    .content{
      h3{
        color: red;
        font-size:24px;
        padding:15px 0;
      }
      span{
        &:nth-child(2){
          font-size:28px;
        }
        &:nth-child(4){
          font-size:32px;
          padding:5px 0;
        }
        &:nth-child(5){
          padding:5px 0;
          color: red;
        }
      }
    } 
  }
  .icons-event-usualbg{
    margin-left:7px;
    .icon{
      width:57px;
      height:57px;
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
    data(){
          return{
              ind:0
          }     
        },
    methods: {
      eventChose(index){
        this.ind = index;
      },
    	setDftImg(e){
        e.target.src= require('../assets/imgs/avatar.jpg')
      }
    },
    mounted(){
    	PS.initialize(this.$refs.scrollBox,{scrollYMarginOffset: 20,suppressScrollX:true});
    }
  }
</script>
