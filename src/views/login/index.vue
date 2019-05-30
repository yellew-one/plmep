<template>
  <div style="height: 100%">
  <div class="login-header">
    <img src="http://eip.longcheer.com:29002/Images/logo.png" />
    <!--<span style="color: red;font-size: 20px;margin-left: 18%">公告！ 系统将在4月20号正式启用，谢谢</span>-->
    <div class="lang" style="margin-top: -40px;margin-right: 50px">
      <el-dropdown @command="langChage" style="float: right">
              <span class="el-dropdown-link">
                {{langValue}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh"><a>中文</a></el-dropdown-item>
          <el-dropdown-item command="en"><a>English</a></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
  <div class="login-content" style="margin-top: 20px">
    <div class="login-form">
      <div class="login-form-header"></div>
      <div class="login-form-body">
        <div>
        <h3 style="margin-top: 15px">{{$t('m.loginTitle')}}</h3>
        <hr />
        </div>
        <el-form ref="form"  :model="temp" label-width="0px">
          <el-form-item label="">
            <el-input  :placeholder="$t('placeholder.username')" v-model="temp.username"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input @keyup.enter.native="handleLogin" :placeholder="$t('placeholder.password')" type="password" v-model="temp.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button :loading="loading" @click="handleLogin" style="width:100%;background-color: #6BBFC6;border-color: #6BBFC6" type="primary">{{$t('m.login')}}</el-button>
      </div>
    </div>
  </div>
  <div class="login-footer">
    <p>&copy;2019<span>上海龙旗科技股份有限公司 版权所有</span></p>
  </div>
  </div>
</template>
<script>
// import { setToken } from '@/utils/auth' // getToken from cookie
import { login } from '@/api/login'
import langen from 'element-ui/lib/locale/lang/en'
import langzh from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
export default {
  name: 'login',
  Created: function () {
  },
  activated: function () {
  },
  mounted: function () {
    // 设置语言
    if (this.$store.getters.guojihua === 'zh') {
      locale.use(langzh)
      this.langValue = '中文'
    } else {
      locale.use(langen)
      this.langValue = 'English'
    }
  },
  methods: {
    langChage (command) {
      if (command === 'zh') {
        this.langValue = '中文'
        locale.use(langzh)
      } else {
        this.langValue = 'English'
        locale.use(langen)
      }
      this.$i18n.locale = command
      this.$store.commit('SET_GUOJIHUA', command)
    },
    handleLogin () {
      if (!this.temp.username) {
        this.$message(this.$t('validate.username'))
      } else if (!this.temp.password) {
        this.$message(this.$t('validate.password'))
      } else {
        this.loading = true
        login(this.temp.username, this.temp.password).then(r => {
          console.log('登录返回信息->', r)
          /* if (r.data.type === '外发' && (r.data.type !== '环保' && r.data.type !== '封样')) {
            this.loading = false
            this.$message('资料外发暂未开放...')
            return
          } */
          if (r.data.msg !== '') {
            this.$message(this.$t(r.data.msg))
            this.loading = false
            return
          }
          this.$store.commit('SET_USERINFO', {username: this.temp.username, password: this.temp.password, type: r.data.type, activation: r.data.activation})
          this.$store.commit('SET_ISLOGIN', true)
          this.loading = false
          if (this.$route.query && this.$route.query.name && this.$route.query.name !== 'home') {
            this.$store.dispatch('getNum', this.$store.commit)
            this.$router.push({ name: this.$route.query.name, params: this.$route.query })
          } else {
            this.$store.dispatch('getNum', this.$store.commit)
            this.$router.push({ path: '/home' })
          }
        }, r => {
          this.$message('服务器连接出现未知错误')
          this.loading = false
        })
      }
    }
  },
  data () {
    return {
      temp: {},
      loading: false,
      lang: 'zh',
      langs: [{
        value: 'zh',
        label: '中文'
      }, {
        value: 'en',
        label: 'English'
      }],
      langValue: '中文'
    }
  }
}
</script>
<style scoped>
  .lang{
  }
  body {
    font-size: 14px;
    font-family: "Microsoft YaHei",'Microsoft YaHei UI', Verdana, Helvetica, Sans-Serif;
    margin: 0;
  }

  .login-header {
    height: 50px;
    padding: 10px 20px;
  }

  .login-header img {
    height: 50px;
    width: auto;
  }

  .login-content {
    background: #2BA4AE url(http://eip.longcheer.com:29002/Images/bg.png) no-repeat left center;
    /*background-size: auto 90%;*/
    /*height: 500px;*/
    height: 80%;
    margin: 0 auto;
  }

  #loginForm {
    left: 45%;
    margin-top: -30px;
    position: absolute;
    right: 0;
  }

  .login-form {
    margin: 0 auto;
    width: 430px;
  }

  .login-form-header {
    /*margin-left: 350px;*/
    /*background: transparent url(http://eip.longcheer.com:29002/Images/bv.png) no-repeat left center;*/
    /*background-size: 100%;*/
    /*height: 30px;*/
  }

  .login-form-body {
    background-color: #f1f1f1;
    /*margin: 0 auto;*/
    padding: 1px 24px 24px;
    width: 330px;
    margin-left: 350px;
  }

  .login-form-body h3 {
    margin-top: 0;
    text-align: center;
  }

  .login-form-body hr {
    border-bottom: 0 none;
    border-top: 1px solid #ccc;
  }

  .login-form-body p {
    color: #b4b4b4;
    text-align: center;
  }

  .login-form-body .icon-left {
    background-color: #f19457;
  }

  .icon-left {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    height: 30px;
    padding: 5px;
    position: absolute;
    width: 30px;
  }

  .icon-user {
    background: transparent url(http://eip.longcheer.com:29002/Images/zhanghu.png) no-repeat center;
  }

  .icon-password {
    background: transparent url(http://eip.longcheer.com:29002/Images/mima.png) no-repeat center;
  }

  .login-input {
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding: 4px 8px 4px 48px;
    height: 31px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
    width: 78%;
  }

  .login-input:focus {
    border-color: #66afe9;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    outline: 0 none;
  }

  .login-btn {
    background-color: #f19457;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    width: 100%;
  }

  .login-btn:hover{
    background-color: #f1853e;
  }

  .row-mt-10 {
    margin-top: 10px;
  }

  .row-mt-20 {
    margin-top: 20px;
  }

  .login-footer {
    text-align: center;
  }

  .login-footer span {
    margin-left: 20px;
  }
  .login_error {
    background: #fff4a8;
    color: #ff0000;
    height: 28px;
    line-height: 28px;
    text-indent: 10px;
    float: left;
    width: 264px;
    margin-bottom: 10px;
  }
</style>
