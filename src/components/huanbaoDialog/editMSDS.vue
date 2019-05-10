/**
* Created by yaoyuan on 2019/3/1.
* MSDS EDIT CHECK
*
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      width="60%">
      <!--// msds-->
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>{{$t('huanbaoTable.MSDS.material')}}</span>
      </div>
      <el-row v-if="showButton" style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadMsds">{{$t('huanbaoTable.MSDS.UploadNewFiles')}}</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable1"
            border
            size="mini"
            style="width: 100%"
            @selection-change="handleSelectionChange1">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  :label="$t('huanbaoTable.MSDS.fileName')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.fileName)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  :label="$t('huanbaoTable.MSDS.endTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.endTime}}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              align="center"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="download(scope.row)" type="text" size="small">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--// 专利证明-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>{{$t('huanbaoTable.MSDS.patentCertificate')}}</span>
      </div>
      <el-row v-if="showButton" style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadPatent">{{$t('huanbaoTable.MSDS.UploadNewFiles')}}</el-button>
        <el-button size="mini" type="danger"  plain @click="deletePatent">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable2"
            border
            size="mini"
            style="width: 100%"
            @selection-change="handleSelectionChange2">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  :label="$t('huanbaoTable.MSDS.fileName')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.fileName)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  :label="$t('huanbaoTable.MSDS.endTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.endTime}}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              align="center"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="download(scope.row)" type="text" size="small">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--// ip form-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>IP FORM</span>
      </div>
      <el-row v-if="showButton" style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="downloadloadIP" >{{$t('huanbaoTable.MSDS.downloads')}}</el-button>
        <el-button size="mini" type="primary" plain @click="uploadIPFORM">{{$t('huanbaoTable.MSDS.UploadNewFiles')}}</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteIPFORM">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable3"
            border
            size="mini"
            style="width: 100%"
            @selection-change="handleSelectionChange3">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  :label="$t('huanbaoTable.MSDS.fileName')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.fileName)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  :label="$t('huanbaoTable.MSDS.endTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.endTime}}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              align="center"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="download(scope.row)" type="text" size="small">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--// 属性-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>{{$t('huanbaoTable.MSDS.Attributes')}}</span>
      </div>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="tableData"
            border
            size="mini"
            style="width: 100%">
            <el-table-column align="center" show-overflow-tooltip="true"  prop="materialName"  :label="$t('huanbaoTable.MSDS.materialName')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.materialName)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="manufacturer"  :label="$t('huanbaoTable.MSDS.manufacturer')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.manufacturer}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="state" :label="$t('huanbaoTable.MSDS.state')" >
              <template
                slot-scope="scope">
                <span>{{$t('huanbaoTable.MSDS.'+scope.row.state)}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">{{$t('formButton.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="completeMSDS">{{$t('formButton.ensure')}}</el-button>
      </span>
      <files-upload ref="upload"
                    :returnFilePath = "returnFilePath"></files-upload>
    </el-dialog>
  </div>
</template>
<script>
import { getMSDSInfo } from '@/api/index'
import { downloadAttach, downloadEnvpTemplate, executeEditMSDSItem } from '@/api/huanbaoAPI'
import FilesUpload from '../filesUpload/index'
export default {
  components: {FilesUpload},
  name: 'EditMsds',
  props: ['updateMSDSData'],
  mounted: function () {
  },
  data () {
    return {
      envpNumber: '',
      showButton: false,
      oid: '',
      dialogVisible: false,
      temp: {},
      tableData: [],
      approvalTable1: [],
      approvalTable2: [],
      approvalTable3: [],
      attachmentOid1: '',
      attachmentOid2: '',
      attachmentOid3: '',
      path: '',
      msdsAttachmentOid: '',
      patentAttachmentOid: '',
      ipAttachmentOid: '',
      msdsBeforeDelete: [],
      patentBeforeDelete: [],
      ipBeforeDelete: [],
      fileType: '',
      filePathArray1: '',
      filePathArray2: '',
      filePathArray3: '',
      addMsds: '',
      removeMsds: '',
      addPatent: '',
      removePatent: '',
      addIpform: '',
      removeIpform: '',
      ifRemoveMsds: 'no',
      ifRemovePatent: 'no',
      ifRemoveIP: 'no'
    }
  },
  methods: {
    setMSDSDialogFormVisible (envpNumber, e, action) {
      this.filePathArray1 = []
      this.filePathArray2 = []
      this.filePathArray3 = []
      this.approvalTable1 = []
      this.approvalTable2 = []
      this.approvalTable3 = []
      this.attachmentOid1 = ''
      this.attachmentOid2 = ''
      this.attachmentOid3 = ''
      this.tableData = []
      this.msdsBeforeDelete = []
      this.patentBeforeDelete = []
      this.ipBeforeDelete = []
      this.addMsds = ''
      this.removeMsds = ''
      this.addPatent = ''
      this.removePatent = ''
      this.addIpform = ''
      this.removeIpform = ''
      this.dialogVisible = true
      this.tableData.push(e)
      this.msdsAttachmentOid = ''
      this.patentAttachmentOid = ''
      this.ipAttachmentOid = ''
      this.path = ''
      this.fileType = ''
      this.ifRemoveMsds = 'no'
      this.ifRemovePatent = 'no'
      this.ifRemoveIP = 'no'
      this.envpNumber = envpNumber
      if (action === 'edit') {
        this.showButton = true
      } else {
        this.showButton = false
      }
      this.getReportInfo()
    },
    getReportInfo () {
      getMSDSInfo('02', this.tableData[0].msdsOid).then(r => {
        this.approvalTable1 = r.data
      })
      getMSDSInfo('03', this.tableData[0].msdsOid).then(r => {
        this.approvalTable2 = r.data
      })
      getMSDSInfo('01', this.tableData[0].msdsOid).then(r => {
        this.approvalTable3 = r.data
      })
    },
    handleSelectionChange1 (val) {
      if (val.length > 0) {
        this.msdsBeforeDelete = val
      }
      /* var str = ''
      this.msdsBeforeDelete = []
      this.msdsBeforeDelete = val
      if (val.length < 1) {
        this.msdsAttachmentOid = ''
      } else {
        for (let i in val) {
          str = val[i].attachmentOid + ',' + str
        }
        str = str.substring(0, str.length - 1)
        this.msdsAttachmentOid = str
      } */
    },
    handleSelectionChange2 (val) {
      if (val.length > 0) {
        this.patentBeforeDelete = val
      }
      /* var str = ''
      this.patentBeforeDelete = []
      this.patentBeforeDelete = val
      if (val.length < 1) {
        this.patentAttachmentOid = ''
      } else {
        for (let i in val) {
          str = val[i].attachmentOid + ',' + str
        }
        str = str.substring(0, str.length - 1)
        this.patentAttachmentOid = str
      } */
    },
    handleSelectionChange3 (val) {
      if (val.length > 0) {
        this.ipBeforeDelete = val
      }
      /* var str = ''
      this.ipBeforeDelete = []
      this.ipBeforeDelete = val
      if (val.length < 1) {
        this.ipAttachmentOid = ''
      } else {
        for (let i in val) {
          str = val[i].attachmentOid + ',' + str
        }
        str = str.substring(0, str.length - 1)
        this.ipAttachmentOid = str
      } */
    },
    deleteMsds () {
      this.ifRemoveMsds = 'yes'
      var that = this
      for (let i in that.approvalTable1) {
        for (let j in that.msdsBeforeDelete) {
          if (that.approvalTable1[i].fileName === that.msdsBeforeDelete[j].fileName) {
            that.approvalTable1.splice(i, 1)
          }
        }
      }
      that.msdsBeforeDelete.forEach(function (value, index) {
        if (value.hasOwnProperty('attachmentOid')) {
          that.removeMsds += value.attachmentOid + '@@@'
        }
      })
    },
    deletePatent () {
      this.ifRemovePatent = 'yes'
      var that = this
      for (let i in that.approvalTable2) {
        for (let j in that.patentBeforeDelete) {
          if (that.approvalTable2[i].fileName === that.patentBeforeDelete[j].fileName) {
            that.approvalTable2.splice(i, 1)
          }
        }
      }
      that.patentBeforeDelete.forEach(function (value, index) {
        if (value.hasOwnProperty('attachmentOid')) {
          that.removePatent += value.attachmentOid + '@@@'
        }
      })
      /* for (let i in this.approvalTable2) {
        for (let j in this.patentBeforeDelete) {
          if (this.approvalTable2[i].attachmentOid === this.patentBeforeDelete[j].attachmentOid) {
            this.approvalTable2.splice(i, 1)
          }
        }
      } */
    },
    deleteIPFORM () {
      this.ifRemoveIP = 'yes'
      var that = this
      for (let i in that.approvalTable3) {
        for (let j in that.ipBeforeDelete) {
          if (that.approvalTable3[i].fileName === that.ipBeforeDelete[j].fileName) {
            that.approvalTable3.splice(i, 1)
          }
        }
      }
      that.ipBeforeDelete.forEach(function (value, index) {
        if (value.hasOwnProperty('attachmentOid')) {
          that.removeIpform += value.attachmentOid + '@@@'
        }
      })
      /* for (let i in this.approvalTable3) {
        for (let j in this.ipBeforeDelete) {
          if (this.approvalTable3[i].attachmentOid === this.ipBeforeDelete[j].attachmentOid) {
            this.approvalTable3.splice(i, 1)
          }
        }
      } */
    },
    uploadPatent () {
      this.$refs.upload.openDialog()
      this.$refs.upload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '', 'fileList', {number: this.envpNumber, userName: this.$store.getters.userInfo.username}, '03')
    },
    uploadIPFORM () {
      this.$refs.upload.openDialog()
      this.$refs.upload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '', 'fileList', {number: this.envpNumber, userName: this.$store.getters.userInfo.username}, '01')
    },
    uploadMsds () {
      this.$refs.upload.openDialog()
      this.$refs.upload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], '', 'fileList', {number: this.envpNumber, userName: this.$store.getters.userInfo.username}, '02')
    },
    downloadloadIP () {
      downloadEnvpTemplate('IPFORM').then(r => {
        if (r.data.flag) {
          window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    },
    download (row) {
      downloadAttach(row.attachmentOid).then(r => {
        window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
    },
    completeMSDS () {
      this.dialogVisible = false
      var that = this
      if (this.ifRemoveMsds === 'yes') {
        if (this.msdsBeforeDelete.length > 0) {
          for (let i in this.filePathArray1) {
            for (let j in this.msdsBeforeDelete) {
              if (this.filePathArray1[i].fileName === this.msdsBeforeDelete[j].fileName) {
                this.filePathArray1.splice(i, 1)
              }
            }
          }
        }
      }
      that.filePathArray1.forEach(function (value, index) {
        that.addMsds += value.filePath + '@@@'
      })
      if (this.ifRemovePatent === 'yes') {
        if (this.patentBeforeDelete.length > 0) {
          for (let i in this.filePathArray2) {
            for (let j in this.patentBeforeDelete) {
              if (this.filePathArray2[i].fileName === this.patentBeforeDelete[j].fileName) {
                this.filePathArray2.splice(i, 1)
              }
            }
          }
        }
      }
      that.filePathArray2.forEach(function (value, index) {
        that.addPatent += value.filePath + '@@@'
      })
      if (this.ifRemoveIP === 'yes') {
        if (this.ipBeforeDelete.length > 0) {
          for (let i in this.filePathArray3) {
            for (let j in this.ipBeforeDelete) {
              if (this.filePathArray3[i].fileName === this.ipBeforeDelete[j].fileName) {
                this.filePathArray3.splice(i, 1)
              }
            }
          }
        }
      }
      that.filePathArray3.forEach(function (value, index) {
        that.addIpform += value.filePath + '@@@'
      })
      executeEditMSDSItem(this.addMsds, this.removeMsds, this.addPatent, this.removePatent, this.addIpform, this.removeIpform, this.tableData[0].msdsOid).then(r => {
        if (r.data.status === 'success') {
          this.$props.updateMSDSData()
          this.$message.success({
            message: this.$t('success.update_success')
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
        this.ifRemoveMsds = 'no'
        this.ifRemovePatent = 'no'
        this.ifRemoveIP = 'no'
      })
    },
    returnFilePath (e, type) {
      this.$refs.upload.closeDialog()
      for (let i in e) {
        if (type === '02') {
          this.approvalTable1.push({
            attachmentOid: '',
            endTime: '',
            fileName: e[i].name
          })
          this.filePathArray1.push({
            filePath: e[i].path,
            fileName: e[i].name,
            fileType: '02'
          })
        }
        if (type === '03') {
          this.approvalTable2.push({
            attachmentOid: '',
            endTime: '',
            fileName: e[i].name
          })
          this.filePathArray2.push({
            filePath: e[i].path,
            fileName: e[i].name,
            fileType: '03'
          })
        }
        if (type === '01') {
          this.approvalTable3.push({
            attachmentOid: '',
            endTime: '',
            fileName: e[i].name
          })
          this.filePathArray3.push({
            filePath: e[i].path,
            fileName: e[i].name,
            fileType: '01'
          })
        }
      }
      // this.path = e[0].response.data[0] + '@@@' + this.path
      // this.fileType = type + ',' + this.fileType
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
    padding: 5px 30px 0px 15px;
    width: auto;
    height: 27px;
    color: #ffffff;
  }
</style>
