<template>
  <div class="login">
    <!-- 导航条 -->
    <nav-bar class="login-nav">
      <img slot="left" src="~assets/img/common/arrow_left.png" @click="back"/>
      <div slot="center">登录</div>
    </nav-bar>
    <!-- 登录组件 -->
    <div class="login-con">
      <van-form ref="loginForm" @submit="onSubmit">
        <van-field
          v-model="user.mobile"
          name="mobile"
          placeholder="请输入手机号"
          :rules="userFormRules.mobile"
          type="number"
          maxlength="11"
        >
          <i slot="left-icon" class="toutiao toutiao-shouji"></i>
        </van-field>
        <van-field
          v-model="user.code"
          name="code"
          placeholder="请输入验证码"
          :rules="userFormRules.code"
          type="number"
          maxlength="6"
        >
          <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
          <template #button>
            <van-count-down 
              v-if="isShowCountDown"
              :time="1000 * 60" 
              format="ss s" 
              @finish="isShowCountDown = false"
            />
            <van-button 
              v-else
              class="send-sms-btn" 
              native-type="button"
              round 
              size="small" 
              type="default"
              @click="onSendSms"
            >发送验证码</van-button>
          </template>
        </van-field>
        <div class="login-btn-wrap">
          <van-button class="login-btn" block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  import { login, sendSms } from 'network/user.js'
  import { getSearchData } from 'network/search.js'

  export default {
    name: "Login",
    components: {
      NavBar
    },
    data() {
      return {
        user: {
          mobile: '',
          code: ''
        },
        userFormRules: {
          mobile: [
            { 
              required: true, 
              message: '手机号不能为空！' 
            },
            {
              pattern: /^1[3|5|7|8]\d{9}$/,
              message: '手机号格式错误'
            } 
          ],
          code: [
            { 
              required: true, 
              message: '验证码不能为空！' 
            },
            {
              pattern: /^\d{6}$/,
              message: '验证码格式错误'
            } 
          ],
        },
        isShowCountDown: false
      }
    },
    methods: {
      // 返回上一页
      back() {
        this.$router.go(-1)
      },
      async onSubmit() {
        const user = this.user
        this.$toast.loading({
          message: '登录中...',
          forbidClick: true,
          duration: 0
        });
        try {
          await login(user)
          this.$toast.success('登录成功')
        } catch(err) {
          if (err.response.status === 400) {
            this.$toast.fail('手机号或验证码错误')
          } else {
            this.$toast.fail('登录失败，请稍后再试')
          }
        }
      },
      async onSendSms() {
      // 1.校验手机号
        try {
          await this.$refs.loginForm.validate('mobile')
        } catch(err) {
          return console.log('验证失败');
        }
        // 2.验证通过，显示倒计时
        this.isShowCountDown = true
        // 3.请求发送验证码
        try {
          await sendSms(this.user.mobile)
          this.$toast('发送成功')
        } catch(err) {
          if (err.response.status === 429) {
            this.$toast('发送太频繁了，请稍后再试')
          } else {
            this.$toast('发送失败，请稍后再试')
          }
        }
      }
    },
    mounted() {
      getSearchData('短袖').then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .login {
    position: relative;
    height: 100vh;
  }
  .login-nav {
    background-color: var(--color-tint);
		color: #fff;
  }

  .login-nav img {
    width: 25px;
  }

  .login-con {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 999;
    height: calc(100% - 44px);
    background-color: #f5f7f9;
  }

  .toutiao {
    font-size: 20px;
  }

  .send-sms-btn {
    width: 85px;
    height: 25px;
    background-color: #ededed;
    font-size: 12px;
  }

  .login-btn-wrap {
    padding: 30px 16px 0;
  }

  .login-btn {
    background-color: #f8a7b5;
    border: none;
    border-radius: 5px;
  }


</style>