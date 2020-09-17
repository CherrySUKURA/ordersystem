<template>
    <div class="crumbs">
        <div class="template_tabs">
            <el-tabs
                v-model="activeIndex"
                type="card"
                closable
                v-if="openTab.length"
                @tab-click="tabClick"
                @tab-remove="removeTab">
                <el-tab-pane
                v-for="(item) in openTab"
                :key="item.name"
                :label="item.name"
                :name="item.route"
                >
                    
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default { 
    name: "crumbs",
    computed:{
        ...mapState({
            openTab: state => state.openTab
        }),
        activeIndex: {
            get(){
                return this.$store.state.activeIndex
            },
            set(newVal){
                this.$store.state.activeIndex = newVal
            }
        }
    },
    data(){
        return {

        }
    },
    methods: {
        tabClick(){
            let path = this.activeIndex;
            this.$router.push({path:path})
        },
        removeTab(){

        }
    }
}
</script>

<style scoped>

</style>