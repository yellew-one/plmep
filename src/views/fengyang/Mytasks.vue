<template>
    <div class="app-container" style="height: 100%" >
      <el-card class="box-card">
        <el-row>
          <el-col :span="6">
            <el-input placeholder="筛选" size="mini" v-model="tfilters"></el-input>
          </el-col>
        </el-row>
      <el-table
        size="mini"
        :data="tableData | tablefilters(tfilters, $t)"
        border
        style="width: 100%">
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="name"  :label="$t('table.task_name')" width="180">
          <template
            slot-scope="scope">
            <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.taskName)}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" sortable :show-overflow-tooltip="true"   prop="materialNumber"  :label="$t('table.material_number')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.materialNumber}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="state"  :label="$t('table.material_name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.materialName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="tasksType"  :label="$t('table.model_specification')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.specification}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="allocated"  :label="$t('table.project_name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.project}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   sortable prop="state"  :label="$t('table.state')" width="180">
          <template
            slot-scope="scope">
            <span>{{$t(scope.row.state)}}</span>
          </template>
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="endTime"-->
          <!--:show-overflow-tooltip="true"-->
          <!--align="center"-->
          <!--:label="$t('table.sission_deadline')"-->
          <!--sortable-->
          <!--width="180">-->
        <!--</el-table-column>-->
        <el-table-column align="center"  :show-overflow-tooltip="true" sortable  prop="endTime"  :label="$t('table.sission_deadline')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.endTime}}</span>
          </template>
        </el-table-column>
      </el-table>
      </el-card>
    </div>
</template>
<script>
import { showSealedSampleTasks } from '@/api/index'
export default {
  name: 'myTasks',
  mounted: function () {
    this.getDataList()
  },
  filters: {
    tablefilters: function (value, data, $t) {
      console.log(data, value)
      var sz = []
      value.forEach(function (v, index) {
        /*
         endTime: "2019/01/09"
         materialName: "电池组件可拆解,A(碱性一次电池),b,c,1 mAh,11 V,2_1"
         materialNumber: "5326AA000034"
         oid: "OR:wt.doc.WTDocument:352618817"
         project: "IMI_HMI202_A01"
         specification: "test-specification-BBBB"
         state: "state.INWORK"
         taskName: "taskName.submitSample"
        * */
        // if (v.materialName.indexOf(data) !== -1 || v.materialNumber.indexOf(data) !== -1 || v.project.indexOf(data) !== -1 || v.specification.indexOf(data) !== -1) {
        if (v.materialNumber.indexOf(data) !== -1) {
          sz.push(v)
        }
      })
      return sz
    }
  },
  activated: function () {
    this.getDataList()
  },
  methods: {
    getDataList () {
      showSealedSampleTasks().then(r => {
        // console.log(r)
        this.tableData = r.data
        this.$store.commit('SET_FENGYANGTASKNUM', r.data.length)
      })
    },
    goDetail (data) {
      // console.log('data', data)
      // this.$router.push({name: 'fdetailTask', params: {oid: data.oid, state: 'true'}})
      this.$router.push({name: 'fdetailTask', params: {oid: data.oid, state: 'true', stateName: data.state}})
    }
  },
  data () {
    return {
      tableData: [],
      tfilters: ''
    }
  }
}
</script>
