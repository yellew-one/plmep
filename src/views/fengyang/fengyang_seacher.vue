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
                  <el-form-item prop="materialCode" :label="$t('fengyangTable.seacher.number')">
                    <el-input   v-model="temp.materialCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="materialName" :label="$t('fengyangTable.seacher.name')">
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
                  <el-form-item prop="materialCode" :label="$t('fengyangTable.seacher.Material_category')">
                    <el-select v-model="temp.materialCode" placeholder="请选择">
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
                  <el-form-item prop="materialName" :label="$t('fengyangTable.seacher.stauts')">
                    <el-select v-model="temp.materialCode" placeholder="请选择">
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
                  <el-form-item prop="dateValue" :label="$t('fengyangTable.seacher.Seal_recognition_time')">
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
        :data="tableData"
        size="mini"
        border
        style="width: 100%;margin-top: 10px">
        <el-table-column align="center" show-overflow-tooltip="true" prop="number"  :label="$t('fengyangTable.seacher.number')" width="180">
          <template
            slot-scope="scope">
            <span style="color: blue">{{scope.row.number}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="seacher_info"  :label="$t('fengyangTable.seacher.seacher_info')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="name"  :label="$t('fengyangTable.seacher.name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="Specification_type"  :label="$t('fengyangTable.seacher.Specification_type')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="stauts"  :label="$t('fengyangTable.seacher.stauts')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true" prop="create_time"  :label="$t('fengyangTable.seacher.create_time')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
       </el-table>
    </el-card>
  </div>
</template>
<script>
import { searchEnvprotection } from '@/api/index'
export default {
  components: {},
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
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
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
    }
  }
}
</script>
<style>
  .boxtext {
    font-size: 15px;
  }
</style>
