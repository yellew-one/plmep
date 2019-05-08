/**
* Created by yaoyuan on 2019/5/6.
*/
<template>
  <el-dialog top="30px"  :title="$t('m.editUserInfo')" :visible.sync="dialogFormVisible" width="600px">
    <el-scrollbar style="height: 400px">
      <el-card>
        <el-form  status-icon="true" :rules="rules" :label-position="$store.getters.guojihua==='en'?'top':'left'" size="mini" ref="editUserform" :model="userInfoModel" label-width="120px">
          <el-form-item :label="$t('OUTRESOURCE.userInfo.account')" prop="account">
            <el-input :disabled="true" v-model="userInfoModel.account"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.password')" prop="password">
            <el-input type="password" v-model="userInfoModel.password"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.userName')" prop="userName">
            <el-input v-model="userInfoModel.userName"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.email')" prop="email">
            <el-input v-model="userInfoModel.email"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.telephone')" prop="telephone">
            <el-input v-model="userInfoModel.telephone"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.phone')" prop="phone">
            <el-input v-model="userInfoModel.phone"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.unit')" prop="unit">
            <el-input :disabled="true" v-model="userInfoModel.unit"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.group')" prop="group">
            <el-input :disabled="true" v-model="userInfoModel.group"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-scrollbar>
    <div style="margin-top: 10px;text-align:right">
      <el-button  size="mini" @click="dialogFormVisible = false">{{$t('formButton.cancel')}}</el-button>
      <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="submit">{{$t('formButton.submit')}}</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { userInfo, updateUser } from '@/api/index'
export default {
  name: 'userInfo',
  props: ['data'],
  mounted: function () {
  },
  methods: {
    userInfoDialogVisible () {
      this.dialogFormVisible = true
      this.getUserInfo()
      // this.$refs['editUserform'].clearValidate()
    },
    getUserInfo () {
      userInfo().then(r => {
        this.userInfoModel = r.data
      })
    },
    submit () {
      this.$refs['editUserform'].validate((valid) => {
        if (valid) {
          this.$store.commit('SET_LOADING', true)
          updateUser(this.userInfoModel).then(r => {
            console.log('r->', r)
            if (r.data.msg === '修改成功') {
              this.dialogFormVisible = false
              this.$message({
                message: this.$t('success.update_success'),
                type: 'success',
                duration: 5 * 1000
              })
              var user = Object.assign({}, this.$store.getters.userInfo)
              user.activation = '已激活'
              this.$store.commit('SET_USERINFO', user)
            } else {
              this.$message({
                message: 'Submit Error',
                type: 'error',
                duration: 5 * 1000
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      userInfoModel: {},
      loading: false,
      rules: {
        account: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        phone: [
          { type: 'email', required: true, message: this.$t('error.email'), trigger: 'change' }
        ],
        contactTel: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        contactMobile: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        managerName: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        managerTel: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        managerMobile: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: this.$t('error.required'), trigger: 'change' }
        ],
        email: [
          { type: 'email', required: true, message: this.$t('error.email'), trigger: 'change' }
        ]
      }
    }
  }
}
</script>
<style type="scope">
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .el-dialog__body {
    padding: 10px 20px;
  }
</style>
