<template>
  <div>
    <header class="top-nav">
      <router-link class="logo-box" :to="'/admin'">
        <img src="./assets/imgs/helmet.png" alt="">
        <span>安全帽管理</span>
      </router-link>
    </header>
    <main class="layout" ref="main-lay">
      <aside class="menu">
        <el-menu default-active="/admin/helmet" router theme="dark">
          <el-menu-item index="/admin/helmet" > 安全帽配置 </el-menu-item>
          <el-menu-item index="/admin/group"> 分组管理 </el-menu-item>
          <el-menu-item index="/admin/gateway"> 网关设置 </el-menu-item>
        </el-menu>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script>
  export default{
  	name: 'admin',
    mounted(){
  		// 设置高度
      this.$refs["main-lay"].style.height = (document.documentElement.clientHeight - 85 ) +'px';
    }
  }
</script>
<style scoped lang="less">
  .top-nav{
    height: 85px;
    background: #324157;
    text-align:center;
  }
  .logo-box{
    display: inline-block;
    vertical-align: middle;
    margin-top: 5px;
    img{
      vertical-align: middle;
      display: inline-block;
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    span{
      display: inline-block;
      vertical-align: middle;
      font-size: 26px;
      margin-left: 10px;
      letter-spacing: 5px;
      color: #fff;
    }
  }
  main.layout{
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: row;
    height: 800px;
  }
  aside.menu{
    width: 200px;
    height: 100%;
    background: #324157;
  }
  .content{
    flex: 1;
  }
</style>
