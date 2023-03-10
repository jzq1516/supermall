import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem, Form, Field, Button, Toast, CountDown   } from 'vant'
import vueLazyLoad from 'vue-lazyload'

// import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.use(CountDown)
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
