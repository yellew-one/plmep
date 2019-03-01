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
        <span>{{$t('huanbaoTable.FMD.attribute')}}</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="100px"
                   style=' margin-left:0px;'>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialName" :label="$t('huanbaoTable.FMD.materialName')">
                  <span>{{ temp.materialName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialWeight" :label="$t('huanbaoTable.FMD.materialWeight')">
                  <span>{{temp.materialWeight}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="materialGroup" :label="$t('huanbaoTable.FMD.materialGroup')">
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
                <el-form-item prop="manufacturer" :label="$t('huanbaoTable.FMD.manufacturer')">
                  <el-input v-model="temp.manufacturer"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="state" :label="$t('huanbaoTable.FMD.state')">
                  <span>{{$t('huanbaoTable.FMD.' + temp.state)}}</span>
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
// import {  } from '@/api/index'
export default {
  name: 'EditFMDDialog',
  props: ['acceptSonValueByEdit'],
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
    setDialogFormVisible (item, row, oid) {
      this.dialogVisible = item
      this.temp = row
      this.oid = oid
    },
    completeFMD () {
      this.dialogVisible = false
      this.$store.commit('SET_LOADING', true)
      setTimeout(() => {
        this.$store.commit('SET_LOADING', false)
      }, 1000)
      this.$props.acceptSonValueByEdit(this.oid)
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
    width: 120px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
