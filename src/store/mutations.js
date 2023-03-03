import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-types'

export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中每个方法尽可能完成的事件比较单一一点
  [ADD_COUNT](state, newProduct) {
    newProduct.count++
  },
  [ADD_TO_CART](state, newProduct) {
    newProduct.checked = true
    state.cartList.push(newProduct)
  } 
}