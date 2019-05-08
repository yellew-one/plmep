/**
* Created by yaoyuan on 2019/3/18.
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="generalStatementDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="2%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">{{$t('huanbaoTable.REACH.statement')}}</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'edit'" size="mini" type="primary" plain @click="addFile" >{{$t('huanbaoTable.MSDS.UploadNewFiles')}}</el-button>
        <el-button v-if="type === 'edit'" size="mini" type="danger"  plain @click="deleteFile">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
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
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  :label="$t('huanbaoTable.MSDS.fileName')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.fileName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="modifyTime"  :label="$t('huanbaoTable.MSDS.endTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modifyTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" >
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="upload(scope.row)">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type === 'edit'" size="mini" @click="generalStatementDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type === 'view'" size="mini" @click="generalStatementDialog = false">{{$t('tagsView.close')}}</el-button>
        <el-button v-if="type === 'edit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeGeneralStatement">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <files-upload ref="fileUpload"
                    :returnFilePath="returnFilePath"></files-upload>
    </el-dialog>
  </div>
</template>
<script>
import ProcessingGeneralReport from './processGeneralReport'
import { attachmentInfo, executeFinalDel, downloadAttach } from '@/api/huanbaoAPI'
import FilesUpload from '../filesUpload/index'
export default {
  components: {
    FilesUpload,
    ProcessingGeneralReport},
  name: 'GeneralStatement',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      generalStatementDialog: false,
      totalReport: [{
        fileName: ''
      }],
      type: '',
      oid: '',
      totalReportBefore: [],
      removeOid: '',
      addOid: '',
      str: '',
      str2: '',
      fileName: '',
      filePath: '',
      filePathArray: [],
      ifDeleteState: 'no'
    }
  },
  methods: {
    setgeneralStatementDialogisible (type, oid) {
      this.filePathArray = []
      this.totalReport = []
      this.removeOid = ''
      this.addOid = ''
      this.filePath = ''
      this.totalReportBefore = []
      this.generalStatementDialog = true
      this.type = type
      this.oid = oid
      this.ifDeleteState = 'no'
      this.getDataList(this.oid)
    },
    getDataList (oid) {
      attachmentInfo('05', oid, 'REACH').then(r => {
        console.log('attachmentInfo', r)
        this.totalReport = r.data
      })
    },
    addFile () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '添加总声明', 'fileList', {
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
      if (val.length < 1) {
        this.removeOid = ''
      } else {
        for (let i in val) {
          this.str = val[i].oid + ',' + this.str
        }
      } */
    },
    deleteFile () {
      this.ifDeleteState = 'yes'
      var that = this
      for (let i in that.totalReport) {
        for (let j in that.totalReportBefore) {
          if (that.totalReport[i].fileName === that.totalReportBefore[j].fileName) {
            that.totalReport.splice(i, 1)
          }
        }
      }
      that.totalReportBefore.forEach(function (value, index) {
        if (value.hasOwnProperty('oid')) {
          that.removeOid += value.oid + '@@@'
        }
      })
      /* this.str2 = this.str + this.str2
      this.removeOid = this.str2.substring(0, this.str2.length - 1)
      for (let i in this.totalReport) {
        for (let j in this.totalReportBefore) {
          if (this.totalReport[i].oid === this.totalReportBefore[j].oid) {
            this.totalReport.splice(i, 1)
          }
        }
      } */
    },
    completeGeneralStatement () {
      this.$store.commit('SET_LOADING', true)
      var that = this
      if (this.ifDeleteState === 'yes') {
        if (this.totalReportBefore.length > 0) {
          for (let i in this.filePathArray) {
            for (let j in this.totalReportBefore) {
              if (this.filePathArray[i].fileName === this.totalReportBefore[j].fileName) {
                this.filePathArray.splice(i, 1)
              }
            }
          }
        }
      }
      that.filePathArray.forEach(function (value, index) {
        that.filePath += value.filePath + '@@@'
      })
      executeFinalDel(this.oid, this.filePath, this.removeOid).then(r => {
        if (r.data.status === 'success') {
          this.generalStatementDialog = false
          this.$message.success({
            message: this.$t('success.update_success')
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
        this.ifDeleteState = 'no'
      })
    },
    /**
     * @param e 文件列表
     * @param type 文件所属条目
     */
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      for (let i in e) {
        this.filePathArray.push({
          filePath: e[i].path,
          fileName: e[i].name
        })
        this.totalReport.push({
          filePath: e[i].path,
          fileName: e[i].name,
          modifyTime: ''
        })
      }
    },
    upload (row) {
      downloadAttach(row.oid).then(r => {
        window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
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
</style>
