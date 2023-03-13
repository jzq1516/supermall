<template>
	<div id="home">
    <!-- 导航条 -->
		<nav-bar class="home-nav">
			<div slot="center">购物车</div>
		</nav-bar>
    <!-- 搜索 -->
    <search-input/>
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <swiper class="home-swipe" :banners="banners" indicatorColor="#ff0000"/>
			<recommend-view :recommends="recommends"/>
			<home-floor :floors="floors" @imgLoad="imgLoad"/>
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import Swiper from 'components/common/swiper/Swiper.vue'
	import SearchInput from 'components/common/searchInput/SearchInput.vue'
  
	import RecommendView from './childComps/RecommendView.vue'
	import HomeFloor from './childComps/HomeFloor.vue'

	import { getSwiperData,getNavData,getFloorData } from 'network/home.js'
  import { itemListenMixin, backTopMixin } from 'common/mixin.js'

	export default {
		name: 'Home',
		data() {
			return {
				banners: [],
				recommends: [],
				floors: [],
        saveY: 0
			}
		},
		components: {
			NavBar,
			Scroll,
      Swiper,
      SearchInput,
			RecommendView,
			HomeFloor
		},
    mixins: [itemListenMixin, backTopMixin],
		created() {
			// 1.请求轮播数据
			this.getSwiperData()
			// 2.请求导航数据
			this.getNavData()
			// 3.请求楼层数据
			this.getFloorData()
		},
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
		methods: {
			// 网络请求
			getSwiperData() {
				getSwiperData().then(res=>{
          let goodsIdArr = [55461,17928,48988]
          for (let i = 0; i < res.message.length; i++) {
            let swipeData = {
              image_src: res.message[i].image_src,
              /* navigator_url: `/goodsDetail/${goodsIdArr[i]}` */
            }
            this.banners.push(swipeData)
          }
				})
			},
			getNavData() {
				getNavData().then(res=>{
          res.message[0].navigator_url = '/category'
					this.recommends = res.message
				})
			},
			getFloorData() {
				getFloorData().then(res=>{
					this.floors = res.message
				})
			}
		},
	}
</script>

<style scoped>
	#home {
		height: 100vh;
	}

	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

	.content {
		height: calc(100% - 44px - 45px - 49px);
    overflow: hidden;
	}

  .home-swipe {
		height: 170px;
	}
</style>
