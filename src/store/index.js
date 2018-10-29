import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// 使用 es6 语法把vuex的实例对象输出
export default new vuex.Store({
    state:{// 在state中去声明全局变量，其他组件可以通过计算属性return store.state 访问
        count: 0,
		title:'hello vuex!'
    },
	mutations: {//改变state状态的方法
		decrement: state => state.count--,
		add: function (state){
			state.count++;
			console.log(state.count);
		}
	}
})