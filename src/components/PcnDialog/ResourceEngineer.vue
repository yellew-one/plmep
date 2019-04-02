<template>
  <el-dialog top="30px"  title="查询" :visible.sync="dialogFormVisible" width="800px" append-to-body>
    <div style="font-family: 微软雅黑;font-size: 13px;">
      <el-scrollbar style="height: 400px">
        <el-card>
          <div>
            <el-form  size="mini" ref="dataForm" :model="temp" label-position="left" label-width="0px"
                      style=' margin-left:0px;'>
              <el-row type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="6">
                  <!--:label="$t('pcn.search.name')"-->
                  <el-form-item prop="name" >
                    <el-input placeholder="筛选"  v-model="searchName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!--<el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">-->
                <!--<el-col :span="10">-->
                  <!--<el-form-item prop="name" :label="$t('pcn.search.email')">-->
                    <!--<el-input   v-model="model.email"></el-input>-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="10">-->
                  <!--<el-button size="mini" :loading="$store.getters.loading" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>-->
                <!--</el-col>-->
              <!--</el-row>-->
            </el-form>
            <el-table
              :data="dataList | tablefilters(searchName)"
              border
              size="mini"
              style="width: 100%;">
              <el-table-column :label="$t('pcn.search.name')"  align="center" show-overflow-tooltip="true"  prop="number">
                <template
                  slot-scope="scope">
                  <a @click="Click1(scope.row)" style="color: blue">{{scope.row.fullName}}</a>
                </template>
              </el-table-column>
              <el-table-column :label="$t('pcn.search.userName')"  align="center" show-overflow-tooltip="true"  prop="number">
                <template
                  slot-scope="scope">
                  <span>{{scope.row.userName}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-scrollbar>

      <div style="text-align:right;padding-top: 20px">
        <!--<el-button type="primary" size="mini" @click="dialogFormVisible = false">{{$t('formButton.cancel')}}</el-button>-->
      </div>
    </div>
  </el-dialog>
</template>
<script>
import { resourceEngineer } from '@/api/pcn'
export default {
  name: 'ResourceEngineer',
  props: ['restData'],
  mounted: function () {
    this.getResourceEngineer()
  },
  filters: {
    tablefilters: function (value, data) {
      var sz = []
      value.forEach(function (v, index) {
        if (v.fullName.indexOf(data) !== -1 || v.userName.indexOf(data) !== -1) {
          sz.push(v)
        }
      })
      return sz
    }
  },
  methods: {
    Click1 (value) {
      this.$props.restData(value)
      this.dialogFormVisible = false
    },
    getResourceEngineer () {
      resourceEngineer().then(r => {
        console.log(r)
        this.dataList = r.data
      })
    },
    openDialog () { // 打开弹窗
      this.dialogFormVisible = true
    },
    submit () { // 提交
      this.$props.restData()
      console.log()
    },
    searchResult () {}
  },
  data () {
    return {
      dialogFormVisible: false,
      temp: {},
      model: {},
      dataList: [],
      searchName: ''
    }
  }
}
</script>
