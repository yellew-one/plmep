/**
* Created by yaoyuan on 2019/3/1.
* 第三方复用
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      :close-on-press-escape="false"
      width="60%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>{{$t('huanbaoTable.FMD.third')}}</span>
      </div>
      <el-row :gutter="20" style="margin-top: 10px">
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="180px"
                   style=' margin-left:0px;'>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;">
              <el-col :span="16">
                <el-form-item prop="materialName" :label="$t('huanbaoTable.FMD.documentType')">
                  <el-select v-model="temp.selectedDocumentType" placeholder="" style="width: 100%">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: -10px">
              <el-col :span="16">
                <el-form-item prop="materialWeight" :label="$t('huanbaoTable.FMD.materialName')">
                  <el-select v-model="temp.selectedMaterial" placeholder="" style="width: 100%">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" class="row-bg" >
        <el-col :span="3">
        </el-col>
        <el-col :span="8">
          <el-button :loading="$store.getters.loading" size="mini" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
          <!--<el-button size="mini" type="primary" plain>{{$t('huanbaoTable.search.mail')}}</el-button>-->
        </el-col>
        <el-col :span="8">
        </el-col>
      </el-row>
      <!--可复用的第三方报告-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>{{$t('huanbaoTable.FMD.third')}}</span>
      </div>
      <el-row style="margin-top: 5px;">
        <el-col :span="6">
          <el-input placeholder="" size="mini" v-model="tFilters"></el-input>
        </el-col>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            ref="multipleTable1"
            :data="thirdTable | tablefilters(tFilters)"
            border
            :height="thirdTable.length === 0 ? '100' : '300'"
            size="mini"
            style="width: 100%; margin-top: 5px"
            @selection-change="handleSelectionChangeThird">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="materialNumber"  :label="$t('huanbaoTable.FMD.materialNumber')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.materialNumber)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="documentType"  :label="$t('huanbaoTable.FMD.documentType')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.documentType}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="materialName"  :label="$t('huanbaoTable.FMD.materialName')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.materialName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="manufacturer"  :label="$t('huanbaoTable.FMD.manufacturer')">
              <template
                slot-scope="scope">
                <span>{{scope.row.manufacturer}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="reportNumber"  :label="$t('huanbaoTable.FMD.reportNumber')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportNumber}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="reportType"  :label="$t('huanbaoTable.FMD.reportType')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportType}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="reportDate"  :label="$t('huanbaoTable.FMD.reportDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportDate}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="examUnit"  :label="$t('huanbaoTable.FMD.examUnit')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.examUnit}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="createTime"  :label="$t('huanbaoTable.FMD.createTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.createTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="modifyTime"  :label="$t('huanbaoTable.FMD.modifyTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modifyTime}}</span>
              </template>
            </el-table-column>
            <el-table-column
              width="120"
              fixed="right"
              align="center"
              :label="$t('huanbaoTable.detailTable.operating')">
              <template slot-scope="scope">
                <el-button @click="relevant(scope.row)" type="text" size="small">{{$t('huanbaoTable.FMD.Relatedmaterials')}}</el-button>
                <el-button @click="uploadMaterial(scope.row)" type="text" size="small">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--可复用的msds报告-->
      <div class="longcheer_hr" style="margin-top: 5px;">
        <span>{{$t('huanbaoTable.FMD.Reusable')}}</span>
      </div>
      <el-row style="margin-top: 10px;">
        <el-col :span="6">
          <el-input placeholder="" size="mini" v-model="mFilters"></el-input>
        </el-col>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            ref="multipleTable2"
            :data="msdsTable | mablefilters(mFilters)"
            border
            :height="msdsTable.length === 0 ? '100' : '300'"
            size="mini"
            style="width: 100%;margin-top: 5px"
            @selection-change="handleSelectionChangeMsds">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="materilaNum"  :label="$t('huanbaoTable.FMD.materialNumber')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.materilaNum}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="documentType"  :label="$t('huanbaoTable.FMD.documentType')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.documentType}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="materialName"  :label="$t('huanbaoTable.FMD.materialName')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.materialName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="manufacturer"  :label="$t('huanbaoTable.FMD.manufacturer')">
              <template
                slot-scope="scope">
                <span>{{scope.row.manufacturer}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="attachType"  :label="$t('huanbaoTable.FMD.attachType')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.attachType}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="fileName"  :label="$t('huanbaoTable.FMD.fileName')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.fileName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="createTime"  :label="$t('huanbaoTable.FMD.createTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.createTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="modifyTime"  :label="$t('huanbaoTable.FMD.modifyTime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modifyTime}}</span>
              </template>
            </el-table-column>
            <el-table-column
              width="120"
              fixed="right"
              align="center"
              :label="$t('huanbaoTable.detailTable.operating')">
              <template slot-scope="scope">
                <el-button @click="uploadMsds(scope.row)" type="text" size="small">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancelValue">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="completeFMD">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <!--相关物料-->
      <relevant-materials ref="relevantMaterials"></relevant-materials>
    </el-dialog>
  </div>
</template>
<script>
import RelevantMaterials from './relevantMaterials'
import { searchReuseReport, getMaterialName, reuseReportsExecute } from '@/api/index'
import { downloadAttach, docType } from '@/api/huanbaoAPI'
export default {
  components: {RelevantMaterials},
  name: 'ThirdReuse',
  props: ['getDataList'],
  filters: {
    tablefilters: function (value, data) {
      var sz = []
      value.forEach(function (v, index) {
        if (v.materialNumber.indexOf(data) !== -1) {
          sz.push(v)
        }
      })
      return sz
    },
    mablefilters: function (value, data) {
      var sz = []
      value.forEach(function (v, index) {
        if (v.materilaNum.indexOf(data) !== -1) {
          sz.push(v)
        }
      })
      return sz
    }
  },
  mounted: function () {
  },
  data () {
    return {
      tFilters: '',
      mFilters: '',
      oid: '',
      dialogVisible: false,
      temp: {
        selectedDocumentType: '',
        selectedMaterial: '',
        envpNumber: ''
      },
      thirdTable: [],
      msdsTable: [],
      options: [],
      reports: '',
      attachs: '',
      multipleTable1: [],
      multipleTable2: []
    }
  },
  methods: {
    setThirdReuseDialogFormVisible (e, oid) {
      this.temp = {
        selectedDocumentType: '',
        selectedMaterial: '',
        envpNumber: ''
      }
      this.thirdTable = []
      this.msdsTable = []
      this.options = []
      this.options2 = []
      this.dialogVisible = true
      this.temp.envpNumber = e
      this.oid = ''
      this.oid = oid
      getMaterialName(e).then(r => {
        console.log('getMaterialName', r)
        var names = [{
          value: '',
          label: ''
        }]
        for (let i in r.data) {
          names.push({
            value: r.data[i].materialId,
            label: r.data[i].materialName
          })
        }
        this.options = names
      })
      var that = this
      docType().then(r => {
        var names = [{
          value: '',
          label: ''
        }]
        for (let i in r.data) {
          if (r.data[i].name === '其他') {
            names.push({
              value: r.data[i].id,
              label: that.$t('huanbaoTable.submitted.OTHER')
            })
          } else {
            names.push({
              value: r.data[i].id,
              label: r.data[i].name
            })
          }
        }
        this.options2 = names
      })
    },
    completeFMD () {
      this.dialogVisible = false
      reuseReportsExecute(this.reports, this.attachs, this.temp.envpNumber).then(r => {
        console.log('reuseReportsExecute', r.data.status)
        if (r.data.status === 'success') {
          this.$props.getDataList(this.oid)
          this.$message.success({
            dangerouslyUseHTMLString: true,
            message: this.$t('success.update_success') + '<br/>' + r.data.warning
          })
        } else {
          this.$message.error({
            dangerouslyUseHTMLString: true,
            message: r.data.info
          })
        }
      })
    },
    cancelValue () {
      this.dialogVisible = false
    },
    searchResult () {
      searchReuseReport(this.temp).then(r => {
        console.log('searchReuseReport', r)
        this.thirdTable = r.data.report
        this.msdsTable = r.data.attach
        /* for (let i in r.data) {
          this.thirdTable = r.data[i].report
          this.msdsTable = r.data[i].attach
        } */
      })
    },
    handleSelectionChangeThird (val) {
      var reports = ''
      for (let i in val) {
        reports = val[i].reportOid + ',' + reports
      }
      reports = reports.substring(0, reports.length - 1)
      this.reports = reports
    },
    handleSelectionChangeMsds (val) {
      var attachs = ''
      for (let i in val) {
        attachs = val[i].attachOid + ',' + attachs
      }
      attachs = attachs.substring(0, attachs.length - 1)
      this.attachs = attachs
    },
    relevant (row) {
      this.$refs.relevantMaterials.setDialogFormVisible(row)
    },
    uploadMaterial (row) {
      downloadAttach(row.reportOid).then(r => {
        window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
    },
    uploadMsds (row) {
      downloadAttach(row.attachOid).then(r => {
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
