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
                      <el-input readonly="true" v-model="temp.exemptionForm">
                        <i
                          class="el-icon-close el-input__icon"
                          slot="suffix"
                          @click="handleIconClick">
                         </i>
                        <el-button @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="status" :label="$t('huanbaoTable.search.status')">
                      <el-select v-model="temp.status" placeholder="" style="width: 100%">
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
                    <el-button :loading="$store.getters.loading" size="mini" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
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
          size="mini"
          style="width: 100%;margin-top: 10px"
          @cell-click="cellClick">
          <el-table-column align="center" show-overflow-tooltip="true" prop="number"  :label="$t('huanbaoTable.search.eNumber')" width="180">
            <template
              slot-scope="scope">
              <a style="color: blue">{{scope.row.number}}</a>
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
              <span>{{$t('huanbaoTable.searchStatus.'+ scope.row.status)}}</span>
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
              <el-button v-if="scope.row.FMD === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.FMD === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.FMD === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.FMD === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="MSDS"  :label="$t('huanbaoTable.submitted.MSDS')" width="150">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.MSDS === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.MSDS === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.MSDS === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.MSDS === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="RoHS"  :label="$t('huanbaoTable.submitted.RoHS')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.RoHS === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.RoHS === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.RoHS === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.RoHS === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="HF"  :label="$t('huanbaoTable.submitted.HF')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.HF === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.HF === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.HF === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.HF === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="REACH"  :label="$t('huanbaoTable.submitted.REACH')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.REACH === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.REACH === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.REACH === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.REACH === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="OTHER"  :label="$t('huanbaoTable.submitted.OTHER')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.OTHER === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.OTHER === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.OTHER === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.OTHER === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="OTHER2"  :label="$t('huanbaoTable.submitted.OTHER2')" width="150">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.OTHER2 === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="width: 100%;text-align: right">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="counts.nowPage"
            layout="total, prev, pager, next"
            :total="counts.total"
            :page-size="counts.pageCount">
          </el-pagination>
        </div>
      </el-card>
      <escape-clause
                      ref="myChild"
                      :acceptSonValue = 'acceptSonValue'></escape-clause>
    </div>
</template>
<script>
import EscapeClause from '../../components/huanbaoDialog/escapeClause'
import { searchEnvprotection, getEnvpState } from '@/api/index'
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
      tableData: [],
      options: [],
      optionsValue: '',
      counts: {
        total: 0,
        nowPage: 1,
        pageCount: 10,
        nextPage: 0,
        lastPage: 0
      }
    }
  },
  activated: function () {
    this.getEnvpStates()
  },
  methods: {
    // 获取物料环保搜索页面查询条件中物料环保状态下拉框的值
    getEnvpStates () {
      getEnvpState().then(r => {
        var states = [{
          value: '',
          label: ''
        }]
        for (var i in r.data[0].state) {
          states.push({
            value: r.data[0].state[i],
            label: this.$t('huanbaoTable.searchStatus.' + r.data[0].state[i])
          })
        }
        this.options = states
      })
      this.temp.searchDateFrom = ''
      this.temp.searchDateTo = ''
      this.getDataList(this.temp, this.counts)
    },
    // 搜索结果
    searchResult () {
      this.$store.commit('SET_LOADING', true)
      if (this.dateValue) {
        this.temp.searchDateFrom = this.dateValue[0]
        this.temp.searchDateTo = this.dateValue[1]
      } else {
        this.temp.searchDateFrom = ''
        this.temp.searchDateTo = ''
      }
      this.getDataList(this.temp, this.counts)
    },
    // 获取搜索结果
    getDataList (e, counts) {
      this.counts.nowPage = 1
      searchEnvprotection(e, counts).then(r => {
        console.log('search result', r)
        this.tableData = r.data.result
        this.counts.total = r.data.totalCount
      })
    },
    // 接受子组件传值
    acceptSonValue (e) {
      this.temp.exemptionForm = e
    },
    // 父子组件传值
    escapeClick () {
      this.$refs.myChild.setDialogFormVisible()
    },
    cellClick (row, column, cell, event) {
      this.$router.push({name: 'detailTask', params: {oid: row.oid, state: row.status, approvalType: ''}})
    },
    handleCurrentChange (val) {
      this.counts.nowPage = val
      searchEnvprotection(this.temp, this.counts).then(r => {
        console.log('search result', r)
        this.tableData = r.data.result
        this.counts.total = r.data.totalCount
      })
    },
    handleIconClick () {
      this.temp.exemptionForm = ''
    }
  }
}
</script>
<style scoped>
  .boxtext {
    font-size: 15px;
  }
</style>
