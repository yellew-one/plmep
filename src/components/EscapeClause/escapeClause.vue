<template>
  <div class="app-container">
    <el-dialog
      :title="$t('huanbaoTable.escapeClause.title')"
      :visible.sync="dialogVisible"
      width="50%"
      top="15px">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="boxtext">
              <el-form  size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                       style=' margin-left:0px;'>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="12">
                    <el-form-item prop="demand_code" :label="$t('huanbaoTable.escapeClause.number')">
                      <el-input   v-model="temp.demand_name"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item prop="demand_code" :label="$t('huanbaoTable.escapeClause.category')">
                      <el-input   v-model="temp.demand_name"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="12">
                    <el-form-item prop="dateValue"  :label="$t('huanbaoTable.escapeClause.range')">
                      <el-date-picker
                        style="width: 100%;"
                        size="mini"
                        v-model="dateValue"
                        type="daterange"
                        start-placeholder="Start Time"
                        end-placeholder="End Time"
                        :default-time="['00:00:00', '23:59:59']"
                        value-format="yyyy-MM-dd">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item prop="demand_code" :label="$t('huanbaoTable.escapeClause.describe') ">
                      <el-input   v-model="temp.demand_name"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" >
                  <el-col :span="8">
                    <el-button size="mini" type="primary" plain>{{$t('huanbaoTable.search.search')}}</el-button>
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
              <el-form-item :label="$t('huanbaoTable.escapeClause.result')">
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
          border
          style="width: 100%;margin-top: 10px">
          <el-table-column  align="center" show-overflow-tooltip="true"  prop="number"  :label="$t('huanbaoTable.escapeClause.number')">
            <template
              slot-scope="scope">
              <span>{{scope.row.taskName}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="name"  :label="$t('huanbaoTable.escapeClause.category')">
            <template
              slot-scope="scope">
              <span>{{scope.row.material_number}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="version"  :label="$t('huanbaoTable.escapeClause.range')">
            <template
              slot-scope="scope">
              <span>{{scope.row.material_name}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true"  prop="status"  :label="$t('huanbaoTable.escapeClause.describe')">
            <template
              slot-scope="scope">
              <span>{{scope.row.model_specification}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="test">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>export default {
  components: {},
  name: 'EscapeClause',
  props: ['setTest'],
  mounted: function () {
  },
  data () {
    return {
      dialogVisible: false,
      dateValue: '',
      temp: {
        demand_name: 'PLM'
      },
      tableData: [{
        taskName: '任务名',
        material_number: '物料编号',
        material_name: '物料名称',
        model_specification: '型号规格',
        item_code: '项目代号',
        fmd: '已发布',
        msds: '已发布',
        rohs: '已发布',
        hf: '已发布',
        reach: '已发布',
        others: '已发布',
        customer_Special_Needs: '已发布',
        environmental_attributes: '环保属性'
      }, {
        taskName: '任务名2',
        material_number: '物料编号',
        material_name: '物料名称',
        model_specification: '型号规格',
        item_code: '项目代号',
        fmd: '驳回',
        msds: '驳回',
        rohs: '驳回',
        hf: '驳回',
        reach: '驳回',
        others: '驳回',
        customer_Special_Needs: '驳回',
        environmental_attributes: '环保属性'
      }, {
        taskName: '任务名2',
        material_number: '物料编号',
        material_name: '物料名称',
        model_specification: '型号规格',
        item_code: '项目代号',
        fmd: '正在审阅',
        msds: '正在审阅',
        rohs: '正在审阅',
        hf: '正在审阅',
        reach: '正在审阅',
        others: '正在审阅',
        customer_Special_Needs: '正在审阅',
        environmental_attributes: '环保属性'
      }, {
        taskName: '任务名2',
        material_number: '物料编号',
        material_name: '物料名称',
        model_specification: '型号规格',
        item_code: '项目代号',
        fmd: '正在工作',
        msds: '驳回',
        rohs: '正在审阅',
        hf: '正在工作',
        reach: '正在审阅',
        others: '正在工作',
        customer_Special_Needs: '已发布',
        environmental_attributes: '环保属性'
      }]
    }
  },
  methods: {
    test () {
      this.dialogVisible = false
      this.$props.setTest('123')
    },
    setDialogFormVisible (item) {
      this.dialogVisible = item
    }
  },
  watch: {
    dialogFormVisible (val, oldVal) {
      this.$emit('childByValue', 'false')
    }
  }
}
</script>
<style>
  .boxtext {
    font-size: 15px;
  }
</style>
