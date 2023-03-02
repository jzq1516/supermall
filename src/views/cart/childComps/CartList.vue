<template>
  <div class="cart-list">
    <scroll class="content">
      <!-- <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"/> -->
      <div class="cart-item">
        <!-- 复选框 -->
        <div class="cart-chk-wrap">
          <check-button/>
        </div>
        <!-- 商品图片 -->
        <a href="javascript:;" class="cart-img-wrap">
          <img src="http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000157628749_1_400x400.jpg">
        </a>
        <!-- 商品信息 -->
        <div class="cart-info-wrap">
          <div class="goods-name">康佳（KONKA）60寸4K超高清智能安卓电视LED60R6000U康佳（KONKA）60寸4K超高清智能安卓电视LED60R6000U康佳（KONKA）60寸4K超高清智能安卓电视LED60R6000U</div>
          <div class="goods-price-wrap">
            <div class="goods-price">￥6999</div>
            <div class="cart-num-tool">
              <div class="num-edit">-</div>
              <div class="goods-num">10</div>
              <div class="num-edit">+</div>
            </div>
          </div>
        </div>

      </div>


    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll.vue"
  import CheckButton from 'components/content/checkButton/CheckButton.vue'

  import CartListItem from './CartListItem.vue'

  import { mapGetters } from 'vuex'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CheckButton,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
  .cart-list {
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  .cart-item {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .cart-item .cart-chk-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-item .cart-img-wrap {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-img-wrap img {
    width: 80%;
  }

  .cart-item .cart-info-wrap {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cart-info-wrap .goods-name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #666;
  }

  .cart-info-wrap .goods-price-wrap {
    display: flex;
    justify-content: space-between;
  }

  .goods-price-wrap .goods-price {
    color: #ff8198;
    font-size: 16px;
  }

  .goods-price-wrap .cart-num-tool {
    display: flex;
  }

  .cart-num-tool .num-edit {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }

  .cart-num-tool .goods-num {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>