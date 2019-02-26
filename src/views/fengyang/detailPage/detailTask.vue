<template>
    <div class="app-container">
      <el-row>
        <el-col :span="24">
          <div class="card_title">物料封样&nbsp;-&nbsp;MS7015AA000745, 物料封样_7015AA000745,LXF_T400_A01_彩盒防拆标签(无LOGO)_01, 1.4</div>
          <el-card shadow="hover" class="card">
            <div class="longcheer_hr">
              <span>属性</span>
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
                {{$t('fengyangTable.detail.lq_supplier_number')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_supplier_number}}
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
                {{$t('fengyangTable.detail.lq_class_category')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_class_category}}
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
                {{$t('fengyangTable.detail.lq_monomers_weight')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_monomers_weight}}
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
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default {
  name: 'detailTask',
  mounted: function () {
    this.model = {
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
      lq_deadline_sign: 'lq_deadline_sign'}
  },
  activated: function () {
    console.log('oid:  ', this.$route.params.oid)
  },
  methods: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      model: {}
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
  .longcheer_hr span{
    display: inline-block;
    background-image: url(../../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    width: 120px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
