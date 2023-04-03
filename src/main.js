import Vue from 'vue'
import App from './App.vue'
import Start from './Start.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'

import dataV from '@jiaminghi/data-view'
import echarts from 'echarts'

import VueRouter from "vue-router"

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.prototype.$echarts = echarts
Vue.use(dataV)

Vue.use(ElementUI)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
