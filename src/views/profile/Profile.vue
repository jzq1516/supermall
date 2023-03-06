<template>
	<div class="profile">
    <!-- 导航条 -->
		<nav-bar class="profile-nav">
			<div slot="center">个人中心</div>
		</nav-bar>
    <!-- 个人中心内容 -->
    <scroll class="content">
      
    </scroll>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'

	export default {
		name: 'Profile',
    components: {
      NavBar,
      Scroll
    }
	}
</script>

<style scoped>
  .profile-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }

</style>
