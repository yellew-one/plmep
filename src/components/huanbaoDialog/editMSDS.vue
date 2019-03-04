/**
* Created by yaoyuan on 2019/3/1.
* MSDS EDIT CHECK
*
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      width="60%">
      <!--// msds-->
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>原材料MSDS</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadMsds">上传新文件</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable"
            border
            size="mini"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="state"  label="文件名" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.state)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="linkName"  :label="$t('huanbaoTable.FMD.lastDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.linkName}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--// 专利证明-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>专利证明</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadMsds">上传新文件</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable"
            border
            size="mini"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="state"  label="文件名" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.state)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="linkName"  :label="$t('huanbaoTable.FMD.lastDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.linkName}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--// ip form-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>IP FORM</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadMsds">下载IP Form模板</el-button>
        <el-button size="mini" type="primary" plain @click="uploadMsds">上传新文件</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable"
            border
            size="mini"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="state"  label="文件名" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.state)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="linkName"  :label="$t('huanbaoTable.FMD.lastDate')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.linkName}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--// 属性-->
      <div class="longcheer_hr" style="margin-top: 10px;">
        <span>属性</span>
      </div>
      <el-row style="margin-top: 10px;margin-left: 20px">
        <el-button size="mini" type="primary" plain @click="uploadMsds">上传新文件</el-button>
        <el-button size="mini" type="danger"  plain @click="deleteMsds">移除</el-button>
      </el-row>
      <el-row class="card_row">
        <el-col span="24">
          <el-table
            :data="approvalTable"
            border
            size="mini"
            style="width: 100%">
            <el-table-column align="center" show-overflow-tooltip="true"  prop="state"  :label="$t('huanbaoTable.FMD.materialName')" >
              <template
                slot-scope="scope">
                <span>{{$t(scope.row.state)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="linkName"  :label="$t('huanbaoTable.FMD.manufacturer')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.linkName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" show-overflow-tooltip="true"  prop="linkName"  :label="$t('huanbaoTable.FMD.state')" >
              <template
                slot-scope="scope">
                <span>{{scope.row.linkName}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">{{$t('formButton.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="completeMSDS">{{$t('formButton.ensure')}}</el-button>
      </span>
      <files-upload ref="upload"></files-upload>
    </el-dialog>
  </div>
</template>
<script>
import FilesUpload from '../filesUpload/index'
export default {
  components: {FilesUpload},
  name: 'EditMsds',
  props: [''],
  mounted: function () {
  },
  data () {
    return {
      oid: '',
      dialogVisible: false,
      temp: {},
      tableData: [],
      approvalTable: [{
        state: 'State',
        linkName: 'Link Name',
        role: 'Role',
        approvers: 'Approvers',
        router: 'Router',
        remark: 'Remark',
        approvaltime: 'Approval time'
      }]
    }
  },
  methods: {
    setDialogFormVisible () {
      this.dialogVisible = true
    },
    completeMSDS () {
      this.dialogVisible = false
    },
    uploadMsds () {
      this.$refs.upload.openDialog()
      this.$refs.upload.setAttribute('http://plmtest.longcheer.com/Windchill/ptc1/FileController/upload', [], '原材料MSDS', 'uploadfile')
    },
    deleteMsds () {
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
