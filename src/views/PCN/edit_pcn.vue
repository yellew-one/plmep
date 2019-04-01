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
            <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t(scope.row.ecrNum)}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" sortable :show-overflow-tooltip="true"   prop="materialNumber"  :label="$t('table.material_number')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.ecrName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="state"  :label="$t('table.material_name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.startTime}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>import { reworkEcrList } from '@/api/pcn'
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
      reworkEcrList().then(r => {
        // console.log(r)
        this.tableData = r.data
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
