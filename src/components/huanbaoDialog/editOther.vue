/**
* Created by yaoyuan on 2019/3/21.
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="otherDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="2%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span class="longcheer_hr_span">{{$t('huanbaoTable.OTHER.OTHER')}}</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="addOtherReport" >{{$t('huanbaoTable.detailTable.addReport')}}</el-button>
        <el-button v-if="type === 'itemedit'" size="mini" type="danger"  plain @click="deleteOtherReport">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
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
            <el-table-column align="center" show-overflow-tooltip="true"  prop="reportType"  :label="$t('huanbaoTable.OTHER.Reporttype')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.reportType)}}</span>
              </template>
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
            <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
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
        <el-scrollbar style="height: 250px">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                   style=' margin-left:0px;margin-top: 10px'>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="materialName"  :label="$t('huanbaoTable.OTHER.materialName')">
                  <el-input disabled="true" v-model="temp.materialName">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="manufacturer"  :label="$t('huanbaoTable.OTHER.manufacturer')">
                  <el-input disabled="true" v-model="temp.manufacturer">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="ni"  :label="$t('huanbaoTable.OTHER.ni')">
                  <el-input :disabled="ifEdit" v-model="temp.ni">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="pahs"  :label="$t('huanbaoTable.OTHER.pahs')">
                  <el-input :disabled="ifEdit" v-model="temp.pahs">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="didp"  :label="$t('huanbaoTable.OTHER.didp')">
                  <el-input :disabled="ifEdit" v-model="temp.didp">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="dinp"  :label="$t('huanbaoTable.OTHER.dinp')">
                  <el-input :disabled="ifEdit" v-model="temp.dinp">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="dnhp"  :label="$t('huanbaoTable.OTHER.dnhp')">
                  <el-input :disabled="ifEdit" v-model="temp.dnhp">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="sccp"  :label="$t('huanbaoTable.OTHER.sccp')">
                  <el-input :disabled="ifEdit" v-model="temp.sccp">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="be"   :label="$t('huanbaoTable.OTHER.be')">
                  <el-input :disabled="ifEdit" v-model="temp.be">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="sb"  :label="$t('huanbaoTable.OTHER.sb')">
                  <el-input :disabled="ifEdit" v-model="temp.sb">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="state"  :label="$t('huanbaoTable.OTHER.state')">
                  <span>{{$t('huanbaoTable.HF.' + temp.state)}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" class="row-bg" style="height: 40px;">
              <el-col :span="2">
              </el-col>
              <el-col :span="16">
                <el-form-item prop="remark"  :label="$t('huanbaoTable.ROHS.remark')">
                  <el-input type="textarea" :rows="3" :disabled="ifEdit" v-model="value">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
              </el-col>
            </el-row>
          </el-form>
        </el-scrollbar>
      </div>
      <div class="longcheer_hr" style="margin-top: 0px;">
        <span class="longcheer_hr_span">{{$t('huanbaoTable.OTHER.substance')}}</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button v-if="type === 'itemedit'" size="mini" type="primary" plain @click="addSubstances" >{{$t('huanbaoTable.OTHER.AddSubstance')}}</el-button>
        <el-button v-if="type === 'itemedit'" size="mini" type="danger"  plain @click="deleteSubstances">{{$t('huanbaoTable.MSDS.Remove')}}</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="substancesTotal"
            border
            size="mini"
            style="width: 100%;margin-top: 10px"
            @select="handleSelectionChange2">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="materialName"  :label="$t('huanbaoTable.OTHER.MaterialName')" >
              <template
                slot-scope="scope">
                <el-input size="mini" :disabled="false" v-model="scope.row.materialName">
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="materialContent"  :label="$t('huanbaoTable.OTHER.substanceWeight')" >
              <template
                slot-scope="scope">
                <el-input size="mini" :disabled="false" v-model="scope.row.materialContent">
                </el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="type=== 'itemedit'" size="mini" @click="otherDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button v-if="type=== 'itemview'" size="mini" @click="otherDialog = false">{{$t('tagsView.close')}}</el-button>
        <el-button v-if="type=== 'itemedit'" :loading="$store.getters.loading" size="mini" type="primary" @click="completeReport">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <processing-general-report ref="processingGeneralReport"
                                 :getBABAData="getBABAData"></processing-general-report>
    </el-dialog>
  </div>
</template>
<script>
import ProcessingGeneralReport from './processGeneralReport'
import { itemReport, itemMaterialInfo, executeEditOtherItem, downloadAttach } from '@/api/huanbaoAPI'
export default {
  components: {
    ProcessingGeneralReport},
  name: 'OtherDialog',
  props: ['updateOtherData'],
  mounted: function () {
  },
  data () {
    return {
      otherDialog: false,
      totalReport: [],
      type: '',
      otherOid: '',
      temp: {},
      ifEdit: true,
      oid: '',
      removeOid: '',
      addOid: '',
      totalReportBefore: [],
      str: '',
      str2: '',
      substancesTotal: [],
      substancesStr: '',
      substancesStr2: '',
      substancesRemoveOid: '',
      substancesTotalBefore: [],
      newSubstances: [],
      value: '',
      editRemoveOid: ''
    }
  },
  methods: {
    setOtherDialogVisible (e, row, oid) {
      this.substancesRemoveOid = ''
      this.editRemoveOid = ''
      this.totalReportBefore = []
      this.removeOid = ''
      this.addOid = ''
      this.otherDialog = true
      this.type = e
      this.oid = oid
      this.otherOid = row.otherOid
      this.temp = {}
      this.temp = Object.assign(row)
      this.value = ''
      if (e === 'itemedit' || e === 'itemview') {
        this.getDataList(this.otherOid)
        if (e === 'itemedit') {
          this.ifEdit = false
        } else {
          this.ifEdit = true
        }
      }
    },
    getDataList (otherOid) {
      itemReport(otherOid).then(r => {
        console.log('getDataList', r)
        this.totalReport = r.data
      })
      itemMaterialInfo(otherOid).then(r => {
        this.substancesTotal = r.data
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
    addOtherReport () {
      var temp = {}
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', temp, this.otherOid, 'ADD', 'OTHER')
    },
    editRoHSReport (row) {
      this.$refs.processingGeneralReport.setprocessingGeneralReportFormVisible('ENTRY', row, this.otherOid, 'EDIT', 'OTHER')
    },
    handleSelectionChange (val) {
      if (val.length > 0) {
        this.totalReportBefore = val
      }
      /* this.totalReportBefore = val
      this.str = ''
      if (val.length < 1) {
        this.removeOid = ''
      } else {
        for (let i in val) {
          if (val[i].hasOwnProperty('oid')) {
            this.str = val[i].oid + ',' + this.str
          }
        }
      } */
    },
    deleteOtherReport () {
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
      this.removeOid = this.str2.substring(0, this.str2.length - 1)
      for (let i in this.totalReport) {
        for (let j in this.totalReportBefore) {
          if (this.totalReport[i].oid === this.totalReportBefore[j].oid) {
            this.totalReport.splice(i, 1)
          }
        }
      } */
    },
    // 添加新物质
    addSubstances () {
      this.newSubstances = []
      this.newSubstances.push({
        materialName: '',
        materialContent: ''
      })
      this.substancesTotal.push(this.newSubstances)
    },
    handleSelectionChange2 (val) {
      if (val.length > 0) {
        this.substancesTotalBefore = val
      }
      /* this.substancesTotalBefore = val
      this.substancesStr = ''
      if (val.length < 1) {
        this.substancesRemoveOid = ''
      } else {
        for (let i in val) {
          if (val[i].hasOwnProperty('oid')) {
            this.substancesStr = val[i].oid + ',' + this.substancesStr
          }
        }
      } */
    },
    // 移除新物质
    deleteSubstances () {
      var that = this
      for (let i in this.substancesTotal) {
        for (let j in this.substancesTotalBefore) {
          if (this.substancesTotal[i].materialName === this.substancesTotalBefore[j].materialName) {
            this.substancesTotal.splice(i, 1)
          }
        }
      }
      that.substancesTotalBefore.forEach(function (value, index) {
        if (value.hasOwnProperty('oid')) {
          that.substancesRemoveOid += value.oid + ','
        }
      })
      /* this.substancesStr2 = this.substancesStr + this.substancesStr2
      this.substancesRemoveOid = this.substancesStr2.substring(0, this.substancesStr2.length - 1)
      for (let i in this.substancesTotal) {
        for (let j in this.substancesTotalBefore) {
          if (this.substancesTotal[i].materialName === this.substancesTotalBefore[j].materialName) {
            this.substancesTotal.splice(i, 1)
          }
        }
      } */
    },
    completeReport () {
      var s = []
      for (let i in this.substancesTotal) {
        if (this.substancesTotal[i].materialName) {
          s.push({
            materialName: this.substancesTotal[i].materialName,
            materialContent: this.substancesTotal[i].materialContent
          })
        }
      }
      this.temp.remark = this.value
      var str = JSON.stringify(s)
      var removeOid = ''
      removeOid = this.removeOid + ',' + this.editRemoveOid
      var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
      executeEditOtherItem(this.otherOid, this.temp, removeOid, this.addOid, this.substancesRemoveOid, str, types).then(r => {
        if (r.data.status === 'success') {
          this.otherDialog = false
          this.$props.updateOtherData()
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
