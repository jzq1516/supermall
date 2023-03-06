import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop.vue'

export const itemListenMixin = {
  methods: {
    imgLoad() {
      debounce(this.$refs.scroll.refresh(), 50)
    }
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 300
    }
  }
}