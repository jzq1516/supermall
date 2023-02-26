<template>
  <van-swipe class="my-swipe" :autoplay="autoplay" :indicator-color="indicatorColor">
	  <van-swipe-item v-for="(item,index) in banners" :key="index">
			<a :href="item.navigator_url?item.navigator_url:'javascript:;'"><img :src="item.image_src"/></a>
		</van-swipe-item>
	</van-swipe>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
			banners: {
				type: Array,
				default: []
			},
      autoplay: {
        type: Number,
        default: 3000
      },
      indicatorColor: {
        type: String,
        default: "#f00"
      }
		}
  }
</script>

<style scoped>
  .my-swipe >>> .van-swipe__indicator {
    opacity: 1;
    background-color: #ddd;
  }
</style>