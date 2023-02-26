<template>
  <div>
    <a :href="'/goodsDetail/'+item.goods_id" 
       class="goods-item"
       v-for="item in goods"
       :key="item.goods_id"
    >
      <div class="goods-img-wrap">
        <img :src="item.goods_small_logo ? item.goods_small_logo : 
        'https://i.postimg.cc/cJVwNThp/nomap.jpg'" @load="imgLoad"/>
      </div>
      <div class="goods-info-wrap">
        <div class="goods-name">{{item.goods_name}}</div>
        <div class="goods-price">{{item.goods_price}}</div>
      </div>
    </a>
    </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
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
  .goods-item {
    display: flex;
    border-bottom: 2px solid #ccc;
    padding: 8px;
  }

  .goods-img-wrap {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .goods-img-wrap img {
    width: 70%;
  }

  .goods-info-wrap {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .goods-info-wrap .goods-name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .goods-info-wrap .goods-price {
    color: var(--color-tint);
    font-size: 16px;
  }
</style>