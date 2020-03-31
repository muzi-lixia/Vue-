<!--导航组件-->
<template>
  <div id="nav">
    <div class="nav-main">
      <div class="n-m-logo">MuZi</div>
      <div class="n-m-login">
        <el-button type="primary">登录</el-button>
        <el-button type="success" @click="handleRegister">注册</el-button>
      </div>
      <div class="n-m-nav">
        <ul :class="'list'+LiActive">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/Blog">博客</router-link></li>
          <li><router-link to="/Message">留言</router-link></li>
          <li><router-link to="/Diary">日记</router-link></li>
          <li><router-link to="/Links">友链</router-link></li>
          <li><router-link to="/About">关于</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Register from "./Register";
  export default {
    name: "Nav",
    data(){
      return {
        /*路由列表*/
        routerList : ['Home','Blog','Message','Diary','Links','About'],
        /*弹窗key值*/
        alertKey: 0
      }
    },
    components:{
      Register
    },
    methods:{
      handleRegister(){
        const h = this.$createElement;
        this.$msgbox({
          title: '注册',
          /* 有可能在点了登录时，再点注册会弹不出框来，
          *因此在使用弹窗组件的时候加一个key值，让它每一次点击的时候key值都不一样
          * */
          message: h(Register,{key:this.alertKey++}),
          /*是否显示取消按钮*/
          showCancelButton: false,
          /*是否显示确定按钮*/
          showConfirmButton: false,
          /*是否可通过点击遮罩关闭 MessageBox*/
          closeOnClickModal: false
        }).then(action => {})
          .catch(()=>{});
      }
    },
    computed: {
      LiActive(){
        let index = this.routerList.indexOf(this.$route.name);
        /*console.log(index);*/
        return index + 1;
      }
    }
  }
</script>

<style scoped lang="less">
  #nav {
    z-index: 99;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #e8e9e7;
    >.nav-main {
      box-sizing: border-box;
      width: 100%;
      max-width: 1360px;
      height: 100%;
      margin: 0 auto;
      padding: 0 50px;
      >.n-m-logo {
        float: left;
        width: 100px;
        height: 60px;
        line-height: 60px;
        font-size: 40px;
        color: #444647;
        text-align: center;
        font-family: BarbaraHand;
      }
      >.n-m-login {
        float: right;
        height: 60px;
        line-height: 60px;
        .el-button {
          padding: 9px 13px;
        }
      }
      .n-m-nav {
        float: right;
        margin-right: 8%;
        width: 576px;
        height: 60px;
        ul {
          display: flex;
          width: 100%;
          height: 100%;
          li {
            flex: 1;
            a {
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              text-align: center;
              line-height: 60px;
              font-weight: 400;
              font-size: 16px;
              color: #000;
              transition: color .5s;
              &:hover {
                color: #6bc30d;
                &::before {
                  width: 100%;
                }
              }
              &::before {
                position: absolute;
                content: "";
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                width: 0;
                height: 2px;
                background-color: #6bc30d;
                transition: width .5s;
              }
            }
          }
          &.list1 li:nth-child(1),
          &.list2 li:nth-child(2),
          &.list3 li:nth-child(3),
          &.list4 li:nth-child(4),
          &.list5 li:nth-child(5),
          &.list6 li:nth-child(6){
            a {
              color: #6bc30d;
              &::before {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>