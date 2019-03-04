<template>
  <div class="app-container" style="height: 100%" >
    <el-card class="box-card">
      <el-table
        :data="tableData"
        size="mini"
        border
        style="width: 100%">
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="theme"  :label="$t('table.material_number')" width="180">
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
        <el-table-column align="center" :show-overflow-tooltip="true"   sortable prop="context"  :label="$t('table.state')" width="180">
          <template
            slot-scope="scope">
            <span>{{$t('state.' + scope.row.state)}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true" sortable  prop="role"  :label="$t('table.sission_deadline')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.endTime}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>import { getReviewedSealDoc } from '@/api/index'
export default {
  name: 'myTasks',
  mounted: function () {
    this.getDataList()
  },
  methods: {
    getDataList () {
      getReviewedSealDoc().then(r => {
        this.tableData = r.data
      })
    },
    goDetail (data) {
      // console.log('data', data)
      this.$router.push({name: 'fdetailypdq', params: {oid: data.oid, state: data.state}})
    }
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>
