/**
* Created by yaoyuan on 2019/3/7.
* 编辑  rohs
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="rohsDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="15%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">RoHS总报告</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'edit'" size="mini" type="primary" plain @click="addRoHSReport" >添加RoHS报告</el-button>
        <el-button v-if="type === 'edit'" size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
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
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  label="报告编号" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.fileName)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  label="报告日期" >
              <template
                slot-scope="scope">
                <span>{{scope.row.endTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  label="检测单位" >
              <template
                slot-scope="scope">
                <span>{{scope.row.endTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  label="上次修改时间" >
              <template
                slot-scope="scope">
                <span>{{scope.row.endTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small">下载</el-button>
                <el-button v-if="type === 'edit'" @click="editMsds(scope.$index)" type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type === 'edit'" size="mini" @click="rohsDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type !== 'edit'" size="mini" @click="rohsDialog = false">关闭</el-button>
        <el-button v-if="type === 'edit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeFMD">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <rohs-report-dialog ref="RohsReportDialog"></rohs-report-dialog>
    </el-dialog>
  </div>
</template>
<script>
import RohsReportDialog from './rohsReportDialog'
// import {  } from '@/api/index'
export default {
  components: {RohsReportDialog},
  name: 'RohsDialog',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      rohsDialog: false,
      temp: {},
      tableData: [],
      type: ''
    }
  },
  methods: {
    setDialogFormVisible (e) {
      this.rohsDialog = true
      this.type = e
    },
    addRoHSReport () {
      this.$refs.RohsReportDialog.setDialogFormVisible()
    },
    editMsds (row) {}
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
