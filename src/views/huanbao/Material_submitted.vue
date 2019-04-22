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
          <el-table-column align="center" show-overflow-tooltip="true" prop="taskName"  :label="$t('huanbaoTable.submitted.taskName')" width="180">
            <template
            slot-scope="scope">
            <a  style="color: blue">{{$t(scope.row.taskName)}}</a>
          </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="materialNumber"  :label="$t('huanbaoTable.submitted.materialNumber')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.materialNumber}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="materialName"  :label="$t('huanbaoTable.submitted.materialName')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.materialName}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="specification"  :label="$t('huanbaoTable.submitted.specification')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.specification}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="projectNumber"  :label="$t('huanbaoTable.submitted.projectNumber')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.projectNumber}}</span>
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
          <el-table-column align="center" show-overflow-tooltip="true" prop="MSDS"  :label="$t('huanbaoTable.submitted.MSDS')" width="100">
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
          <el-table-column align="center" show-overflow-tooltip="true" prop="OTHER2"  :label="$t('huanbaoTable.submitted.OTHER2')" width="180">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.OTHER2 === 'RELEASED'" :title="$t('huanbaoTable.submitted.RELEASED')" type="success" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'REWORK'" :title="$t('huanbaoTable.submitted.REWORK')" type="danger" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'UNDERREVIEW'" :title="$t('huanbaoTable.submitted.UNDERREVIEW')" type="warning" circle></el-button>
              <el-button v-if="scope.row.OTHER2 === 'INWORK'" :title="$t('huanbaoTable.submitted.INWORK')" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="envProtectionStatus"  :label="$t('huanbaoTable.submitted.envProtectionStatus')" width="190">
            <template
              slot-scope="scope">
              <span>{{scope.row.envProtectionStatus}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
</template>
<script>
import { showEnvProtectionTasks } from '@/api/index'
export default {
  name: 'HelloWorld',
  filters: {
    tablefilters: function (value, data) {
      var sz = []
      value.forEach(function (v, index) {
        if (v.materialNumber.indexOf(data) !== -1) {
          sz.push(v)
        }
      })
      return sz
    }
  },
  mounted: function () {
    this.getDataList()
  },
  data () {
    return {
      tableData: [],
      tFilters: ''
    }
  },
  activated: function () {
    this.getDataList()
  },
  methods: {
    // 获取表格信息
    getDataList () {
      showEnvProtectionTasks().then(r => {
        this.tableData = r.data
        console.log('Material Submitted', r)
      })
    },
    cellClick (row, column, cell, event) {
      this.$router.push({name: 'detailTask', params: {oid: row.oid, state: row.state, approvalType: 'YEAH'}})
    }
  }
}
</script>
