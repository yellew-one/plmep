<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <div class="card_title">{{model.materialEnvironmental}}</div>
        <el-card shadow="hover" class="card">
          <div class="longcheer_hr">
            <span>{{$t('huanbaoTable.detailTable.envProtectionStatus')}}</span>
          </div>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.materialNumber')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.materialNumber}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.materialName')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.materialName}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.modelName')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.modelName}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.supplierNumber')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.supplierNumber}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.requestProject')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.requestProject}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.manufacturer')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.manufacturer}}
            </el-col>
          </el-row>
          <el-row class="card_row">
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.envProtectionStatus')}}:
            </el-col>
            <el-col :span="7" class="card_value">&nbsp;
              {{model.envProtectionStatus}}
            </el-col>
            <el-col :span="4" class="card_lable">
              {{$t('huanbaoTable.detailTable.requestCause')}}:
            </el-col>
            <el-col :span="9" class="card_value">&nbsp;
              {{model.requestCause}}
            </el-col>
          </el-row>
          <div class="longcheer_hr" style="margin-top: 20px">
            <span>{{$t('huanbaoTable.detailTable.document')}}</span>
          </div>
          <el-tabs type="border-card">
            <el-tab-pane :label="$t('huanbaoTable.submitted.FMD')">
              <el-row>
                <el-button size="mini" type="primary" plain>{{$t('huanbaoTable.FMD.download')}}</el-button>
                <el-button size="mini" type="success" plain
                           @click="fmdUpload">{{$t('huanbaoTable.FMD.upload')}}</el-button>
                <el-button size="mini" v-if="this.state === 'INWORK' ||this.state === 'REWORK' "
                           :loading="$store.getters.loading"
                           @click="thirdreuseFMD"
                           type="info"
                           plain>{{$t('huanbaoTable.FMD.reuse')}}</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="fmdOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>审批意见</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataFMD"
                border
                size="mini"
                style="width: 100%;margin-top: 10px">
                <el-table-column prop="materialName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.materialName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="materialWeight" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.materialWeight')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialWeight}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="materialGroup" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.materialGroup')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialGroup}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="manufacturer" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.manufacturer')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.manufacturer}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="subMaterialName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.subMaterialName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.subMaterialName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="casNo" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.casNo')">
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.casNo}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="substanceWeight" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.substanceWeight')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.substanceWeight}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="contentRate" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.contentRate')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.contentRate}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="exemptions" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.exemptions')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.exemptions}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.state')">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.FMD.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="100"
                  v-if="state === 'INWORK' || state === 'REWORK' ">
                  <template slot-scope="scope">
                    <el-button @click="editFMD(scope.row)" type="text" size="small">{{$t('huanbaoTable.FMD.edit')}}</el-button>
                    <el-button @click="deleteFMD(scope.$index, tableDataFMD)" type="text" size="small">{{$t('huanbaoTable.FMD.delete')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.MSDS')">
              <el-row>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="msdsOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>审批意见</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataMSDS"
                border
                size="mini"
                style="width: 100%;margin-top: 10px">
                <el-table-column prop="materialName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.MSDS.materialName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="manufacturer" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.MSDS.manufacturer')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.manufacturer}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="ipForm" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.MSDS.ipForm')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.ipForm}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="msds" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.MSDS.msds')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.msds}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="patentCert" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.MSDS.patentCert')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.patentCert}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.MSDS.state')">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.MSDS.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="scope.row.state === 'INWORK' || scope.row.state === 'REWORK' " @click="editMSDS(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkMSDS(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.RoHS')">
              <el-row>
                <el-button size="mini" type="primary" plain>下载导入模板</el-button>
                <el-button size="mini" type="success" plain
                           v-if="this.state === 'INWORK' ||this.state === 'REWORK' ">上传环保数据</el-button>
                <el-button size="mini" type="warning" plain
                           v-if="this.state === 'INWORK' ||this.state === 'REWORK' "
                           @click="editRoHSReport">编辑RoHS总报告</el-button>
                <el-button @click="checkRoHSReport" size="mini" type="info" plain>查看RoHS总报告</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="rohsOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>审批意见</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataROHS"
                border
                size="mini"
                style="width: 100%;margin-top: 10px">
                <el-table-column prop="materialName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.materialName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="materialGroup" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.materialGroup')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialGroup}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="manufacturer" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.manufacturer')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.manufacturer}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="pb" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.pb')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.pb}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="cd" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.cd')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.cd}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="hg" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.hg')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.hg}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="cr6p" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.cr6p')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.cr6p}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="pbbs" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.pbbs')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.pbbs}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="pbdes" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.pbdes')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.pbdes}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="dehp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.dehp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.dehp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="bbp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.bbp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.bbp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="dbp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.dbp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.dbp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="dibp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.dibp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.dibp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="exemptions" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.exemptions')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.exemptions}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportName1" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.reportName1')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportName1}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="examUnit" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.examUnit')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.examUnit}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportDate" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.reportDate')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportDate}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportNumber" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.reportNumber')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportNumber}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.state')" >
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.ROHS.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="scope.row.state === 'INWORK' || scope.row.state === 'REWORK' " @click="editRoHS(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkRoHS(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.HF')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="this.state === 'INWORK' ||this.state === 'REWORK' "
                           @click="editRoHSReport">编辑HF总报告</el-button>
                <el-button @click="checkRoHSReport" size="mini" type="info" plain>查看HF总报告</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="hfOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>审批意见</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataHF"
                border
                size="mini"
                style="width: 100%;margin-top: 10px">
                <el-table-column prop="materialName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.materialName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="manufacturer" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.manufacturer')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.manufacturer}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="cl" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.cl')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.cl}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="br" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.br')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.br}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="clBr" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.clBr')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.clBr}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="fileRetardant" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.fileRetardant')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.fileRetardant}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportCount" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.reportCount')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportCount}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportDate" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.reportDate')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportDate}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportNumber" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.reportNumber')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportNumber}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.state')" width="180">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.HF.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="scope.row.state === 'INWORK' || scope.row.state === 'REWORK' " @click="editRoHS(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkRoHS(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.REACH')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="this.state === 'INWORK' ||this.state === 'REWORK' "
                           @click="editRoHSReport">编辑RoHS总报告</el-button>
                <el-button @click="checkRoHSReport" size="mini" type="info" plain>查看RoHS总报告</el-button>
                <el-button size="mini" type="primary" plain>编辑REACH总声明</el-button>
                <el-button size="mini" type="success" plain
                           v-if="this.state === 'INWORK' ||this.state === 'REWORK' ">查看REACH总声明</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="reachOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>审批意见</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataREACH"
                border
                size="mini"
                style="width: 100%;margin-top: 10px">
                <el-table-column prop="materialName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.materialName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="manufacturer" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.manufacturer')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.manufacturer}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportMaterialContained" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.reportMaterialContained')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportMaterialContained}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportMaterialReport" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.reportMaterialReport')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportMaterialReport}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportCount" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.reportCount')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportCount}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportDate" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.reportDate')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportDate}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportNumber" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.reportNumber')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportNumber}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.state')" width="180">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.MSDS.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="scope.row.state === 'INWORK' || scope.row.state === 'REWORK' " @click="editRoHS(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkRoHS(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.OTHER')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="this.state === 'INWORK' ||this.state === 'REWORK' "
                           @click="editRoHSReport">编辑其他总报告</el-button>
                <el-button @click="checkRoHSReport" size="mini" type="info" plain>查看其他总报告</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="otherOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>审批意见</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataOTHER"
                border
                size="mini"
                style="width: 100%;margin-top: 10px">
                <el-table-column prop="materialName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.materialName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="manufacturer" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.manufacturer')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.manufacturer}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="ni" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.ni')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.ni}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="pahs" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.pahs')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.pahs}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="didp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.didp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.didp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="dinp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.dinp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.dinp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="dnhp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.dnhp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.dnhp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="sccp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.sccp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.sccp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="be" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.be')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.be}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="sb" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.sb')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.sb}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportCount" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.reportCount')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportCount}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportDate" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.reportDate')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportDate}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="reportNumber" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.reportNumber')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.reportNumber}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER.state')" >
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.OTHER.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="scope.row.state === 'INWORK' || scope.row.state === 'REWORK' " @click="editRoHS(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkRoHS(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.OTHER2')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="this.state === 'INWORK' ||this.state === 'REWORK' "
                           @click="editRoHSReport">编辑客户特殊需求申报</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="other2Opinion">
                  <el-button slot="reference" size="mini" type="danger" plain>审批意见</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataOTHER2"
                border
                size="mini"
                style="width: 100%;margin-top: 10px">
                <el-table-column prop="fileName" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER2.fileName')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.fileName}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="fileType" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER2.fileType')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.fileType}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="modifyTimestamp" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER2.modifyTimestamp')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.modifyTimestamp}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.OTHER2.state')" width="180">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.OTHER2.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <el-row v-if="this.approvalType === 'YEAH'">
            <div class="longcheer_hr" style="margin-top: 20px">
              <span>审批</span>
            </div>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">{{$t('huanbaoTable.detailTable.remark')}} :</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12"><el-input  type="textarea" :rows="3"></el-input></el-col>
            </el-row>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">&nbsp;</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12" style="text-align: right">
                <el-radio v-model="radio" label="1">{{$t('huanbaoTable.detailTable.Supply')}}</el-radio>
                <el-radio v-model="radio" label="2">{{$t('huanbaoTable.detailTable.unSupply')}}</el-radio>
              </el-col>
            </el-row>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">&nbsp;</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12" style="text-align: right">
                <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="submit">{{$t('huanbaoTable.detailTable.complete')}}</el-button>
              </el-col>
            </el-row>
          </el-row>
          <div class="longcheer_hr" style="margin-top: 20px">
            <span>{{$t('huanbaoTable.detailTable.approval')}}</span>
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
          <edit-f-m-d-dialog  ref="myChild"
                              :updateFMDData = 'updateFMDData'></edit-f-m-d-dialog>
          <third-reuse ref="thirdReuse"
                       :acceptSonValueByThird = 'acceptSonValueByThird'></third-reuse>
          <edit-msds ref="editMsds"
                     :updateMSDSData = 'updateMSDSData'></edit-msds>
          <rohs-dialog ref="editRohs"
                       :updateRoHSData = 'updateRoHSData'></rohs-dialog>
          <general-report ref="editRohsReportDialog"></general-report>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { showEnvprotectionTask, selectFMD, selectMSDS, selectRoHS, selectHF, selectREACH, selectOTHER, selectOTHER2, envpDataCheck, processHistory, envpComments, completeEnvp } from '@/api/index'
import EditFMDDialog from '../../../components/huanbaoDialog/editFMDDialog'
import ThirdReuse from '../../../components/huanbaoDialog/thirdReuseFMD'
import EditMsds from '../../../components/huanbaoDialog/editMSDS'
import RohsDialog from '../../../components/huanbaoDialog/editRohs'
import GeneralReport from '../../../components/huanbaoDialog/generalReport'
export default {
  components: {
    GeneralReport,
    RohsDialog,
    EditMsds,
    ThirdReuse,
    EditFMDDialog},
  name: 'detailTask',
  data () {
    return {
      isShow: false,
      isSub: '',
      state: '',
      radio: '1',
      oid: '',
      activeName2: 'first',
      model: {
        version: '',
        materialNumber: '',
        materialName: '',
        modelName: '',
        supplierNumber: '',
        requestProject: '',
        manufacturer: '',
        envProtectionStatus: '',
        requestCause: '',
        number: '',
        name: '',
        state: ''
      },
      tableDataFMD: [{
        materialName: '',
        materialWeight: '',
        materialGroup: '',
        manufacturer: '',
        subMaterialName: '',
        casNo: '',
        substanceWeight: '',
        contentRate: '',
        exemptions: '',
        state: ''
      }],
      tableDataMSDS: [{
        materialName: '',
        manufacturer: '',
        ipForm: '',
        msds: '',
        patentCert: '',
        state: ''
      }],
      tableDataROHS: [{
        materialName: '',
        materialGroup: '',
        manufacturer: '',
        pb: '',
        cd: '',
        hg: '',
        cr6p: '',
        pbbs: '',
        pbdes: '',
        dehp: '',
        bbp: '',
        dbp: '',
        dibp: '',
        exemptions: '',
        reportName1: '',
        examUnit: '',
        reportDate: '',
        reportNumber: '',
        state: '',
        metalSum: ''
      }],
      tableDataHF: [{
        materialName: '',
        manufacturer: '',
        cl: '',
        br: '',
        clBr: '',
        fileRetardant: '',
        reportCount: '',
        reportDate: '',
        reportNumber: '',
        state: ''
      }],
      tableDataREACH: [{
        materialName: '原材料名称',
        manufacturer: '原材料制造商',
        reportMaterialContained: '是否有申报物资',
        reportMaterialReport: '申报物资报告',
        reportCount: 'REACH报告',
        reportDate: '报告日期',
        reportNumber: '报告编号',
        state: '状态'
      }],
      tableDataOTHER: [{
        materialName: '原材料名称',
        manufacturer: '原材料制造商',
        reportMaterialContained: '是否有申报物资',
        reportMaterialReport: '申报物资报告',
        reportCount: 'REACH报告',
        reportDate: '报告日期',
        reportNumber: '报告编号',
        state: '状态'
      }],
      tableDataOTHER2: [{
        fileName: '文件名',
        fileType: '资料类型',
        modifyTimestamp: '上次修改时间',
        state: '状态'
      }],
      approvalTable: [],
      fmdOpinion: '',
      msdsOpinion: '',
      rohsOpinion: '',
      hfOpinion: '',
      reachOpinion: '',
      otherOpinion: '',
      other2Opinion: '',
      approvalType: ''
    }
  },
  mounted: function () {
  },
  activated: function () {
    console.log('oid:  ', this.$route.params.oid)
    if (this.$route.params.oid) {
      localStorage.setItem('oid', this.$route.params.oid)
    }
    if (this.$route.params.state) {
      localStorage.setItem('state', this.$route.params.state)
    }
    if (this.$route.params.approvalType) {
      localStorage.setItem('approvalType', this.$route.params.approvalType)
    }
    this.oid = localStorage.getItem('oid')
    this.state = localStorage.getItem('state')
    this.approvalType = localStorage.getItem('approvalType')
    if (this.oid) {
      this.getDataList(this.oid)
    }
  },
  methods: {
    // 子组件调用
    acceptSonValueByEdit () {
      this.getDataList(this.oid)
    },
    getDataList (e) {
      showEnvprotectionTask(e).then(r => {
        console.log('DETAILTASKS', r)
        this.model = r.data[0]
        processHistory('envp', r.data[0].number).then(r => {
          console.log('processHistory', r)
          this.approvalTable = r.data
        })
        envpComments(r.data[0].number).then(r => {
          console.log('Comments', r)
          if (r.data.flag) {
            this.isShow = true
            this.fmdOpinion = r.data.fmdComment
            this.msdsOpinion = r.data.msdsComment
            this.rohsOpinion = r.data.rohsComment
            this.hfOpinion = r.data.hfComment
            this.reachOpinion = r.data.reachComment
            this.otherOpinion = r.data.otherComment
            this.other2Opinion = r.data.other2Comment
          } else {
            this.isShow = false
          }
        })
      })
      selectFMD(e).then(r => {
        console.log('FMD', r)
        this.tableDataFMD = r.data
      })
      selectMSDS(e).then(r => {
        console.log('MSDS', r)
        this.tableDataMSDS = r.data
      })
      selectRoHS(e).then(r => {
        console.log('RoHS', r)
        this.tableDataROHS = r.data
      })
      selectHF(e).then(r => {
        console.log('HF', r)
        this.tableDataHF = r.data
      })
      selectREACH(e).then(r => {
        console.log('REACH', r)
        this.tableDataREACH = r.data
      })
      selectOTHER(e).then(r => {
        console.log('OTHER', r)
        this.tableDataOTHER = r.data
      })
      selectOTHER2(e).then(r => {
        console.log('OTHER2', r)
        this.tableDataOTHER2 = r.data
      })
    },
    // FMD编辑
    editFMD (row) {
      if (row.subMaterialName) {
        this.isSub = 'SUB'
      } else {
        this.isSub = 'NOSUB'
      }
      this.$refs.myChild.setDialogFormVisible(row, this.oid, this.isSub)
    },
    // FMD删除
    deleteFMD (index, rows) {
      rows.splice(index, 1)
    },
    // 提交
    submit () {
      this.$store.commit('SET_LOADING', true)
      // 物料环保资料完整性校验
      envpDataCheck(this.model.number).then(r => {
        console.log('envpDataCheck', r)
        this.$notify.info({
          message: r.data.info,
          title: r.data.status,
          duration: 3 * 1000
        })
      })
      completeEnvp(this.oid).then(r => {
        console.log('completeSealedTask', r)
        this.$message.success({
          message: '这是一条成功的消息'
        })
      })
    },
    // FMD 第三方复用
    thirdreuseFMD () {
      this.$refs.thirdReuse.setDialogFormVisible(this.model.number)
    },
    // MSDS 编辑
    editMSDS (row) {
      this.$refs.editMsds.setDialogFormVisible(this.model.number, row, 'edit')
    },
    // msds 查看
    checkMSDS (row) {
      this.$refs.editMsds.setDialogFormVisible(this.model.number, row, 'check')
    },
    // 编辑rohs 总报告
    editRoHSReport () {
      this.$refs.editRohsReportDialog.setgeneralReportDialogisible('edit', 'RoHS总报告', this.oid, 'RoHS')
    },
    // 查看总报告
    checkRoHSReport () {
      this.$refs.editRohsReportDialog.setgeneralReportDialogisible('view', 'RoHS总报告', this.oid, 'RoHS')
    },
    // rohs 编辑
    editRoHS (row) {
      this.$refs.editRohs.setRohsDialogVisible('itemedit', row.rohsOid, this.oid)
    },
    // rohs 查看
    checkRoHS (row) {
      this.$refs.editRohs.setRohsDialogVisible('itemview', row.rohsOid, this.oid)
    },
    // fmd 下载
    fmdUpload () {},
    updateFMDData () {
      selectFMD(this.oid).then(r => {
        console.log('FMD', r)
        this.tableDataFMD = r.data
      })
    },
    updateMSDSData () {
      selectMSDS(this.oid).then(r => {
        console.log('MSDS', r)
        this.tableDataMSDS = r.data
      })
    },
    updateRoHSData () {
      selectRoHS(this.oid).then(r => {
        console.log('RoHS', r)
        this.tableDataROHS = r.data
      })
    },
    test () {
      var str1 = 'OR:ext.longcheer.envprotection.model.EnvprotectionAttachment:352396068'
      var str2 = 'OR:ext.longcheer.envprotection.model.EnvprotectionAttachment:352396068'
      if (str1 === str2) {
        alert(str1.length)
      } else {
        alert(false)
      }
      var s = []
      var a = [{id: '2'}, {id: '3'}, {id: '1'}, {id: '4'}]
      var b = [{id: '2'}, {id: '3'}, {id: '1'}]
      for (let i in a) {
        for (let j in b) {
          if (a[i].id === b[j].id) {
            a.splice(a[i], 1)
          }
        }
      }
      for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length; j++) {
          if (s[i].id === s[j].id) {
            s.splice(j, 1)
            j--
          }
        }
      }
      console.log('xoxo2', s)
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
    margin-left: 15px;
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
    margin-bottom: 0px;
  }
  .longcheer_hr span{
    display: inline-block;
    background-image: url(../../../assets/image/tab2.png);
    background-repeat: no-repeat;
    background-size: 95% 100%;
    width: 120px;
    padding: 5px 15px;
    height: 27px;
    color: #ffffff;
  }
</style>
