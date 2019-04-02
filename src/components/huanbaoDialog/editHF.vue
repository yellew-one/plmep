/**
* Created by yaoyuan on 2019/3/18.
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="hfDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="2%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">HF报告</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="addRoHSReport" >添加HF报告</el-button>
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
                <el-button type="text" size="small" @click="upload(scope.row)">下载</el-button>
                <el-button v-if="type === 'itemedit'" @click="editRoHSReport(scope.row)" type="text" size="small">编辑</el-button>
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
              <el-form-item prop="cl"  label="Cl">
                <el-input :disabled="ifEdit" v-model="temp.cl">
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
              <el-form-item prop="br"  label="Br">
                <el-input :disabled="ifEdit" v-model="temp.br">
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
              <el-form-item prop="hg"  label="是否阻燃剂">
                <el-select style="width: 100%" :disabled="ifEdit" v-model="value" placeholder="">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
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
                <span :disabled="ifEdit" >{{$t('huanbaoTable.HF.' + temp.state)}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
            <el-col :span="2">
            </el-col>
            <el-col :span="16">
              <el-form-item prop="remark"  label="备注">
                <el-input type="textarea" :rows="3" :disabled="ifEdit" v-model="remark">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type=== 'itemedit'" size="mini" @click="hfDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type=== 'itemview'" size="mini" @click="hfDialog = false">关闭</el-button>
        <el-button v-if="type=== 'itemedit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeReport">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <processing-general-report ref="processingGeneralReport"
                                 :getBABAData="getBABAData"></processing-general-report>
      <escape-clause
        ref="myChild"
        :acceptSonValue = 'acceptSonValue'></escape-clause>
    </el-dialog>
  </div>
</template>
<script>
import EscapeClause from '../../components/huanbaoDialog/escapeClause'
import ProcessingGeneralReport from './processGeneralReport'
import { getHFTable, executeEditHFItem, downloadAttach } from '@/api/huanbaoAPI'
export default {
  components: {ProcessingGeneralReport, EscapeClause},
  name: 'HFDialog',
  props: ['updateHFData'],
  mounted: function () {
  },
  data () {
    return {
      hfDialog: false,
      totalReport: [],
      type: '',
      hfOid: '',
      temp: {},
      ifEdit: true,
      oid: '',
      removeOid: '',
      addOid: '',
      totalReportBefore: [],
      str: '',
      str2: '',
      options: [{
        value: '',
        label: ''
      }, {
        value: '1',
        label: '是'
      }, {
        value: '0',
        label: '否'
      }],
      value: '',
      remark: '',
      editRemoveOid: ''
    }
  },
  methods: {
    setHFDialogVisible (e, row, oid) {
      this.editRemoveOid = ''
      this.totalReportBefore = []
      this.removeOid = ''
      this.addOid = ''
      this.str = ''
      this.str2 = ''
      this.hfDialog = true
      this.type = e
      this.oid = oid
      this.hfOid = row.hfOid
      this.temp = {}
      this.temp = Object.assign({}, row)
      if (e === 'itemedit' || e === 'itemview') {
        this.getDataList(row.hfOid)
        if (e === 'itemedit') {
          this.ifEdit = false
        } else {
          this.ifEdit = true
        }
      }
      if (row.fileRetardant === '是') {
        this.value = '1'
      } else if (row.fileRetardant === '否') {
        this.value = '0'
      } else {
        this.value = ''
      }
    },
    getDataList (hfOid) {
      getHFTable(hfOid).then(r => {
        this.totalReport = r.data.reports
        this.remark = r.data.remake
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
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', temp, this.hfOid, 'ADD', 'HF')
    },
    editRoHSReport (row) {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', row, this.hfOid, 'EDIT', 'HF')
    },
    escapeClick () {
      this.$refs.myChild.setDialogFormVisible()
    },
    // 接受子组件传值
    acceptSonValue (e) {
      this.temp.exemptions = e
    },
    handleSelectionChange (val) {
      if (val.length) {
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
    completeReport () {
      this.hfDialog = false
      var str = ''
      str = this.editRemoveOid + ',' + this.removeOid
      this.temp.fileRetardant = this.value
      this.temp.remake = this.remark
      executeEditHFItem(this.hfOid, this.temp, str, this.addOid).then(r => {
        if (r.data.status === 'success') {
          this.$props.updateHFData()
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
    upload (row) {
      downloadAttach(row.reportOid).then(r => {
        window.open('http://172.16.9.169:8080/files/getFile?route=' + r.data.filePath + '&userName=' + this.$store.getters.userInfo.username, '_blank')
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
