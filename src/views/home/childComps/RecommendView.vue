<template>
	<ul>
		<li v-for="item in recommends" :key="item.name">
			<img :src="item.image_src"/>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommends: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style scoped>
	ul {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	ul li {
		width: 85px;
	}

</style>
