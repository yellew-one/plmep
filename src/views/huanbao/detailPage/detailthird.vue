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
                <el-button type="text" size="small">{{$t('formButton.edit')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <RelevantMaterials ref="relMater"></RelevantMaterials>
  </div>
</template>
<script>
import { showEnvprotectionTask, getExpiringReportInfo } from '@/api/huanbaoAPI'
import RelevantMaterials from '@/components/huanbaoDialog/relevantMaterials'
export default {
  name: 'detailthird',
  components: {
    RelevantMaterials
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
      dataList: []
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
    }
  },
  methods: {
    toRelatedClick (row) {
      this.$refs.relMater.setDialogFormVisible(row)
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
