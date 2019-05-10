// 豁免条款搜索 dialog
<template>
  <div class="app-container">
    <el-dialog
      :title="$t('huanbaoTable.escapeClause.title')"
      :visible.sync="dialogVisible"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="15px"
      append-to-body>
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="boxtext">
              <el-form  size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                       style=' margin-left:0px;'>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="12">
                    <el-form-item prop="RoHSNumber" :label="$t('huanbaoTable.escapeClause.RoHSNumber')">
                      <el-input   v-model="temp.RoHSNumber"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item prop="RoHSType" :label="$t('huanbaoTable.escapeClause.RoHSType')">
                      <el-input   v-model="temp.RoHSType"></el-input>
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
                    <el-form-item prop="RoHSDescription" :label="$t('huanbaoTable.escapeClause.RoHSDescription') ">
                      <el-input   v-model="temp.RoHSDescription"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" >
                  <el-col :span="8">
                    <el-button size="mini" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
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
          <el-col :span="12">
            <el-form style="margin-left: 2%" >
              <el-form-item :label="$t('huanbaoTable.escapeClause.result')">
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <el-form >
              <el-form-item>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          size="mini"
          style="width: 100%;margin-top: 10px"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="35">
          </el-table-column>
          <el-table-column  align="center" show-overflow-tooltip="true"  prop="RoHSNumber"  :label="$t('huanbaoTable.escapeClause.RoHSNumber')">
            <template
              slot-scope="scope">
              <span>{{scope.row.RoHSNumber}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="RoHSType"  :label="$t('huanbaoTable.escapeClause.RoHSType')">
            <template
              slot-scope="scope">
              <span>{{scope.row.RoHSType}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true" prop="expirationDate"  :label="$t('huanbaoTable.escapeClause.range')">
            <template
              slot-scope="scope">
              <span>{{scope.row.expirationDate}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" show-overflow-tooltip="true"  prop="RoHSDescription"  :label="$t('huanbaoTable.escapeClause.RoHSDescription')">
            <template
              slot-scope="scope">
              <span>{{scope.row.RoHSDescription}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <div style="width: 100%;text-align: right">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="counts.nowPage"
          layout="total, prev, pager, next"
          :total="counts.total"
          :page-size="counts.pageCount">
        </el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button @click="cancelValue">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
          <el-button type="primary" @click="setBabaValue">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import { selectRoHSExemption } from '@/api/index'
export default {
  components: {},
  name: 'EscapeClause',
  props: ['acceptSonValue'],
  mounted: function () {
  },
  data () {
    return {
      str: '',
      dialogVisible: false,
      dateValue: [],
      temp: {
        RoHSNumber: '',
        RoHSType: '',
        startDate: '',
        endDate: '',
        RoHSDescription: ''
      },
      tableData: [],
      counts: {
        total: 0,
        nowPage: 1,
        pageCount: 10,
        nextPage: 0,
        lastPage: 0
      }
    }
  },
  methods: {
    searchResult () {
      if (this.dateValue) {
        this.temp.startDate = this.dateValue[0]
        this.temp.endDate = this.dateValue[1]
      } else {
        this.temp.startDate = ''
        this.temp.endDate = ''
      }
      this.tableData = []
      this.getDataList(this.temp, this.counts)
    },
    getDataList (e, counts) {
      this.counts.nowPage = 1
      selectRoHSExemption(e, counts).then(r => {
        console.log('escapeClause', r)
        this.tableData = r.data.result
        this.counts.total = r.data.totalCount
      })
    },
    // 确认时回调父组件传值
    setBabaValue () {
      this.dialogVisible = false
      this.$props.acceptSonValue(this.str)
    },
    setDialogFormVisible () {
      this.dialogVisible = true
      this.str = ''
      this.temp = {
        RoHSNumber: '',
        RoHSType: '',
        startDate: '',
        endDate: '',
        RoHSDescription: ''
      }
      this.tableData = []
      this.counts = {
        total: 0,
        nowPage: 1,
        pageCount: 10,
        nextPage: 0,
        lastPage: 0
      }
      this.temp.startDate = ''
      this.temp.endDate = ''
      this.tableData = []
      this.getDataList(this.temp, this.counts)
    },
    // 处理多选数据
    handleSelectionChange (val) {
      this.str = ''
      for (let i in val) {
        this.str = val[i].RoHSNumber + ',' + this.str
      }
      this.str = this.str.substring(0, this.str.length - 1)
      console.log('handleSelectionChange', this.str)
    },
    // 取消操作
    cancelValue () {
      this.dialogVisible = false
      this.$refs.multipleTable.clearSelection()
    },
    handleCurrentChange (val) {
      this.counts.nowPage = val
      selectRoHSExemption(this.temp, this.counts).then(r => {
        console.log('search result', r)
        this.tableData = r.data.result
        this.counts.total = r.data.totalCount
      })
    }
  }
}
</script>
<style scoped>
  .boxtext {
    font-size: 15px;
  }
</style>
