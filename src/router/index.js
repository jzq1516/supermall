import Vue from "vue"
import VueRouter from "vue-router"

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
//   return originalPush.call(this, location).catch(err => err);
// };



Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const GoodsList = () => import('views/goodsList/GoodsList.vue')
const GoodsDetail = () => import('views/goodsDetail/GoodsDetail.vue')
const Login = () => import('views/login/Login.vue')
const Search = () => import('views/search/Search.vue')

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/goodsList/:id',
		component: GoodsList
	},
	{
		path: '/goodsDetail/:id',
		component: GoodsDetail
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/search',
		component: Search
	}

]

export default new VueRouter({
	mode: 'history',
	routes
})
