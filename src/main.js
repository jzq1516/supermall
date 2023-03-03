import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant'

import toast from 'components/common/toast'
import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(toast)
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
	router,
  store,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
}).$mount('#app')
