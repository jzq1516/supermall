import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

// 安装插件
Vue.use(Vuex)

const state = {
  cartList: []
}

// 创建并导出Vuex实例对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // 把数据缓存到本地
  plugins: [createPersistedState()] 
})