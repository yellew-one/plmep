<template>
    <div class="app-container">
      <el-row>
        <el-col :span="24">
          <div class="card_title">
            <el-row class="card_row">
              <el-col :span="20">
                {{model.mainDocInfo}}
              </el-col>
              <el-col :span="4">
                <el-tag  color="#ffff">{{$t(stateName)}}</el-tag>
              </el-col>
            </el-row>

          </div>
          <el-card shadow="hover" class="card">
            <div class="longcheer_hr">
              <span class="longcheer_hr_span">{{$t('fengyangTable.detail.title_attribute')}}</span>
              <div class="longcheer_hr_reight" v-if="state === 'true'">
                <el-button @click="editInfo" icon="el-icon-edit" size="small">{{$t('formButton.edit')}}</el-button>
              </div>
            </div>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.version')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.version}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.materialNumber')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.materialNumber}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.materialName')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.materialName}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_classification')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_classification}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_project')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_project}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_model_name')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_model_name}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_request_cause')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_request_cause}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_manufacturer')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_manufacturer}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_supplier')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_supplier}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_supplier_number')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_supplier_number}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_environmental_protection_status')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_environmental_protection_status}}
              </el-col>
              <el-col :span="4" class="card_lable">
                &nbsp;
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                &nbsp;
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                <span style="background-color: red;color: white;">{{$t('fengyangTable.detail.approveddate')}}:</span>
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                <span style="color: red">{{model.approveddate}}</span>
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_supplier_rank')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{$t('app_enum.lq_supplier_rank.' + model.lq_supplier_rank)}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_monomers_weight')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_monomers_weight}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_size')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_size}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_class_category')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{$t('app_enum.lqClassCategory.' + model.lq_class_category)}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_fiction_preston')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_fiction_preston}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_fiction_time')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_fiction_time}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_reviewer')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_reviewer}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_review_time')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_review_time}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_approve')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_approve}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_approve_time')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_approve_time}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_courier_number')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_courier_number}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_courier_number_time')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_courier_number_time}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_sender')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_sender}}
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_tel')}}:
              </el-col>
              <el-col :span="7" class="card_value">&nbsp;
                {{model.lq_tel}}
              </el-col>
              <el-col :span="4" class="card_lable">
                {{$t('fengyangTable.detail.lq_deadline_sign')}}:
              </el-col>
              <el-col :span="9" class="card_value">&nbsp;
                {{model.lq_deadline_sign}}
              </el-col>
            </el-row>
            <el-row class="card_row" style="margin-top: 30px">
              <el-col :span="11" class="card_lable">
               <a style="color: blue" @click="Acknowledgment">{{$t('supplement.fengyang.downExcel')}}</a>
              </el-col>
              <el-col :span="13" class="card_lable">

              </el-col>
            </el-row>
            <div class="longcheer_hr" style="margin-top: 20px">
              <span class="longcheer_hr_span">{{$t('fengyangTable.detail.title_Sealed_document')}}</span>
            </div>
            <el-row class="card_row" style="padding-left: 5px">
              <el-col :span="24" class="card_lable">
                <el-button-group v-if="state === 'true'">
                  <el-button size="mini" :loading="$store.getters.loading" @click="uploadSampDoc" icon="el-icon-share" >{{$t('fengyangTable.detail.add')}}</el-button>
                  <el-button size="mini" :loading="$store.getters.loading" @click="filesCreadClick" icon="el-icon-plus" >{{$t('fengyangTable.detail.create')}}</el-button>
                  <el-button size="mini" :loading="$store.getters.loading" @click="fileseditClick" icon="el-icon-edit" >{{$t('fengyangTable.detail.edit')}}</el-button>
                  <el-button size="mini" :loading="$store.getters.loading" @click="removeRelatedWLFYDocs" icon="el-icon-delete" >{{$t('fengyangTable.detail.remove')}}</el-button>
                </el-button-group>
                <div>
                <el-table
                  size="mini"
                  :data="filesList"
                  border
                  height="350px"
                  @selection-change="handleSelectionChange"
                  style="width: 100%">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <!--<el-table-column align="center" :show-overflow-tooltip="true"   prop="number"  :label="$t('TableTile.files.number')" width="180">-->
                    <!--<template-->
                      <!--slot-scope="scope">-->
                      <!--{{scope.row.number}}-->
                    <!--</template>-->
                  <!--</el-table-column>-->
                  <el-table-column v-if="false" align="center" :show-overflow-tooltip="true"   prop="version"  :label="$t('TableTile.files.version')" width="180">
                    <template
                      slot-scope="scope">
                      {{scope.row.version}}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="name"  :label="$t('TableTile.files.name')" width="220">
                    <template
                      slot-scope="scope">
                      {{scope.row.name}}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="status"  :label="$t('TableTile.files.status')" width="180">
                    <template
                      slot-scope="scope">
                      {{$t(scope.row.state)}}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="type3"  :label="$t('TableTile.files.type3')" width="180">
                    <template
                      slot-scope="scope">
                      {{$t('app_enum.lqThirdLevel.' + scope.row.lq_third_level)}}
                    </template>
                  </el-table-column>
                  <el-table-column align="center" :show-overflow-tooltip="true"   prop="approval"  :label="$t('TableTile.files.approval')" width="180">
                    <template
                      slot-scope="scope">
                      {{scope.row.assignment}}
                    </template>
                  </el-table-column>
                  <el-table-column align="center"  prop="attachment"  :label="$t('TableTile.files.attachment')" width="180">
                    <template
                      slot-scope="scope">
                      <el-popover
                        placement="top"
                        title="下载"
                        width="300"
                        trigger="hover"
                        Slot="">
                        <div style="margin-top: 5px" v-for="(item, index) in scope.row.attachment.split(';')" :key="index">
                          <a @click="attachmentClick(scope.row.number, item)" style="font-size: 12px;color: blue;font-weight: bold;">{{item}}</a>
                        </div>
                         <a  slot="reference" @click="attachmentClick2(scope.row.number, scope.row.attachment)" style="color: blue">{{scope.row.attachment | overflowTooltip }}</a>
                      </el-popover>
                    </template>
                  </el-table-column>
                </el-table>
                </div>
                <!--<el-button size="mini" @mousedown="dragEagle" title="拖动">x</el-button>-->
              </el-col>
            </el-row>
            <div v-if="state === 'true'" class="longcheer_hr" style="margin-top: 20px">
              <span class="longcheer_hr_span">{{$t('formButton.Approval')}}</span>
            </div>
            <el-row v-if="state === 'true'" class="card_row">
              <el-col span="4" style="text-align: right">{{$t('supplement.fengyang.remark')}}：</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col  span="12"><el-input  :disabled="state !== 'true'" v-model="model.comment" type="textarea" :rows="3"></el-input></el-col>
            </el-row>
            <el-row v-if="state === 'true'" class="card_row">
              <el-col span="4" style="text-align: right">&nbsp;</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12" style="text-align: right">
                <el-radio :disabled="state !== 'true'" v-model="radio" label="Supply(供货)">{{$t('fengyangTable.detail.Supply')}}</el-radio>
                <el-radio :disabled="state !== 'true'" v-model="radio" label="No supply(不供货)">{{$t('fengyangTable.detail.unSupply')}}</el-radio>
              </el-col>
            </el-row>
            <el-row v-if="state === 'true'" class="card_row">
              <el-col span="4" style="text-align: right">&nbsp;</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12" style="text-align: right">
                <el-button v-if="state === 'true'" :loading="$store.getters.loading" @click="submitAprive" size="mini" type="primary">{{$t('formButton.submit')}}</el-button>
              </el-col>
            </el-row>
            <div class="longcheer_hr" style="margin-top: 40px">
              <span class="longcheer_hr_span">{{$t('huanbaoTable.detailTable.approval')}}</span>
            </div>
            <el-row class="card_row">
              <el-col span="24">
                <el-table
                  :data="approvalTable"
                  border
                  size="mini"
                  style="width: 100%">
                  <el-table-column align="center" show-overflow-tooltip="true"  prop="status"  :label="$t('huanbaoTable.approval.state')" >
                    <template
                      slot-scope="scope">
                      <span>{{$t('huanbaoTable.approval.' + scope.row.status)}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" show-overflow-tooltip="true"  prop="activityName"  :label="$t('huanbaoTable.approval.activityName')" >
                    <template
                      slot-scope="scope">
                      <span>{{scope.row.activityName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" show-overflow-tooltip="true"  prop="roleName"  :label="$t('huanbaoTable.approval.roleName')" >
                    <template
                      slot-scope="scope">
                      <span>{{scope.row.roleName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" show-overflow-tooltip="true"  prop="ownerName"  :label="$t('huanbaoTable.approval.ownerName')">
                    <template
                      slot-scope="scope">
                      <span>{{scope.row.ownerName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" show-overflow-tooltip="true"  prop="vote"  :label="$t('huanbaoTable.approval.vote')" >
                    <template
                      slot-scope="scope">
                      <span>{{scope.row.vote}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" show-overflow-tooltip="true"  prop="comment"  :label="$t('huanbaoTable.approval.comment')" >
                    <template
                      slot-scope="scope">
                      <span>{{scope.row.comment}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" show-overflow-tooltip="true"  prop="finishTime"  :label="$t('huanbaoTable.approval.finishTime')" >
                    <template
                      slot-scope="scope">
                      <span>{{scope.row.finishTime}}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <sealeInfoEdit :restData="getDetailInfo"  ref="infoEdit"></sealeInfoEdit>
      <uploadSampleDoc :restData="updatedoc" ref="uploadSamDoc"></uploadSampleDoc>
      <updateSampleDoc :restData="updatedoc" ref="docUpdate"></updateSampleDoc>
    </div>
</template>
<script>
import { showTaskDetails, downloadAcknowledgment, attachmentLink, completeSealedTask, editSealedSampleDocInfo, processHistory, showRelatedWLFYDocs, removeRelatedWLFYDocs } from '@/api/index'
import sealeInfoEdit from '../../../components/SealedInfoEdit/index'
import uploadSampleDoc from '../../../components/UploadSampleDoc/index'
import updateSampleDoc from '../../../components/UploadSampleDoc/update'
export default {
  name: 'detailTask',
  mounted: function () {
    var tagsView = this.$store.state.tagsView.visitedViews
    this.nowTags = tagsView[tagsView.length - 1]
  },
  components: {
    sealeInfoEdit,
    uploadSampleDoc,
    updateSampleDoc
  },
  filters: {
    overflowTooltip: function (value) {
      if (!value) return ''
      if (value.length > 10) {
        return value.substring(0, 10) + '...'
      } else {
        return value
      }
    }
  },
  activated: function () {
    console.log('oid:  ', this.$route.params.oid)
    this.state = this.$route.params.state
    this.oid = this.$route.params.oid
    this.stateName = this.$route.params.stateName
    if (this.oid) {
      this.getDetailInfo(this.oid)
    }
  },
  methods: {
    Acknowledgment () {
      downloadAcknowledgment('MS' + this.model.materialNumber).then(r => {
        console.log(r)
        var mesg = this.$store.getters.guojihua === 'zh' ? r.data.zh : r.data.en
        if (r.data.state === 'failed') {
          this.$message({
            message: mesg,
            type: 'warning',
            duration: 5 * 1000
          })
        } else if (!r.data.flag || r.data.flag === true) {
          window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    },
    attachmentClick2 (number, data) {
      if (data && data.indexOf(';') === -1) {
        this.attachmentClick(number, data)
      }
    },
    attachmentClick (number, name) {
      attachmentLink(number, name).then(r => {
        window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
    },
    fileseditClick () {
      if (this.selectCount === 0) {
        this.$message({
          message: this.$t('error.please_selector'),
          type: 'warning',
          duration: 5 * 1000
        })
        return
      } else if (this.selectCount > 1) {
        this.$message({
          message: '当前选择数量过多',
          type: 'warning',
          duration: 5 * 1000
        })
        return
      }
      console.log('asas', this.checkedone)
      if (this.checkedone.state === 'state.INWORK' || this.checkedone.state === 'state.REWORK' || this.checkedone.state === 'state.CANCELLED') {
        this.$refs.docUpdate.openDialog(this.model.materialNumber)
        this.$refs.docUpdate.setModel(this.checkedone)
      } else {
        this.$message({
          message: this.$t('error.no_state'),
          type: 'warning',
          duration: 5 * 1000
        })
      }
    },
    filesCreadClick () {
      this.$refs.docUpdate.openDialog(this.model.materialNumber)
      this.$refs.docUpdate.setModel({ftype: 'create', oid: this.oid, materialNumber: this.model.materialNumber})
    },
    filesUploadClick () {
      this.$refs.fileUpload.openDialog()
      // http://172.16.9.170:8081/files/upLoad
      // http://172.17.1.125:8081/files/upLoad
      this.$refs.fileUpload.setAttribute('http://172.17.1.125:8081/files/upLoad', [], '', 'fileList', {number: this.model.materialNumber})
    },
    updatedoc (newValue) {
      if (newValue) {
        this.oid = newValue
        this.$route.params.oid = newValue
      }
      this.getDetailInfo(this.oid)
      this.showRelatedWLFYDocs()
    },
    showRelatedWLFYDocs () {
      showRelatedWLFYDocs('MS' + this.model.materialNumber).then(r => {
        this.filesList = r.data
      })
    },
    getDetailInfo (oid) {
      if (!oid) {
        oid = this.oid
      }
      showTaskDetails(oid).then(r => {
        this.model = r.data[0]
        this.model.oid = this.$route.params.oid
        this.getProcessHistory()
        this.showRelatedWLFYDocs(this.oid)
      })
    },
    getProcessHistory () {
      processHistory('sealed', this.model.materialNumber).then(r => {
        console.log(r)
        this.approvalTable = r.data
      })
    },
    editSealedSampleDocInfo (oid) {
      editSealedSampleDocInfo(oid).then()
    },
    editInfo () {
      this.$refs.infoEdit.openDialog(true, this.model)
    },
    uploadSampDoc () {
      this.$refs.uploadSamDoc.setDialogFormVisible(true, this.oid, this.model.materialNumber)
    },
    handleSelectionChange (val) {
      this.selectCount = val.length
      this.filesOids = ''
      if (val && val.length > 0) {
        var str = ''
        var index = val.length
        val.forEach(function (value, i) {
          str += value.oid
          if (index !== i + 1) {
            str += ','
          }
        })
        console.log('xx00', str)
        this.filesOids = str
        this.checkedone = val[0]
      }
    },
    removeRelatedWLFYDocs () {
      if (!this.filesOids && this.filesOids.length === 0) {
        this.$message({
          message: this.$t('error.please_selector'),
          type: 'warning',
          duration: 5 * 1000
        })
        return
      }
      this.$store.commit('SET_LOADING', true)
      removeRelatedWLFYDocs('MS' + this.model.materialNumber, this.filesOids).then(r => {
        console.log(r)
        var mesg = this.$store.getters.guojihua === 'zh' ? r.data.zh : r.data.en
        if (r.data.state === 'success') {
          this.$message({
            message: mesg,
            type: 'success',
            duration: 5 * 1000
          })
          // this.showRelatedWLFYDocs()
          this.updatedoc(r.data.oid)
        } else {
          this.$message({
            message: mesg,
            type: 'warning',
            duration: 5 * 1000
          })
        }
      })
    },
    submitAprive () {
      this.$store.commit('SET_LOADING', true)
      completeSealedTask('MS' + this.model.materialNumber, this.model.comment, this.radio).then(r => {
        console.log(r)
        var mesg = this.$store.getters.guojihua === 'zh' ? r.data.zh : r.data.en
        if (r.data.state !== 'failed') {
          this.$message({
            message: mesg,
            type: 'success',
            duration: 5 * 1000
          })
          this.closePage()
        } else {
          this.$message({
            message: mesg,
            dangerouslyUseHTMLString: true,
            type: 'warning',
            duration: 5 * 1000
          })
        }
        this.getDetailInfo(this.oid)
      })
    },
    closePage () {
      this.$router.replace({name: 'fMytasks'})
      this.closeSelectedTag(this.nowTags)
    },
    closeSelectedTag (view) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/home')
          }
        }
      })
    }
  },
  data () {
    return {
      nowTags: {},
      msg: 'Welcome to Your Vue.js App',
      model: {},
      oid: '',
      filesList: [],
      radio: 'Supply(供货)',
      state: '',
      selectCount: 0,
      filesOids: '',
      checkedone: {},
      stateName: '',
      approvalTable: []
    }
  }
}
</script>
<style scoped>
  .card_title{
    font-weight: bold;
    padding-bottom: 20px;
  }
  .card_row{
    margin-top: 15px;
    padding-left: 15px;
  }
  .card_lable{
    font-weight: bold;
    line-height: 1.1em;
    text-transform: none;
    color: #000;
    position: relative;
    left: 0;
    border: 0;
  }
  .card_value{

  }
  .card{
    font-family: 微软雅黑;
    font-size: 13px;
  }
  .longcheer_hr{
    padding: 0;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #D13139;
    margin-bottom: 10px;
  }
  .longcheer_hr_span{
    display: inline-block;
    background-image: url(../../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 98% 100%;
    /*padding: 5px 30px;*/
    height: 27px;
    padding: 5px 30px 0px 15px;
    width: auto;
    color: #ffffff;
  }
  .longcheer_hr_reight {
    position: relative;
    top: -8px;
    float: right;
    height: 27px;
  }
</style>
