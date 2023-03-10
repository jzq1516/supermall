<template>
  <div class="profile-content">
    <div class="user-info">
        <div class="user-con">
          <a class="avatar" href="/login"><img src="~assets/img/profile/avatar.png"></a>
          <a href="/login">登录</a>
          <!-- <a href="javascript:;">/注册</a> -->
        </div>
        <div class="user-ach">
          <span>99级</span>
          <span>积分：388</span>
          <span>金币：8888</span>
        </div>
      </div>
      <div class="user-main">
        <div class="item">
          <span>66</span>
          <span>收藏夹</span>
        </div>
        <div class="item">
          <span>8</span>
          <span>关注店铺</span>
        </div>
        <div class="item">
          <span>88</span>
          <span>足迹</span>
        </div>
      </div>
      <div class="my-order-wrap">
        <div class="more-order-wrap">
          <span class="my-order">我的订单</span>
          <a href="javascript:;" class="more-order">
            <span>查看更多订单</span>
            <img src="~assets/img/profile/arrow_right.png">
          </a>
        </div>
        <div class="order-list">
          <a href="javascript:;">
            <img src="~assets/img/profile/icon_fk.png">
            <span>待付款</span>
          </a>
          <a href="javascript:;">
            <img src="~assets/img/profile/icon_fh.png">
            <span>待发货</span>
          </a>
          <a href="javascript:;">
            <img src="~assets/img/profile/icon_sh.png">
            <span>待收货</span>
          </a>
          <a href="javascript:;">
            <img src="~assets/img/profile/icon_pj.png">
            <span>待评价</span>
          </a>
          <a href="javascript:;">
            <img src="~assets/img/profile/icon_tk.png">
            <span>退货/售后</span>
          </a>
        </div>
      </div>
      <div class="other-fun-list">
        <a href="javascript:;">
          <img class="icon" src="~assets/img/profile/icon_yhq.png">
          <span>优惠券</span>
          <img class="arrow-right" src="~assets/img/profile/arrow_right.png">
        </a>
        <a href="javascript:;">
          <img class="icon" src="~assets/img/profile/icon_dz.png">
          <span>地址管理</span>
          <img class="arrow-right" src="~assets/img/profile/arrow_right.png">
        </a>
        <a href="javascript:;">
          <img class="icon" src="~assets/img/profile/icon_kf.png">
          <span>联系客服</span>
          <img class="arrow-right" src="~assets/img/profile/arrow_right.png">
        </a>
        <a href="javascript:;">
          <img class="icon" src="~assets/img/profile/icon_dy.png">
          <span>订阅</span>
          <img class="arrow-right" src="~assets/img/profile/arrow_right.png">
        </a>
        <a href="javascript:;">
          <img class="icon" src="~assets/img/profile/icon_dpj.png">
          <span>我的评价</span>
          <img class="arrow-right" src="~assets/img/profile/arrow_right.png">
        </a>
        <a href="javascript:;">
          <img class="icon" src="~assets/img/profile/icon_wtfk.png">
          <span>帮助反馈</span>
          <img class="arrow-right" src="~assets/img/profile/arrow_right.png">
        </a>
      </div>
  </div>
</template>

<script>
  export default {
    name: "profileContent"
  }
</script>

<style scoped>
  .user-info {
    height: 230px;
    background-color: #FF5388;
    overflow: hidden;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }

  .user-info .avatar {
    display: block;
    height: 100%;
    margin: 30px auto 10px;
  }

  .user-info img {
    width: 100px;
    border-radius: 50%;
  }

  .user-info a {
    color: #fff;
    font-size: 20px;
  }

  .user-ach {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  .user-ach span {
    flex: 1;
  }

  .user-main {
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding: 8px 0;
  }

  .user-main .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user-main .item span:last-child {
    font-weight: bold;
  }

  .my-order-wrap {
    background-color: #fff;
    padding: 15px 10px;
    margin: 10px 0;
  } 

  .more-order-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
  }

  .more-order-wrap .my-order {
    font-size: 18px;
    font-weight: bold;
  }

  .more-order-wrap .more-order {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
  }

  .more-order img {
    width: 18px;
    height: 18px;
  }

  .order-list {
    display: flex;
    justify-content: center;
    margin-top: 12px;
  }

  .order-list a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }

  .order-list img {
    width: 30px;
    height: 30px;
    margin-bottom: 3px;
  }

  .other-fun-list {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 0 15px;
  }

  .other-fun-list a {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }

  .other-fun-list a:last-child {
    border: none;
  }

  .other-fun-list span {
    flex: 1;
    margin-left: 10px;
    font-weight: bold;
  }

  .other-fun-list .icon {
    width: 30px;
    height: 30px;
  }

  .other-fun-list .arrow-right {
    width: 18px;
    height: 18px;
  }
</style>