<template>
	<div class="left-menu">
		<div class="menu-item"
				 :class="{active: index === currentIndex}"
				 v-for="(item,index) in leftMenuList"
				 :key="item"
				 @click="hanleItemClick(index)"
		>{{item}}</div>
	</div>
</template>

<script>
	export default {
		name: "LeftMenu",
		data() {
			return {
				currentIndex: 0
			}
		},
		props: {
			leftMenuList: {
				type: Array,
				default: []
			}
		},
		methods: {
			hanleItemClick(i) {
				this.currentIndex = i
				this.$emit('itemClick', i)
			}
		}
	}
</script>

<style scoped>
	.menu-item {
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		border-bottom: 1px solid #d5d5d5;
	}

	.active {
		color: var(--color-hight-text);
		border-left: 3px solid var(--color-hight-text);
		background: #fff;
	}
</style>
