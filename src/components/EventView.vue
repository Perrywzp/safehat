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
          <!-- <div class="icon" :class="[{'icons-event-hovericon':ind === index},{'icons-event-usualicon':ind !== index}]"><i></i></div> -->
          <div class="content">
            <div>
              <h3>{{item.eventName}}</h3> 
              <div class="icon" :class="[{['icons-event-hovericon'+item.type]:ind === index},{['icons-event-usualicon'+item.type]:ind !== index}]"><i></i></div> 
            </div>
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
    border-top:3px solid #4EC6FE;
    display: block;
    list-style: none;
    margin:  0 0 0 36px;
    padding: 0 16px 0 0;
    width: 560px;
  }
  li{
    position: relative;
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
        color: #fff;
      }
    }
    &>div{
      display: inline-block;
      vertical-align: top;
    }
    .content{
      width: 250px;
      h3{
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
      
    }
  }
  .icons-event-hoverbg{
    margin-left:5px; 
    .avatar {
      width: 119px;
      height: 150px;
      margin-top:8px;
      .status{
        right: -386px;
        bottom:73px;
        color: #02f0fd;
      }
    }
    .content{
      padding-left:17px;
      h3{
        height: 24px;
        line-height: 24px;
        display: inline-block;
        color: #FF3459;
        font-size:24px;
        padding:10px 0 20px 0;
        margin-bottom:5px;
      }
      .icon{
        vertical-align: bottom;
        display: inline-block;
        width: 32px;
        height: 32px;
        margin-bottom: 20px;
        margin-left: 5px;
      }
      span{
        &:nth-child(2){
          font-size:24px;
        }
        &:nth-child(4){
          font-size:32px;
          padding:10px 0;
        }
        &:nth-child(5){
          color: #24c4fe;
        }
      }
    } 
    .time{
      right: 14px;
      top: 24px;
    }
  }
  .icons-event-usualbg{
    margin-left:7px;
    .content{
      padding-left:81px;
      .icon{
        position: absolute;
        top:14px;
        left:84px;
      }
      h3{
        color:#02f0fd;
        margin-top:3px;
      }
      span.span-block{
        padding:14px 0;
      }
    }   
    .time{
      right: 19px;
      top: 15px;
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
