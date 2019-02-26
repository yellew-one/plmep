<template>
    <div class="app-container">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="boxtext">
              <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                       style=' margin-left:0px;'>
                <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="8">
                    <el-form-item prop="demand_code" :label="$t('huanbaoTable.search.material_number')">
                      <el-input   v-model="temp.demand_name"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="demand_code" :label="$t('huanbaoTable.search.material_name')">
                      <el-input   v-model="temp.demand_name"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item >
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="8">
                    <el-form-item prop="demand_name"  :label="$t('huanbaoTable.search.escape_clause')">
                      <el-input disabled="true" v-model="temp.demand_name">
                        <el-button @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="demand_code" :label="$t('huanbaoTable.search.status')">
                      <el-input   v-model="temp.demand_name"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item >
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="8">
                    <el-form-item prop="demand_code" :label="$t('huanbaoTable.search.cas_no')">
                      <el-input   v-model="temp.demand_name"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="dateValue" :label="$t('huanbaoTable.search.time')">
                      <el-date-picker
                        style="width: 100%"
                        v-model="dateValue"
                        type="daterange"
                        start-placeholder="Start Time"
                        end-placeholder="End Time"
                        value-format="yyyy-MM-dd">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item >
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
              <el-form-item :label="$t('huanbaoTable.search.result')">
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
          <el-table-column  align="center" show-overflow-tooltip="true"  prop="number"  :label="$t('huanbaoTable.search.number')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.taskName}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="name"  :label="$t('huanbaoTable.search.name')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.material_number}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="version"  :label="$t('huanbaoTable.search.version')" width="80">
            <template
              slot-scope="scope">
              <span>{{scope.row.material_name}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true"  prop="status"  :label="$t('huanbaoTable.search.status')" width="80">
            <template
              slot-scope="scope">
              <span>{{scope.row.model_specification}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="material_number"  :label="$t('huanbaoTable.search.material_number')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.item_code}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="material_name"  :label="$t('huanbaoTable.search.material_name')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.item_code}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="model_specification"  :label="$t('huanbaoTable.search.model_specification')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.item_code}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="supplier"  :label="$t('huanbaoTable.search.supplier')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.item_code}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="manufacturer"  :label="$t('huanbaoTable.search.manufacturer')" width="180">
            <template
              slot-scope="scope">
              <span>{{scope.row.item_code}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="fmd"  :label="$t('huanbaoTable.submitted.fmd')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.fmd === '已发布'" title="已发布" type="success" circle></el-button>
              <el-button v-if="scope.row.fmd === '驳回'" title="驳回" type="danger" circle></el-button>
              <el-button v-if="scope.row.fmd === '正在审阅'" title="正在审阅" type="warning" circle></el-button>
              <el-button v-if="scope.row.fmd === '正在工作'" title="正在工作" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="msds"  :label="$t('huanbaoTable.submitted.msds')" width="150">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.msds === '已发布'" title="已发布" type="success" circle></el-button>
              <el-button v-if="scope.row.msds === '驳回'" title="驳回" type="danger" circle></el-button>
              <el-button v-if="scope.row.msds === '正在审阅'" title="正在审阅" type="warning" circle></el-button>
              <el-button v-if="scope.row.msds === '正在工作'" title="正在工作" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="rohs"  :label="$t('huanbaoTable.submitted.rohs')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.rohs === '已发布'" title="已发布" type="success" circle></el-button>
              <el-button v-if="scope.row.rohs === '驳回'" title="驳回" type="danger" circle></el-button>
              <el-button v-if="scope.row.rohs === '正在审阅'" title="正在审阅" type="warning" circle></el-button>
              <el-button v-if="scope.row.rohs === '正在工作'" title="正在工作" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="hf"  :label="$t('huanbaoTable.submitted.hf')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.hf === '已发布'" title="已发布" type="success" circle></el-button>
              <el-button v-if="scope.row.hf === '驳回'" title="驳回" type="danger" circle></el-button>
              <el-button v-if="scope.row.hf === '正在审阅'" title="正在审阅" type="warning" circle></el-button>
              <el-button v-if="scope.row.hf === '正在工作'" title="正在工作" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="reach"  :label="$t('huanbaoTable.submitted.reach')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.reach === '已发布'" title="已发布" type="success" circle></el-button>
              <el-button v-if="scope.row.reach === '驳回'" title="驳回" type="danger" circle></el-button>
              <el-button v-if="scope.row.reach === '正在审阅'" title="正在审阅" type="warning" circle></el-button>
              <el-button v-if="scope.row.reach === '正在工作'" title="正在工作" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="others"  :label="$t('huanbaoTable.submitted.others')" width="100">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.others === '已发布'" title="已发布" type="success" circle></el-button>
              <el-button v-if="scope.row.others === '驳回'" title="驳回" type="danger" circle></el-button>
              <el-button v-if="scope.row.others === '正在审阅'" title="正在审阅" type="warning" circle></el-button>
              <el-button v-if="scope.row.others === '正在工作'" title="正在工作" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="customer_Special_Needs"  :label="$t('huanbaoTable.submitted.customer_Special_Needs')" width="150">
            <template
              slot-scope="scope">
              <el-button v-if="scope.row.customer_Special_Needs === '已发布'" title="已发布" type="success" circle></el-button>
              <el-button v-if="scope.row.customer_Special_Needs === '驳回'" title="驳回" type="danger" circle></el-button>
              <el-button v-if="scope.row.customer_Special_Needs === '正在审阅'" title="正在审阅" type="warning" circle></el-button>
              <el-button v-if="scope.row.customer_Special_Needs === '正在工作'" title="正在工作" style="background-color: #909399;"  circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <escape-clause
                      ref="myChild"
                      :setTest = 'setTest'
                      v-on:childByValue="childByValue"></escape-clause>
    </div>
</template>
<script>
import EscapeClause from '../../components/EscapeClause/escapeClause'
export default {
  components: {EscapeClause},
  name: 'HelloWorld',
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
    // 父组件调用
    setTest (e) {
      this.temp.demand_name = e
    },
    // 父子组件传值
    escapeClick () {
      this.dialogVisible = true
      this.$refs.myChild.setDialogFormVisible(this.dialogVisible)
    },
    // 父组件回调
    childByValue (childValue) {
      this.dialogVisible = childValue
    }
  }
}
</script>
<style>
  .boxtext {
    font-size: 15px;
  }
</style>
