<template>
	<div id="category">
		<!-- 导航条 -->
		<nav-bar class="category-nav">
			<div slot="center">分类</div>
		</nav-bar>
		<!-- category内容区域 -->
		<div class="category-content">
			<!-- 左侧菜单 -->
			<scroll ref="scroll" class="content">
				<left-menu :leftMenuList="leftMenuList" @itemClick="getItemIndex" />
			</scroll>
			<!-- 右侧列表 -->
			<scroll ref="scroll" class="content">
				<right-list :rightContent="rightContent" @imgLoad="imgLoad"/>
			</scroll>
		</div>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import LeftMenu from './childComps/LeftMenu.vue'
	import RightList from './childComps/RightList.vue'


	import { getCategoryData } from 'network/category.js'
    import { itemListenMixin } from 'common/mixin.js'

	export default {
		name: 'Category',
		data() {
			return {
				categories: [],
				leftMenuList: [],
				rightContent: [],
				index: 0
			}
		},
		components: {
			NavBar,
			LeftMenu,
			RightList,
			Scroll
		},
    mixins: [itemListenMixin],
		created() {
			// 请求分类数据
			this.getCategoryData()
		},
		methods: {
			// 网络请求
			getCategoryData() {
				getCategoryData().then(res=>{
					this.categories = res.message
					this.leftMenuList = res.message.map(v=>v.cat_name)
					this.rightContent = res.message[0].children
				})
			},
			getItemIndex(i) {
				this.rightContent = this.categories[i].children
        this.$refs.scroll.scrollTo(0, 0)
			} 
		}
	}
</script>

<style scoped>
	#category {
		height: 100vh;
	}

	.category-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

	.category-content {
		display: flex;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
	}

	.category-content>div:first-child {
		flex: 2;
		background-color: #f4f4f4;
		color: var(--color-text);
	}

	.category-content>div:last-child {
		flex: 5;
	}

</style>
