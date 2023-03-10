<template>
	<div id="profile">
    <!-- 导航条 -->
		<nav-bar class="profile-nav">
			<div slot="center">个人中心</div>
		</nav-bar>
    <!-- 个人中心内容 -->
    <scroll class="content">
      <profile-content/>
    </scroll>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'

  import profileContent from './childComps/profileContent.vue'

	export default {
		name: 'Profile',
    components: {
      NavBar,
      Scroll,
      profileContent
    }
	}
</script>

<style scoped>
  #profile {
    height: 100vh;
  }

  .profile-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
    background-color: #F0F0F0;
  }

</style>
