<template>
  <div class="index">
    <el-container>
      <el-aside>
        <div class="logo">
          <span>热麦分销订单系统</span>
        </div>
        <navigartion-bar :menuData="menuData"></navigartion-bar>
      </el-aside>
      <el-container>
        <el-header height="60px">
          <ul class="btn_set">
            <li>
              <div class="admin_img">
                <img :src = imgSrc />
              </div>
            </li>
            <li>
              <el-dropdown>
                  <p class="user_name">
                    开发人员<i class="el-icon-arrow-down el-icon--right"></i>
                  </p>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-circle-plus">个人资料</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus-outline">修改密码</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-check">切换登录</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check">注销</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li >
          </ul>
        </el-header>
        <el-main>
          <div class="tab_view">
            <crumbs></crumbs>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
import navigartionBar from '@/components/navigationbar/index.js'
import crumbs from '@/components/crumbs/index.js'
export default {
  name: 'index',
  components: {
    navigartionBar,
    crumbs
  },
  computed: {

  },
  created(){

  },
  mounted(){
      
  },
  data(){
      return {
          imgSrc: require("assets/admin.png"),
          menuData: [
            {
              title: "数据展示",
              router: "/datapresentation",
              children: []
            },
            {
              title: "设置中心",
              router: "/setcentre",
              children: [
                {
                  title: "报价管理",
                  router: "/bidmanagement",
                  children: []
                }
              ]
            },
            {
              title: "订单管理",
              router: "/ordermanagement",
              children: [
                {
                  title: "订单上传",
                  router: "/orderupload",
                  children: []
                },
                {
                  title: "进行中售后",
                  router: "/afterunderway",
                  children: []
                },
                {
                  title: "订单列表",
                  router: "/orderlist",
                  children: []
                },
                {
                  title: "已完结售后",
                  router: "/afterend",
                  children: []
                },
                {
                  title: "物流预警",
                  router: "/logisticswarning",
                  children: []
                }
              ]
            },
            {
              title: "财务管理",
              router: "/financialmanagement",
              children: [
                {
                  title: "核对采购应付",
                  router: "/purchasingcheck",
                  children: []
                },
                {
                  title: "核对销售应付",
                  router: "/salescheck",
                  children: []
                },
                {
                  title: "财务流水录入",
                  router: "/intothewater",
                  children: []
                }
              ]
            }
          ]
      }
  },
  methods: {
      
  }
}
</script>

<style scoped>
  .index{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    position: relative;
  }
  .index::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* background: url("../assets/system_bg.jpg") no-repeat; */
    background: white;
    background-size: cover;
    /* filter:blur(8px); */
    z-index: -1;
  }
  .el-header {
    background-color: rgba(255,255,255,1);
    color: #333;
  }
  .el-aside {
    min-height: 100vh;
  }
  .el-main {
    background-color:  #f2f2f2;
    padding: 15px;
  } 
  .logo{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #20222A;
    color: rgba(255,255,255,.8);
  }
  .navigartionbar{
    height: calc(100% - 50px);
  }
  .tab_view{
    padding: 10px;
    box-sizing: border-box;
    min-height: 100%;
    background: white;
  }
  .btn_set{
    height: 100%;
  }
  .btn_set li{
    height: 100%;
    float: right;
    line-height: 60px;
    list-style: none;
    margin-left: 30px;
  }
  .admin_img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255,255,255,0.6);
      display: inline-block;
      margin: 5px 0 0 0;
  }
  .admin_img img{
      width: 100%;
      height: 100%;
  }
  .user_name{
    font-size: 16px;
    color: rgba(0,0,0,0.4);
    font-weight: 500;
  }
  .user_name:hover{
    color: #409EFF;
  }
</style>