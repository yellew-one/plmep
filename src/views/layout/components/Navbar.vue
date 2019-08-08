<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <a v-if="$store.getters.IFPCN" style="right: 100px;display: inline-block;position: absolute;height: 50px;color:#D13139; font-family:宋体; font-size:12.5pt; text-decoration:underline;font-weight: bold" @click="fileDown">PCN提交资料请参考附件要求</a>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :title="loginName" class="user-avatar" src="../../../assets/image/userDefualt.jpg">
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
        <el-dropdown-item divided v-if="websiteType !== '外发'">
          <span   @click="goNotice" style="display:block;">{{$t('m.Notice')}}</span>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">{{$t('m.Logout')}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <userInfoEdit ref="userinfoDialog"></userInfoEdit>
    <user-info ref="userInfo"></user-info>
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
import UserInfo from '../../../components/UserInfoEdit/userInfo'
export default {
  components: {
    UserInfo,
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
      avatarImage: '../../../assets/image/userDefualt.png',
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
      },
      websiteType: ''
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
    this.websiteType = this.$store.getters.websiteType
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
    fileDown () {
      var path = 'PCN交付要求.docx'
      path = 'dev/plmsupplierfiles/files/' + path
      window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(path) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
    },
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
      // var path = this.$store.getters.guojihua === 'zh' ? '公告.docx' : 'Notice.docx'
      // path = 'dev/plmsupplierfiles/files/' + path
      // window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURI(path) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      // window.location.href = '../../../gongao.vue'
      let routeData = this.$router.resolve({
        path: '/gongao'
      })
      window.open(routeData.href, '_blank')
    },
    changePdUI () {
      if (this.websiteType === '外发') {
        this.$refs.userInfo.userInfoDialogVisible(true)
      } else {
        this.$refs.userinfoDialog.dialogVisibleChange(true)
      }
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
