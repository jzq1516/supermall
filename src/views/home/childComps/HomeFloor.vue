<template>
	<div class="floors">
		<div v-for="item01 in floors" :key="item01.floor_title.name">
			<div class="floor-title">
        <img v-lazy="item01.floor_title.image_src" @load="imgLoad"/>
			</div>
			<div class="floor-list">
				<a href="javascript:;" 
           class="item" 
           v-for="item02 in item01.product_list" 
           :key="item02.name"
        >
					<img v-lazy="item02.image_src" @load="imgLoad"/>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeFloor",
		props: {
			floors: {
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
	.floor-title img {
		width: 100%;
		padding: 8px 0;
    background-color: #eee;
    margin-top: 10px;
	}

  .floor-list {
    overflow: hidden;
    padding: 2px 3px 0;
  }

	.floor-list .item {
		float: left;
		width: 33.33%;
	}

  .floor-list .item:first-child img {
    margin-top: 4px;
    width: 95%;
  }

	.floor-list .item:nth-child(n+2) {
		height: calc(33.33vw * 386 / 232 / 2);
	}

	.floor-list img {
    display: block;
		width: 95%;
    height: 95%;
    margin: 0 auto;
	}

 </style>
