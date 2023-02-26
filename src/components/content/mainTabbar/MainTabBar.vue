<template>
	<tab-bar>
		<tab-bar-item path="/home" activeColor="#ff8198">
			<img slot="item-icon" src="~assets/img/tabbar/home.svg">
			<img slot="item-icon-active" src="~assets/img/tabbar/home_selected.svg">
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category" activeColor="#ff8198">
			<img slot="item-icon" src="~assets/img/tabbar/category.svg">
			<img slot="item-icon-active" src="~assets/img/tabbar/category_selected.svg">
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart" activeColor="#ff8198">
			<img slot="item-icon" src="~assets/img/tabbar/cart.svg">
			<img slot="item-icon-active" src="~assets/img/tabbar/cart_selected.svg">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile" activeColor="#ff8198">
			<img slot="item-icon" src="~assets/img/tabbar/my.svg">
			<img slot="item-icon-active" src="~assets/img/tabbar/my_selected.svg">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

	export default {
		name: "MainTabBar",
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
