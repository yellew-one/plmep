<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <div class="card_title">{{model.materialEnvironmental}}</div>
        <el-card shadow="hover" class="card">
          <div class="longcheer_hr">
            <span>{{$t('huanbaoTable.detailTable.envProtectionStatus')}}</span>
          </div>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.materialNumber')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.materialNumber}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.materialName')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.materialName}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.modelName')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.modelName}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.supplierNumber')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.supplierNumber}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.requestProject')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.requestProject}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.manufacturer')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.manufacturer}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.envProtectionStatus')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.envProtectionStatus}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.requestCause')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.requestCause}}
            </el-col>
          </el-row>
          <div class="longcheer_hr" style="margin-top: 20px">
            <span>{{$t('huanbaoTable.detailTable.third')}}</span>
          </div>
          <el-table
            :data="dataList"
            border
            size="mini"
            height="350px"
            style="width: 100%">
            <el-table-column :label="$t('huanbaoTable.third.lqNumber')" align="center" show-overflow-tooltip="true"  prop="activityName"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.partNo}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.rawmaterial')" align="center" show-overflow-tooltip="true"  prop="activityName"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.materialName}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.ReportType')" align="center" show-overflow-tooltip="true"  prop="activityName"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportType}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.ReportNumber')" align="center" show-overflow-tooltip="true"  prop="activityName"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportNumber}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.ReportDate')" align="center" show-overflow-tooltip="true"  prop="activityName"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportDate}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.TestingUnit')" align="center" show-overflow-tooltip="true"  prop="activityName"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.examUnit}}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              align="center"
              :label="$t('huanbaoTable.third.operation')"
              width="160">
              <template slot-scope="scope">
                <el-button @click="toRelatedClick(scope.row)" type="text" size="small">{{$t('formButton.relatedMaterials')}}</el-button>
                <el-button @click="toEditReport(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div  class="longcheer_hr" style="margin-top: 20px">
            <span class="longcheer_hr_span">{{$t('formButton.Approval')}}</span>
          </div>
          <el-row  class="card_row">
            <el-col span="4" style="text-align: right">备注：</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col  span="12"><el-input  :disabled="state !== 'true'" v-model="model.comment" type="textarea" :rows="3"></el-input></el-col>
          </el-row>
          <el-row  class="card_row">
            <el-col span="4" style="text-align: right">&nbsp;</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col span="12" style="text-align: right">
              <el-radio :disabled="state !== 'true'" v-model="radio" label="Supply(供货)">{{$t('fengyangTable.detail.Supply')}}</el-radio>
              <el-radio :disabled="state !== 'true'" v-model="radio" label="No supply(不供货)">{{$t('fengyangTable.detail.unSupply')}}</el-radio>
            </el-col>
          </el-row>
          <el-row  class="card_row">
            <el-col span="4" style="text-align: right">&nbsp;</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col span="12" style="text-align: right">
              <el-button  :loading="$store.getters.loading" @click="submitAprive" size="mini" type="primary">{{$t('formButton.submit')}}</el-button>
            </el-col>
          </el-row>
          <div class="longcheer_hr" style="margin-top: 40px">
            <span class="longcheer_hr_span">{{$t('huanbaoTable.detailTable.approval')}}</span>
          </div>
          <el-row class="card_row">
            <el-col span="24">
              <el-table
                :data="approvalTable"
                border
                size="mini"
                style="width: 100%">
                <el-table-column align="center" show-overflow-tooltip="true"  prop="status"  :label="$t('huanbaoTable.approval.state')" >
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.approval.' + scope.row.status)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" show-overflow-tooltip="true"  prop="activityName"  :label="$t('huanbaoTable.approval.activityName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.activityName}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" show-overflow-tooltip="true"  prop="roleName"  :label="$t('huanbaoTable.approval.roleName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.roleName}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" show-overflow-tooltip="true"  prop="ownerName"  :label="$t('huanbaoTable.approval.ownerName')">
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.ownerName}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" show-overflow-tooltip="true"  prop="vote"  :label="$t('huanbaoTable.approval.vote')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.vote}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" show-overflow-tooltip="true"  prop="comment"  :label="$t('huanbaoTable.approval.comment')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.comment}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" show-overflow-tooltip="true"  prop="finishTime"  :label="$t('huanbaoTable.approval.finishTime')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.finishTime}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <RelevantMaterials ref="relMater"></RelevantMaterials>
    <editReport ref="editReport"></editReport>
  </div>
</template>
<script>
import { showEnvprotectionTask, getExpiringReportInfo, getReportProcessingStatus } from '@/api/huanbaoAPI'
import RelevantMaterials from '@/components/huanbaoDialog/relevantMaterials'
import editReport from '@/components/huanbaoDialog/editReport'
export default {
  name: 'detailthird',
  components: {
    RelevantMaterials,
    editReport
  },
  data () {
    return {
      state: '',
      oid: '',
      model: {
        version: '',
        materialNumber: '',
        materialName: '',
        modelName: '',
        supplierNumber: '',
        requestProject: '',
        manufacturer: '',
        envProtectionStatus: '',
        requestCause: '',
        number: '',
        name: '',
        state: ''
      },
      approvalType: '',
      dataList: [],
      approvalTable: []
    }
  },
  mounted: function () {
  },
  activated: function () {
    this.oid = this.$route.params.oid
    this.state = this.$route.params.state
    this.approvalType = this.$route.params.approvalType
    if (this.oid) {
      this.getDetailInfo(this.oid)
      this.getDataList()
      this.getApprovalTable()
    }
  },
  methods: {
    getApprovalTable () {
      getReportProcessingStatus(this.oid).then(r => {
        console.log('xxoo', r.data)
        this.approvalTable = r.data
      })
    },
    toRelatedClick (row) {
      this.$refs.relMater.setDialogFormVisible(row)
    },
    toEditReport (row) {
      this.$refs.editReport.openDialog(row)
    },
    getDetailInfo (oid) {
      showEnvprotectionTask(oid).then(r => {
        console.log('DETAILTASKS', r)
        this.model = r.data[0]
        this.$store.commit('SET_HUANBAONUM', r.data[0].materialNumber)
      })
    },
    getDataList () {
      getExpiringReportInfo(this.oid).then(r => {
        console.log(r)
        this.dataList = r.data
      })
    }
  }
}
</script>
<style scoped>
  .card_title{
    font-weight: bold;
    padding-bottom: 20px;
  }
  .card_row{
    margin-top: 15px;
    margin-left: 15px;
  }
  .card_lable{
    font-weight: bold;
    line-height: 1.1em;
    text-transform: none;
    color: #000;
    position: relative;
    left: 0;
    border: 0;
  }
  .card_value{

  }
  .card{
    font-family: 微软雅黑;
    font-size: 13px;
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
    background-image: url(../../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    width: 200px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
