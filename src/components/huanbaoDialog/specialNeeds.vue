/**
* Created by yaoyuan on 2019/3/20.
*
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="specialNeedsDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="2%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">{{$t('huanbaoTable.OTHER2.Lenovoinformation')}}</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'edit'" size="mini" type="primary" plain @click="addLenovoFile" >{{$t('huanbaoTable.MSDS.UploadNewFiles')}}</el-button>
        <el-button v-if="type === 'edit'" size="mini" type="danger"  plain @click="deleteLenovoFile">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
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
            <el-table-column align="center" fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="download(scope.row)">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div class="longcheer_hr" style="margin-top: -10px;">
          <span class="longcheer_hr_span">{{$t('huanbaoTable.OTHER2.SONYinformation')}}</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'edit'" size="mini" type="primary" plain @click="addSONYFile" >{{$t('huanbaoTable.MSDS.UploadNewFiles')}}</el-button>
        <el-button v-if="type === 'edit'" size="mini" type="danger"  plain @click="deleteSONYFile">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
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
            <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="download(scope.row)">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type === 'edit'" size="mini" @click="specialNeedsDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type === 'view'" size="mini" @click="specialNeedsDialog = false">{{$t('tagsView.close')}}</el-button>
        <el-button v-if="type === 'edit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeGeneralStatement">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <files-upload ref="fileUpload"
                    :returnFilePath="returnFilePath"></files-upload>
    </el-dialog>
  </div>
</template>
<script>
import ProcessingGeneralReport from './processGeneralReport'
import { attachmentInfo, downloadAttach, executeEditOther2Item } from '@/api/huanbaoAPI'
import FilesUpload from '../filesUpload/index'
export default {
  components: {
    FilesUpload,
    ProcessingGeneralReport},
  name: 'SpecialNeeds',
  props: ['updateOther2Data'],
  mounted: function () {
  },
  data () {
    return {
      specialNeedsDialog: false,
      totalReport: [],
      totalReport2: [],
      type: '',
      oid: '',
      totalReportBefore: [],
      totalReport2Before: [],
      removeLenovoOid: '',
      removeSONYOid: '',
      addLenovoOid: '',
      addSONYOid: '',
      str: '',
      str2: '',
      str3: '',
      str4: '',
      fileLenovoName: '',
      fileSONYName: '',
      fileLenovoPath: '',
      fileSONYPath: '',
      fileLenovoPathArray: [],
      fileSONYPathArray: [],
      envprotectionDocumentOid: '',
      ifDeleteSONY: 'no',
      ifDeleteLENOVO: 'no'
    }
  },
  methods: {
    setspecialNeedsDialogDialogisible (type, oid, envprotectionDocumentOid) {
      this.removeLenovoOid = ''
      this.removeSONYOid = ''
      this.addLenovoOid = ''
      this.addSONYOid = ''
      this.fileLenovoPath = ''
      this.fileSONYPath = ''
      this.envprotectionDocumentOid = ''
      this.fileLenovoPathArray = []
      this.fileSONYPathArray = []
      this.envprotectionDocumentOid = envprotectionDocumentOid
      this.totalReportBefore = []
      this.totalReport2Before = []
      this.specialNeedsDialog = true
      this.type = type
      this.oid = oid
      this.ifDeleteSONY = 'no'
      this.ifDeleteLENOVO = 'no'
      this.getDataList(this.oid)
    },
    getDataList (oid) {
      attachmentInfo('06', oid, 'OTHER2').then(r => {
        this.totalReport = r.data
      })
      attachmentInfo('07', oid, 'OTHER2').then(r => {
        this.totalReport2 = r.data
      })
    },
    addLenovoFile () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '联想项目必交资料', 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, 'Lenovo')
    },
    handleSelectionChange (val) {
      if (val.length > 0) {
        this.totalReportBefore = val
      }
      /* this.totalReportBefore = val
       this.str = ''
       if (val.length < 1) {
       this.removeLenovoOid = ''
       } else {
       for (let i in val) {
       this.str = val[i].oid + ',' + this.str
       }
       } */
    },
    deleteLenovoFile () {
      this.ifDeleteLENOVO = 'yes'
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
          that.removeLenovoOid += value.oid + '@@@'
        }
      })
      /* this.str2 = this.str + this.str2
      this.removeLenovoOid = this.str2.substring(0, this.str2.length - 1)
      for (let i in this.totalReport) {
        for (let j in this.totalReportBefore) {
          if (this.totalReport[i].oid === this.totalReportBefore[j].oid) {
            this.totalReport.splice(i, 1)
          }
        }
      } */
    },
    addSONYFile () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], 'SONY项目必交资料', 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, 'SONY')
    },
    handleSelectionChange2 (val) {
      if (val.length > 0) {
        this.totalReport2Before = val
      }
      /* this.totalReport2Before = val
      this.str3 = ''
      if (val.length < 1) {
        this.removeSONYOid = ''
      } else {
        for (let i in val) {
          this.str3 = val[i].oid + ',' + this.str3
        }
      } */
    },
    deleteSONYFile () {
      this.ifDeleteSONY = 'yes'
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
          that.removeSONYOid += value.oid + '@@@'
        }
      })
      /* this.str4 = this.str3 + this.str4
      this.removeOid = this.str4.substring(0, this.str4.length - 1)
      for (let i in this.totalReport2) {
        for (let j in this.totalReport2Before) {
          if (this.totalReport2[i].fileName === this.totalReport2Before[j].fileName) {
            this.totalReport2.splice(i, 1)
          }
        }
      } */
    },
    completeGeneralStatement () {
      this.$store.commit('SET_LOADING', true)
      this.specialNeedsDialog = false
      var that = this
      if (this.ifDeleteLENOVO === 'yes') {
        if (that.totalReportBefore.length > 0) {
          for (let i in that.fileLenovoPathArray) {
            for (let j in that.totalReportBefore) {
              if (that.fileLenovoPathArray[i].fileName === that.totalReportBefore[j].fileName) {
                that.fileLenovoPathArray.splice(i, 1)
              }
            }
          }
        }
      }
      that.fileLenovoPathArray.forEach(function (value, index) {
        that.fileLenovoPath += value.filePath + '@@@'
      })
      if (this.ifDeleteSONY === 'yes') {
        if (that.totalReport2Before.length > 0) {
          for (let i in that.fileSONYPathArray) {
            for (let j in that.totalReport2Before) {
              if (that.fileSONYPathArray[i].fileName === that.totalReport2Before[j].fileName) {
                that.fileSONYPathArray.splice(i, 1)
              }
            }
          }
        }
      }
      that.fileSONYPathArray.forEach(function (value, index) {
        that.fileSONYPath += value.filePath + '@@@'
      })
      executeEditOther2Item(this.fileSONYPath, this.removeSONYOid, this.fileLenovoPath, this.removeLenovoOid, this.oid).then(r => {
        if (r.data.status === 'success') {
          this.$props.updateOther2Data()
          this.$message.success({
            message: this.$t('success.update_success')
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
      for (let i in e) {
        if (type === 'Lenovo') {
          this.fileLenovoPathArray.push({
            filePath: e[i].path,
            fileName: e[i].name
          })
          this.totalReport.push({
            filePath: e[i].path,
            fileName: e[i].name,
            modifyTime: ''
          })
        }
        if (type === 'SONY') {
          this.fileName = e[0].name
          this.fileSONYPathArray.push({
            filePath: e[i].path,
            fileName: e[i].name
          })
          this.totalReport2.push({
            filePath: e[i].path,
            fileName: e[i].name,
            modifyTime: ''
          })
        }
      }
    },
    download (row) {
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
