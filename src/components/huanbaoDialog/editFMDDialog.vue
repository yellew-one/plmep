/**
* 编辑FMD
*/
<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="dialog"
      :show-close="false"
      :close-on-press-escape="false"
      width="50%"
      top="15%">
      <div class="longcheer_hr" style="margin-top: -10px;">
        <span>{{$t('huanbaoTable.FMD.attribute')}}</span>
      </div>
      <el-row :gutter="20" v-if="isSub === 'NOSUB'">
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="180px"
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
      <el-row :gutter="20" v-if="isSub === 'SUB'">
        <el-col :span="24">
          <el-form size="mini" ref="dataForm" :model="temp" label-position="left" label-width="180px"
                   style=' margin-left:0px;'>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="subMaterialName" :label="$t('huanbaoTable.FMD.subMaterialName')">
                  <el-input v-model="temp.subMaterialName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="casNo" :label="$t('huanbaoTable.FMD.casNo')">
                  <el-input v-model="temp.casNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="substanceWeight" :label="$t('huanbaoTable.FMD.substanceWeight')">
                  <el-input v-model="temp.substanceWeight"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="contentRate" :label="$t('huanbaoTable.FMD.contentRate')">
                  <span>{{temp.contentRate}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="100" type="flex" class="row-bg" style="height: 40px;margin-left: 20px;margin-top: 10px">
              <el-col :span="16">
                <el-form-item prop="exemptions" :label="$t('huanbaoTable.FMD.exemptions')">
                  <el-input readonly="true" v-model="exemptions">
                    <el-button @click="escapeClick"  slot="append" icon="el-icon-search"></el-button>
                  </el-input>
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
        <el-button size="mini" @click="dialog = false">{{$t('huanbaoTable.escapeClause.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="completeFMD">{{$t('huanbaoTable.escapeClause.ensure')}}</el-button>
      </span>
    </el-dialog>
    <escape-clause  ref="myChild"
                    :acceptSonValue = 'acceptSonValue'></escape-clause>
  </div>
</template>
<script>
import EscapeClause from './escapeClause'
import { editMaterial, editSubstance } from '@/api/huanbaoAPI'
export default {
  components: {EscapeClause},
  name: 'EditFMDDialog',
  props: ['getDataList', 'updateFMDData'],
  mounted: function () {
  },
  data () {
    return {
      exemptions: '',
      isSub: '',
      oid: '',
      dialog: false,
      temp: {},
      tableData: []
    }
  },
  methods: {
    seteditFMDDialogFormVisible (row, oid, sub) {
      this.exemptions = ''
      this.temp = {}
      this.oid = ''
      this.isSub = ''
      this.dialog = true
      this.temp = Object.assign({}, row)
      this.oid = oid
      this.isSub = sub
      var that = this
      that.temp.exemptions.forEach(function (v) {
        that.exemptions += v.exemption + ','
      })
    },
    completeFMD () {
      var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
      if (this.isSub === 'NOSUB') {
        editMaterial(this.temp, types).then(r => {
          if (r.data.status === 'success') {
            this.dialog = false
            this.$props.getDataList(this.oid)
            if (r.data.hasOwnProperty('warning')) {
              this.$message.warning({
                dangerouslyUseHTMLString: true,
                message: r.data.warning
              })
            } else {
              this.$message.success({
                dangerouslyUseHTMLString: true,
                message: this.$t('success.update_success')
              })
            }
          } else {
            this.$message.error({
              message: r.data.info
            })
          }
        })
      } else {
        editSubstance(this.temp, types).then(r => {
          if (r.data.status === 'success') {
            this.dialog = false
            this.$props.getDataList(this.oid)
            if (r.data.hasOwnProperty('warning')) {
              this.$message.warning({
                dangerouslyUseHTMLString: true,
                message: r.data.warning
              })
            } else {
              this.$message.success({
                dangerouslyUseHTMLString: true,
                message: this.$t('success.update_success')
              })
            }
          } else {
            this.$message.error({
              message: r.data.info
            })
          }
        })
      }
    },
    escapeClick () {
      this.$refs.myChild.setDialogFormVisible()
    },
    // 接受子组件传值
    acceptSonValue (e) {
      this.temp.exemptions = e
      this.exemptions = e
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
