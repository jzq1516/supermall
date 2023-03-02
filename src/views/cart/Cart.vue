<template>
	<div class="cart">
		<!-- 导航条 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{totalCount}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>

	</div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar.vue'

  import CartList from './childComps/CartList.vue'

  import { mapGetters } from "vuex"

	export default {
		name: 'Cart',
    components: {
      NavBar,
      CartList
    },
    computed: {
      ...mapGetters(['totalCount'])
    }
	}
</script>

<style scoped>
  .cart-nav {
    background-color: var(--color-tint);
		color: #fff;
  }
</style>
