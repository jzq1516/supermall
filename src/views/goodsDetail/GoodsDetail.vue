<template>
  <div class="goods-detail">
    <!-- 导航条 -->
    <nav-bar class="goods-detail-nav">
     <img slot="left" src="~assets/img/common/arrow_left.png" @click="back"/>
      <div slot="center">商品详情</div>
    </nav-bar>
    <div class="detail-content">
      <!-- 轮播图 -->
      <swiper class="detail-swipe" :banners="goodsDetails.goodsBanners" indicator-color="#000"/>
      <!-- 商品详情内容 -->
      <goods-content :goodsDetails="goodsDetails"/>
    </div>
    <!-- 底部工具栏 -->
    <goods-bottom-bar @addCart="addToCart"/>

  </div>
</template>

<script>
  
  import NavBar from "components/common/navbar/NavBar.vue"
  import Swiper from "components/common/swiper/Swiper.vue"

  import GoodsContent from './childComps/GoodsContent.vue'
  import GoodsBottomBar from './childComps/GoodsBottomBar.vue'

  import { getGoodsDetail } from "network/goodsDetail"

  import { mapActions } from 'vuex'

  export default {
    name: "GoodsDetail",
    data() {
      return {
        goodsDetails: {
          goods_id: 0,
          goods_name: '',
          goods_price: 0,
          goods_introduce: '',
          goodsBanners: []
        }
      }
    },
    components: {
      NavBar,
      Swiper,
      GoodsContent,
      GoodsBottomBar
    },
    created() {
      this.getGoodsDetail()
    },
    methods: {
      ...mapActions(['addCart']),
      // 网络请求
      getGoodsDetail() {
        let id = this.$route.params.id
        getGoodsDetail(id).then(res=>{
          res.message.pics.forEach(v => {
            let swiperData = {
              image_src: v.pics_mid
            }
            this.goodsDetails.goodsBanners.push(swiperData)
          });
          this.goodsDetails.goods_id = res.message.goods_id
          this.goodsDetails.goods_name = res.message.goods_name
          this.goodsDetails.goods_price = res.message.goods_price
          this.goodsDetails.goods_introduce = res.message.goods_introduce
          this.goodsDetails.goods_small_logo = res.message.goods_small_logo
        })
      },
      // 返回上一页
      back() {
        this.$router.go(-1)
      },
      // 加入购物车
      addToCart() {
        // 获取购物车需要展示的信息
        const product = {} 
        product.image_src = this.goodsDetails.goods_small_logo
        product.title = this.goodsDetails.goods_name
        product.price = this.goodsDetails.goods_price
        product.id = this.goodsDetails.goods_id
        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res);
        // })
        this.addCart(product).then(res => {
          console.log(res);
          this.$toast.show(res)
        })
      }
    }    
  }
</script>

<style scoped>
  .goods-detail {
    position: relative;
    height: 100vh;
    z-index: 1;
    background-color: #fff;
  }

  .goods-detail-nav {
    position: fixed;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
		color: #fff;
    z-index: 1;
  }

 .goods-detail-nav img {
    width: 25px;
  }

  .detail-swipe {
    height: 70vw;
    text-align: center;
    padding-top: 12px;
  }

  .detail-swipe >>> img {
    width: 60%;
  }

  .detail-content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: #fff;
  }

</style>