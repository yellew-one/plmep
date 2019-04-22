<template>
    <div class="app-container">
      <el-card class="box-card">
        <el-row style="margin-top: -10px;">
          <el-col :span="6">
            <el-input placeholder="" size="mini" v-model="tFilters"></el-input>
          </el-col>
        </el-row>
      <el-table
        :data="tableData | tablefilters(tFilters)"
        border
        size="mini"
        style="width: 100%; margin-top: 5px"
        @cell-click="cellClick">
        <el-table-column align="center" show-overflow-tooltip="true"  prop="taskName"  :label="$t('huanbaoTable.third.taskName')" >
          <template
            slot-scope="scope">
            <a href="#" style="color: blue">{{$t(scope.row.taskName)}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="number"  :label="$t('huanbaoTable.third.theme')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.number}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="state"  :label="$t('huanbaoTable.third.state')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.state}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="specification"  :label="$t('huanbaoTable.third.specification')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.endTime}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="startTime"  :label="$t('huanbaoTable.third.startTime')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.startTime}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="allNumber"  :label="$t('huanbaoTable.third.allNumber')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.allNumber}}</span>
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
  filters: {
    tablefilters: function (value, data) {
      var sz = []
      value.forEach(function (v, index) {
        if (v.number.indexOf(data) !== -1) {
          sz.push(v)
        }
      })
      return sz
    }
  },
  activated: function () {
    this.getDataList()
  },
  mounted: function () {
  },
  data () {
    return {
      tableData: [],
      tFilters: ''
    }
  },
  methods: {
    getDataList () {
      expiredEnvProtectionTasks().then(r => {
        this.tableData = r.data
        console.log('third', r)
      })
    },
    cellClick (row, column, cell, event) {
      this.$router.push({name: 'detailthird', params: {oid: row.pnOid, state: row.state}})
    }
  }
}
</script>
