<template>
  <el-dialog top="30px"  title="" :visible.sync="dialogFormVisible" width="800px">
    <div class="longcheer_hr" style="margin-top: -10px;">
      <span class="longcheer_hr_span">{{$t('pcn.title.information')}}</span>
    </div>
    <el-row style="margin-top: 5px;margin-left: 10px">
      <el-col :span="24">
        <el-form ref="form1" :rules="rules" label-position="left" size="mini" :model="tmp" :label-width="$store.getters.guojihua==='en'?'200px':'140px'">
          <el-row style="margin-top: 20px;margin-left: 20px">
            <el-col :span="$store.getters.guojihua==='en'?'14':'10'">
              <el-form-item prop="ecrTypeValue" :label="$t('pcn.form.ChangeType')">
                <el-select disabled="true" style="width: 100%" v-model="tmp.ecrTypeValue" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="ecrNum" :label="$t('pcn.form.number')">
                <el-input disabled="true" v-model="tmp.ecrNum"></el-input>
              </el-form-item>
              <el-form-item prop="ecrName" :label="$t('pcn.form.Name')">
                <el-input :readonly="!iflag" v-model="tmp.ecrName"></el-input>
              </el-form-item>
              <div v-show="false">
              <el-form-item prop="LQ_PROJECT" :label="$t('pcn.form.project')">
                <el-input  v-model="tmp.requestProject"></el-input>
              </el-form-item>
              </div>
              <el-form-item prop="resourceEngineerZH" :label="$t('pcn.form.ResourceEngineer')">
                <el-input  v-model="tmp.resourceEngineerZH" readonly="true">
                  <el-button :disabled="!iflag" @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-form-item>
              <el-form-item prop="needDate" :label="$t('pcn.form.RequireCompletionTime')">
                <el-date-picker
                  style="width: 100%"
                  :readonly="!iflag"
                  value-format="yyyy/MM/dd"
                  v-model="tmp.needDate"
                  type="date"
                  placeholder="">
                </el-date-picker>
              </el-form-item>
              <el-form-item prop="reasonDescription" :label="$t('pcn.form.DetailedDescription')">
                <el-input :readonly="!iflag" type="textarea" v-model="tmp.description"></el-input>
              </el-form-item>
              <el-form-item prop="comment" :label="$t('pcn.form.comment')">
                <el-input readonly="true" type="textarea" v-model="comment"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="longcheer_hr" style="margin-left: -10px">
            <span class="longcheer_hr_span">{{$t('supplement.fengyang.file')}}</span>
          </div>
          <el-button-group style="margin-top: 10px">
            <el-button v-if="iflag" size="mini" :loading="$store.getters.loading" icon="el-icon-plus" @click="filesUploadClick">{{$t('supplement.fengyang.UploadFiles')}}</el-button>
            <el-button v-if="iflag" size="mini" :loading="$store.getters.loading" icon="el-icon-delete" @click="removeRelatedWLFYDocs">{{$t('fengyangTable.detail.remove')}}</el-button>
            <el-table
              size="mini"
              :data="filesList"
              border
              ref="multipleTable"
              :height="filesList.length === 0 ? '100': '200'"
              @selection-change="handleSelectionChange"
              style="width: 100%">
              <el-table-column
                :selectable="changeFlagHandle"
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column   align="center" :show-overflow-tooltip="true"   prop="number"  :label="$t('supplement.fengyang.LabelOrFilename')" width="650">
                <template
                  slot-scope="scope">
                  <a @click="downFile(scope.row)" style="color: blue;">{{$t(scope.row.name)}}</a>
                </template>
              </el-table-column>
              <!--<el-table-column align="center" :show-overflow-tooltip="true"   prop="version"  label="附件说明" width="180">-->
              <!--<template-->
              <!--slot-scope="scope">-->
              <!--{{$t(scope.row.desc)}}-->
              <!--</template>-->
              <!--</el-table-column>-->
            </el-table>
          </el-button-group>
          <div v-if="iflag" style="text-align: right">
            <el-button size="mini" :loading="$store.getters.loading" type="primary" @click="onSubmit">提交</el-button>
            <el-button size="mini" @click="dialogFormVisible=false">取消</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
    <ResourceEngineer ref="dialogRef" :restData="selectResourceEngineer"></ResourceEngineer>
    <filesUpload :returnFilePath="returnFilePath" ref="fup"></filesUpload>
  </el-dialog>
</template>
<script>
import ResourceEngineer from '@/components/PcnDialog/ResourceEngineer'
import filesUpload from '../../components/filesUpload/index'
import { resourceEngineer, ecrComments, ecrType, editEcr, reworkEcrInfo, downAttach } from '@/api/pcn'
export default {
  name: 'pcnUpdate',
  props: ['restData'],
  components: {
    ResourceEngineer,
    filesUpload
  },
  mounted: function () {
    this.getEcrType()
  },
  methods: {
    openDialog (ecrOid, taskOid) { // 打开弹窗
      if (taskOid) {
        this.iflag = true
      } else {
        this.iflag = false
      }
      this.dialogFormVisible = true
      this.filesList = []
      this.removeFilesList = []
      this.ecrOid = ecrOid
      this.taskOid = taskOid
      this.getReworkEcrInfo(ecrOid)
    },
    submit (r) { // 提交
      console.log()
      this.$props.restData(r.data.oid)
    },
    downFile (d) {
      downAttach(this.ecrOid, d.attachOid).then(r => {
        if (r.data.filePath) {
          window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    },
    removeRelatedWLFYDocs () {
      var that = this
      console.log('submitFilesList', that.submitFilesList)
      this.selectionList.forEach(function (v, i) {
        // 判断文件删除
        if (v.ftype === 'oid') {
          that.removeFilesList.push(v)
        } else {
          that.submitFilesList.splice(that.submitFilesList.indexOf(v), 1)
        }
        that.filesList.splice(that.filesList.indexOf(v), 1)
      })
    },
    selectResourceEngineer (value) {
      this.tmp.sourceEngineer = value.userName
      this.tmp.resourceEngineerZH = value.fullName
    },
    handleSelectionChange (data) {
      if (data) {
        this.selectionList = data
      }
    },
    filesUploadClick () {
      this.$refs.fup.openDialog()
      this.$refs.fup.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '', 'fileList', {number: new Date().getTime(), userName: this.$store.getters.userInfo.username})
    },
    escapeClick: function () {
      this.$refs.dialogRef.openDialog()
    },
    returnFilePath (data) {
      console.log('xxoo', data)
      var that = this
      data.forEach(function (value, index) {
        var path = value.path
        that.filesList.push({name: value.name, attachOid: value.attachOid, filepath: path, url: '', desc: '', ftype: 'new'})
        that.submitFilesList.push({name: value.name, attachOid: value.attachOid, filepath: path, url: '', desc: '', ftype: 'new'})
      })
      this.$refs.fup.closeDialog()
    },
    resourceEngineer () {
      resourceEngineer().then(r => {
        console.log(r)
      })
    },
    getEcrType () {
      ecrType().then(r => {
        console.log(r)
        var sz = [{label: '', value: ''}]
        r.data.forEach(function (v, i) {
          sz.push({value: v.value, label: v.display})
        })
        this.options = sz
      })
    },
    getEcrComments () {
      ecrComments(this.ecrOid).then(r => {
        this.comment = r.data.comment
      })
    },
    onSubmit () {
      this.$refs['form1'].validate((valid) => {
        if (valid) {
          var jsonData = {}
          jsonData.taskOid = this.taskOid
          jsonData.ecrOid = this.ecrOid
          jsonData.name = this.tmp.ecrName
          jsonData.needDate = this.tmp.needDate
          jsonData.LQ_PROJECT = this.tmp.requestProject
          jsonData.sourceEngineer = this.tmp.sourceEngineer
          jsonData.reasonDescription = this.tmp.description
          jsonData.removeOid = this.getFilePath(this.removeFilesList)
          jsonData.addPath = this.getFilePath2(this.submitFilesList)
          this.$store.commit('SET_LOADING', true)
          editEcr(JSON.stringify(jsonData)).then(r => {
            console.log('r->', r)
            if (r.data.result === 'success') {
              this.dialogFormVisible = false
              this.$message({
                message: r.data.mes,
                type: 'success',
                duration: 5 * 1000
              })
              this.tmp = {ecrType: '', sourceEngineerName: ''}
              this.$props.restData()
              this.$refs['form1'].clearValidate()
            } else {
              this.$message({
                message: r.data.mes,
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
    },
    getFilePath (dataList) {
      console.log('dataList-->', dataList)
      var str = ''
      dataList.forEach(function (v, i) {
        str = str + v.attachOid + '@@@'
      })
      return str
    },
    getFilePath2 (dataList) {
      console.log('dataList-->', dataList)
      var str = ''
      dataList.forEach(function (v, i) {
        str = str + v.filepath + '@@@'
      })
      return str
    },
    getReworkEcrInfo (oid) {
      this.tmp = {ecrType: '', resourceEngineerZH: ''}
      reworkEcrInfo(oid).then(r => {
        var that = this
        this.tmp = r.data
        this.tmp.sourceEngineer = r.data.resourceEngineer
        r.data.attachs.forEach(function (value, index) {
          // that.filePath += value.response.data[0] + ';'
          that.filesList.push({name: value.fileName, attachOid: value.attachOid, filepath: '', url: '', desc: '', ftype: 'oid'})
          // that.submitFilesList.push({name: value.fileName, attachOid: value.attachOid, filepath: '', url: '', desc: '', ftype: 'oid'})
        })
        this.getEcrComments()
      })
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      ecrOid: '',
      taskOid: '',
      iflag: false,
      comment: '',
      tmp: {ecrType: '', resourceEngineerZH: '', comment: ''},
      removeFilesList: [],
      submitFilesList: [],
      submitPath: '',
      filesList: [],
      rules: {
        ecrTypeValue: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        ecrName: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        ecrNumber: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        resourceEngineerZH: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        needDate: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ]},
      options: [],
      selectionList: []
    }
  }
}
</script>
<style scoped>
  .longcheer_hr{
    padding: 0;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #D13139;
    margin-bottom: 0px;
  }
  .longcheer_hr_span{
    display: inline-block;
    background-image: url(../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    padding: 5px 30px 0px 15px;
    width: auto;
    height: 27px;
    color: #ffffff;
  }
  .card{
    font-family: 微软雅黑;
    font-size: 13px;
  }
</style>
