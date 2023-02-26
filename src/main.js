import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from 'vant'

Vue.config.productionTip = false
Vue.use(Swipe)
Vue.use(SwipeItem)

new Vue({
  render: h => h(App),
	router,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
}).$mount('#app')
