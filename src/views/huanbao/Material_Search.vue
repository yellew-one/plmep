<template>
    <div class="app-container">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="boxtext">
              <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                       style=' margin-left:0px;'>
                <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="8">
                    <el-form-item prop="materialCode" :label="$t('huanbaoTable.search.material_number')">
                      <el-input   v-model="temp.materialCode"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="materialName" :label="$t('huanbaoTable.search.material_name')">
                      <el-input   v-model="temp.materialName"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item >
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="8">
                    <el-form-item prop="exemptionForm"  :label="$t('huanbaoTable.search.escape_clause')">
                      <el-input disabled="true" v-model="temp.exemptionForm">
                        <el-button @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="status" :label="$t('huanbaoTable.search.status')">
                      <el-input   v-model="temp.status"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item >
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="8">
                    <el-form-item prop="casno" :label="$t('huanbaoTable.search.cas_no')">
                      <el-input   v-model="temp.casno"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="dateValue" :label="$t('huanbaoTable.search.time')">
                      <el-date-picker
                        style="width: 100%"
                        v-model="dateValue"
                        type="daterange"
                        start-placeholder="Start Time"
                        end-placeholder="End Time"
                        value-format="yyyy-MM-dd">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item >
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" >
                  <el-col :span="8">
                    <el-button size="mini" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
                    <!--<el-button size="mini" type="primary" plain>{{$t('huanbaoTable.search.mail')}}</el-button>-->
                  </el-col>
                  <el-col :span="8">
                    <el-form-item >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card" style="margin-top: 0px">
        <el-row :gutter="30" type="flex" class="row-bg" style="height: 30px;margin-top: -20px">
          <el-col :span="8">
            <el-form style="margin-left: 2%" >
              <el-form-item :label="$t('huanbaoTable.search.result')">
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="16">
            <el-form >
              <el-form-item>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-top: 10px">
          <el-table-column align="center" show-overflow-tooltip="true" prop="number"  :label="$t('huanbaoTable.search.eNumber')" width="180">
            <template
              slot-scope="scope">
              <span style="color: blue">{{scope.row.number}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="name"  :label="$t('huanbaoTable.search.eName')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="status"  :label="$t('huanbaoTable.search.eStatus')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.status}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="modelName"  :label="$t('huanbaoTable.search.model_specification')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.modelName}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="manufacturer"  :label="$t('huanbaoTable.search.manufacturer')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.manufacturer}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="createTime"  :label="$t('huanbaoTable.search.createDate')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.createTime}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="FMD"  :label="$t('huanbaoTable.submitted.FMD')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.FMD === 'RELEASED'" :title="$t('huanbaoTable.submitted.FMD')" type="success" circle></el-button>
              <el-button v-if="scope.row.FMD === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.FMD === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.FMD === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="MSDS"  :label="$t('huanbaoTable.submitted.MSDS')" width="150">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.MSDS === 'RELEASED'" :title="$t('huanbaoTable.submitted.FMD')" type="success" circle></el-button>
              <el-button v-if="scope.row.MSDS === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.MSDS === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.MSDS === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="RoHS"  :label="$t('huanbaoTable.submitted.RoHS')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.RoHS === 'RELEASED'" :title="$t('huanbaoTable.submitted.FMD')" type="success" circle></el-button>
              <el-button v-if="scope.row.RoHS === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.RoHS === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.RoHS === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="HF"  :label="$t('huanbaoTable.submitted.HF')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.HF === 'RELEASED'" :title="$t('huanbaoTable.submitted.FMD')" type="success" circle></el-button>
              <el-button v-if="scope.row.HF === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.HF === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.HF === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="REACH"  :label="$t('huanbaoTable.submitted.REACH')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.REACH === 'RELEASED'" :title="$t('huanbaoTable.submitted.FMD')" type="success" circle></el-button>
              <el-button v-if="scope.row.REACH === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.REACH === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.REACH === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="OTHER"  :label="$t('huanbaoTable.submitted.OTHER')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.OTHER === 'RELEASED'" :title="$t('huanbaoTable.submitted.FMD')" type="success" circle></el-button>
              <el-button v-if="scope.row.OTHER === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.OTHER === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.OTHER === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="OTHER2"  :label="$t('huanbaoTable.submitted.OTHER2')" width="150">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.OTHER2 === 'RELEASED'" :title="$t('huanbaoTable.submitted.FMD')" type="success" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <escape-clause
                      ref="myChild"
                      :acceptSonValue = 'acceptSonValue'
                      v-on:childByValue="childByValue"></escape-clause>
    </div>
</template>
<script>
import EscapeClause from '../../components/EscapeClause/escapeClause'
import { searchEnvprotection } from '@/api/index'
export default {
  components: {EscapeClause},
  name: 'HelloWorld',
  mounted: function () {
  },
  data () {
    return {
      dialogVisible: false,
      dateValue: '',
      temp: {
        searchDateFrom: '',
        searchDateTo: '',
        materialCode: '',
        materialName: '',
        exemptionForm: '',
        status: '',
        casno: ''
      },
      tableData: [{
        RoHS: '',
        manufacturer: '信创',
        REACH: '',
        OTHER: '',
        number: 'HSF54402227',
        modelName: 'P3580-BL-CASE-1',
        MSDS: '',
        OTHER2: '',
        createTime: '2019-01-02',
        name: '物料环保-54402227,SHIELD FRAME,P3580,CASE,BL',
        FMD: '',
        HF: '',
        status: 'CANCELLED'
      }]
    }
  },
  methods: {
    searchResult () {
      console.log('xoxo', this.dateValue)
      this.temp.searchDateFrom = this.dateValue[0]
      this.temp.searchDateTo = this.dateValue[1]
      this.getDataList(this.temp)
    },
    // 获取搜索结果
    getDataList (e) {
      searchEnvprotection(e).then(r => {
        // this.tableData = r.data
        console.log('xoxo', r.data.length)
        console.log('xoxo', r.data)
      })
    },
    // 接受子组件传值
    acceptSonValue (e) {
      this.temp.demand_name = e
    },
    // 父子组件传值
    escapeClick () {
      this.dialogVisible = true
      this.$refs.myChild.setDialogFormVisible(this.dialogVisible)
    },
    // 父组件回调
    childByValue (childValue) {
      this.dialogVisible = childValue
    }
  }
}
</script>
<style>
  .boxtext {
    font-size: 15px;
  }
</style>
