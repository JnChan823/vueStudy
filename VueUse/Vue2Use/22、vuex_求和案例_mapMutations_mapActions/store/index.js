//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	// jia(context, value) {
	// 	//console.log('action中的jia被调用了', context, value)
	// 	context.commit('JIA', value)
	// },
	// jian(context, value) {
	// 	//console.log('action中的jia被调用了', context, value)
	// 	context.commit('JIAN', value)
	// },
	jiaOdd(context, value) {
		console.log('actions中jiaOdd被调用了')
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	jiaWait(context, value) {
		setTimeout(() => {
			console.log('actions中jiaWait被调用了')
			context.commit('JIA', value)
		}, 500)
	},
}
//准备mutations——用于操作数据(state)
const mutations = {
	JIA(state, value) {
		//console.log('mutations中的jia被调用了', state, value)
		state.sum += value
	},
	JIAN(state, value) {
		//console.log('mutations中的jian被调用了', state, value)
		state.sum -= value
	},
}
//主备state——用于存储数据
const state = {
	sum: 0, // 当前的和
	school: '家里蹲',
	subject: '画画',
}
//准备getters——用于将state中的数据进行加工
const getters = {
	bigSum(state) {
		return state.sum * 10
	},
}
//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters,
})
