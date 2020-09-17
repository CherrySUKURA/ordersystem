<template>
    <div class="navigationbar">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
            background-color="#20222A"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
            <template v-for="(item,index) in menuData">
            <el-submenu :index="item.router" v-if="item.children.length != 0" :key="index">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
                </template>
                <el-menu-item-group>
                <template v-for="(childitem,childindex) in item.children">
                    <el-menu-item v-if="childitem.children.length == 0"  :key="childindex" :index="childitem.router">{{childitem.title}}</el-menu-item>
                    <el-submenu :index="childitem.router"  :key="childindex" v-else>
                    <template slot="title">
                        <span style="padding:20px">{{childitem.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <template v-for="(sonitem,sonindex) in childitem.children">
                        <el-menu-item :key="sonindex" :index="sonitem.router"><span  style="padding:20px">{{sonitem.title}}</span></el-menu-item>
                        </template>
                    </el-menu-item-group>
                    </el-submenu>
                </template>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :index="item.router" :key="index">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
            </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        menuData: {
            type: Array,
            default(){
                return []
            }
        }
    },
    mounted () {
        this.$store.commit("add_tabs",{route: "/datapresentation",name: "数据展示"})
        this.$store.commit('set_active_index',"/datapresentation")
    },
    watch: {
        '$route': 'getPath'
    },
    data(){
        return {
            menuchildData: this.menuData,
        }
    },
    methods: {
        getPath(to){
           let flag = false;//判断是否页面中已经存在该路由下的tab页
           //options记录当前页面中已经存在的tab页
           for( let option of this.openTab) {
               //用名称匹配，如果存在即将对应的tab页设置为active显示桌面前端
               if(option.name === to.name) {
                   flag = true;
                   this.$store.commit('set_active_index',to.path)
               }
           }
           //如果不存在，则新增tab页，再将新增的tab页设置为active显示在桌面前端
           if(!flag) {
               this.$store.commit('add_tabs',{route: to.path,name: to.name});
               this.$store.commit('set_active_index',to.path)
           }
        },
        handleOpen(key, keyPath){
            console.log(key, keyPath);
        },
        handleClose(key, keyPath){
            console.log(key, keyPath);
        }
    },
    computed: {
        ...mapState({
            openTab: state => state.openTab
        })
    }
}
</script>

<style scoped>
    .navigationbar{
        height: calc(100% - 50px);
    }
    .el-menu-vertical-demo{
        height: 100%;
        border: 0;
    }
    .el-submenu .el-menu-item{
        padding: 0 60px 0 60px!important;
    }
</style>