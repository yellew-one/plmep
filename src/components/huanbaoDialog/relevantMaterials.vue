/**
* Created by yaoyuan on 2019/3/1.
* Relevant Materials
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      width="50%"
      top="15%"
      append-to-body>
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>{{$t('huanbaoTable.FMD.Relatedmaterials')}}</span>
      </div>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="relevantTable"
            border
            size="mini"
            style="width: 100%">
            <el-table-column align="center" show-overflow-tooltip="true"  prop="material_number"  :label="$t('table.material_number')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.materialNum)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="material_name"  :label="$t('table.material_name')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.materialName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="model_specification"  :label="$t('table.model_specification')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.modelName}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>// import {  } from '@/api/index'
export default {
  name: 'RelevantMaterials',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      dialogVisible: false,
      relevantTable: [{
        materialName: '',
        materialNum: '',
        modelName: ''
      }]
    }
  },
  methods: {
    setDialogFormVisible (row) {
      this.dialogVisible = true
      this.relevantTable = row.relatedMaterial
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
    padding: 5px 30px 0px 15px;
    width: auto;
    height: 27px;
    color: #ffffff;
  }
</style>
