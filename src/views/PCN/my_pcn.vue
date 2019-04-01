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
                <el-form-item prop="materialCode" :label="$t('pcn.form.ChangeType')">
                  <el-select  style="width: 100%" v-model="model.serchItems.ecrType" placeholder="请选择">
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
                <el-form-item prop="materialName" :label="$t('fengyangTable.seacher.name')">
                  <el-input   v-model="model.serchItems.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
              <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="8">
                  <el-form-item prop="materialCode" :label="$t('pcn.table.project')">
                    <el-input   v-model="model.serchItems.LQ_PROJECT"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="materialName" :label="$t('pcn.form.ResourceEngineer')">
                    <el-input   v-model="model.serchItems.sourceEngineer"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item >
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="100" type="flex" class="row-bg" >
                <el-col :span="8">
                  <el-form-item prop="state" :label="$t('pcn.table.state')">
                    <el-input   v-model="model.serchItems.state"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-button size="mini" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
                  <!--<el-button size="mini" type="primary" plain>{{$t('huanbaoTable.search.mail')}}</el-button>-->
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
            <el-form-item label="我的PCN查询">
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
        :data="model.dataList"
        size="mini"
        border
        style="width: 100%;margin-top: 10px">
        <el-table-column align="center" show-overflow-tooltip="true" prop="Number"  :label="$t('pcn.table.number')" width="180">
          <template
            slot-scope="scope">
            <a style="color: blue" @click="goDetail(scope.row)">{{scope.row.ecrNumber}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="ChangeType" :label="$t('pcn.table.ChangeType')" align="center" show-overflow-tooltip="true"  width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.ecrType}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="Name" :label="$t('pcn.table.Name')" align="center" show-overflow-tooltip="true"  width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.ecrName}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="project" :label="$t('pcn.table.project')" align="center" show-overflow-tooltip="true"  width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.project}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="RequireCompletionTime" :label="$t('pcn.table.RequireCompletionTime')" align="center" show-overflow-tooltip="true"  width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.neededTime}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="SelectionResourceEngineer" :label="$t('pcn.table.SelectionResourceEngineer')" align="center" show-overflow-tooltip="true"  width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.resourceEngineer}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state" :label="$t('pcn.table.state')" align="center" show-overflow-tooltip="true"  width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.state}}</span>
          </template>
        </el-table-column>
       </el-table>
      <div style="width: 100%;text-align: right">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="model.counts.nowPage"
          layout="total, prev, pager, next"
          :total="model.counts.totalCount"
          :page-size="model.counts.pageSize">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
import { searchEcr, ecrType } from '@/api/pcn'
import { initPage } from '@/utils/index'
export default {
  components: {},
  name: 'myPcn',
  created: function () {
    initPage(this.model, searchEcr)
    this.model.searchCurrent(1)
    console.log('this.model', this.model)
  },
  mounted: function () {
    this.getEcrType()
  },
  data () {
    return {
      dialogVisible: false,
      dateValue: '',
      model: {serchItems: {}, dataList: []},
      options: [],
      options2: []
    }
  },
  methods: {
    getEcrType () {
      ecrType().then(r => {
        console.log(r)
        var sz = [{label: '', value: ''}]
        r.data.forEach(function (v, i) {
          sz.push({value: v.value, label: v.display})
        })
        this.options = sz
      })
    },
    goDetail (data) {
      console.log('data', data)
      this.$router.push({name: 'fdetailTask', params: {oid: data.oid, state: 'false', stateName: 'huanbaoTable.searchStatus.' + data.status}})
    },
    searchResult () {
      console.log('xoxo', this.dateValue)
      if (this.dateValue) {
        this.model.serchItems.searchDateFrom = this.dateValue[0]
        this.model.serchItems.searchDateTo = this.dateValue[1]
      } else {
        this.model.serchItems.searchDateFrom = ''
        this.model.serchItems.searchDateTo = ''
      }
      this.getDataList(1)
    },
    // 获取搜索结果
    getDataList (index) {
      this.model.searchCurrent(index)
    },
    handleCurrentChange (val) {
      this.getDataList(val)
    }
  }
}
</script>
<style>
  .boxtext {
    font-size: 15px;
  }
</style>
