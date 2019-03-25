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
        <span class="longcheer_hr_span">REACH总声明</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'edit'" size="mini" type="primary" plain @click="addFile" >添加新文件</el-button>
        <el-button v-if="type === 'edit'" size="mini" type="danger"  plain @click="deleteFile">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="totalReport"
            border
            size="mini"
            style="width: 100%;margin-top: 10px"
            @select="handleSelectionChange">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  label="文件名" >
              <template
                slot-scope="scope">
                <span>{{scope.row.fileName}}</span>
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
                <el-button type="text" size="small" @click="upload(scope.row)">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type === 'edit'" size="mini" @click="generalStatementDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type === 'view'" size="mini" @click="generalStatementDialog = false">关闭</el-button>
        <el-button v-if="type === 'edit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeGeneralStatement">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <files-upload ref="fileUpload"
                    :returnFilePath="returnFilePath"></files-upload>
    </el-dialog>
  </div>
</template>
<script>
import ProcessingGeneralReport from './processGeneralReport'
import { attachmentInfo, executeFinalDel } from '@/api/huanbaoAPI'
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
      filePath: ''
    }
  },
  methods: {
    setgeneralStatementDialogisible (type, oid) {
      this.removeOid = ''
      this.addOid = ''
      this.totalReportBefore = []
      this.generalStatementDialog = true
      this.type = type
      this.oid = oid
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
      this.$refs.fileUpload.setAttribute('http://172.16.9.169:8080/files/upLoad', [], '添加总声明', 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, 'REACH')
    },
    handleSelectionChange (val) {
      this.totalReportBefore = val
      this.str = ''
      if (val.length < 1) {
        this.removeOid = ''
      } else {
        for (let i in val) {
          this.str = val[i].oid + ',' + this.str
        }
      }
    },
    deleteFile () {
      this.str2 = this.str + this.str2
      this.removeOid = this.str2.substring(0, this.str2.length - 1)
      for (let i in this.totalReport) {
        for (let j in this.totalReportBefore) {
          if (this.totalReport[i].oid === this.totalReportBefore[j].oid) {
            this.totalReport.splice(i, 1)
          }
        }
      }
    },
    completeGeneralStatement () {
      executeFinalDel(this.oid, this.filePath, this.removeOid).then(r => {
        if (r.data.status === 'success') {
          this.generalStatementDialog = false
          this.$message.success({
            message: '编辑完成'
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
      })
      this.filePath = ''
    },
    /**
     * @param e 文件列表
     * @param type 文件所属条目
     */
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      this.fileName = e[0].name
      this.filePath = e[0].response.data[0] + ',' + this.filePath
      this.filePath = this.filePath.substring(0, this.filePath.length - 1)
      this.totalReport.push({
        fileName: this.fileName,
        modifyTime: ''
      })
    },
    upload (row) {
      console.log('reach总声明', row)
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
    width: 200px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
