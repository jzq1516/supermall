<template>
  <div class="goods-detail">
    <!-- 导航条 -->
    <nav-bar class="goods-detail-nav">
     <img slot="left" src="~assets/img/common/arrow_left.png" @click="back"/>
      <div slot="center">商品详情</div>
    </nav-bar>
    <!-- 轮播图 -->
    <swiper class="detail-swipe" :banners="goodsDetails.goodsBanners" indicator-color="#000"/>
    <!-- 商品详情内容 -->
    <div class="goods-price">￥{{goodsDetails.goods_price}}</div>
    <div class="goods-name-con">
      <div class="goods-name">{{goodsDetails.goods_name}}{{goodsDetails.goods_name}}{{goodsDetails.goods_name}}</div>
      <div class="goods-collect">
        <img src="~assets/img/goodsDetail/icon_collect.png">
        <span>收藏</span>
      </div>
    </div>
    <div class="goods-info">
      <div class="goods-title">图文详情</div>
      <div class="goods-info-introduce" v-html="introduce"></div>
    </div>


  </div>
</template>

<script>
  
  import NavBar from "components/common/navbar/NavBar.vue"
  import Swiper from "components/common/swiper/Swiper.vue"


  import { getGoodsDetail } from "network/goodsDetail"

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
        },
        introduce: ''
      }
    },
    components: {
      NavBar,
      Swiper
    },
    created() {
      this.getGoodsDetail()
    },
    methods: {
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
        })
      },
      // 返回上一页
      back() {
        this.$router.go(-1)
      }
    },
    updated() {
      this.introduce = this.goodsDetails.goods_introduce.replace(/\.webp/g, '.jpg')
    }
  }
</script>

<style scoped>
  .goods-detail-nav {
    background-color: var(--color-tint);
		color: #fff;
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

  .goods-price {
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    color: var(--color-tint);
  }

  .goods-name-con {
    height: 45px;
    display: flex;
    align-items: center;
    border-top: 2px solid #dedede;
    border-bottom: 2px solid #dedede;
  }

  .goods-name {
    flex: 5;
    font-size: 15px;
    padding: 0 5px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .goods-collect {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #000;
  }

  .goods-collect img {
    width: 20px;
  }

  .goods-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--color-tint);
    padding: 10px;
  }

</style>