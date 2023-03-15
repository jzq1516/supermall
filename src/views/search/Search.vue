<template>
  <div class="search">
    <!-- 导航条 -->
    <nav-bar class="search-nav">
      <img slot="left" src="~assets/img/common/arrow_left.png" @click="back"/>
      <div slot="center">搜索</div>
    </nav-bar>
    <!-- 搜索 -->
    <div class="search-con">
      <input type="text" placeholder="请输入您要搜索的商品" @input="handleInput" v-model="inputValue" />
      <img v-show="inputValue" @click="cancelClick" src="~assets/img/common/icon-cancel.png"/>
    </div>
    <div class="search-list">
      <scroll class="content">
        <a :href="'/goodsDetail/'+item.goods_id" 
          class="search-item"
          v-for="item in searchList"
          :key="item.goods_id"
        >
          <span>{{item.goods_name}}</span>
          <img src="~assets/img/common/arrow_right.png"/>
        </a>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'

  import { getSearchData } from 'network/search.js'

  export default {
    name: "Search",
    data() {
      return {
        inputValue: "",
        searchList: [],
        TimeId: -1
      }
    },
    components: {
      NavBar,
      Scroll
    },
    beforeDestroy() {
      console.log('search-beforeDestroy');
    },
    mounted() {
      this.searchList = JSON.parse(localStorage.getItem('searchList'))
      this.inputValue = localStorage.getItem('inputValue')
    },
    methods: {
      // 返回上一页
      back() {
        this.$router.go(-1)
        localStorage.removeItem('searchList')
        localStorage.removeItem('inputValue')
      },
      handleInput() {
        const inputValue = this.inputValue
        clearTimeout(this.TimeId)
        localStorage.setItem('inputValue', this.inputValue)
        this.TimeId = setTimeout(() => {
          getSearchData(inputValue).then(res => {
            this.searchList = res.message
            localStorage.setItem('searchList', JSON.stringify(this.searchList))
          })
        }, 1000);
      },
      cancelClick() {
        this.inputValue = ""
        this.searchList = []
      }
      
    }
  }
</script>

<style scoped>
  .search {
    position: relative;
    z-index: 999;
    height: 100vh;
    background-color: #eee;
  }

  .search-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

  .search-nav img {
    width: 25px;
  }

  .search-con {
    display: flex;
    align-items: center;
    height: 35px;
    margin: 10px;
    background-color: #fff;
    padding: 0 10px;
    border-radius: 5px;
  }

  .search-con input {
    flex: 1;
    height: 35px;
    outline: none;
    border: none;
    font-size: 14px;
  }

  .search-con img {
    width: 18px;
    height: 18px;
  }

  .search-list {
    height: 100%;
    margin: 10px;
  }

  .search-list .search-item {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }

  .search-list .search-item:last-child {
    border-bottom: none;
  }

  .search-list span {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .search-list img {
    width: 18px;
    height: 18px;
  }

  .content {
    height: calc(100% - 44px - 55px);
    overflow: hidden;
  }

  

</style>