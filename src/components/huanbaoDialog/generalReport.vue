/**
* Created by yaoyuan on 2019/3/12.
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="generalReportDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="2%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">{{title}}</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'edit'" size="mini" type="primary" plain @click="addRoHSReport" >{{$t('huanbaoTable.detailTable.addReport')}}</el-button>
        <el-button v-if="type === 'edit'" size="mini" type="danger"  plain @click="deleteRoHSReport">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
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
            <el-table-column align="center" show-overflow-tooltip="true"  prop="reportNumber"  :label="$t('huanbaoTable.ROHS.reportNumber')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.reportNumber)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="reportDate"  :label="$t('huanbaoTable.ROHS.reportDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportDate}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="examUnit"  :label="$t('huanbaoTable.ROHS.examUnit')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.examUnit}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="modifyTime"  :label="$t('huanbaoTable.ROHS.lastTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modifyTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" >
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="upload(scope.row)">{{$t('huanbaoTable.MSDS.download')}}</el-button>
                <el-button v-if="type === 'edit'" @click="editGeneralReport(scope.row)" type="text" size="small">{{$t('huanbaoTable.FMD.edit')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type === 'edit'" size="mini" @click="generalReportDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type === 'view'" size="mini" @click="generalReportDialog = false">{{$t('tagsView.close')}}</el-button>
        <el-button v-if="type === 'edit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeGeneralReport">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <processing-general-report ref="processingGeneralReport"
                                 :getBABAData="getBABAData"></processing-general-report>
    </el-dialog>
  </div>
</template>
<script>
import ProcessingGeneralReport from './processGeneralReport'
import { envpFinalReport } from '@/api/index'
import { saveFinalReport, downloadAttach } from '@/api/huanbaoAPI'
export default {
  components: {ProcessingGeneralReport},
  name: 'GeneralReport',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      generalReportDialog: false,
      totalReport: [{
        reportType: '',
        reportNumber: '',
        reportDate: '',
        examUnit: '',
        modifyTime: ''
      }],
      type: '',
      title: '',
      item: '',
      oid: '',
      totalReportBefore: [],
      removeOid: '',
      addOid: '',
      str: '',
      str2: '',
      editRemoveOid: ''
    }
  },
  methods: {
    setgeneralReportDialogisible (type, title, oid, item) {
      this.str2 = ''
      this.removeOid = ''
      this.editRemoveOid = ''
      this.addOid = ''
      this.totalReportBefore = []
      this.generalReportDialog = true
      this.type = type
      this.title = title
      this.item = item
      this.oid = oid
      this.getDataList(this.oid, this.item)
    },
    getBABAData (oid, item, data, e) {
      this.$store.commit('SET_LOADING', false)
      this.addOid = data.add + ',' + this.addOid
      if (data.hasOwnProperty('remove')) {
        this.editRemoveOid = data.remove + ',' + this.editRemoveOid
        for (let i in this.totalReport) {
          if (this.totalReport[i].reportOid === data.remove) {
            this.totalReport.splice(i, 1)
          }
        }
      }
      var temp = {}
      temp = Object.assign({}, e)
      this.totalReport.push(temp)
    },
    getDataList (oid, item) {
      envpFinalReport(oid, item).then(r => {
        console.log('envpFinalReport', r)
        this.totalReport = r.data
      })
    },
    addRoHSReport () {
      var temp = {}
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('TOTAL', temp, this.oid, 'ADD', this.item)
    },
    editGeneralReport (row) {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('TOTAL', row, this.oid, 'EDIT', this.item)
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
    completeGeneralReport () {
      this.$store.commit('SET_LOADING', true)
      var str = ''
      str = this.removeOid + ',' + this.editRemoveOid
      saveFinalReport(this.item, '1', this.oid, str, this.addOid).then(r => {
        if (r.data.status === 'success') {
          this.generalReportDialog = false
          this.$message.success({
            message: '编辑完成'
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
      })
    },
    upload (row) {
      downloadAttach(row.reportOid).then(r => {
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
