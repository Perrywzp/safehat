<template>
	<div>
		<slot name="title"></slot>
		<ul>
			<li v-for="item in summary">
					<div class = 'value test-font'>{{item.value}}</div>
					<div class = 'name_unit'>{{item.name}}({{item.unit}})</div>
			</li>
		</ul>
	</div>
</template>
<script>
  export default {
    name: 'Summary',
    props:{
      summary: {
        type: Array,
        default:()=>{return []}
      }
    }
  }
</script>
<style scoped lang="less">
 @import '../assets/font/ds-digital/ds-ditital.css';
    ul{
        padding: 0;
        margin: 0;
        li{
            list-style-type: none;
            display: inline-block;
            width: 16.6667%;
            text-align: center;
            .value{
                font: bold 36px "Arial",Negreta;
            }
            .name_unit{
                font: bold 18px "Arial",Negreta;
            }
            .test-font{
                font-family: 'ds-digital';
                font-size: 90px;
                color: orange;
            }
        }
    }
</style>
