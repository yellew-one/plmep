/**
* Created by yaoyuan on 2019/5/6.
*/
<template>
  <el-dialog top="30px"  :title="$t('m.editUserInfo')" :visible.sync="dialogFormVisible" width="600px">
    <el-scrollbar style="height: 400px">
      <el-card>
        <el-form  status-icon="true" :rules="rules" :label-position="$store.getters.guojihua==='en'?'top':'left'" size="mini" ref="editUserform" :model="userInfoModel" label-width="120px">
          <el-form-item :label="$t('OUTRESOURCE.userInfo.account')" prop="account">
            <el-input :disabled="true" v-model="userInfoModel.username"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.password')" prop="password">
            <el-input type="password" v-model="userInfoModel.password"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.fullname')" prop="fullname">
            <el-input v-model="userInfoModel.fullname"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.mail')" prop="mail">
            <el-input v-model="userInfoModel.mail"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.mobile')" prop="mobile">
            <el-input type="number" v-model="userInfoModel.mobile"></el-input>
          </el-form-item>
          <el-form-item :label="$t('OUTRESOURCE.userInfo.tel')" prop="tel">
            <el-input type="number" v-model="userInfoModel.tel"></el-input>
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
import { receiverInfo, saveReceiverInfo } from '@/api/outresource'
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
      receiverInfo().then(r => {
        console.log('xoxo', r)
        this.userInfoModel = r.data
      })
    },
    submit () {
      this.$refs['editUserform'].validate((valid) => {
        if (valid) {
          this.$store.commit('SET_LOADING', true)
          saveReceiverInfo(this.userInfoModel).then(r => {
            console.log('r->', r)
            if (r.data.status) {
              this.dialogFormVisible = false
              this.$message({
                message: this.$t('success.update_success'),
                type: 'success',
                duration: 5 * 1000
              })
              var user = Object.assign({}, this.$store.getters.userInfo)
              this.$store.commit('SET_USERINFO', user)
            } else {
              this.$message({
                message: r.data.info,
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
        password: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        fullname: [
          { required: true, message: this.$t('error.required'), trigger: 'change' }
        ],
        mobile: [
          { required: true, message: this.$t('error.required'), trigger: 'change' }
        ],
        tel: [
          { required: true, message: this.$t('error.required'), trigger: 'change' }
        ],
        passWord: [
          { required: true, message: this.$t('error.required'), trigger: 'change' }
        ],
        mail: [
          { type: 'email', required: true, message: this.$t('error.email'), trigger: 'change' }
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
