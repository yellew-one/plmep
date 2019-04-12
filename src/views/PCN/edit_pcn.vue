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
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="ecrNum"  :label="$t('table.task_name')" width="280">
          <template
            slot-scope="scope">
            <a href="#" @click="goDetail(scope.row)" style="color: blue">{{$t('pcn.table.ResubmitPCN')}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" sortable :show-overflow-tooltip="true"   prop="ecrNum"  :label="$t('pcn.table.pg_number')" width="280">
          <template
            slot-scope="scope">
            <span>{{scope.row.ecrNum}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="ecrName"  :label="$t('pcn.table.pg_name')" width="280">
          <template
            slot-scope="scope">
            <span>{{scope.row.ecrName}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <pcnUpdate ref="pcnUpdate" :restData="getDataList"></pcnUpdate>
  </div>
</template>
<script>
import { reworkEcrList } from '@/api/pcn'
import pcnUpdate from '@/components/PcnDialog/index'
export default {
  name: 'myTasks',
  components: {
    pcnUpdate
  },
  mounted: function () {
    this.getDataList()
  },
  filters: {
    tablefilters: function (value, data, $t) {
      console.log(data, value)
      var sz = []
      value.forEach(function (v, index) {
        if (v.ecrNum.indexOf(data) !== -1) {
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
        this.tableData = r.data
      })
    },
    goDetail (data) {
      this.$refs.pcnUpdate.openDialog(data.ecrOid, data.taskOid)
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
