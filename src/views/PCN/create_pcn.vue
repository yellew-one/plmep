<template>
    <div class="app-container">
      <el-card shadow="hover" class="card">
      <div class="longcheer_hr" style="margin-left: 20px">
        <span class="longcheer_hr_span">{{$t('pcn.title.information')}}</span>
      </div>
      <el-row style="margin-top: 20px;margin-left: 20px">
        <el-col :span="24">
          <el-form ref="form" label-position="left" size="mini" :model="tmp" label-width="140px">
            <el-row style="margin-top: 20px;margin-left: 20px">
              <el-col :span="10">
                <el-form-item :label="$t('pcn.form.ChangeType')">
                  <el-select style="width: 100%" v-model="tmp.changeType" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="$t('pcn.form.Name')">
                  <el-input v-model="tmp.name"></el-input>
                </el-form-item>
                <el-form-item :label="$t('pcn.form.project')">
                  <el-input v-model="tmp.project"></el-input>
                </el-form-item>
                <el-form-item :label="$t('pcn.form.ResourceEngineer')">
                  <el-input v-model="tmp.ResourceEngineer" disabled="true">
                    <el-button @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </el-form-item>
                <el-form-item :label="$t('pcn.form.RequireCompletionTime')">
                  <el-date-picker
                    style="width: 100%"
                    v-model="tmp.requireCompletionTime"
                    type="date"
                    placeholder="">
                  </el-date-picker>
                </el-form-item>
                <el-form-item :label="$t('pcn.form.DetailedDescription')">
                  <el-input type="textarea" v-model="tmp.DetailedDescription"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="longcheer_hr">
              <span class="longcheer_hr_span">文件</span>
            </div>
            <el-button-group style="margin-top: 10px">
              <el-button size="mini" :loading="$store.getters.loading" icon="el-icon-plus" @click="filesUploadClick">上传文件</el-button>
              <!--<el-button size="mini" :loading="$store.getters.loading" icon="el-icon-delete" @click="removeRelatedWLFYDocs">{{$t('fengyangTable.detail.remove')}}</el-button>-->
              <el-table
                size="mini"
                :data="filesList"
                border
                ref="multipleTable"
                height="200px"
                @selection-change="handleSelectionChange"
                style="width: 100%">
                <el-table-column
                  :selectable="changeFlagHandle"
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column   align="center" :show-overflow-tooltip="true"   prop="number"  label="标签或文件名" width="650">
                  <template
                    slot-scope="scope">
                    {{$t(scope.row.name)}}
                  </template>
                </el-table-column>
                <!--<el-table-column align="center" :show-overflow-tooltip="true"   prop="version"  label="附件说明" width="180">-->
                <!--<template-->
                <!--slot-scope="scope">-->
                <!--{{$t(scope.row.desc)}}-->
                <!--</template>-->
                <!--</el-table-column>-->
              </el-table>
            </el-button-group>
            <div style="text-align: right">
              <el-button size="mini" :loading="$store.getters.loading" type="primary" @click="onSubmit">立即创建</el-button>
              <el-button size="mini">取消</el-button>
            </div>
          </el-form>
        </el-col>
      </el-row>
      </el-card>
      <ResourceEngineer ref="dialogRef" :restData="restData"></ResourceEngineer>
      <filesUpload :returnFilePath="returnFilePath" ref="fup"></filesUpload>
    </div>
</template>
<script>
import ResourceEngineer from '@/components/PcnDialog/ResourceEngineer'
import filesUpload from '../../components/filesUpload/index'
export default {
  name: 'createPcn',
  components: {
    ResourceEngineer,
    filesUpload
  },
  mounted: function () {
  },
  methods: {
    handleSelectionChange (data) {
      if (data) {
        var path = ''
        this.selectionData = data
        this.selectionData.forEach(function (value, index) {
          if (value.filepath && value.filepath !== 'undefined') {
            path = path + value.filepath + ';'
          }
        })
        this.filePath = path
      }
    },
    filesUploadClick () {
      this.$refs.fup.openDialog()
      this.$refs.fup.setAttribute('http://172.16.9.169:8080/files/upLoad', [], '', 'fileList', {number: this.materialNumber, userName: this.$store.getters.userInfo.username})
    },
    escapeClick: function () {
      this.$refs.dialogRef.openDialog()
    },
    restData: function (value) {
      console.log(value)
    },
    returnFilePath (data) {
      console.log('xxoo', data)
      var that = this
      data.forEach(function (value, index) {
        // that.filePath += value.response.data[0] + ';'
        var path = value.response.data[0]
        that.submitPath = that.submitPath + path + ';'
        that.filesList.push({name: value.name, filepath: path, url: '', desc: '', ftype: 'new'})
      })
      this.$refs.fup.closeDialog()
    }
  },
  data () {
    return {
      tmp: {changeType: ''},
      submitPath: '',
      filesList: [],
      options: [{
        value: '',
        label: ''
      }, {
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }]
    }
  }
}
</script>
<style scoped>
  .longcheer_hr{
    padding: 0;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #D13139;
    margin-bottom: 0px;
  }
  .longcheer_hr_span{
    display: inline-block;
    background-image: url(../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    width: 120px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
  .card{
    font-family: 微软雅黑;
    font-size: 13px;
  }
</style>
