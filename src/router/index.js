import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/index.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect:'/datapresentation',
    children: [
      {
        path: '/datapresentation',
        name: '数据展示',
        component: () => import('@/pages/datapresentation/index.js')
      },
      {
        path: '/bidmanagement',
        name: '报价管理',
        component: () => import('@/pages/bidmanagement/index.js')
      },
      {
        path: '/orderupload',
        name: '订单上传',
        component: () => import('@/pages/orderupload/index.js')
      },
      {
        path: '/afterunderway',
        name: '进行中售后',
        component: () => import('@/pages/afterunderway/index.js')
      },
      {
        path: '/orderlist',
        name: '订单列表',
        component: () => import('@/pages/orderlist/index.js')
      },
      {
        path: '/afterend',
        name: '已完结售后',
        component: () => import('@/pages/orderlist/index.js')
      },
      {
        path: '/logisticswarning',
        name: '物流预警',
        component: () => import('@/pages/logisticswarning/index.js')
      },
      {
        path: '/purchasingcheck',
        name: '核对采购应付',
        component: () => import('@/pages/purchasingcheck/index.js')
      },
      {
        path: '/salescheck',
        name: '核对销售应付',
        component: () => import('@/pages/salescheck/index.js')
      },
      {
        path: '/intothewater',
        name: '财务流水录入',
        component: () => import('@/pages/intothewater/index.js')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.js')
  }
]

const router = new VueRouter({
  routes
})

export default router
