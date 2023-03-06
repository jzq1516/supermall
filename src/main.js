import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem} from 'vant'
import vueLazyLoad from 'vue-lazyload'

// import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(Swipe)
Vue.use(SwipeItem)
// FastClick.attach(document.body);
Vue.use(vueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
	router,
  store,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
}).$mount('#app')
