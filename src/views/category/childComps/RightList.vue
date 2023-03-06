<template>
	<div class="right-list">
		<div class="goods-con" v-for="item01 in rightContent" :key="item01.cat_id">
			<div class="goods-title">
				<span class="delimiter">/</span>
				<span class="title">{{item01.cat_name}}</span>
				<span class="delimiter">/</span>
			</div>
			<div class="goods-list">
				<a :href="'/goodsList/'+item02.cat_id" v-for="item02 in item01.children" :key="item02.cat_id">
					<img :src="item02.cat_icon" @load="imgLoad"/>
					<div class="goods-name">{{item02.cat_name}}</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RightList",
		props: {
			rightContent: {
				type: Array,
				default: []
			}
		},
		methods: {
			imgLoad() {
				this.$emit('imgLoad')
			}
		}
	}
</script>

<style scoped>
  .right-list .goods-con:first-child {
    padding-top: 25px;
  }

	.goods-title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 25px 0;
	}

  .right-list .goods-con:first-child .goods-title {
    margin-top: 0;
  }

	.goods-title .delimiter {
		color: #ccc;
	}

	.goods-title .title {
		color:  var(--color-text);
		padding: 0 10px;
	}

	.goods-list {
		display: flex;
		flex-wrap: wrap;
	}
	.goods-list a {
		width: 33.33%;
		text-align: center;
		font-size: var(--font-size);
		color: var(--color-text);
		padding: 10px 0;
	}

	.goods-list .goods-name {
		padding: 8px 0;
	}

	.goods-list img {
		width: 50%;
	}
</style>
