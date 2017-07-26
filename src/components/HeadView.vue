<template>
  <div>
      <slot name="title"></slot>
      <div class="numList">
        <div v-for="item in pieData">
            <span>{{item.value}}</span>
            <label>{{item.name}}({{item.unit}})</label>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'HeadView',
        components: {},
        props: {
            pieData: {
                type: Array
            }
        }
    }
</script>

<style scoped lang="less">
    .numList {
        width: 100%;
        div {
            display: inline-block;
            width: 15%;
            height: 70px;
            box-sizing: border-box;
            margin-left: 1.5%;
            padding: 7px 0 0 0;
            span {
                display: block;
                text-align: center;
                font-size: 32px;
                font-family: 'Arial';
            }
            label {
                display: block;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
</style>
