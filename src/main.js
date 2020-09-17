import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Vue.use(ElementUI,VueAxios,Axios)
Vue.config.productionTip = false

let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
