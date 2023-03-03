<template>
  <div class="cart-item">
    <!-- 复选框 -->
    <div class="cart-chk-wrap">
      <check-button :is-checked="product.checked" @click.native="checkClick"/>
    </div>
    <!-- 商品图片 -->
    <a href="javascript:;" class="cart-img-wrap">
      <img :src="product.image_src" @load="imgLoad">
    </a>
    <!-- 商品信息 -->
    <div class="cart-info-wrap">
      <div class="goods-name">{{product.title}}</div>
      <div class="goods-price-wrap">
        <div class="goods-price">￥{{product.price}}</div>
        <div class="cart-num-tool">
          <div class="num-edit" @click="decrement(product.id)">-</div>
          <div class="goods-num">{{product.count}}</div>
          <div class="num-edit" @click="increment(product.id)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import CheckButton from 'components/content/checkButton/CheckButton.vue'

  import { mapGetters } from "vuex"

  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad')
      },
      checkClick() {
        this.product.checked = !this.product.checked
      },
      decrement(id) {
        const index = this.cartList.findIndex(item => item.id == id)
        if (this.cartList[index].count == 0) return 0
        this.cartList[index].count--
      },
      increment(id) {
        const index = this.cartList.findIndex(item => item.id == id)
        this.cartList[index].count++
      }
    }
  }
</script>

<style scoped>
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