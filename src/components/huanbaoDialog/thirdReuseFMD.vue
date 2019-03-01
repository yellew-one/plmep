/**
* Created by yaoyuan on 2019/3/1.
* 第三方复用
*/
/**
* 编辑FMD
*/

<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="15%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>{{$t('huanbaoTable.FMD.third')}}</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="100px"
                   style=' margin-left:0px;'>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;">
              <el-col :span="16">
                <el-form-item prop="materialName" :label="$t('huanbaoTable.FMD.itemName')">
                  <span>{{ temp.materialName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: -10px">
              <el-col :span="16">
                <el-form-item prop="materialWeight" :label="$t('huanbaoTable.FMD.materialName')">
                  <span>{{temp.materialWeight}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="completeFMD">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'ThirdReuse',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      oid: '',
      dialogVisible: false,
      temp: {},
      tableData: []
    }
  },
  methods: {
    setDialogFormVisible (item) {
      this.dialogVisible = item
    },
    completeFMD () {
      this.dialogVisible = false
    }
  },
  watch: {
    dialogVisible (val, oldVal) {
      this.$emit('childByValue', 'false')
    }
  }
}
</script>
<style>
  .boxtext {
    font-size: 15px;
  }
  .longcheer_hr{
    padding: 0;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #D13139;
    margin-bottom: 0px;
  }
  .longcheer_hr span{
    display: inline-block;
    background-image: url(../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    width: 200px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
