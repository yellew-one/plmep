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
        <span>原材料MSDS</span>
      </div>
      <el-row v-if="showButton" style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadMsds">上传新文件</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable1"
            border
            size="mini"
            style="width: 100%"
            @select="handleSelectionChange1">
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
          </el-table>
        </el-col>
      </el-row>
      <!--// 专利证明-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>专利证明</span>
      </div>
      <el-row v-if="showButton" style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadMsds">上传新文件</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable2"
            border
            size="mini"
            style="width: 100%">
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
          </el-table>
        </el-col>
      </el-row>
      <!--// ip form-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>IP FORM</span>
      </div>
      <el-row v-if="showButton" style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadIP" >下载IP Form模板</el-button>
        <el-button size="mini" type="primary" plain @click="uploadMsds">上传新文件</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable3"
            border
            size="mini"
            style="width: 100%">
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
          </el-table>
        </el-col>
      </el-row>
      <!--// 属性-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>属性</span>
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
import { getMSDSInfo, editMSDSTable } from '@/api/index'
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
      msdsBeforeDelete: []
    }
  },
  methods: {
    setDialogFormVisible (envpNumber, e, action) {
      this.approvalTable1 = []
      this.approvalTable2 = []
      this.approvalTable3 = []
      this.tableData = []
      this.dialogVisible = true
      this.tableData.push(e)
      this.msdsAttachmentOid = ''
      this.envpNumber = envpNumber
      if (action === 'edit') {
        this.showButton = true
      } else {
        this.showButton = false
      }
      this.getReportInfo()
    },
    getReportInfo () {
      getMSDSInfo('01', this.tableData[0].msdsOid).then(r => {
        this.approvalTable1 = r.data
      })
      getMSDSInfo('02', this.tableData[0].msdsOid).then(r => {
        this.approvalTable2 = r.data
      })
      getMSDSInfo('03', this.tableData[0].msdsOid).then(r => {
        this.approvalTable3 = r.data
      })
    },
    handleSelectionChange1 (val) {
      console.log('xoxoval', val)
      var str = ''
      this.msdsBeforeDelete = []
      for (let i in val) {
        str = val[i].attachmentOid + ',' + str
      }
      this.msdsBeforeDelete = val
      str = str.substring(0, str.length - 1)
      this.msdsAttachmentOid = str
      console.log('handleSelectionChange1', val)
    },
    completeMSDS () {
      this.dialogVisible = false
      editMSDSTable('01', this.tableData[0].envprotectionDocumentOid, this.path, this.tableData[0].msdsOid, this.msdsAttachmentOid).then(r => {
        console.log('editMSDSTable', r.data.result)
        if (r.data.result === 'success') {
          this.getReportInfo()
          this.$props.updateMSDSData()
          this.$message.success({
            message: '操作文件成功'
          })
        }
      })
    },
    deleteMsds () {
      var s = this.approvalTable1
      console.log('this.approvalTable1', this.approvalTable1)
      console.log('this.msdsBeforeDelete', this.msdsBeforeDelete)
      for (let i in s) {
        for (let j in this.msdsBeforeDelete) {
          if (s[i].attachmentOid === this.msdsBeforeDelete[j].attachmentOid) {
            s.splice(s[i], 1)
          }
        }
      }
      this.approvalTable1 = s
      console.log('s', this.approvalTable1)
    },
    uploadMsds () {
      this.$refs.upload.openDialog()
      this.$refs.upload.setAttribute('http://172.16.9.169:8080/files/upLoad', [], 'msds', 'fileList', {number: this.envpNumber, userName: this.$store.getters.userInfo.username})
    },
    uploadIP () {
      window.open('http://plmtest.longcheer.com/Windchill/servlet/WindchillGW/ext.longcheer.envprotection.task.FileDownLoadController/createBZUpdateNews')
    },
    returnFilePath (e) {
      this.path = e
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
  .longcheer_hr span{
    display: inline-block;
    background-image: url(../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    width: 200px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
