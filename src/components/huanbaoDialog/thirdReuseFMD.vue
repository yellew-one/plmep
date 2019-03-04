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
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="100px"
                   style=' margin-left:0px;'>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;">
              <el-col :span="16">
                <el-form-item prop="materialName" :label="$t('huanbaoTable.FMD.itemType')">
                  <el-input v-model="temp.materialName">{{ temp.itemName}}</el-input>
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
                  <el-input v-model="temp.materialName">{{ temp.itemName}}</el-input>
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
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="thirdTable"
            border
            size="mini"
            style="width: 100%"
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
            <el-table-column align="center" show-overflow-tooltip="true"  prop="itemType"  :label="$t('huanbaoTable.FMD.itemType')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.itemType}}</span>
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
            <el-table-column align="center" show-overflow-tooltip="true"  prop="detectionUnit"  :label="$t('huanbaoTable.FMD.detectionUnit')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.detectionUnit}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="createDate"  :label="$t('huanbaoTable.FMD.createDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.createDate}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="lastDate"  :label="$t('huanbaoTable.FMD.lastDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.lastDate}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="relevant(scope.row)"
                  type="text"
                  size="small">
                  相关物料
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--可复用的msds报告-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>可复用的MSDS和申报物质报告</span>
      </div>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="msdsTable"
            border
            size="mini"
            style="width: 100%"
            @selection-change="handleSelectionChangemsds">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="state"  :label="$t('huanbaoTable.approval.state')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.state)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="linkName"  :label="$t('huanbaoTable.approval.linkName')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.linkName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="role"  :label="$t('huanbaoTable.approval.role')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.role}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="approvers"  :label="$t('huanbaoTable.approval.approvers')">
              <template
                slot-scope="scope">
                <span>{{scope.row.approvers}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="router"  :label="$t('huanbaoTable.approval.router')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.router}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="remark"  :label="$t('huanbaoTable.approval.remark')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.remark}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="approvaltime"  :label="$t('huanbaoTable.approval.approvaltime')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.approvaltime}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="completeFMD">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
      <relevant-materials ref="relevantMaterials"></relevant-materials>
    </el-dialog>
  </div>
</template>
<script>
import RelevantMaterials from './relevantMaterials'
export default {
  components: {RelevantMaterials},
  name: 'ThirdReuse',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      oid: '',
      dialogVisible: false,
      temp: {},
      tableData: [],
      thirdTable: [{
        itemType: '条目类型',
        materialNumber: '物料编号',
        reportNumber: '报告编号',
        reportType: '报告类型',
        reportDate: '报告日期',
        createDate: '创建时间',
        lastDate: '上次修改时间',
        detectionUnit: '检测单位',
        materialName: '原材料名称',
        manufacturer: '原材料制造商'
      }],
      msdsTable: [{
        state: 'State',
        linkName: 'Link Name',
        role: 'Role',
        approvers: 'Approvers',
        router: 'Router',
        remark: 'Remark',
        approvaltime: 'Approval time'
      }]
    }
  },
  methods: {
    setDialogFormVisible () {
      this.dialogVisible = true
    },
    completeFMD () {
      this.dialogVisible = false
    },
    searchResult () {
    },
    handleSelectionChangeThird (val) {
    },
    handleSelectionChangemsds (val) {
    },
    relevant (row) {
      this.$refs.relevantMaterials.setDialogFormVisible()
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
    width: 250px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
