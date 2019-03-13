<template>
  <el-dialog top="30px"  title="" :visible.sync="updatedialogFlag" width="800px">
    <el-row>
      <el-col span="24">
        <div style="margin-top: 10px;">
          <el-form size="mini" ref="form" :model="model" :label-position="$store.getters.guojihua==='en'?'top':'left'"  label-width="80px">
            <div class="longcheer_hr">
              <span class="longcheer_hr_span">{{$t('fengyangTable.detail.title_attribute')}}</span>
            </div>
            <el-row style="padding-left: 10px">
              <el-col span=" 10">
                <el-form-item :label="$t('TableTile.files.number')" prop="number">
                  <el-input disabled="true" v-model="model.number"></el-input>
                </el-form-item>
              </el-col>
              <el-col span=" 10">&nbsp;</el-col>
            </el-row>
            <el-row style="padding-left: 10px">
              <el-col span=" 10">
                <el-form-item :label="$t('TableTile.files.name')" prop="name">
                  <el-input :disabled="true" v-model="model.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row style="padding-left: 10px">
              <el-col span="12">
                <el-form-item :label="$t('TableTile.files.explain')" prop="explain">
                  <el-input  type="textarea" :disabled="disableFlag" v-model="model.explain"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="longcheer_hr">
              <span class="longcheer_hr_span">{{$t('TableTile.files.business')}}</span>
            </div>
            <el-row style="padding-left: 10px">
              <el-col span=" 10">
                <el-form-item :label="$t('fengyangTable.seacher.type3')" prop="explain">
                  <el-select style="width: 100%" v-model="model.lq_third_level" placeholder="">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select></el-form-item>
              </el-col>
            </el-row>
            <el-row style="padding-left: 10px">
              <el-col span=" 10">
                <el-form-item label="模板下载" prop="explain">
                  【<a style="color: blue">点击下载模板</a>】
                </el-form-item>
              </el-col>
            </el-row>
            <div class="longcheer_hr">
              <span class="longcheer_hr_span">{{$t('TableTile.files.Enclosure')}}</span>
            </div>
            <el-row style="padding-left: 10px">
              <el-col span="24">
                <el-button-group>
                  <el-button size="mini" :loading="$store.getters.loading" icon="el-icon-plus" @click="filesUploadClick">选取文件</el-button>
                  <el-button size="mini" :loading="$store.getters.loading" icon="el-icon-delete" @click="removeRelatedWLFYDocs">{{$t('fengyangTable.detail.remove')}}</el-button>
                  <el-table
                    size="mini"
                    :data="filesList"
                    border
                    height="200px"
                    @selection-change="handleSelectionChange"
                    style="width: 100%">
                    <el-table-column
                      type="selection"
                      width="55">
                    </el-table-column>
                    <el-table-column   align="center" :show-overflow-tooltip="true"   prop="number"  label="标签或文件名" width="350">
                      <template
                        slot-scope="scope">
                        {{$t(scope.row.name)}}
                      </template>
                    </el-table-column>
                   <el-table-column align="center" :show-overflow-tooltip="true"   prop="version"  label="附件说明" width="180">
                      <template
                        slot-scope="scope">
                        {{$t(scope.row.desc)}}
                      </template>
                    </el-table-column>
                  </el-table>
                </el-button-group>
              </el-col>
            </el-row>
            <div style="text-align: right">
              <el-button  size="mini" @click="updatedialogFlag = false">{{$t('formButton.cancel')}}</el-button>
              <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="submit">{{$t('formButton.submit')}}</el-button>
              </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <filesUpload :returnFilePath="returnFilePath" ref="fup"></filesUpload>
  </el-dialog>
</template>
<script>
import { lqThirdLevel, editWLFYDoc, createWLFYDoc, removeAttachment } from '@/api/index'
import filesUpload from '../../components/filesUpload/index'
export default {
  name: 'update',
  props: ['restData'],
  mounted: function () {
    this.getlqThirdLevel()
  },
  components: {
    filesUpload
  },
  methods: {
    filesUploadClick () {
      this.$refs.fup.openDialog()
      // http://172.17.122.121:8081/files/upLoad
      // http://172.17.1.125:8081/files/upLoad
      // http://172.16.9.169:8080/files/upLoad
      this.$refs.fup.setAttribute('http://172.16.9.169:8080/files/upLoad', [], '', 'fileList', {number: this.materialNumber, userName: this.$store.getters.userInfo.username})
    },
    returnFilePath (data) {
      console.log('xxoo', data)
      var that = this
      data.forEach(function (value, index) {
        that.filePath += value.response.data[0] + ';'
        that.filesList.push({name: value.name, url: '', desc: '', ftype: 'new'})
      })
      this.$refs.fup.closeDialog()
    },
    setModel (data) {
      this.model = Object.assign(data)
      this.loadingFileList()
      console.log('xxoo', this.model)
    },
    removeRelatedWLFYDocs () {
      var that = this
      if (this.selectionData.length > 0) {
        var sz = this.filesList
        this.selectionData.forEach(function (value, index) {
          if (value.ftype === 'oid') {
            removeAttachment(that.model.number, value.name.split('.')[0]).then(r => {
              console.log(r)
              if (r.data.mes.indexOf('成功') !== -1) {
                that.$message({
                  message: that.$t('success.remove_success') + ':' + value.name,
                  type: 'success',
                  duration: 5 * 1000
                })
                sz.splice(sz.indexOf(value), 1)
              } else {
                that.$message({
                  message: r.data.mes,
                  type: 'warning',
                  duration: 5 * 1000
                })
              }
            })
          } else {
            that.$message({
              message: '文件' + value.name + '未上传至服务器,无需删除.',
              type: 'warning',
              duration: 5 * 1000
            })
          }
        })
        this.filesList = sz
        this.$props.restData()
      } else {
        this.$message({
          message: this.$t('error.please_selector'),
          type: 'warning',
          duration: 5 * 1000
        })
      }
    },
    loadingFileList () {
      var sz = []
      this.filesList = []
      if (this.model.attachment && this.model.attachment !== '无附件') {
        var list = this.model.attachment.split(';')
        list.forEach(function (value, index) {
          sz.push({name: value, url: '', desc: '', ftype: 'oid'})
        })
        this.filesList = sz
      }
    },
    openDialog (materialNumber) { // 打开弹窗
      this.updatedialogFlag = true
      this.materialNumber = materialNumber
    },
    handleSelectionChange (data) {
      if (data) {
        this.selectionData = data
      }
    },
    submit () { // 提交
      this.$store.commit('SET_LOADING', true)
      if (this.model.ftype && this.model.ftype === 'create') {
        this.oncreateWLFYDoc()
      } else {
        this.onEditWLFYDoc()
      }
    },
    onEditWLFYDoc () {
      editWLFYDoc(this.model.number, this.filePath, this.model.lq_third_level, this.model.explain).then(r => {
        console.log(r)
        if (r.data.mes.indexOf('成功') !== -1) {
          this.$message({
            message: this.$t('success.update_success'),
            type: 'success',
            duration: 5 * 1000
          })
          this.$props.restData()
          this.updatedialogFlag = false
        } else {
          this.$message({
            message: r.data.mes,
            type: 'warning',
            duration: 5 * 1000
          })
        }
      })
    },
    oncreateWLFYDoc () {
      createWLFYDoc(this.model.oid, this.model.lq_third_level, this.model.explain, this.filePath).then(r => {
        console.log(r)
        if (r.data.mes.indexOf('成功') !== -1) {
          this.$message({
            message: this.$t('success.update_success'),
            type: 'success',
            duration: 5 * 1000
          })
          this.$props.restData()
          this.updatedialogFlag = false
        } else {
          this.$message({
            message: r.data.mes,
            type: 'warning',
            duration: 5 * 1000
          })
        }
      })
    },
    getlqThirdLevel () {
      var that = this
      lqThirdLevel().then(r => {
        console.log(r)
        var sz = [{value: '', lable: ''}]
        r.data.forEach(function (value, index) {
          console.log('foreach:', value)
          for (var key in value) {
            sz.push({
              value: key,
              label: that.$t('app_enum.lqThirdLevel.' + key)
            })
          }
        })
        this.options2 = sz
      })
    }
  },
  data () {
    return {
      updatedialogFlag: false,
      model: {},
      disableFlag: false,
      options2: [],
      filesList: [],
      materialNumber: '',
      filePath: '',
      selectionData: []
    }
  }
}
</script>
<style>
  .longcheer_hr{
    padding: 0;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #D13139;
    margin-bottom: 10px;
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
</style>
