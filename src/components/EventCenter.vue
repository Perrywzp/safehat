<template>
  <div>
      <slot name="title"></slot>
      <div class="eventWrap">
        <div class="eventList" v-for="item in pieData">
            <img src="http://obkwv73yp.bkt.clouddn.com/huge.jpeg" />
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
        }
    }
</script>

<style scoped lang="less">
    .eventWrap {
        height: 715px;
        overflow: auto;
        .eventList {
            border: 2px solid #666;
            padding: 20px;
            margin-bottom: 12px;
            img {
                width: 156px;
                height: 156px;
            }
            .eventInfo {
                width: 69%;
                display: inline-block;
                float: right;
                .infoHead {
                    position: relative;
                    img {
                        width: 40px;
                        height: auto;
                        margin-right: 7px;
                    }
                    h4 {
                        display: inline-block;
                        position: absolute;
                        top: -10px;
                    }
                    span {
                        display: inline-block;
                        float: right;
                        position: absolute;
                        top: 10px;
                        right: 10px;
                    }
                }
                .infoDetail {
                    ul {
                        list-style: none;
                        li {
                            padding: 2px 0 2px 0;
                        }
                    }
                }
            }
        }
    }
    
</style>
