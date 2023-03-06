<template>
  <div class="goods-list">
    <!-- 导航条 -->
    <nav-bar class="goods-list-nav">
      <img slot="left" src="~assets/img/common/arrow_left.png" @click="back"/>
      <div slot="center">商品列表</div>
    </nav-bar>
    <!-- 商品列表 -->
    <tab-control :titles="titles" @handleTabClick="handleTabClick">
      <template v-if="titles[0].isActive">
        <scroll class="content" 
                ref="scroll" 
                :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load="true" 
                @pullingUp="loadMore"
        >
          <goods-item :goods="goods.list" @imgLoad="imgLoad"/>
        </scroll>
      </template>
      <template v-else-if="titles[1].isActive">
        <img class="nodata" src="https://i.postimg.cc/1zp5fHsh/nodata.jpg"/>
      </template>
      <template v-else>
        <img class="nodata" src="https://i.postimg.cc/1zp5fHsh/nodata.jpg"/>
      </template>
    </tab-control>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from "components/content/tabControl/TabControl.vue"
  import Scroll from "components/common/scroll/Scroll.vue"
  import BackTop from "components/content/backTop/BackTop.vue"

  import GoodsItem from './childComps/GoodsItem.vue'

  import { getGoodsList } from 'network/goodsList'
  import { itemListenMixin, backTopMixin } from 'common/mixin.js'


  export default {
    name: "GoodsList",
    data() {
      return {
        goods: {
          page: 0,
          list: []
        },
        titles: [
          {
            id: 0,
            value: "综合",
            isActive: true
          },
          {
            id: 1,
            value: "销量",
            isActive: false
          },
          {
            id: 2,
            value: "价格",
            isActive: false
          }
        ]
      }
    },
    components: {
      NavBar,
      TabControl,
      Scroll,
      BackTop,
      GoodsItem
    },
    mixins: [itemListenMixin, backTopMixin],
    created() {
      // 获取商品列表
      this.getGoodsList()
    },
    methods: {
      // 网络请求
      getGoodsList() {
        let cid = this.$route.params.id
        let page = this.goods.page + 1
        getGoodsList(cid, page).then(res=>{
          this.goods.list.push(...res.message.goods) 
          this.goods.page +=1
          this.$refs.scroll.finishPullUp()
        })
      },
      // 返回上一页
      back() {
        this.$router.go(-1)
      },
      loadMore() {
        this.getGoodsList()
        this.$refs.scroll.refresh()
      },
      handleTabClick(index) {
        this.titles.forEach((v, i)=>i === index ? v.isActive = true : v.isActive = false)
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    position: relative;
    height: 100vh;
    z-index: 1;
    background-color: #fff;
  }

  .goods-list-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

  .goods-list-nav img {
    width: 25px;
  }

  .content {
    height: calc(100% - 84px);
    background-color: #fff;
    overflow: hidden;
  }

  .goods-list .nodata {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 200px;
  }

</style>