<template>
    <div class="app-container">
      <el-card shadow="hover" class="card">
      <div class="longcheer_hr" >
        <span class="longcheer_hr_span">{{$t('pcn.title.information')}}</span>
      </div>
      <el-row style="margin-top: 20px;margin-left: 20px">
        <el-col :span="24">
          <el-form ref="form1" :rules="rules" label-position="left" size="mini" :model="tmp" :label-width="$store.getters.guojihua==='en'?'200px':'140px'">
            <el-row style="margin-top: 20px;margin-left: 20px">
                <el-col :span="$store.getters.guojihua==='en'?'10':'7'">
                <el-form-item prop="ecrType" :label="$t('pcn.form.ChangeType')">
                  <el-select style="width: 100%" v-model="tmp.ecrType" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="name" :label="$t('pcn.form.Name')">
                  <el-input v-model="tmp.name"></el-input>
                </el-form-item>
                <el-form-item  v-show="false" prop="LQ_PROJECT" :label="$t('pcn.form.project')">
                  <el-input  v-model="tmp.LQ_PROJECT"></el-input>
                </el-form-item>
                <el-form-item prop="sourceEngineerName" :label="$t('pcn.form.ResourceEngineer')">
                  <el-input v-model="tmp.sourceEngineerName" readonly="true">
                    <el-button @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </el-form-item>
                <el-form-item prop="needDate" :label="$t('pcn.form.RequireCompletionTime')">
                  <el-date-picker
                    style="width: 100%"
                    value-format="yyyy/MM/dd"
                    v-model="tmp.needDate"
                    type="date"
                    placeholder="">
                  </el-date-picker>
                </el-form-item>
                <el-form-item prop="reasonDescription" :label="$t('pcn.form.DetailedDescription')">
                  <el-input type="textarea" v-model="tmp.reasonDescription"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="longcheer_hr" style="margin-left: -20px">
              <span class="longcheer_hr_span">{{$t('supplement.fengyang.file')}}</span>
            </div>
            <el-button-group style="margin-top: 10px">
              <el-button size="mini" :loading="$store.getters.loading" icon="el-icon-plus" @click="filesUploadClick">{{$t('supplement.fengyang.UploadFiles')}}</el-button>
              <el-button size="mini" :loading="$store.getters.loading" icon="el-icon-delete" @click="removeRelatedWLFYDocs">{{$t('fengyangTable.detail.remove')}}</el-button>
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
                    {{$t(scope.row.name)}}
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
            <div style="text-align: right">
              <el-button size="mini" :loading="$store.getters.loading" type="primary" @click="onSubmit">立即创建</el-button>
              <el-button size="mini">取消</el-button>
            </div>
          </el-form>
        </el-col>
      </el-row>
      </el-card>
      <ResourceEngineer ref="dialogRef" :restData="selectResourceEngineer"></ResourceEngineer>
      <filesUpload :returnFilePath="returnFilePath" ref="fup"></filesUpload>
    </div>
</template>
<script>
import ResourceEngineer from '@/components/PcnDialog/ResourceEngineer'
import filesUpload from '../../components/filesUpload/index'
import { resourceEngineer, ecrType, createEcr } from '@/api/pcn'

export default {
  name: 'createPcn',
  components: {
    ResourceEngineer,
    filesUpload
  },
  mounted: function () {
    this.getEcrType()
  },
  methods: {
    removeRelatedWLFYDocs () {
      var that = this
      this.selectionList.forEach(function (v, i) {
        console.log(that.filesList)
        that.filesList.splice(that.filesList.indexOf(v), 1)
      })
    },
    selectResourceEngineer (value) {
      this.tmp.sourceEngineer = value.userName
      this.tmp.sourceEngineerName = value.fullName
    },
    handleSelectionChange (data) {
      if (data) {
        this.selectionList = data
        console.log('当前选择文件数组:', this.selectionList)
      }
    },
    filesUploadClick () {
      this.$refs.fup.openDialog()
      this.$refs.fup.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '', 'fileList', {number: new Date().getTime(), userName: this.$store.getters.userInfo.username})
    },
    escapeClick: function () {
      this.$refs.dialogRef.openDialog()
    },
    restData: function (value) {
      console.log(value)
    },
    returnFilePath (data) {
      console.log('xxoo', data)
      var that = this
      data.forEach(function (value, index) {
        var path = value.path
        that.filesList.push({name: value.name, filepath: path, url: '', desc: '', ftype: 'new'})
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
    onSubmit () {
      this.$refs['form1'].validate((valid) => {
        if (valid) {
          var jsonData = {}
          jsonData = Object.assign({}, this.tmp)
          jsonData.filePath = this.getFilePath()
          jsonData.sourceEngineerName = ''
          jsonData.supplierNumber = this.$store.getters.userInfo.username
          this.$store.commit('SET_LOADING', true)
          createEcr(JSON.stringify(jsonData)).then(r => {
            console.log('r->', r)
            if (r.data.result === 'success') {
              this.dialogFormVisible = false
              this.$message({
                message: r.data.mes,
                type: 'success',
                duration: 5 * 1000
              })
              this.tmp = {ecrType: '', sourceEngineerName: ''}
              this.filesList = []
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
    getFilePath () {
      var str = ''
      this.filesList.forEach(function (v, i) {
        str = str + v.filepath + '@@@'
      })
      return str
    }
  },
  data () {
    return {
      tmp: {ecrType: '', sourceEngineerName: ''},
      submitPath: '',
      filesList: [],
      rules: {
        ecrType: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        name: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        sourceEngineerName: [
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
