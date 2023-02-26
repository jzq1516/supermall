<template>
	<div class="backtop">
		<img src="~assets/img/common/top.svg"/>
	</div>
</template>

<script>
	export default {
		name: "BackTop"
	}
</script>

<style scoped>
	.backtop {
		position: fixed;
		right: 5px;
		bottom: 55px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: #FF8198;
	}

	.backtop img {
		width: 18px;
		height: 18px;
	}
</style>
