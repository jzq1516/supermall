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
      probeType: {
        type: Number,
        default: 0
      },
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
        click: true,
        mouseWheel: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
			})
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', ()=>{
          this.$emit('pullingUp')
        })
      }
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
		},
    updated() {
      this.scroll.refresh()
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
