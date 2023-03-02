<template>
  <div class="cart-list-item">

  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>