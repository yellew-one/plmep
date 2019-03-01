<template>
    <div class="app-container">
      <el-card class="box-card">
      <el-table
        :data="tableData"
        border
        size="mini"
        style="width: 100%"
        @cell-click="cellClick">
        <el-table-column align="center" show-overflow-tooltip="true"  prop="taskName"  :label="$t('huanbaoTable.third.taskName')" width="180">
          <template
            slot-scope="scope">
            <a href="#" style="color: blue">{{$t(scope.row.taskName)}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="theme"  :label="$t('huanbaoTable.third.theme')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.theme}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="state"  :label="$t('huanbaoTable.third.state')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.state}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  sortable prop="specification"  :label="$t('huanbaoTable.third.specification')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.specification}}</span>
          </template>
        </el-table-column>
      </el-table>
      </el-card>
    </div>
</template>
<script>
import { expiredEnvProtectionTasks } from '@/api/index'
export default {
  components: {
  },
  name: 'HelloWorld',
  activated: function () {
  },
  mounted: function () {
    this.getDataList()
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getDataList () {
      expiredEnvProtectionTasks().then(r => {
        this.tableData = r.data
      })
    },
    cellClick (row, column, cell, event) {
      this.$router.push({name: 'detailTask', params: {oid: row.oid, state: row.state}})
    }
  }
}
</script>
