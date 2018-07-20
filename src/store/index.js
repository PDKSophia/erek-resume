import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'
import user from './modules/user'
import data from './modules/data'

Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		global,
		user,
		data
	}
})