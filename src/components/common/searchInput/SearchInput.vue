<template>
  <div class="search-input">
    <a href="/search">搜索</a>
  </div>
</template>

<script>
  export default {
    name: "SearchInput"
  }
</script>

<style scoped>
  .search-input {
    height: 45px;
    padding: 5px;
    background-color: var(--color-tint);
    box-sizing: border-box;
  }

  .search-input a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    color: #666;
  }

</style>