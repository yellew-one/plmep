/**
* Created by yaoyuan on 2019/5/6.
*/
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
        <el-table-column align="center" show-overflow-tooltip="true"   prop="allNumber"  :label="$t('OUTRESOURCE.download.option')" >
          <template
            slot-scope="scope">
            <a href="#" style="color: blue">{{$t('OUTRESOURCE.download.down')}}</a>
          </template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip="true"   prop="allNumber"  :label="$t('OUTRESOURCE.download.situation')" >
          <template
            slot-scope="scope">
            <span>{{$t('OUTRESOURCE.download.ifdown')}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { listDownloadTask, downloadZip } from '@/api/outresource'
export default {
  components: {
  },
  name: 'HelloWorld',
  filters: {
    tablefilters: function (value, data) {
      var sz = []
      value.forEach(function (v, index) {
        if (v.num.indexOf(data) !== -1) {
          sz.push(v)
        }
      })
      return sz
    }
  },
  activated: function () {
  },
  mounted: function () {
    listDownloadTask().then(r => {
      this.tableData = r.data
    })
  },
  methods: {
    cellClick (row, column, cell, event) {
      downloadZip(row.oid).then(r => {
        console.log('xoxo', r)
        if (r.data.status) {
          window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.path) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    }
  },
  data () {
    return {
      tableData: [],
      tFilters: ''
    }
  }
}
</script>
