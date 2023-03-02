import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, newProduct) {
    // 查找之前商品列表中是否有该商品
    let oldProduct = context.state.cartList.find(v => v.id === newProduct.id)
    // 判断oldProduct
    if (oldProduct) {
      context.commit(ADD_COUNT, oldProduct)
    } else {
      newProduct.count = 1
      context.commit(ADD_TO_CART, newProduct)
    }
  }
}