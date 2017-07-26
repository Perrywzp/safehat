<template>
  <div>
    <slot name="title"></slot>
    <div class="eventList" v-for="(item,index) in pieData" :class="activeEvent == index ? 'active' : ''" @click="chooseEvent(index)">
        <div class="eventImg">
            <img src="http://obkwv73yp.bkt.clouddn.com/huge.jpeg" />
        </div>
        <div class="eventInfo">
            <div class="infoHead">
                <img src="http://obkwv73yp.bkt.clouddn.com/low_power.png" />
                <h4>{{item.eventName}}</h4>
                <span>{{item.timeStr}}</span>
            </div>
            <div class="infoDetail">
                <ul>
                    <li>人员姓名:{{item.personName}}</li>
                    <li>所在班组:{{item.groupName}}</li>
                    <li>联系方式:{{item.phone}}</li>
                    <li>安全帽编号:{{item.hatId}}</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'EventCenter',
        components: {},
        props: {
            pieData: {
                type: Array
            }
        },
        data: () =>({
            activeEvent: 0
        }),
        methods: {
            chooseEvent(index){
                this.activeEvent = index;
            }
        }
    }
</script>

<style scoped lang="less">
    .eventList {
        transition: all .5s;
        border: 2px solid #666;
        margin-bottom: 12px;
        .eventImg {
            width: 20%;
            display: inline-block;
            padding: 10px 0 0 20px;
            img {
                width: 75px;
                height: 75px;
            }
        }
        .eventInfo {
            display: inline-block;
            width: 70%;
            .infoHead {
                position: relative;
                top: -10px;
                vertical-align: middle;
                img {
                    width: 40px;
                    height: auto;
                    vertical-align: middle;
                }
                h4 {
                    display: inline-block;
                    vertical-align: middle;
                }
                span {
                    display: inline-block;
                    position: relative;
                    right: -100px;
                    vertical-align: middle;
                }
            }
            .infoDetail {
                position: relative;
                top: -10px;
                ul {
                    list-style: none;
                    margin-top: -1px;
                    padding-bottom: 3px;
                    :nth-child(1),
                    :nth-child(2),
                    :nth-child(4){
                        display: none;
                    }
                }
            }
        }
        &.active {
            box-shadow: 10px 10px 5px #888888;
            .eventImg {
                width: 30%;
                display: inline-block;
                padding: 20px 0 0 20px;
                img {
                    width: 156px;
                    height: 156px;
                }
            }
             .eventInfo {
                display: inline-block;
                width: 60%;
                .infoHead {
                    position: relative;
                    top: -30px;
                    vertical-align: middle;
                    img {
                        width: 40px;
                        height: auto;
                        vertical-align: middle;
                    }
                    h4 {
                        display: inline-block;
                        vertical-align: middle;
                    }
                    span {
                        display: inline-block;
                        position: relative;
                        right: -100px;
                        vertical-align: middle;
                    }
                }
                .infoDetail {
                    position: relative;
                    top: -30px;
                    ul {
                        li {
                            padding-bottom: 2px;
                        }
                        list-style: none;
                        :nth-child(1),
                        :nth-child(2),
                        :nth-child(4){
                            display: block;
                        }
                    }
                }
            }
        }
    }
    
</style>
