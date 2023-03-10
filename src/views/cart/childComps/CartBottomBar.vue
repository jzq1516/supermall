<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-button :is-checked="isCheckedAll" @click.native="checkAllClick" />
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：</span>
      <span class="price">￥{{totalPrice}}</span>
    </div>
    <div class="order-pay-wrap" @click="calcClick">结算({{checkCount}})</div>
  </div>
</template>

<script>

  import CheckButton from 'components/content/checkButton/CheckButton.vue'

  import { toast } from 'common/utils'

  import { mapGetters } from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkCount() {
        return this.cartList.filter(item => item.checked).length
      },
      isCheckedAll() {
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkAllClick() {
        if (this.isCheckedAll) {
          this.cartList.forEach(item => item.checked = false);
        } else {
          this.cartList.forEach(item => item.checked = true);
        }
      },
      calcClick() {
        if (!this.isCheckedAll) {
          toast('请选择商品', require('assets/img/common/icon_tip.png'))
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    height: 45px;
    box-shadow: 0 -1px 1px rgb(100 100 100 / 20%);
  }

  .check-all {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  } 

  .check-all span {
    margin-left: 5px;
    font-size: 14px;
  }

  .total-price {
    flex: 5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 8px;
    font-size: 14px;
  }

  .total-price .price {
    color: #ff8198;
    font-size: 20px;
    font-weight: bold;
  }

  .order-pay-wrap {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff8198;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }


</style>