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
              <el-form  size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                        style=' margin-left:0px;'>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="10">
                    <el-form-item prop="RoHSNumber" :label="$t('fengyangTable.seacher.doc_number')">
                      <el-input   v-model="number"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="10">
                    <el-form-item prop="RoHSType" :label="$t('fengyangTable.seacher.doc_name')">
                      <el-input   v-model="name"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                  <el-col :span="10">
                    <el-form-item prop="RoHSNumber" :label="$t('fengyangTable.seacher.type3')">
                      <el-select style="width: 100%" v-model="thirdLevel" placeholder="">
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
          :data="tableData"
          border
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
export default {
  components: {},
  name: 'EscapeClause',
  props: ['acceptSonValue', 'restData'],
  mounted: function () {
  },
  data () {
    return {
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
      SelectionList: []
    }
  },
  methods: {
    setDialogFormVisible (item, oid) {
      this.dialogVisible = item
      this.oid = oid
      this.getlqThirdLevel()
      this.getSearchSealedDocs()
    },
    searchResult () {
      this.getSearchSealedDocs()
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
      searchSealedDocs(this.number, this.name, this.thirdLevel).then(r => {
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
      addDoc(this.oid, str).then(r => {
        console.log(r)
        if (r.data[0].mes && r.data[0].mes === '添加成功！') {
          this.$message({
            message: r.data[0].mes,
            type: 'success',
            duration: 5 * 1000
          })
          this.dialogVisible = false
          this.$props.restData()
        } else if (r.data[0].mes) {
          this.$message({
            message: r.data[0].mes,
            type: 'warn',
            duration: 8 * 1000
          })
        }
      })
    }
  }
}
</script>
<style>
  .boxtext {
    font-size: 15px;
  }
</style>
