<template>
    <div class="app-container">
      <el-row>
        <el-col :span="24">
          <div class="card_title">物料封样&nbsp;-&nbsp;{{model.materialNumber}}, {{model.materialName}}, {{model.version}}</div>
          <el-card shadow="hover" class="card">
            <div class="longcheer_hr">
              <span class="longcheer_hr_span">{{$t('fengyangTable.detail.title_attribute')}}</span>
              <div class="longcheer_hr_reight">
                <el-button @click="editInfo" icon="el-icon-edit" size="small">{{$t('formButton.edit')}}</el-button>
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
                {{model.approveddate}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_supplier_rank')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_supplier_rank}}
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
                {{model.lq_class_category}}
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
            <div class="longcheer_hr" style="margin-top: 20px">
              <span class="longcheer_hr_span">{{$t('fengyangTable.detail.title_Sealed_document')}}</span>
            </div>
            <el-row class="card_row" style="padding-left: 5px">
              <el-col :span="24" class="card_lable">
                <el-button-group>
                  <el-button size="mini"  icon="el-icon-plus"></el-button>
                  <el-button size="mini"  icon="el-icon-edit"></el-button>
                  <el-button size="mini"  icon="el-icon-share"></el-button>
                  <el-button size="mini"  icon="el-icon-delete"></el-button>
                </el-button-group>
                <el-table
                  size="mini"
                  :data="filesList"
                  border
                  height="200px"
                  style="width: 100%">
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="number"  :label="$t('TableTile.files.number')" width="180">
                    <template
                      slot-scope="scope">
                      <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="version"  :label="$t('TableTile.files.version')" width="180">
                    <template
                      slot-scope="scope">
                      <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="name"  :label="$t('TableTile.files.name')" width="180">
                    <template
                      slot-scope="scope">
                      <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="status"  :label="$t('TableTile.files.status')" width="180">
                    <template
                      slot-scope="scope">
                      <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="type3"  :label="$t('TableTile.files.type3')" width="180">
                    <template
                      slot-scope="scope">
                      <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="approval"  :label="$t('TableTile.files.approval')" width="180">
                    <template
                      slot-scope="scope">
                      <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="attachment"  :label="$t('TableTile.files.attachment')" width="180">
                    <template
                      slot-scope="scope">
                      <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
            <div class="longcheer_hr" style="margin-top: 20px">
              <span class="longcheer_hr_span"></span>
            </div>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">备注：</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12"><el-input  type="textarea" :rows="3"></el-input></el-col>
            </el-row>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">&nbsp;</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12" style="text-align: right">
                <el-radio v-model="radio" label="1">{{$t('fengyangTable.detail.Supply')}}</el-radio>
                <el-radio v-model="radio" label="2">{{$t('fengyangTable.detail.unSupply')}}</el-radio>
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">&nbsp;</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12" style="text-align: right">
                <el-button :loading="$store.getters.loading" size="mini" type="primary">{{$t('formButton.submit')}}</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <sealeInfoEdit :restData="getDetailInfo"  ref="infoEdit"></sealeInfoEdit>
    </div>
</template>
<script>
import { showTaskDetails, editSealedSampleDocInfo } from '@/api/index'
import sealeInfoEdit from '../../../components/SealedInfoEdit/index'
export default {
  name: 'detailTask',
  mounted: function () {
    /* this.model = {
      version: '1',
      materialNumber: 'MT1102X22',
      materialName: '萨德反导系统',
      lq_classification: 'WPO112',
      lq_project: '飞机',
      lq_model_name: 'ROGP',
      lq_request_cause: 'SKASNG',
      lq_manufacturer: 'lq_manufacturer',
      lq_supplier: 'lq_supplier',
      lq_supplier_number: 'lq_supplier_number',
      lq_environmental_protection_status: 'lq_environmental_protection_status',
      approveddate: 'approveddate',
      lq_supplier_rank: 'lq_supplier_rank',
      lq_class_category: 'lq_class_category',
      lq_size: 'lq_size',
      lq_monomers_weight: 'lq_monomers_weight',
      lq_fiction_preston: 'fiction_preston',
      lq_fiction_time: '_fiction_time',
      lq_reviewer: 'lq_reviewer',
      lq_review_time: 'lq_review_time',
      lq_approve: 'lq_approve',
      lq_approve_time: 'lq_approve_time',
      lq_courier_number: 'lq_courier_number',
      lq_courier_number_time: 'lq_courier_number_time',
      lq_sender: 'lq_sender',
      lq_tel: 'lq_tel',
      lq_deadline_sign: 'lq_deadline_sign'} */
  },
  components: {
    sealeInfoEdit
  },
  activated: function () {
    console.log('oid:  ', this.$route.params.oid)
    this.oid = this.$route.params.oid
    if (this.oid) this.getDetailInfo(this.oid)
  },
  methods: {
    getDetailInfo (oid) {
      if (!oid) {
        oid = this.oid
      }
      showTaskDetails(oid).then(r => {
        this.model = r.data[0]
        this.model.oid = this.$route.params.oid
      })
    },
    editSealedSampleDocInfo (oid) {
      editSealedSampleDocInfo(oid).then()
    },
    editInfo () {
      this.$refs.infoEdit.openDialog(true, this.model)
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      model: {},
      oid: '',
      filesList: [],
      radio: '1'
    }
  }
}
</script>
<style>
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
    width: 120px;
    padding: 5px 15px;
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
