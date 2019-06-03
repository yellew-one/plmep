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
        <span>{{$t('huanbaoTable.MSDS.Attributes')}}</span>
      </div>
      <el-row :gutter="20" >
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" :rules="rules" label-position="left" label-width="180px"
                   style=' margin-left:0px;' >
            <el-row v-if="itemCategory === 'OTHER' && this.type !== 'TOTAL'" :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialGroup" :label="$t('huanbaoTable.OTHER.Reporttype')">
                  <el-select v-model="value" multiple  placeholder="" style="width: 100%">
                    <el-option
                      v-for="item in options2"
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
              <el-col :span="16">
                <el-form-item prop="rohsReportDateValue" :label="$t('huanbaoTable.ROHS.reportDate')">
                  <el-date-picker
                    v-model="rohsReportDateValue"
                    style="width: 100%"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder=""
                    @change="clearMsg">
                  </el-date-picker>
                  <span style="color: red">{{msg}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="reportNumber" :label="$t('huanbaoTable.ROHS.reportNumber')">
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
                <el-form-item prop="examUnit" :label="$t('huanbaoTable.ROHS.examUnit')">
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
import { addReport, examUnit, editReport, reportType } from '@/api/huanbaoAPI'
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
      options2: [],
      type: '',
      fileName: '',
      filePath: '',
      fileType: '',
      category: '',
      itemCategory: '',
      value: [],
      msg: '',
      rules: {
        reportNumber: [
          { required: true, message: '填写报告编号', trigger: 'change' }
        ],
        examUnit: [
          { required: true, message: '请选择检测单位', trigger: 'change' }
        ]
      }
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
      this.rohsReportDateValue = ''
      this.msg = ''
      this.fileName = ''
      this.filePath = ''
      this.options = []
      this.options2 = []
      this.category = ''
      this.itemCategory = ''
      this.value = []
      this.ProcessingGeneralReportDialog = true
      this.temp = Object.assign({}, e)
      this.type = type
      this.oid = oid
      this.category = category
      this.itemCategory = itemCategory
      if (e.hasOwnProperty('reportDate')) {
        this.rohsReportDateValue = e.reportDate
      }
      if (this.temp.reportFileName) {
        this.fileName = this.temp.reportFileName
      }
      examUnit().then(r => {
        for (let i in r.data) {
          this.options.push({
            label: r.data[i].name,
            value: r.data[i].id
          })
        }
      })
      if (this.itemCategory === 'OTHER') {
        if (this.type === 'ENTRY') {
          if (this.category === 'EDIT') {
            var v = []
            v = this.temp.reportType.split('\n')
            this.value = v
          }
          var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
          reportType(this.oid, types).then(r => {
            for (let i in r.data) {
              this.options2.push({
                label: r.data[i].name,
                value: r.data[i].id
              })
            }
          })
        }
      }
      this.$refs['dataForm'].resetFields()
    },
    choseFile () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], this.$t('huanbaoTable.detailTable.addReport'), 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, this.itemCategory)
    },
    clearMsg () {
      this.msg = ''
    },
    complete () {
      this.$store.commit('SET_LOADING', true)
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.reportFileName = this.fileName
          // 判断是否是总报告
          if (this.type === 'TOTAL') {
            // 判断是否选择文件
            if (this.fileName === '') {
              this.$alert(this.$t('huanbaoTable.detailTable.selectFile'), this.$t('huanbaoTable.detailTable.prompt'), {
                confirmButtonText: this.$t('huanbaoTable.escapeClause.ensure'),
                callback: action => {
                  this.$store.commit('SET_LOADING', false)
                }
              })
            } else {
              this.$store.commit('SET_LOADING', false)
              // 判断是编辑 还是添加 分别调用不同接口
              this.temp.reportDate = this.rohsReportDateValue
              // 判断哪个条目的总报告
              if (this.itemCategory === 'RoHS') {
                if (this.category === 'EDIT') {
                  this.editReport('1', 'RoHS')
                } else {
                  this.addReport('1', 'RoHS')
                }
              }
              if (this.itemCategory === 'HF') {
                if (this.category === 'EDIT') {
                  this.editReport('1', 'HF')
                } else {
                  this.addReport('1', 'HF')
                }
              }
              if (this.itemCategory === 'REACH') {
                if (this.category === 'EDIT') {
                  this.editReport('1', 'REACH')
                } else {
                  this.addReport('1', 'REACH')
                }
              }
              if (this.itemCategory === 'OTHER') {
                if (this.category === 'EDIT') {
                  this.editReport('1', 'OTHER')
                } else {
                  this.addReport('1', 'OTHER')
                }
              }
            }
          } else {
            if (this.fileName === '') {
              this.$alert(this.$t('huanbaoTable.detailTable.selectFile'), this.$t('huanbaoTable.detailTable.prompt'), {
                confirmButtonText: this.$t('huanbaoTable.escapeClause.ensure'),
                callback: action => {
                  this.$store.commit('SET_LOADING', false)
                }
              })
            } else {
              this.$store.commit('SET_LOADING', false)
              // 判断是编辑 还是添加 分别调用不同接口
              this.temp.reportDate = this.rohsReportDateValue
              // 判断哪个条目的总报告
              if (this.itemCategory === 'RoHS') {
                if (this.category === 'EDIT') {
                  this.editReport('0', 'RoHS')
                } else {
                  this.addReport('0', 'RoHS')
                }
              }
              if (this.itemCategory === 'HF') {
                if (this.category === 'EDIT') {
                  this.editReport('0', 'HF')
                } else {
                  this.addReport('0', 'HF')
                }
              }
              if (this.itemCategory === 'REACH') {
                if (this.category === 'EDIT') {
                  this.editReport('0', 'REACH')
                } else {
                  this.addReport('0', 'REACH')
                }
              }
              if (this.itemCategory === 'OTHER') {
                this.temp.reportType = this.value.join('\n')
                if (this.category === 'EDIT') {
                  this.editReport('0', 'OTHER')
                } else {
                  this.addReport('0', 'OTHER')
                }
              }
            }
          }
        } else {
          this.$store.commit('SET_LOADING', false)
          return false
        }
      })
    },
    // 编辑报告
    editReport (num, type) {
      var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
      editReport(this.temp, num, this.filePath, types).then(r => {
        if (r.data.status === 'success') {
          this.ProcessingGeneralReportDialog = false
          this.temp.reportOid = r.data.add
          this.$props.getBABAData(this.oid, type, r.data, this.temp)
          if (r.data.hasOwnProperty('warn')) {
            this.$message.warning({
              dangerouslyUseHTMLString: true,
              message: r.data.warn
            })
          } else {
            this.$message.success({
              dangerouslyUseHTMLString: true,
              message: this.$t('success.create_success')
            })
          }
        } else {
          this.ProcessingGeneralReportDialog = true
          this.msg = r.data.info
        }
      })
    },
    // 添加报告
    addReport (num, type) {
      var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
      addReport(this.oid, this.temp, num, type, this.filePath, types).then(r => {
        if (r.data.status === 'success') {
          this.ProcessingGeneralReportDialog = false
          this.temp.reportOid = r.data.add
          this.$props.getBABAData(this.oid, type, r.data, this.temp)
          if (r.data.hasOwnProperty('warn')) {
            this.$message.warning({
              dangerouslyUseHTMLString: true,
              message: r.data.warn
            })
          } else {
            this.$message.success({
              dangerouslyUseHTMLString: true,
              message: this.$t('success.create_success')
            })
          }
        } else {
          this.ProcessingGeneralReportDialog = true
          this.msg = r.data.info
        }
      })
    },
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      this.fileName = e[0].name
      this.fileType = type
      this.filePath = e[0].path
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
