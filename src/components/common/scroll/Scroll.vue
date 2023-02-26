<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
    props: {
      pullUpLoad: { 
        type: Boolean,
        default: false
      }
    },
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper,{
        mouseWheel: true,
        pullUpLoad: this.pullUpLoad,
        click: true
			})

      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', ()=>{
          this.$emit('pullingUp')
        })
      }
		},
		methods: {
			scrollTo(x, y, time=300) {
				this.scroll && this.scroll.scrollTo(x, y, time)
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			},
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      }
		}
	}
</script>
