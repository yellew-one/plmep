/**
* Created by yaoyuan on 2019/3/8.
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="ProcessingGeneralReportDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="15%"
      append-to-body>
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>属性</span>
      </div>
      <el-row :gutter="20" >
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="100px"
                   style=' margin-left:0px;'>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialName" label="报告日期">
                  <el-date-picker
                    v-model="rohsReportDateValue"
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
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialWeight" label="报告编号">
                  <el-input v-model="temp.reportNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
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
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
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
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer" style="margin-top: 10px">
        <el-button size="mini" @click="ProcessingGeneralReportDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="complete">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <files-upload ref="fileUpload"
                    :returnFilePath="returnFilePath"></files-upload>
    </el-dialog>
  </div>
</template>
<script>
import FilesUpload from '../filesUpload/index'
import { addReport, examUnit, editReport } from '@/api/huanbaoAPI'
export default {
  components: {FilesUpload},
  name: 'ProcessingGeneralReport',
  props: ['getBABAData'],
  mounted: function () {
  },
  data () {
    return {
      rohsReportDateValue: '',
      ProcessingGeneralReportDialog: false,
      temp: {},
      tableData: [],
      options: [],
      type: '',
      fileName: '',
      filePath: '',
      fileType: '',
      category: '',
      itemCategory: ''
    }
  },
  methods: {
    /**
     * @param type 是否是总报告 TOTAL  ENTRY
     * @param e  条目对象
     * @param oid 对应的oid 环保对象oid 或是 环保条目oid
     * @param category 判断是 EDIT 或 ADD
     * @param itemCategory 判断是哪个条目
     */
    setprocessingGeneralReportFormVisible (type, e, oid, category, itemCategory) {
      this.fileName = ''
      this.filePath = ''
      this.options = []
      this.category = ''
      this.itemCategory = ''
      this.ProcessingGeneralReportDialog = true
      this.temp = e
      this.type = type
      this.oid = oid
      this.itemCategory = itemCategory
      this.rohsReportDateValue = e.reportDate
      examUnit().then(r => {
        for (let i in r.data) {
          this.options.push({
            label: r.data[i].name,
            value: r.data[i].id
          })
        }
      })
      this.category = category
    },
    choseFile () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute('http://172.16.9.169:8080/files/upLoad', [], '添加总报告', 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, this.itemCategory)
    },
    complete () {
      // 判断是否是总报告
      if (this.type === 'TOTAL') {
        // 判断是否选择文件
        if (this.fileType === '') {
          this.$alert('请选择文件', '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          })
        } else {
          // 判断是编辑 还是添加 分别调用不同接口
          this.ProcessingGeneralReportDialog = false
          this.temp.reportDate = this.rohsReportDateValue
          // 判断哪个条目的总报告
          if (this.fileType === 'RoHS') {
            if (this.category === 'EDIT') {
              this.editReport('1', 'RoHS')
            } else {
              this.addReport('1', 'RoHS')
            }
          }
          if (this.fileType === 'HF') {
            if (this.category === 'EDIT') {
              this.editReport('1', 'HF')
            } else {
              this.addReport('1', 'HF')
            }
          }
          if (this.fileType === 'REACH') {
            if (this.category === 'EDIT') {
              this.editReport('1', 'REACH')
            } else {
              this.addReport('1', 'REACH')
            }
          }
        }
      } else {
        if (this.fileType === '') {
          this.$alert('请选择文件', '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          })
        } else {
          // 判断是编辑 还是添加 分别调用不同接口
          this.ProcessingGeneralReportDialog = false
          this.temp.reportDate = this.rohsReportDateValue
          // 判断哪个条目的总报告
          if (this.fileType === 'RoHS') {
            if (this.category === 'EDIT') {
              this.editReport('0', 'RoHS')
            } else {
              this.addReport('0', 'RoHS')
            }
          }
          if (this.fileType === 'HF') {
            if (this.category === 'EDIT') {
              this.editReport('0', 'HF')
            } else {
              this.addReport('0', 'HF')
            }
          }
        }
      }
    },
    // 编辑报告
    editReport (num, type) {
      editReport(this.temp, num, this.filePath).then(r => {
        if (r.data.status === 'success') {
          this.$props.getBABAData(this.oid, type, r.data, this.temp)
          this.$message.success({
            message: '编辑成功'
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
      })
    },
    // 添加报告
    addReport (num, type) {
      addReport(this.oid, this.temp, num, type, this.filePath).then(r => {
        if (r.data.status === 'success') {
          this.$props.getBABAData(this.oid, type, r.data, this.temp)
          this.$message.success({
            message: '添加成功'
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
      })
    },
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      this.fileName = e[0].name
      this.fileType = type
      this.filePath = e[0].response.data[0]
    }
  }
}
</script>
<style scoped>
  .boxtext {
    font-size: 15px;
  }
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
