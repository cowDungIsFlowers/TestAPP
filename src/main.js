import Vue from 'vue/dist/vue';//引入vue.js
import VueRouter from 'vue-router';//引入vue-router.js
import store from './store/index'//vuex
import Home from './pages/home.vue'

Vue.use(VueRouter);//安装 Vue.js 插件

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store,
}).$mount('#app')


// 现在，应用已经启动了！