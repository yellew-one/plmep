<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover" class="card">
          <div class="longcheer_hr" style="margin-top: 20px">
            <span>{{$t('huanbaoTable.detailTable.third')}}</span>
          </div>
          <el-table
            :data="dataList"
            border
            size="mini"
            height="350px"
            style="width: 100%">
            <el-table-column :label="$t('huanbaoTable.third.lqNumber')" align="center" show-overflow-tooltip="true"  prop="partNo"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.partNo}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.rawmaterial')" align="center" show-overflow-tooltip="true"  prop="materialName"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.materialName}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.ReportType')" align="center" show-overflow-tooltip="true"  prop="reportType"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportType}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.ReportNumber')" align="center" show-overflow-tooltip="true"  prop="reportNumber"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportNumber}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.ReportDate')" align="center" show-overflow-tooltip="true"  prop="reportDate"   >
              <template
                slot-scope="scope">
                <span>{{scope.row.reportDate}}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('huanbaoTable.third.TestingUnit')" align="center" show-overflow-tooltip="true"  prop="examUnit"   >
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
                <el-button @click="downLoad(scope.row)" type="text" size="small">{{$t('huanbaoTable.MSDS.download')}}</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div  class="longcheer_hr" style="margin-top: 20px">
            <span class="longcheer_hr_span">{{$t('formButton.Approval')}}</span>
          </div>
          <el-row  class="card_row">
            <el-col span="4" style="text-align: right">备注：</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col  span="12"><el-input  v-model="comment" type="textarea" :rows="3"></el-input></el-col>
          </el-row>
          <el-row  class="card_row">
            <el-col span="4" style="text-align: right">&nbsp;</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col span="12" style="text-align: right">
              <el-radio v-model="radio" label="供货">{{$t('fengyangTable.detail.Supply')}}</el-radio>
              <el-radio v-model="radio" label="不供货">{{$t('fengyangTable.detail.unSupply')}}</el-radio>
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
    <editReport ref="editReport"
                :getDataList="getDataList"></editReport>
  </div>
</template>
<script>
import { getExpiringReportInfo, getReportProcessingStatus, completeReportTask, downloadAttach } from '@/api/huanbaoAPI'
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
      dataList: [],
      approvalTable: [],
      radio: '供货',
      comment: '',
      nowTags: ''
    }
  },
  mounted: function () {
    var tagsView = this.$store.state.tagsView.visitedViews
    this.nowTags = tagsView[tagsView.length - 1]
  },
  activated: function () {
    this.oid = this.$route.params.oid
    this.state = this.$route.params.state
    if (this.oid) {
      this.getDataList()
      this.getApprovalTable()
    }
  },
  methods: {
    getApprovalTable () {
      getReportProcessingStatus(this.oid).then(r => {
        this.approvalTable = r.data
      })
    },
    toRelatedClick (row) {
      this.$refs.relMater.setDialogFormVisible(row)
    },
    toEditReport (row) {
      this.$refs.editReport.openDialog(row)
    },
    getDataList () {
      getExpiringReportInfo(this.oid).then(r => {
        this.dataList = r.data
      })
    },
    downLoad (row) {
      downloadAttach(row.reportOid).then(r => {
        window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
    },
    submitAprive () {
      completeReportTask(this.oid, this.comment, this.radio).then(r => {
        if (r.data.status === 'success') {
          this.$message.success({
            message: this.$t('success.finsh_task_success')
          })
          this.closePage()
        } else if (r.data.status === 'fail') {
          this.$message({
            message: r.data.info,
            dangerouslyUseHTMLString: true,
            type: 'warning',
            duration: 5 * 1000
          })
        }
      })
    },
    closePage () {
      this.$router.replace({name: 'third'})
      this.closeSelectedTag(this.nowTags)
    },
    closeSelectedTag (view) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/home')
          }
        }
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
