<template>
  <div class="check-button" :class="{check: isChecked}">
    <img v-show="isChecked" src="~assets/img/common/icon_right.png">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default() {
          return true
        }
      }
    }
  }
</script>

<style scoped>
  .check-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 2px solid #aaa;
    padding: 3px;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .check {
    background-color: #eb4450;
    border-color: #eb4450;
  }

</style>