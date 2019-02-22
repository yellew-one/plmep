<template>
  <div class="app-container" style="height: 100%" >
    <el-card class="box-card">
      <el-table
        :data="tableData"
        border
        height="450px"
        style="width: 100%">
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="name"  :label="$t('table.task_name')" width="180">
          <template
            slot-scope="scope">
            <a href="#" style="color: blue">{{scope.row.name}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="theme"  :label="$t('table.material_number')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.theme}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="state"  :label="$t('table.material_name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.state}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="tasksType"  :label="$t('table.model_specification')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.tasksType}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="allocated"  :label="$t('table.project_name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.allocated}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   sortable prop="context"  :label="$t('table.state')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.context}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" :show-overflow-tooltip="true"   prop="role"  :label="$t('table.sission_deadline')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.role}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>export default {
  name: 'HelloWorld',
  mounted: function () {
  },
  methods: {},
  data () {
    return {
      tableData: [{
        name: '提交封样资料',
        theme: '美国GAO武器系统物料环保资料',
        state: '正在工作',
        tasksType: '潜在的',
        context: '龙旗封样库',
        role: '供应商封样接口人',
        allocated: '2019-11-02 14:00:25'
      }, {
        name: '提交封样资料',
        theme: '萨德反导系统',
        state: '正在工作',
        tasksType: '潜在的',
        context: '龙旗封样库',
        role: '供应商封样接口人',
        allocated: '2019-02-02 11:02:25'
      }]
    }
  }
}
</script>
