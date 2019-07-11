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
        <span class="longcheer_hr_span">{{$t('huanbaoTable.ROHS.report')}}</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="addRoHSReport" >{{$t('huanbaoTable.detailTable.addReport')}}</el-button>
        <el-button v-if="type === 'itemedit'" size="mini" type="danger"  plain @click="deleteRoHSReport">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
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
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  :label="$t('huanbaoTable.ROHS.reportNumber')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.reportNumber)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  :label="$t('huanbaoTable.ROHS.reportDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportDate}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  :label="$t('huanbaoTable.ROHS.examUnit')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.examUnit}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="endTime"  :label="$t('huanbaoTable.ROHS.lastTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modifyTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" >
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="upload(scope.row)">{{$t('huanbaoTable.MSDS.download')}}</el-button>
                <el-button v-if="type === 'itemedit'" @click="editRoHSReport(scope.row)" type="text" size="small">{{$t('huanbaoTable.FMD.edit')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div class="boxtext" v-if="type === 'itemview' || type === 'itemedit'">
        <div class="longcheer_hr" style="margin-top: 10px;">
          <span class="longcheer_hr_span">{{$t('huanbaoTable.MSDS.Attributes')}}</span>
        </div>
        <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                 style=' margin-left:0px;margin-top: 10px'>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
            <el-col :span="2">
            </el-col>
            <el-col :span="16">
              <el-form-item prop="materialName"  :label="$t('huanbaoTable.ROHS.materialName')">
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
              <el-form-item prop="manufacturer"  :label="$t('huanbaoTable.ROHS.manufacturer')">
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
              <el-form-item prop="pb"  :label="$t('huanbaoTable.ROHS.pb')">
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
              <el-form-item prop="cd"  :label="$t('huanbaoTable.ROHS.cd')">
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
              <el-form-item prop="hg"  :label="$t('huanbaoTable.ROHS.hg')">
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
              <el-form-item prop="cr6p"  :label="$t('huanbaoTable.ROHS.cr6p')">
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
              <el-form-item prop="pbbs"  :label="$t('huanbaoTable.ROHS.pbbs')">
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
              <el-form-item prop="pbdes"  :label="$t('huanbaoTable.ROHS.pbdes')">
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
              <el-form-item prop="dehp"   :label="$t('huanbaoTable.ROHS.dehp')">
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
              <el-form-item prop="bbp"  :label="$t('huanbaoTable.ROHS.bbp')">
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
              <el-form-item prop="dbp"  :label="$t('huanbaoTable.ROHS.dbp')">
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
              <el-form-item prop="dibp"  :label="$t('huanbaoTable.ROHS.dibp')">
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
              <el-form-item prop="exemptions"  :label="$t('huanbaoTable.ROHS.exemptions')">
                <el-input readonly="true" v-model="exemptions">
                  <i
                    class="el-icon-close el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
                  </i>
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
              <el-form-item prop="rohsState"  :label="$t('huanbaoTable.ROHS.state')">
                <span>{{temp.rohsState}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
          <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
            <el-col :span="2">
            </el-col>
            <el-col :span="16">
              <el-form-item prop="remark"  :label="$t('huanbaoTable.ROHS.remark')">
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
        <el-button v-if="type=== 'itemview'" size="mini" @click="rohsDialog = false">{{$t('tagsView.close')}}</el-button>
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
import { viewRohs } from '@/api/index'
import { downloadAttach, execute } from '@/api/huanbaoAPI'
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
      oid: '',
      removeOid: '',
      addOid: '',
      totalReportBefore: [],
      str: '',
      str2: '',
      exemptions: '',
      editRemoveOid: ''
    }
  },
  methods: {
    setRohsDialogVisible (e, row, oid) {
      this.editRemoveOid = ''
      this.totalReportBefore = []
      this.exemptions = ''
      this.removeOid = ''
      this.addOid = ''
      this.str = ''
      this.str2 = ''
      this.rohsDialog = true
      this.type = e
      this.oid = oid
      this.rohsOid = row.rohsOid
      this.temp = Object.assign({}, row)
      this.exemptions = row.exemptions
      if (e === 'itemedit' || e === 'itemview') {
        this.getDataList(this.rohsOid)
        if (e === 'itemedit') {
          this.ifEdit = false
        } else {
          this.ifEdit = true
        }
      }
    },
    handleIconClick () {
      this.exemptions = ''
    },
    getDataList (oid) {
      viewRohs(oid).then(r => {
        this.temp = r.data
        this.totalReport = r.data.reports
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
      var temp = {}
      temp = Object.assign({}, e)
      this.totalReport.push(temp)
    },
    addRoHSReport () {
      var temp = {}
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', temp, this.rohsOid, 'ADD', 'RoHS')
    },
    editRoHSReport (row) {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', row, this.rohsOid, 'EDIT', 'RoHS')
    },
    upload (row) {
      downloadAttach(row.reportOid).then(r => {
        window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
    },
    escapeClick () {
      this.$refs.myChild.setDialogFormVisible()
    },
    // 接受子组件传值
    acceptSonValue (e) {
      this.exemptions = e
    },
    handleSelectionChange (val) {
      if (val.length > 0) {
        this.totalReportBefore = val
      }
      /* this.totalReportBefore = val
      this.str = ''
      for (let i in val) {
        if (val[i].hasOwnProperty('reportOid')) {
          this.str = val[i].reportOid + ',' + this.str
        }
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
      var str = ''
      str = this.removeOid + ',' + this.editRemoveOid
      this.temp.exemptions = this.exemptions
      var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
      execute(this.rohsOid, this.temp, str, this.addOid, types).then(r => {
        if (r.data.status === 'success') {
          this.rohsDialog = false
          this.$props.updateRoHSData()
          this.$message.success({
            message: this.$t('success.update_success')
          })
        } else {
          this.$message.error({
            message: r.data.info
          })
        }
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
