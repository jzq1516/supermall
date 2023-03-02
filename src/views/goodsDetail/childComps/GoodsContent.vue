<template>
  <div class="goods-content">
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
  export default {
    name: "GoodsContent",
    props: {
      goodsDetails: {
        type: Object,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        introduce: ''
      }
    },
    updated() {
      this.introduce = this.goodsDetails.goods_introduce.replace(/\.webp/g, '.jpg')
    }
  }
</script>

<style scoped>
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