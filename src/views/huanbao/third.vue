<template>
    <div class="app-container">
      <el-card class="box-card">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column align="center" show-overflow-tooltip="true"  prop="taskName"  :label="$t('huanbaoTable.third.taskName')" width="180">
          <template
            slot-scope="scope">
            <a href="#" style="color: blue">{{scope.row.taskName}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="theme"  :label="$t('huanbaoTable.third.theme')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.theme}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="status"  :label="$t('huanbaoTable.third.status')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.status}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  sortable prop="task_deadlines"  :label="$t('huanbaoTable.third.task_deadlines')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.task_deadlines}}</span>
          </template>
        </el-table-column>
      </el-table>
      </el-card>
    </div>
</template>
<script>
export default {
  components: {
  },
  name: 'HelloWorld',
  mounted: function () {
  },
  methods: {},
  data () {
    return {
      tableData: [{
        taskName: '提交封样资料',
        theme: '美国GAO武器系统',
        status: '正在工作',
        task_deadlines: '2019-11-02 14:00:25'
      }, {
        taskName: '提交封样资料',
        theme: '萨德反导系统',
        status: '正在工作',
        task_deadlines: '2019-02-02 11:02:25'
      }]
    }
  }
}
</script>
