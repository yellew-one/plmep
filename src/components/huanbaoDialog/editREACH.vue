/**
* Created by yaoyuan on 2019/3/19.
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="reachDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="2%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">REACH报告</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="addRoHSReport" >添加REACH报告</el-button>
        <el-button v-if="type === 'itemedit'" size="mini" type="danger"  plain @click="deleteRoHSReport">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="totalReport"
            border
            size="mini"
            style="width: 100%;margin-top: 10px"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  label="报告编号" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.reportNumber)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  label="报告日期" >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportDate}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  label="检测单位" >
              <template
                slot-scope="scope">
                <span>{{scope.row.examUnit}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  label="上次修改时间" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modifyTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="download(scope.row)">下载</el-button>
                <el-button v-if="type === 'itemedit'" @click="editRoHSReport(scope.row)" type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">申报物质报告</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="downloadFile">下载报告模板</el-button>
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="addFile">上传新文件</el-button>
        <el-button v-if="type === 'itemedit'" size="mini" type="danger"  plain @click="deleteFile">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="totalReport2"
            border
            size="mini"
            style="width: 100%;margin-top: 10px"
            @selection-change="handleSelectionChange2">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  label="报告编号" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.fileName)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="modifyTime"  label="上次修改时间" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modifyTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="download(scope.row)">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div class="boxtext" v-if="type === 'itemview' || type === 'itemedit'">
        <div class="longcheer_hr" style="margin-top: 10px;">
          <span class="longcheer_hr_span">属性</span>
        </div>
        <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                 style=' margin-left:0px;margin-top: 10px'>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
            <el-col :span="2">
            </el-col>
            <el-col :span="16">
              <el-form-item prop="materialName"  label="原材料名称">
                <el-input disabled="true" v-model="temp.materialName">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
            <el-col :span="2">
            </el-col>
            <el-col :span="16">
              <el-form-item prop="manufacturer"  label="原材料制造商">
                <el-input disabled="true" v-model="temp.manufacturer">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
            <el-col :span="2">
            </el-col>
            <el-col :span="16">
              <el-form-item prop="fileRetardant"  label="是否有申报物质">
                <el-input disabled="true" v-model="temp.reportMaterialContained">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
            <el-col :span="2">
            </el-col>
            <el-col :span="16">
              <el-form-item prop="state"  label="状态">
                <span disabled="true" >{{$t('huanbaoTable.HF.' + temp.state)}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type=== 'itemedit'" size="mini" @click="reachDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type=== 'itemview'" size="mini" @click="reachDialog = false">关闭</el-button>
        <el-button v-if="type=== 'itemedit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeReport">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <processing-general-report ref="processingGeneralReport"
                                 :getBABAData="getBABAData"></processing-general-report>
      <files-upload ref="fileUpload"
                    :returnFilePath="returnFilePath"></files-upload>
    </el-dialog>
  </div>
</template>
<script>
import ProcessingGeneralReport from './processGeneralReport'
import { itemReport, executeEditReachItem, attachmentInfo, downloadAttach, downloadEnvpTemplate } from '@/api/huanbaoAPI'
import FilesUpload from '../filesUpload/index'
export default {
  components: {
    FilesUpload,
    ProcessingGeneralReport},
  name: 'ReachDialog',
  props: ['updateREACHData'],
  mounted: function () {
  },
  data () {
    return {
      reachDialog: false,
      totalReport: [],
      totalReport2: [],
      type: '',
      reachOid: '',
      temp: {},
      ifEdit: true,
      oid: '',
      removeOid: '',
      removeOid2: '',
      addOid: '',
      totalReportBefore: [],
      totalReport2Before: [],
      str: '',
      str2: '',
      str3: '',
      str4: '',
      filePath: '',
      filePathArray: [],
      editRemoveOid: ''
    }
  },
  methods: {
    setReachDialogVisible (e, row, oid) {
      this.totalReport = []
      this.totalReport2 = []
      this.filePath = ''
      this.totalReportBefore = []
      this.totalReport2Before = []
      this.removeOid = ''
      this.removeOid2 = ''
      this.editRemoveOid = ''
      this.addOid = ''
      this.str = ''
      this.str2 = ''
      this.str3 = ''
      this.str4 = ''
      this.filePathArray = []
      this.reachDialog = true
      this.type = e
      this.oid = ''
      this.oid = oid
      this.reachOid = row.reachOid
      this.temp = {}
      this.temp = Object.assign(row)
      if (e === 'itemedit' || e === 'itemview') {
        this.getDataList(row.reachOid)
      }
    },
    getDataList (reachOid) {
      itemReport(reachOid).then(r => {
        this.totalReport = r.data
      })
      attachmentInfo('04', reachOid, '').then(r => {
        this.totalReport2 = r.data
      })
    },
    getBABAData (oid, item, data, e) {
      this.addOid = data.add + ',' + this.addOid
      if (data.hasOwnProperty('remove')) {
        this.editRemoveOid = data.remove + ',' + this.editRemoveOid
        for (let i in this.totalReport) {
          if (this.totalReport[i].reportOid === data.remove) {
            this.totalReport.splice(i, 1)
          }
        }
      }
      this.totalReport.push(e)
    },
    addRoHSReport () {
      var temp = {}
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', temp, this.reachOid, 'ADD', 'REACH')
    },
    editRoHSReport (row) {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', row, this.reachOid, 'EDIT', 'REACH')
    },
    addFile () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute('http://172.16.9.169:8080/files/upLoad', [], '添加申报物质', 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, 'REACH')
    },
    handleSelectionChange (val) {
      if (val.length > 0) {
        this.totalReportBefore = val
      }
      /* this.totalReportBefore = val
      this.str = ''
      for (let i in val) {
        this.str = val[i].reportOid + ',' + this.str
      } */
    },
    deleteRoHSReport () {
      var that = this
      for (let i in that.totalReport) {
        for (let j in that.totalReportBefore) {
          if (that.totalReport[i].reportOid === that.totalReportBefore[j].reportOid) {
            that.totalReport.splice(i, 1)
          }
        }
      }
      that.totalReportBefore.forEach(function (value, index) {
        if (value.hasOwnProperty('reportOid')) {
          that.removeOid += value.reportOid + ','
        }
      })
      /* this.str2 = this.str + this.str2
      this.removeOid = this.str2.substring(0, this.str2.length - 1) + ',' + this.removeOid
      for (let i in this.totalReport) {
        for (let j in this.totalReportBefore) {
          if (this.totalReport[i].reportOid === this.totalReportBefore[j].reportOid) {
            this.totalReport.splice(i, 1)
          }
        }
      } */
    },
    handleSelectionChange2 (val) {
      if (val.length > 0) {
        this.totalReport2Before = val
      }
      /* this.totalReport2Before = val
      this.str3 = ''
      for (let i in val) {
        if (val[i].hasOwnProperty('oid')) {
          this.str3 = val[i].oid + ',' + this.str3
        }
      } */
    },
    deleteFile () {
      var that = this
      for (let i in that.totalReport2) {
        for (let j in that.totalReport2Before) {
          if (that.totalReport2[i].fileName === that.totalReport2Before[j].fileName) {
            that.totalReport2.splice(i, 1)
          }
        }
      }
      that.totalReport2Before.forEach(function (value, index) {
        if (value.hasOwnProperty('oid')) {
          that.removeOid2 += value.oid + '@@@'
        }
      })
      /* this.str4 = this.str3 + this.str4
       this.removeOid2 = this.str4.substring(0, this.str4.length - 1) + ',' + this.removeOid2
       for (let i in this.totalReport2) {
       for (let j in this.totalReport2Before) {
       if (this.totalReport2[i].fileName === this.totalReport2Before[j].fileName) {
       this.totalReport2.splice(i, 1)
       }
       }
       }
       for (let i in this.filePathArray) {
       for (let j in this.totalReport2Before) {
       if (this.filePathArray[i].fileName === this.totalReport2Before[j].fileName) {
       this.filePathArray.splice(i, 1)
       }
       }
       } */
    },
    completeReport () {
      this.$store.commit('SET_LOADING', true)
      var that = this
      if (this.totalReport2Before.length > 0) {
        for (let i in this.filePathArray) {
          for (let j in this.totalReport2Before) {
            if (this.filePathArray[i].fileName === this.totalReport2Before[j].fileName) {
              this.filePathArray.splice(i, 1)
            }
          }
        }
      }
      that.filePathArray.forEach(function (value, index) {
        that.filePath += value.filePath + '@@@'
      })
      var str = ''
      str = this.editRemoveOid + ',' + this.removeOid
      this.temp.fileRetardant = this.value
      this.reachDialog = false
      executeEditReachItem(this.reachOid, this.filePath, this.removeOid2, this.addOid, str).then(r => {
        if (r.data.status === 'success') {
          this.$props.updateREACHData()
          this.$message.success({
            message: '修改成功'
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
      })
    },
    /**
     * @param e 文件列表
     * @param type 文件所属条目
     */
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      this.fileName = e[0].name
      this.filePathArray.push({
        filePath: e[0].response.data[0],
        fileName: e[0].name
      })
      // this.filePath = e[0].response.data[0] + ',' + this.filePath
      // this.filePath = this.filePath.substring(0, this.filePath.length - 1)
      this.totalReport2.push({
        fileName: this.fileName,
        filePath: e[0].response.data[0],
        modifyTime: ''
      })
    },
    download (row) {
      downloadAttach(row.reportOid).then(r => {
        window.open('http://172.16.9.169:8080/files/getFile?route=' + r.data.filePath + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
    },
    downloadFile () {
      downloadEnvpTemplate('REACHREPORT').then(r => {
        if (r.data.flag) {
          window.open('http://172.16.9.169:8080/files/getFile?route=' + r.data.filePath + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    }
  }
}
</script>
<style>
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
  .longcheer_hr_span{
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
