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
                  <el-form-item prop="name" :label="$t('OUTRESOURCE.download.name')">
                    <el-input   v-model="temp.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item >
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="8">
                  <el-form-item prop="project" :label="$t('OUTRESOURCE.download.project')">
                    <el-input   v-model="temp.project"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item >
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="8">
                  <el-form-item prop="dateValue" :label="$t('OUTRESOURCE.download.date')">
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
                  <el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item >
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" type="flex" class="row-bg" >
                <el-col :span="8">
                  <el-button :loading="$store.getters.loading" size="mini" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
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
            <el-form-item :label="$t('OUTRESOURCE.search.result')">
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
        size="mini"
        style="width: 100%; margin-top: 5px"
        @cell-click="cellClick">
        <el-table-column align="center" show-overflow-tooltip="true"  prop="num"  :label="$t('OUTRESOURCE.download.number')" >
          <template
            slot-scope="scope">
            <span>{{$t(scope.row.num)}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="name"  :label="$t('OUTRESOURCE.download.name')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"  prop="project"  :label="$t('OUTRESOURCE.download.project')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.project}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="releaseTime"  :label="$t('OUTRESOURCE.download.date')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.releaseTime}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="receiver"  :label="$t('OUTRESOURCE.download.person')" >
          <template
            slot-scope="scope">
            <span>{{scope.row.receiver}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="down"  :label="$t('OUTRESOURCE.download.option')" >
          <template
            slot-scope="scope">
            <a href="#" style="color: blue">{{$t('OUTRESOURCE.download.down')}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="ifdown"  :label="$t('OUTRESOURCE.download.situation')" >
          <template
            slot-scope="scope">
            <span v-if="scope.row.download_status === '未下载'">{{$t('OUTRESOURCE.download.ifdown')}}</span>
            <span v-if="scope.row.download_status === '已下载'">{{$t('OUTRESOURCE.download.downs')}}</span>
          </template>
        </el-table-column>
      </el-table>
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
    </el-card>
  </div>
</template>
<script>
import { searchPackage, downloadZip } from '@/api/outresource'
export default {
  components: {},
  name: 'HelloWorld',
  mounted: function () {
  },
  data () {
    return {
      dialogVisible: false,
      dateValue: '',
      temp: {
        project: '',
        name: '',
        searchDateFrom: '',
        searchDateTo: ''
      },
      tableData: [],
      options: [],
      optionsValue: '',
      counts: {
        total: 0,
        nowPage: 1,
        pageCount: 10,
        nextPage: 0,
        lastPage: 0
      }
    }
  },
  activated: function () {
    this.getDataList(this.temp, this.counts)
  },
  methods: {
    // 获取物料环保搜索页面查询条件中物料环保状态下拉框的值
    // 搜索结果
    searchResult () {
      this.$store.commit('SET_LOADING', true)
      if (this.dateValue) {
        this.temp.searchDateFrom = this.dateValue[0]
        this.temp.searchDateTo = this.dateValue[1]
      } else {
        this.temp.searchDateFrom = ''
        this.temp.searchDateTo = ''
      }
      this.getDataList(this.temp, this.counts)
    },
    // 获取搜索结果
    getDataList (e, counts) {
      this.counts.nowPage = 1
      searchPackage(e, counts).then(r => {
        console.log('search result', r)
        this.tableData = r.data.data
        this.counts.total = r.data.count
      })
    },
    cellClick (row, column, cell, event) {
      downloadZip(row.oid).then(r => {
        console.log('xoxo', r)
        if (r.data.status) {
          window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.path) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    },
    handleCurrentChange (val) {
      this.counts.nowPage = val
      searchPackage(this.temp, this.counts).then(r => {
        this.tableData = r.data.data
        this.counts.total = r.data.count
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
