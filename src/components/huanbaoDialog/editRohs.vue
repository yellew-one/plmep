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
      top="2%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">RoHS报告</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="addRoHSReport" >添加RoHS报告</el-button>
        <el-button v-if="type === 'itemedit'" size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
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
                <el-button v-if="type === 'edit'" @click="editRoHSReport(scope.$index)" type="text" size="small">编辑</el-button>
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
              <el-form-item prop="pb"  label="Pb">
                <el-input :disabled="ifEdit" v-model="temp.pb">
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
              <el-form-item prop="cd"  label="Cd">
                <el-input :disabled="ifEdit" v-model="temp.cd">
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
              <el-form-item prop="hg"  label="Hg">
                <el-input :disabled="ifEdit" v-model="temp.hg">
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
              <el-form-item prop="cr6p"  label="Cr6+">
                <el-input :disabled="ifEdit" v-model="temp.cr6p">
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
              <el-form-item prop="pbbs"  label="PBBs">
                <el-input :disabled="ifEdit" v-model="temp.pbbs">
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
              <el-form-item prop="pbdes"  label="PBDEs">
                <el-input :disabled="ifEdit" v-model="temp.pbdes">
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
              <el-form-item prop="dehp"   label="DEHP">
                <el-input :disabled="ifEdit" v-model="temp.dehp">
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
              <el-form-item prop="bbp"  label="BBP">
                <el-input :disabled="ifEdit" v-model="temp.bbp">
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
              <el-form-item prop="dbp"  label="DBP">
                <el-input :disabled="ifEdit" v-model="temp.dbp">
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
              <el-form-item prop="dibp"  label="DIBP">
                <el-input :disabled="ifEdit" v-model="temp.dibp">
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
              <el-form-item prop="exemptions"  label="豁免条款">
                <el-input disabled="true" v-model="temp.exemptions">
                  <el-button @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
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
              <el-form-item prop="rohsState"  label="状态">
                <el-input disabled="true" v-model="temp.rohsState">
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
              <el-form-item prop="remark"  label="备注">
                <el-input type="textarea" :rows="3" :disabled="ifEdit" v-model="temp.remark">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type=== 'itemedit'" size="mini" @click="rohsDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type=== 'itemview'" size="mini" @click="rohsDialog = false">关闭</el-button>
        <el-button v-if="type=== 'itemedit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeReport">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <processing-general-report ref="processingGeneralReport"></processing-general-report>
      <escape-clause
                      ref="myChild"
                      :acceptSonValue = 'acceptSonValue'></escape-clause>
    </el-dialog>
  </div>
</template>
<script>
import EscapeClause from '../../components/huanbaoDialog/escapeClause'
import ProcessingGeneralReport from './processGeneralReport'
import { viewRohs, execute } from '@/api/index'
export default {
  components: {ProcessingGeneralReport, EscapeClause},
  name: 'RohsDialog',
  props: ['updateRoHSData'],
  mounted: function () {
  },
  data () {
    return {
      rohsDialog: false,
      totalReport: [],
      type: '',
      rohsOid: '',
      temp: {},
      ifEdit: true,
      oid: ''
    }
  },
  methods: {
    setRohsDialogVisible (e, rohsOid, oid) {
      this.rohsDialog = true
      this.type = e
      this.oid = oid
      this.rohsOid = rohsOid
      this.temp = {}
      if (e === 'itemedit' || e === 'itemview') {
        viewRohs(rohsOid).then(r => {
          this.temp = r.data
          this.totalReport = r.data.reports
        })
        if (e === 'itemedit') {
          this.ifEdit = false
        } else {
          this.ifEdit = true
        }
      }
    },
    addRoHSReport () {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible()
    },
    editRoHSReport (row) {},
    escapeClick () {
      this.$refs.myChild.setDialogFormVisible()
    },
    // 接受子组件传值
    acceptSonValue (e) {
      this.temp.exemptions = e
    },
    completeReport () {
      execute(this.rohsOid).then(r => {
        console.log('xoxo', r)
        if (r.data.status === 'success') {
          this.$message.success({
            message: '修改成功'
          })
        } else {
          this.$message.success({
            message: '修改成功'
          })
        }
        this.rohsDialog = false
        this.$props.updateRoHSData()
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
