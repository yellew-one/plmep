<template>
  <div class="app-container">
    <el-dialog
      :title="$t('fengyangTable.seacher.title.add_doc')"
      :visible.sync="dialogVisible"
      height="350px"
      width="70%"
      top="30px">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="boxtext">
              <el-form  size="mini" ref="dataForm" :model="temp" label-position="left" :label-width="$store.getters.guojihua==='en'?'200px': '140px'"
                        style='margin-left:0px;'>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="10">
                    <el-form-item prop="RoHSNumber" :label="$t('fengyangTable.seacher.doc_number')">
                      <el-input   v-model="model.serchItems.inputnumber"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="10">
                    <el-form-item prop="RoHSType" :label="$t('fengyangTable.seacher.doc_name')">
                      <el-input   v-model="model.serchItems.name"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="10">
                    <el-form-item prop="RoHSNumber" :label="$t('fengyangTable.seacher.type3')">
                      <el-select style="width: 100%" v-model="model.serchItems.thirdLevel" placeholder="">
                        <el-option
                          v-for="item in options2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-button size="mini" :loading="$store.getters.loading" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
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
              <el-form-item :label="$t('fengyangTable.seacher.seach_result')">
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
          ref="docTable"
          :data="model.dataList"
          border
          size="mini"
          height="450px"
          style="width: 100%;margin-top: 10px"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="35">
          </el-table-column>
          <el-table-column :label="$t('fengyangTable.seacher.number')"  align="center" show-overflow-tooltip="true"  prop="number">
            <template
              slot-scope="scope">
              <span>{{scope.row.number}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('fengyangTable.seacher.name')"  align="center" show-overflow-tooltip="true"  prop="name">
            <template
              slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('fengyangTable.seacher.stauts')"  align="center" show-overflow-tooltip="true"  prop="stauts">
            <template
              slot-scope="scope">
              <span>{{$t(scope.row.state)}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('fengyangTable.seacher.type3')"  align="center" show-overflow-tooltip="true"  prop="type3">
            <template
              slot-scope="scope">
              <span>{{$t('app_enum.lqThirdLevel.' + scope.row.lq_third_level)}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('TableTile.files.version')"  align="center" show-overflow-tooltip="true"  prop="version">
            <template
              slot-scope="scope">
              <span>{{scope.row.version}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('fengyangTable.seacher.create_time')"  align="center" show-overflow-tooltip="true"  prop="create_time">
            <template
              slot-scope="scope">
              <span>{{scope.row.createTime}}</span>
            </template>
          </el-table-column>

        </el-table>
        <div style="width: 100%;text-align: right">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="model.counts.nowPage"
            layout="total, prev, pager, next"
            :total="model.counts.totalCount"
            :page-size="model.counts.pageSize">
          </el-pagination>
        </div>
      </el-card>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
          <el-button :loading="$store.getters.loading" type="primary" @click="addDocClick">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import { lqThirdLevel, searchSealedDocs, addDoc } from '@/api/index'
import { initPage } from '@/utils/index'
export default {
  components: {},
  name: 'EscapeClause',
  props: ['acceptSonValue', 'restData'],
  mounted: function () {
    initPage(this.model, searchSealedDocs)
    this.model.searchCurrent(1)
  },
  data () {
    return {
      model: {serchItems: {}, dataList: []},
      dialogVisible: false,
      temp: {
        RoHSNumber: '',
        RoHSType: '',
        startDate: '',
        endDate: '',
        RoHSDescription: ''
      },
      oid: '',
      tableData: [],
      options2: [],
      number: '',
      name: '',
      thirdLevel: '',
      SelectionList: [],
      inputnumber: ''
    }
  },
  methods: {
    setDialogFormVisible (item, oid, number) {
      this.dialogVisible = item
      this.oid = oid
      this.number = number
      this.getlqThirdLevel()
      this.model.searchCurrent(1)
      // this.getSearchSealedDocs()
    },
    handleCurrentChange (val) {
      this.model.searchCurrent(val)
    },
    searchResult () {
      this.model.searchCurrent(1)
      // this.getSearchSealedDocs()
    },
    // 处理多选数据
    handleSelectionChange (val) {
      this.SelectionList = val
    },
    // 取消操作
    cancelValue () {
    },
    getlqThirdLevel () {
      var that = this
      lqThirdLevel().then(r => {
        console.log(r)
        var sz = [{value: '', lable: ''}]
        r.data.forEach(function (value, index) {
          console.log('foreach:', value)
          for (var key in value) {
            sz.push({
              value: key,
              label: that.$t('app_enum.lqThirdLevel.' + key)
            })
          }
        })
        this.options2 = sz
      })
    },
    getSearchSealedDocs () {
      this.$store.commit('SET_LOADING', true)
      searchSealedDocs(this.inputnumber, this.name, this.thirdLevel).then(r => {
        this.tableData = r.data.slice(0, 9)
        console.log(this.tableData)
      })
    },
    addDocClick () {
      var str = ''
      var size = this.SelectionList.length
      this.$store.commit('SET_LOADING', true)
      this.SelectionList.forEach(function (value, index) {
        str += value.oid
        console.log(size + '-->', index)
        if (size !== index + 1) {
          str += ','
        }
      })
      addDoc('MS' + this.number, str).then(r => {
        console.log(r)
        var mesg = this.$store.getters.guojihua === 'zh' ? r.data.zh : r.data.en
        console.log(r)
        if (r.data.state === 'failed') {
          this.$message({
            message: mesg,
            type: 'warning',
            duration: 8 * 1000
          })
        } else if (r.data.oid) {
          this.$message({
            message: r.data.attr[0].mes,
            type: 'success',
            duration: 5 * 1000
          })
          this.dialogVisible = false
          this.$props.restData(r.data.oid)
        }
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
