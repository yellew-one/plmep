<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="boxtext">
            <el-form size="mini" ref="dataForm" :model="temp" label-position="left" :label-width="$store.getters.guojihua==='en'?'200px':'120px'"
                     style=' margin-left:0px;'>
              <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="8">
                  <el-form-item prop="materialCode" :label="$t('fengyangTable.seacher.number')">
                    <el-input   v-model="model.serchItems.partNumber"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="materialName" :label="$t('fengyangTable.seacher.name')">
                    <el-input   v-model="model.serchItems.partName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item >
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="8">
                  <el-form-item prop="materialCode" :label="$t('fengyangTable.detail.lq_class_category')">
                    <el-select style="width: 100%" v-model="model.serchItems.LQ_CLASS_CATEGORY" placeholder="请选择">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="materialName" :label="$t('fengyangTable.seacher.stauts')">
                    <el-select style="width: 100%"  v-model="model.serchItems.status" placeholder="请选择">
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
                <el-col :span="9">
                  <el-form-item prop="dateValue" :label="$t('fengyangTable.seacher.Seal_recognition_time')">
                    <!--:change="datePicker"-->
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
                <el-col :span="7">
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
            <el-form-item :label="$t('fengyangTable.seacher.title.Material_seacher')">
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
        <el-table-column align="center" show-overflow-tooltip="true" prop="number"  :label="$t('fengyangTable.seacher.number')" width="180">
          <template
            slot-scope="scope">
            <a style="color: blue" @click="goDetail(scope.row)">{{scope.row.partNumber}}</a>
          </template>
        </el-table-column>
        <!--<el-table-column align="center" show-overflow-tooltip="true" prop="seacher_info"  :label="$t('fengyangTable.seacher.seacher_info')" width="180">-->
          <!--<template-->
            <!--slot-scope="scope">-->
            <!--<span>{{scope.row.partName}}</span>-->
          <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column align="center" show-overflow-tooltip="true" prop="name"  :label="$t('fengyangTable.seacher.name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.partName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="Specification_type"  :label="$t('fengyangTable.seacher.Specification_type')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.modelName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="stauts"  :label="$t('fengyangTable.seacher.stauts')" width="180">
          <template
            slot-scope="scope">
            <span>{{$t('huanbaoTable.searchStatus.' + scope.row.status)}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="create_time"  :label="$t('fengyangTable.seacher.create_time')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.createStamp}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="create_time"  :label="$t('fengyangTable.seacher.Seal_recognition_time')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.approvedDate}}</span>
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
import { searchSealedSample, lqClassCategory, getSealedSampleStatus } from '@/api/index'
import { initPage } from '@/utils/index'
export default {
  components: {},
  name: 'HelloWorld',
  created: function () {
    initPage(this.model, searchSealedSample)
    this.model.searchCurrent(1)
    console.log('this.model', this.model)
  },
  mounted: function () {
    this.getlqClassCategory()
    this.getEnvpStates()
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
    },
    getlqClassCategory () {
      var that = this
      lqClassCategory().then(r => {
        console.log(r)
        var sz = [{value: '', label: ''}]
        r.data.forEach(function (value, index) {
          console.log('foreach:', value)
          for (var key in value) {
            sz.push({
              value: key,
              label: that.$t('app_enum.lqClassCategory.' + key)
            })
          }
        })
        this.options2 = sz
      })
    },
    getEnvpStates () {
      getSealedSampleStatus().then(r => {
        console.log(r)
        var states = [{value: '', label: ''}]
        for (var i in r.data[0].state) {
          states.push({
            value: r.data[0].state[i],
            label: this.$t('huanbaoTable.searchStatus.' + r.data[0].state[i])
          })
        }
        this.options = states
      })
    }
  }
}
</script>
<style scoped>
  .boxtext {
    font-size: 15px;
  }
</style>
