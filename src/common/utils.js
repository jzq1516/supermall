import { Toast } from 'vant';

export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}

export function toast(message,icon) {
  Toast({
    message,
    icon
  })
}