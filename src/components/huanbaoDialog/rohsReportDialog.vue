/**
* Created by yaoyuan on 2019/3/8.
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="rohsReportDialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="15%"
      append-to-body>
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>属性</span>
      </div>
      <el-row :gutter="20" >
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="100px"
                   style=' margin-left:0px;'>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialName" label="报告日期">
                  <el-date-picker
                    v-model="rohsReportDateValue"
                    style="width: 100%"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialWeight" label="报告编号">
                  <el-input v-model="temp.materialGroup"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialGroup" label="检测单位">
                  <el-select v-model="temp.materialGroup" placeholder="" style="width: 100%">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="manufacturer" label="报告">
                  <el-button size="mini" type="primary" plain @click="choseFile" >选择文件</el-button>
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
        <el-button size="mini" @click="rohsReportDialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="completeFMD">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import {  } from '@/api/index'
export default {
  components: {},
  name: 'RohsReportDialog',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      rohsReportDateValue: '',
      rohsReportDialog: false,
      temp: {},
      tableData: [],
      options: [],
      type: ''
    }
  },
  methods: {
    setDialogFormVisible (e) {
      this.rohsReportDialog = true
    },
    choseFile () {
    }
  }
}
</script>
<style scoped>
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
    width: 120px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
