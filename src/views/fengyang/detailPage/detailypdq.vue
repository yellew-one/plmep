<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <div class="card_title">物料封样&nbsp;-&nbsp;{{model.materialNumber}}, {{model.materialName}}, {{model.version}}</div>
        <el-card shadow="hover" class="card">
          <div class="longcheer_hr">
            <span class="longcheer_hr_span">{{$t('fengyangTable.detail.title_attribute')}}</span>
            <div class="longcheer_hr_reight">
              <el-button v-if="state === 'true'" @click="editInfo" icon="el-icon-edit" size="small">{{$t('formButton.edit_k')}}</el-button>
            </div>
          </div>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.version')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.version}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.materialNumber')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.materialNumber}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.materialName')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.materialName}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_classification')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_classification}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_project')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_project}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_model_name')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_model_name}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_request_cause')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_request_cause}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_manufacturer')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_manufacturer}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_supplier')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_supplier}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_supplier_number')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_supplier_number}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_environmental_protection_status')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_environmental_protection_status}}
            </el-col>
            <el-col :span="4" class="card_lable">
              &nbsp;
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              &nbsp;
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.approveddate')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              <span style="color: red">{{model.approveddate}}</span>
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_supplier_rank')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{$t('app_enum.lq_supplier_rank.' + model.lq_supplier_rank)}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_monomers_weight')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_monomers_weight}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_size')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_size}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_class_category')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{$t('app_enum.lqClassCategory.' + model.lq_class_category)}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_fiction_preston')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_fiction_preston}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_fiction_time')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_fiction_time}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_reviewer')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_reviewer}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_review_time')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_review_time}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_approve')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_approve}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_approve_time')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_approve_time}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_courier_number')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_courier_number}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_courier_number_time')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_courier_number_time}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_sender')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_sender}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_tel')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.lq_tel}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('fengyangTable.detail.lq_deadline_sign')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.lq_deadline_sign}}
            </el-col>
          </el-row>
          <div v-if="state === 'true'" class="longcheer_hr" style="margin-top: 20px">
            <span class="longcheer_hr_span">{{$t('formButton.Approval')}}</span>
          </div>
          <el-row v-if="state === 'true'" class="card_row">
            <el-col span="4" style="text-align: right">{{$t('supplement.fengyang.remark')}}：</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col  span="12"><el-input v-model="model.comment" :disabled="state !== 'true'" type="textarea" :rows="3"></el-input></el-col>
          </el-row>
          <el-row v-if="state === 'true'" class="card_row">
            <el-col span="4" style="text-align: right">&nbsp;</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col span="12" style="text-align: right">
              <!--:disabled="state !== 'state.REWORK' && state !== 'state.INWORK' && state !== 'state.SAMPLE_EXPIRE'"SAMPLE_EXPIRE-->
              <el-radio :disabled="state !== 'true'" v-model="radio" label="Supply(供货)">{{$t('fengyangTable.detail.Supply')}}</el-radio>
              <el-radio :disabled="state !== 'true'" v-model="radio" label="No supply(不供货)">{{$t('fengyangTable.detail.unSupply')}}</el-radio>
            </el-col>
          </el-row>
          <el-row v-if="state === 'true'" class="card_row">
            <el-col span="4" style="text-align: right">&nbsp;</el-col>
            <el-col span="1" style="text-align: right">&nbsp;</el-col>
            <el-col span="12" style="text-align: right">
              <!--v-if="state === 'state.REWORK' || state === 'state.INWORK' || state === 'state.SAMPLE_EXPIRE'"-->
              <el-button v-if="state === 'true'" :loading="$store.getters.loading" @click="submitAprive" size="mini" type="primary">{{$t('formButton.submit')}}</el-button>
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
    <sealeInfoEdit :restData="getDetailInfo"  ref="infoEdit"></sealeInfoEdit>
    <uploadSampleDoc ref="uploadSamDoc"></uploadSampleDoc>
  </div>
</template>
<script>
import { showTaskDetails, processHistory, editSealedSampleDocInfo, completeSealedTask } from '@/api/index'
import sealeInfoEdit from '../../../components/SealedInfoEdit/mini'
import uploadSampleDoc from '../../../components/UploadSampleDoc/index'
export default {
  name: 'detailTask',
  mounted: function () {
    var tagsView = this.$store.state.tagsView.visitedViews
    this.nowTags = tagsView[tagsView.length - 1]
  },
  components: {
    sealeInfoEdit,
    uploadSampleDoc
  },
  activated: function () {
    console.log('oid:  ', this.$route.params.oid)
    this.oid = this.$route.params.oid
    this.state = this.$route.params.state
    if (this.oid) {
      this.getDetailInfo(this.oid)
    }
  },
  methods: {
    getDetailInfo (oid) {
      if (!oid) {
        oid = this.oid
      }
      showTaskDetails(oid).then(r => {
        this.model = r.data[0]
        this.model.oid = this.$route.params.oid
        this.getProcessHistory()
      })
    },
    editSealedSampleDocInfo (oid) {
      editSealedSampleDocInfo(oid).then()
    },
    editInfo () {
      this.$refs.infoEdit.openDialog(true, this.model)
    },
    uploadSampDoc () {
      this.$refs.uploadSamDoc.setDialogFormVisible(true)
    },
    getProcessHistory () {
      processHistory('sealed', this.model.materialNumber).then(r => {
        console.log(r)
        this.approvalTable = r.data
      })
    },
    submitAprive () {
      this.$store.commit('SET_LOADING', true)
      completeSealedTask('MS' + this.model.materialNumber, this.model.comment, this.radio).then(r => {
        var mesg = this.$store.getters.guojihua === 'zh' ? r.data.zh : r.data.en
        if (r.data.state !== 'failed') {
          this.$message({
            message: mesg,
            type: 'success',
            duration: 5 * 1000
          })
          this.closePage()
        } else {
          this.$message({
            message: mesg,
            type: 'warning',
            duration: 5 * 1000
          })
        }
      })
    },
    closePage () {
      this.$router.replace({name: 'fMytasks'})
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
  },
  data () {
    return {
      nowTags: {},
      msg: 'Welcome to Your Vue.js App',
      model: {},
      oid: '',
      approvalTable: [],
      filesList: [],
      radio: 'Supply(供货)',
      state: ''
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
    padding-left: 15px;
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
    margin-bottom: 10px;
  }
  .longcheer_hr_span{
    display: inline-block;
    background-image: url(../../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    padding: 5px 30px 0px 15px;
    width: auto;
    height: 27px;
    color: #ffffff;
  }
  .longcheer_hr_reight {
    position: relative;
    top: -8px;
    float: right;
    height: 27px;
  }
</style>
