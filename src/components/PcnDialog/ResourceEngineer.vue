<template>
  <el-dialog top="30px"  title="查询" :visible.sync="dialogFormVisible" width="800px">
    <div style="font-family: 微软雅黑;font-size: 13px;">
      <el-scrollbar style="height: 400px">
        <el-card>
          <div>
            <el-form  size="mini" ref="dataForm" :model="temp" label-position="left" label-width="120px"
                      style=' margin-left:0px;'>
              <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="10">
                  <el-form-item prop="name" :label="$t('pcn.search.name')">
                    <el-input   v-model="model.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" type="flex" class="row-bg" style="height: 40px;">
                <el-col :span="10">
                  <el-form-item prop="name" :label="$t('pcn.search.email')">
                    <el-input   v-model="model.email"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-button size="mini" :loading="$store.getters.loading" type="primary" plain @click="searchResult">{{$t('huanbaoTable.search.search')}}</el-button>
                </el-col>
              </el-row>
            </el-form>
            <el-table
              :data="dataList"
              border
              size="mini"
              style="width: 100%;margin-top: 10px">
              <el-table-column :label="$t('pcn.search.name')"  align="center" show-overflow-tooltip="true"  prop="number">
                <template
                  slot-scope="scope">
                  <span>{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('pcn.search.email')"  align="center" show-overflow-tooltip="true"  prop="number">
                <template
                  slot-scope="scope">
                  <span>{{scope.row.email}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-scrollbar>

      <div style="text-align:right">
        <el-button type="primary" size="mini" @click="dialogFormVisible = false">{{$t('formButton.cancel')}}</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'ResourceEngineer',
  props: ['restData'],
  mounted: function () {
  },
  methods: {
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
      dataList: []
    }
  }
}
</script>
