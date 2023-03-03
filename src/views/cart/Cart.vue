<template>
	<div class="cart">
		<!-- 导航条 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{totalCount}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部工具 -->
    <cart-bottom-bar/>
	</div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar.vue'

  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

  import { mapGetters } from "vuex"

	export default {
		name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['totalCount'])
    }
	}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .cart-nav {
    background-color: var(--color-tint);
		color: #fff;
  }
</style>
