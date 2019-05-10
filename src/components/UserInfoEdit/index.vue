<template>
  <el-dialog top="30px"  :title="$t('m.editUserInfo')" :visible.sync="dialogFormVisible" width="600px">
    <el-scrollbar style="height: 400px">
    <el-card>
    <el-form  status-icon="true" :rules="rules" :label-position="$store.getters.guojihua==='en'?'top':'left'" size="mini" ref="editUserform" :model="userInfoModel" label-width="120px">
      <el-form-item :label="$t('editUserInfo.Supplier')" prop="supplier">
        <el-input :disabled="true" v-model="userInfoModel.supplier"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.User_name')" prop="userName">
        <el-input :disabled="true" v-model="userInfoModel.userName"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Password')" prop="passWord">
        <el-input type="password" v-model="userInfoModel.passWord"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Verify_password')" prop="Verify_password">
        <el-input type="password" v-model="userInfoModel.Verify_password"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Name')" prop="contactName">
        <el-input v-model="userInfoModel.contactName"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Email')" prop="contactEmail">
        <el-input v-model="userInfoModel.contactEmail"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Telephone')" prop="contactTel">
        <el-input v-model="userInfoModel.contactTel"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Handset')" prop="contactMobile">
        <el-input v-model="userInfoModel.contactMobile"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Manager_name')" prop="managerName">
        <el-input v-model="userInfoModel.managerName"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Manager_email')" prop="managerEmail">
        <el-input v-model="userInfoModel.managerEmail"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Manager_telephone')"  prop="managerTel">
        <el-input v-model="userInfoModel.managerTel"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editUserInfo.Manager_handset')"  prop="managerMobile">
        <el-input v-model="userInfoModel.managerMobile"></el-input>
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
  name: 'userInfoEdit',
  // this.$props.data
  props: ['data'],
  mounted: function () {
  },
  methods: {
    dialogVisibleChange (type) {
      this.dialogFormVisible = type
      if (type) {
        this.getUserInfo()
        this.$refs['editUserform'].clearValidate()
      }
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        /* if (this.userInfoModel.Verify_password !== '') {
          this.$refs.editUserform.validateField('Verify_password')
        } */
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback()
      } else if (value && value !== this.userInfoModel.passWord) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      dialogFormVisible: false,
      userInfoModel: {},
      loading: false,
      rules: {
        supplier: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        userName: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        contactName: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        contactEmail: [
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
        managerEmail: [
          { type: 'email', required: true, message: this.$t('error.email'), trigger: 'change' }
        ],
        managerTel: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        managerMobile: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        passWord: [
          { validator: validatePass, trigger: 'blur' }
        ],
        Verify_password: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style scoped>
  .el-scrollbar__wrap {
     overflow-x: hidden;
    }

  .el-dialog__body {
    padding: 10px 20px;
  }
</style>
