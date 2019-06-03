<template>
  <el-dialog top="30px"  :title="$t('m.editReport')" :visible.sync="dialogFormVisible" width="550px">
    <div class="longcheer_hr" style="">
      <span>{{$t('huanbaoTable.MSDS.Attributes')}}</span>
    </div>
    <el-row :gutter="20" >
      <el-col :span="24">
        <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="100px"
                 style=' margin-left:0px;'>
          <div style="padding-left: 5px">
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-top: 10px">
            <el-col :span="16">
              <el-form-item prop="materialWeight" :label="$t('huanbaoTable.ROHS.reportNumber')">
                <el-input v-model="temp.reportNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-top: 10px">
            <el-col :span="16">
             <el-form-item prop="materialName" :label="$t('huanbaoTable.ROHS.reportDate')">
               <el-date-picker
                 v-model="thirdReportDateValue"
                 style="width: 100%"
                 type="date"
                 value-format="yyyy-MM-dd"
                 placeholder="">
               </el-date-picker>
             </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-top: 10px">
            <el-col :span="16">
              <el-form-item prop="materialGroup" :label="$t('huanbaoTable.ROHS.examUnit')">
                <el-select v-model="temp.examUnit" placeholder="" style="width: 100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-top: 10px">
            <el-col :span="20">
              <el-form-item prop="manufacturer" :label="$t('huanbaoTable.FMD.REPORT')">
                <el-button size="mini" type="primary" plain @click="choseFile" >{{$t('huanbaoTable.FMD.Selectfile')}}</el-button>
                <el-input :disabled="true" v-model="fileName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item >
              </el-form-item>
            </el-col>
          </el-row>
          </div>
        </el-form>
      </el-col>
    </el-row>
    <div slot="footer"  style="margin-top: 20px">
        <el-button size="mini" @click="dialogFormVisible = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="complete">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </div>
    <files-upload ref="fileUpload"
                  :returnFilePath="returnFilePath"></files-upload>
  </el-dialog>
</template>
<script>
import FilesUpload from '../filesUpload/index'
import { examUnit, executeReportImediately } from '@/api/huanbaoAPI'
export default {
  name: 'editReport',
  props: ['getDataList'],
  components: {FilesUpload},
  data () {
    return {
      dialogFormVisible: false,
      thirdReportDateValue: '',
      temp: {},
      fileName: '',
      options: [],
      filePath: ''
    }
  },
  mounted: function () {
  },
  methods: {
    openDialog (model) { // 打开弹窗
      this.dialogFormVisible = true
      this.getExamUnit()
      if (model) {
        this.temp = Object.assign(model)
      }
      this.thirdReportDateValue = this.temp.reportDate
      this.fileName = this.temp.reportFileName
    },
    complete () { // 提交
      this.temp.reportDate = this.thirdReportDateValue
      if (!this.temp.filePath) {
        this.temp.filePath = ''
      }
      executeReportImediately(this.temp.reportOid, this.temp).then(r => {
        if (r.data.status === 'success') {
          this.$props.getDataList()
          this.$message.success({
            message: this.$t('success.update_success')
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
        this.dialogFormVisible = false
      })
    },
    getExamUnit () {
      examUnit().then(r => {
        for (let i in r.data) {
          this.options.push({
            label: r.data[i].name,
            value: r.data[i].id
          })
        }
      })
    },
    choseFile () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '上传报告', 'fileList', {
        number: 'HSF' + this.temp.partNo,
        userName: this.$store.getters.userInfo.username
      }, '')
    },
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      this.fileName = e[0].name
      this.fileType = type
      this.filePath = e[0].path
      this.temp.filePath = this.filePath
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
  .longcheer_hr span{
    display: inline-block;
    background-image: url(../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    padding: 5px 30px 0px 15px;
    width: auto;
    height: 27px;
    color: #ffffff;
  }
</style>
