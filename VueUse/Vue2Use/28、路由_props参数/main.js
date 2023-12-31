import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
new Vue({
	el: '#app',
	router: router,
	render: (h) => h(App),
})
