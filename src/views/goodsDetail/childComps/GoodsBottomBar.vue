<template>
  <div class="bottom-bar">
    <div class="tool-item">
      <img src="~assets/img/goodsDetail/icon_customer.png"/>
      <span>客服</span>
    </div>    
    <div class="tool-item">
      <img src="~assets/img/goodsDetail/icon_share.png"/>
      <span>分享</span>
    </div>    
    <a href="/cart" class="tool-item">
      <img src="~assets/img/goodsDetail/icon_cart.png"/>
      <span>购物车</span>
    </a>    
    <div class="tool-item btn-cart" @click="addToCart">
      加入购物车
    </div>    
    <div class="tool-item btn-buy">
      立即购买
    </div>    
  </div>
</template>

<script>
  export default {
    name: "GoodsBottomBar",
    methods: {
      addToCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.2);
  }

  .tool-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  .tool-item img {
    width: 16px;
    margin-bottom: 3px;
  }

  .btn-cart {
    flex: 2;
    background-color: #ffa500;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  }

  .btn-buy {
    flex: 2;
    background-color: #ff8198;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  }


</style>
