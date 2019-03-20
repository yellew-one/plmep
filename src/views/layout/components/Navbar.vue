<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :title="loginName" class="user-avatar" :src="avatarImage">
        <i :title="loginName" class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/home">
          <el-dropdown-item>
            {{$t('m.back_home')}}
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span  @click="changePdUI" style="display:block;">{{$t('m.editUserInfo')}}</span>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span  @click="goNotice" style="display:block;">{{$t('m.Notice')}}</span>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">{{$t('m.Logout')}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <userInfoEdit ref="userinfoDialog"></userInfoEdit>
  </el-menu>
</template>

<script>import { mapGetters } from 'vuex'
// import { userUpdateBySelective } from '@/api/user'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Cookies from 'js-cookie'
import dragDialog from '@/directive/el-dragDialog'
import waves from '@/directive/waves'
// import user from '@/store/modules/user'
// import user from '@/store/modules/user'
import userInfoEdit from '../../../components/UserInfoEdit/index'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    userInfoEdit
  },
  directives: {
    waves,
    dragDialog
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.changePassword.confirmPassword !== '') {
          this.$refs.changePassword.validateField('confirmPassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.changePassword.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginName: '',
      textMap: '',
      avatarImage: 'https://pic.qqtn.com/up/2014-7/14065364718533842.gif',
      dialogFormVisibledialogFormVisible: false,
      users: [],
      changePassword: {
        originalPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      UserCode: '',
      flag: false,
      rules: {
        originalPassword: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        newPassword: [
          { validator: validatePass, required: true, trigger: 'blur' }
        ],
        confirmPassword: [
          { validator: validatePass2, required: true, trigger: 'blur' }
        ]
      }
    }
  },
  mounted: function () {
    // console.log('xxoo', this.$store.getters.userInfo)
    var user = this.$store.getters.userInfo
    // console.log('user.activation', user)
    if (user.activation === '该用户并未被激活!') {
      this.$refs.userinfoDialog.dialogVisibleChange(true)
    }
  },
  created () {
    this.UserCode = Cookies.get('UserCode')
    this.initUsetInfo()
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    initUsetInfo () {
    },
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    },
    logout () {
      this.$store.dispatch('delAllViews')
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
      location.reload()
    },
    goNotice () {
      window.open('http://plmtest.longcheer.com/Windchill/ptc1/ext/longcheer/helpDoc/helpDocSS', '_blank')
    },
    changePdUI () {
      // this.textMap = '修改密码'
      // this.dialogFormVisible = true
      this.$refs.userinfoDialog.dialogVisibleChange(true)
    },
    changePd (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var model1 = {}
          model1.userCode = this.UserCode
          model1.originalPassword = this.changePassword.originalPassword
          model1.userPassword = this.changePassword.newPassword
          this.logout()
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }
    .breadcrumb-container{
      float: left;
    }
    .avatar-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>
