<template>
  <el-dialog top="30px"  :title="$t('m.editReport')" :visible.sync="dialogFormVisible" width="550px">
    <div class="longcheer_hr" style="">
      <span>属性</span>
    </div>
    <el-row :gutter="20" >
      <el-col :span="24">
        <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="100px"
                 style=' margin-left:0px;'>
          <div style="padding-left: 5px">
         <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-top: 10px">
            <el-col :span="16">
              <el-form-item prop="materialWeight" label="报告编号">
                <el-input disabled="true" v-model="temp.reportNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-top: 10px">
            <el-col :span="16">
              <el-form-item prop="materialGroup" label="检测单位">
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
              <el-form-item prop="manufacturer" label="报告">
                <el-button size="mini" type="primary" plain @click="choseFile" >选择文件</el-button>
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
        <el-button size="mini" @click="ProcessingGeneralReportDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="complete">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </div>
    <files-upload ref="fileUpload"
                  :returnFilePath="returnFilePath"></files-upload>
  </el-dialog>
</template>
<script>
import FilesUpload from '../filesUpload/index'
import { examUnit } from '@/api/huanbaoAPI'
export default {
  name: 'editReport',
  components: {FilesUpload},
  mounted: function () {
  },
  methods: {
    returnFilePath (f) {
      console.log('f->', f)
      this.fileName = f.response.data[0]
    },
    openDialog (model) { // 打开弹窗
      this.dialogFormVisible = true
      this.getExam()
      if (model) {
        this.temp = Object.assign(model)
      }
    },
    submit () { // 提交
      console.log()
    },
    getExam () {
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
      this.$refs.fileUpload.setAttribute('http://172.16.9.169:8080/files/upLoad', [], '', 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      })
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      temp: {},
      fileName: '',
      options: []
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
    width: 120px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
