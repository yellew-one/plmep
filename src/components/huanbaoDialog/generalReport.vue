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
        <el-button v-if="type === 'edit'" size="mini" type="primary" plain @click="addRoHSReport" >添加RoHS报告</el-button>
        <el-button v-if="type === 'edit'" size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="totalReport"
            border
            size="mini"
            style="width: 100%;margin-top: 10px">
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
                <el-button type="text" size="small">下载</el-button>
                <el-button v-if="type === 'edit'" @click="editGeneralReport(scope.row)" type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type === 'edit'" size="mini" @click="generalReportDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type === 'view'" size="mini" @click="generalReportDialog = false">关闭</el-button>
        <el-button v-if="type === 'edit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeReport">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <processing-general-report ref="processingGeneralReport"></processing-general-report>
    </el-dialog>
  </div>
</template>
<script>
import ProcessingGeneralReport from './processGeneralReport'
import { envpFinalReport } from '@/api/index'
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
        reportType: '1',
        reportNumber: '2',
        reportDate: '3',
        examUnit: '4',
        modifyTime: '2012'
      }],
      type: '',
      title: ''
    }
  },
  methods: {
    setgeneralReportDialogisible (type, title, oid, item) {
      this.generalReportDialog = true
      this.type = type
      this.title = title
      envpFinalReport(oid, item).then(r => {
        console.log('envpFinalReport', r)
        // this.totalReport = r.data
      })
    },
    addRoHSReport () {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible()
    },
    editGeneralReport (row) {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible(row)
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
