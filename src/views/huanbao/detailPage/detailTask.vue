<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <div class="card_title">物料封样&nbsp;-&nbsp;MS7015AA000745, 物料封样_7015AA000745,LXF_T400_A01_彩盒防拆标签(无LOGO)_01, 1.4</div>
        <el-card shadow="hover" class="card">
          <div class="longcheer_hr">
            <span>基本属性</span>
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
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { showEnvprotectionTask } from '@/api/index'
export default {
  name: 'detailTask',
  data () {
    return {
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
      }
    }
  },
  mounted: function () {
    this.model = {}
  },
  activated: function () {
    console.log('oid:  ', this.$route.params.oid)
    this.oid = this.$route.params.oid
    if (this.oid) this.getDataList()
  },
  methods: {
    getDataList () {
      showEnvprotectionTask().then(r => {
        console.log('xoxo', r)
      })
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
