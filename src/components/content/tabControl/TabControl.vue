<template>
  <div class="tab-control">
    <div class="tab-title">
      <div v-for="(item,index) in titles" 
          :key="item.id" 
          class="tab-control-item" 
          :class="item.isActive?'active':''"
          @click="tabClick(index)"
      >
        <span class="active">{{item.value}}</span>
      </div>
    </div>
    <div class="tab-control-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0 
      }
    },
    methods: {
      tabClick(i) {
        this.$emit('handleTabClick', i)
      }
    }
  }
</script>

<style scoped>
  .tab-control,
  .tab-control-content {
    height: 100%;
  }

  .tab-control .tab-title {
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tab-control-item span {
    padding-bottom: 3px;
  }

  .active span {
    color: var(--color-hight-text);
    border-bottom: 3px solid var(--color-tint);
  }

</style>