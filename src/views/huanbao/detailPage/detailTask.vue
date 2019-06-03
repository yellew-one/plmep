<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <div class="card_title">
            <el-row class="card_row">
              <el-col :span="20">
                {{model.materialEnvironmental}}
              </el-col>
              <el-col :span="4">
                <el-tag v-if="state !== ''" color="#ffff">{{$t('huanbaoTable.OTHER2.' + state)}}</el-tag>
              </el-col>
            </el-row>
        </div>
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
                <el-button size="mini" type="primary" plain @click="fmdDownload">{{$t('huanbaoTable.FMD.download')}}</el-button>
                <el-button size="mini" type="success" plain
                           @click="fmdUpload" v-if="FMDUPLOAD">{{$t('huanbaoTable.FMD.upload')}}</el-button>
                <el-button size="mini" v-if="fmdEditAble"
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
                  <el-button slot="reference" size="mini" type="danger" plain>{{$t('huanbaoTable.detailTable.approvalComments')}}</el-button>
                </el-popover>
              </el-row>
              <el-table
                :data="tableDataFMD"
                border
                :height="tableDataFMD.length === 0 ? '100' : '400'"
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
                <el-table-column prop="exemptions" align="center"  :label="$t('huanbaoTable.FMD.exemptions')" >
                  <template
                    slot-scope="scope">
                    <span v-for="(item, index) in scope.row.exemptions" v-bind:key="index">
                      <span v-if="item.exemptionsIsRed === 'true'" style="color: red">{{item.exemption + ','}}</span>
                      <span v-if="item.exemptionsIsRed === 'false'" >{{item.exemption + ','}}</span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.FMD.state')">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.FMD.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100"
                  v-if="fmdEditAble">
                  <template slot-scope="scope">
                    <el-button @click="editFMD(scope.row)" type="text" size="small">{{$t('huanbaoTable.FMD.edit')}}</el-button>
                    <el-button @click="deleteFMD(scope.row)" type="text" size="small">{{$t('huanbaoTable.FMD.delete')}}</el-button>
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
                  <el-button slot="reference" size="mini" type="danger" plain>{{$t('huanbaoTable.detailTable.approvalComments')}}</el-button>
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
                <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="msdsEditAble" @click="editMSDS(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkMSDS(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.RoHS')">
              <el-row>
                <el-button size="mini" type="primary" plain @click="downloadRoHS">{{$t('huanbaoTable.ROHS.download')}}</el-button>
                <el-button size="mini" type="success" plain
                           v-if="ROHSUPLOAD"
                           @click="ROHSUpload">{{$t('huanbaoTable.ROHS.Upload')}}</el-button>
                <el-button size="mini" type="warning" plain
                           v-if="rohsEditAble"
                           @click="editRoHSReport">{{$t('huanbaoTable.ROHS.editGeneralReport')}}</el-button>
                <el-button @click="checkRoHSReport" size="mini" type="info" plain>{{$t('huanbaoTable.ROHS.viewGeneralReport')}}</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="rohsOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>{{$t('huanbaoTable.detailTable.approvalComments')}}</el-button>
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
              <!--  <el-table-column prop="materialGroup" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.ROHS.materialGroup')" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row.materialGroup}}</span>
                  </template>
                </el-table-column>-->
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
                <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="rohsEditAble" @click="editRoHS(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkRoHS(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.HF')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="hfEditAble"
                           @click="editHFReport">{{$t('huanbaoTable.HF.editGeneralReport')}}</el-button>
                <el-button @click="checkHFReport" size="mini" type="info" plain>{{$t('huanbaoTable.HF.viewGeneralReport')}}</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="hfOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>{{$t('huanbaoTable.detailTable.approvalComments')}}</el-button>
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
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.HF.state')">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.HF.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="hfEditAble" @click="editHF(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkHF(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.REACH')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="reachEditAble"
                           @click="editREACHTotalReport">{{$t('huanbaoTable.REACH.editGeneralReport')}}</el-button>
                <el-button size="mini" type="info" plain @click="checkREACHTotalReport">{{$t('huanbaoTable.REACH.viewGeneralReport')}}</el-button>
                <el-button size="mini" type="primary" plain v-if="reachEditAble" @click="editGeneralStatement">{{$t('huanbaoTable.REACH.Editstatement')}}</el-button>
                <el-button size="mini" type="info" plain @click="checkGeneralStatement">{{$t('huanbaoTable.REACH.Viewstatement')}}</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="reachOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>{{$t('huanbaoTable.detailTable.approvalComments')}}</el-button>
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
                <el-table-column prop="state" align="center" show-overflow-tooltip="true" :label="$t('huanbaoTable.REACH.state')">
                  <template
                    slot-scope="scope">
                    <span>{{$t('huanbaoTable.MSDS.'+scope.row.state)}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="reachEditAble" @click="editREACH(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkREACH(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.OTHER')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="other1EditAble"
                           @click="editOtherReport">{{$t('huanbaoTable.OTHER.editGeneralReport')}}</el-button>
                <el-button @click="checkOtherReport" size="mini" type="info" plain>{{$t('huanbaoTable.OTHER.viewGeneralReport')}}</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="otherOpinion">
                  <el-button slot="reference" size="mini" type="danger" plain>{{$t('huanbaoTable.detailTable.approvalComments')}}</el-button>
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
                <el-table-column  align="center" v-for = "index in otherSubstances" :key="index" show-overflow-tooltip="true"  prop="extra"  :label="index.materialName" >
                  <template
                    slot-scope="scope">
                    <span>{{scope.row | substancesFilters(index.materialName)}}</span>
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
                <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
                  <template slot-scope="scope">
                    <el-button v-if="other1EditAble" @click="editOther(scope.row)" type="text" size="small">{{$t('formButton.edit')}}</el-button>
                    <el-button @click="checkOther(scope.row)" type="text" size="small">{{$t('formButton.check')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('huanbaoTable.submitted.OTHER2')">
              <el-row>
                <el-button size="mini" type="warning" plain
                           v-if="other2EditAble"
                           @click="editSpecialNeeds">{{$t('huanbaoTable.OTHER2.specialneeds')}}</el-button>
                <el-popover
                  v-if="isShow"
                  placement="top-start"
                  width="1000px"
                  trigger="hover"
                  :content="other2Opinion">
                  <el-button slot="reference" size="mini" type="danger" plain>{{$t('huanbaoTable.detailTable.approvalComments')}}</el-button>
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
                <el-table-column align="center" fixed="right" :label="$t('huanbaoTable.detailTable.operating')" width="100">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="downloadNeeds(scope.row)">{{$t('huanbaoTable.MSDS.download')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <el-row v-if="this.approvalType === 'YEAH'">
            <div class="longcheer_hr" style="margin-top: 20px">
              <span>{{$t('huanbaoTable.detailTable.approval')}}</span>
            </div>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">{{$t('huanbaoTable.detailTable.remark')}} :</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12"><el-input v-model="comment" type="textarea" :rows="3"></el-input></el-col>
            </el-row>
            <el-row class="card_row">
              <el-col span="4" style="text-align: right">&nbsp;</el-col>
              <el-col span="1" style="text-align: right">&nbsp;</el-col>
              <el-col span="12" style="text-align: right">
                <el-radio v-model="radio" label="供货">{{$t('huanbaoTable.detailTable.Supply')}}</el-radio>
                <el-radio v-model="radio" label="不供货">{{$t('huanbaoTable.detailTable.unSupply')}}</el-radio>
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
            <span>{{$t('huanbaoTable.detailTable.approvals')}}</span>
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
          <files-upload ref="fileUpload"
                        :returnFilePath="returnFilePath"></files-upload>
          <edit-f-m-d-dialog  ref="editFMDDialog"
                              :getDataList = 'getDataList'
                              :updateFMDData="updateFMDData"></edit-f-m-d-dialog>
          <third-reuse ref="thirdReuse"
                       :acceptSonValueByThird = 'acceptSonValueByThird'
                       :getDataList = 'getDataList'></third-reuse>
          <edit-msds ref="editMsds"
                     :updateMSDSData = 'updateMSDSData'></edit-msds>
          <rohs-dialog ref="editRohs"
                       :updateRoHSData = 'updateRoHSData'></rohs-dialog>
          <h-f-dialog ref="editHF"
                      :updateHFData = 'updateHFData'></h-f-dialog>
          <reach-dialog ref="editREACH"
                        :updateREACHData = 'updateREACHData'></reach-dialog>
          <other-dialog ref="editOther"
                        :updateOtherData = 'updateOtherData'></other-dialog>
          <special-needs ref="editSpecialNeeds"
                         :updateOther2Data = 'updateOther2Data'></special-needs>
          <general-report ref="generalReport"></general-report>
          <general-statement ref="generalStatement"></general-statement>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { showEnvprotectionTask, selectFMD, selectMSDS, selectRoHS, selectHF, selectREACH, selectOTHER, selectOTHER2, processHistory, envpComments } from '@/api/index'
import { executeUploadFMDData, executeUploadItemData, deleteFmdItem, downloadAttach, downloadEnvpTemplate, completeEnvp, checkData, itemEditAble, checkMaterialAttr } from '@/api/huanbaoAPI'
import EditFMDDialog from '../../../components/huanbaoDialog/editFMDDialog'
import ThirdReuse from '../../../components/huanbaoDialog/thirdReuseFMD'
import EditMsds from '../../../components/huanbaoDialog/editMSDS'
import RohsDialog from '../../../components/huanbaoDialog/editRohs'
import GeneralReport from '../../../components/huanbaoDialog/generalReport'
import FilesUpload from '../../../components/filesUpload/index'
import HFDialog from '../../../components/huanbaoDialog/editHF'
import GeneralStatement from '../../../components/huanbaoDialog/generalStatement'
import ReachDialog from '../../../components/huanbaoDialog/editREACH'
import SpecialNeeds from '../../../components/huanbaoDialog/specialNeeds'
import OtherDialog from '../../../components/huanbaoDialog/editOther'
export default {
  components: {
    OtherDialog,
    SpecialNeeds,
    ReachDialog,
    GeneralStatement,
    HFDialog,
    FilesUpload,
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
      radio: '供货',
      comment: '',
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
        exemptions: [],
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
        materialName: '',
        manufacturer: '',
        reportMaterialContained: '',
        reportMaterialReport: '',
        reportCount: '',
        reportDate: '',
        reportNumber: '',
        state: ''
      }],
      tableDataOTHER: [{
        materialName: '',
        manufacturer: '',
        reportMaterialContained: '',
        reportMaterialReport: '',
        reportCount: '',
        reportDate: '',
        reportNumber: '',
        state: ''
      }],
      tableDataOTHER2: [{
        fileName: '',
        fileType: '',
        modifyTimestamp: '',
        state: ''
      }],
      approvalTable: [],
      fmdOpinion: '',
      msdsOpinion: '',
      rohsOpinion: '',
      hfOpinion: '',
      reachOpinion: '',
      otherOpinion: '',
      other2Opinion: '',
      approvalType: '',
      envprotectionDocumentOid: '',
      otherSubstances: [],
      nowTags: {},
      fmdEditAble: false,
      hfEditAble: false,
      msdsEditAble: false,
      other1EditAble: false,
      other2EditAble: false,
      reachEditAble: false,
      rohsEditAble: false,
      FMDUPLOAD: false,
      ROHSUPLOAD: false
    }
  },
  filters: {
    substancesFilters: function (data, value) {
      return data[value]
    }
  },
  mounted: function () {
    var tagsView = this.$store.state.tagsView.visitedViews
    this.nowTags = tagsView[tagsView.length - 1]
  },
  activated: function () {
    console.log('oid:  ', this.$route.params.oid)
    this.oid = this.$route.params.oid
    if (this.$route.params.state !== '1') {
      this.state = this.$route.params.state
    }
    this.approvalType = this.$route.params.approvalType
    if (this.oid) {
      this.getDataList(this.oid)
      this.ifEditAble(this.oid)
    }
  },
  methods: {
    // 子组件调用
    acceptSonValueByEdit () {
      this.getDataList(this.oid)
    },
    ifEditAble (e) {
      if (this.approvalType === 'YEAH') {
        itemEditAble(e).then(r => {
          console.log('itemEditAble', r)
          if (r.data.status === 'success') {
            this.fmdEditAble = r.data.FMD
            this.hfEditAble = r.data.HF
            this.msdsEditAble = r.data.MSDS
            this.other1EditAble = r.data.OTHER1
            this.other2EditAble = r.data.OTHER2
            this.reachEditAble = r.data.REACH
            this.rohsEditAble = r.data.ROHS
            this.FMDUPLOAD = r.data.FMDUPLOAD
            this.ROHSUPLOAD = r.data.ROHSUPLOAD
          }
        })
      } else {
        this.fmdEditAble = false
        this.hfEditAble = false
        this.msdsEditAble = false
        this.other1EditAble = false
        this.other2EditAble = false
        this.reachEditAble = false
        this.rohsEditAble = false
        this.FMDUPLOAD = false
        this.ROHSUPLOAD = false
      }
    },
    getDataList (e) {
      showEnvprotectionTask(e).then(r => {
        console.log('DETAILTASKS', r)
        this.model = r.data[0]
        this.$store.commit('SET_HUANBAONUM', r.data[0].materialNumber)
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
        this.otherSubstances = []
        this.otherSubstances = r.data[0].extra
      })
      selectOTHER2(e).then(r => {
        console.log('OTHER2', r)
        this.tableDataOTHER2 = r.data.items
        this.envprotectionDocumentOid = r.data.envprotectionDocumentOid
      })
    },
    // FMD编辑
    editFMD (row) {
      if (row.subMaterialName) {
        this.isSub = 'SUB'
      } else {
        this.isSub = 'NOSUB'
      }
      this.$refs.editFMDDialog.seteditFMDDialogFormVisible(row, this.oid, this.isSub)
    },
    // FMD删除
    deleteFMD (row) {
      deleteFmdItem(row).then(r => {
        if (r.data.status === 'success') {
          this.getDataList(this.oid)
          this.$message.success({
            message: this.$t('success.remove_success')
          })
        } else {
          this.$message.error({
            message: r.data.warning
          })
        }
      })
      /* this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteFmdItem(row).then(r => {
          if (r.data.status === 'success') {
            this.getDataList(this.oid)
            this.$message.success({
              message: this.$t('success.remove_success')
            })
          } else {
            this.$message.error({
              message: r.data.warning
            })
          }
        })
      }).catch(() => {
      }) */
    },
    // 提交
    submit () {
      this.$store.commit('SET_LOADING', true)
      var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
      if (this.radio === '供货') {
        checkData('HSF' + this.model.materialNumber, types).then(r => {
          if (r.data.status === 'success') {
            checkMaterialAttr(this.oid, types).then(r => {
              if (r.data.status === 'success') {
                if (r.data.flag) {
                  completeEnvp(this.oid, this.comment, this.radio).then(r => {
                    console.log('completeSealedTask', r)
                    if (r.data.status === 'success') {
                      this.$message.success({
                        message: this.$t('success.finsh_task_success')
                      })
                      this.closePage()
                    }
                  })
                } else {
                  this.$message.warning({
                    dangerouslyUseHTMLString: true,
                    message: r.data.info
                  })
                  this.getDataList(this.oid)
                }
              } else {
                this.$message.warning({
                  dangerouslyUseHTMLString: true,
                  message: r.data.mes
                })
              }
            })
          } else {
            this.$message.error({
              dangerouslyUseHTMLString: true,
              message: r.data.info,
              duration: 2000
            })
          }
        })
      } else {
        completeEnvp(this.oid, this.comment, this.radio).then(r => {
          console.log('completeSealedTask', r)
          if (r.data.status === 'success') {
            this.$message.success({
              message: this.$t('success.finsh_task_success')
            })
            this.closePage()
          }
        })
      }
    },
    closePage () {
      this.$router.replace({name: 'submitted'})
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
    },
    // FMD 第三方复用
    thirdreuseFMD () {
      this.$refs.thirdReuse.setThirdReuseDialogFormVisible(this.model.number, this.oid)
    },
    // MSDS 编辑
    editMSDS (row) {
      this.$refs.editMsds.setMSDSDialogFormVisible(this.model.number, row, 'edit')
    },
    // msds 查看
    checkMSDS (row) {
      this.$refs.editMsds.setMSDSDialogFormVisible(this.model.number, row, 'check')
    },
    // 编辑rohs总报告
    editRoHSReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('edit', this.$t('huanbaoTable.ROHS.report'), this.oid, 'RoHS')
    },
    // 查看rohs总报告
    checkRoHSReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('view', this.$t('huanbaoTable.ROHS.report'), this.oid, 'RoHS')
    },
    // rohs 编辑
    editRoHS (row) {
      this.$refs.editRohs.setRohsDialogVisible('itemedit', row, this.oid)
    },
    // rohs 查看
    checkRoHS (row) {
      this.$refs.editRohs.setRohsDialogVisible('itemview', row, this.oid)
    },
    // 编辑 HF 总报告
    editHFReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('edit', this.$t('huanbaoTable.HF.report'), this.oid, 'HF')
    },
    // 查看 HF 总报告
    checkHFReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('view', this.$t('huanbaoTable.HF.report'), this.oid, 'HF')
    },
    // HF 编辑
    editHF (row) {
      this.$refs.editHF.setHFDialogVisible('itemedit', row, this.oid)
    },
    // HF 查看
    checkHF (row) {
      this.$refs.editHF.setHFDialogVisible('itemview', row, this.oid)
    },
    // 编辑 REACH 总报告
    editREACHTotalReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('edit', this.$t('huanbaoTable.REACH.REACH'), this.oid, 'REACH')
    },
    // 查看 REACH 总报告
    checkREACHTotalReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('view', this.$t('huanbaoTable.REACH.REACH'), this.oid, 'REACH')
    },
    // 编辑REACH总声明
    editGeneralStatement () {
      this.$refs.generalStatement.setgeneralStatementDialogisible('edit', this.oid)
    },
    // 查看REACH总声明
    checkGeneralStatement () {
      this.$refs.generalStatement.setgeneralStatementDialogisible('view', this.oid)
    },
    // REACH 编辑
    editREACH (row) {
      this.$refs.editREACH.setReachDialogVisible('itemedit', row, this.oid)
    },
    // REACH 编辑
    checkREACH (row) {
      this.$refs.editREACH.setReachDialogVisible('itemview', row, this.oid)
    },
    // 编辑 other 总报告
    editOtherReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('edit', this.$t('huanbaoTable.OTHER.OTHER'), this.oid, 'OTHER')
    },
    // 查看 other 总报告
    checkOtherReport () {
      this.$refs.generalReport.setgeneralReportDialogisible('view', this.$t('huanbaoTable.OTHER.OTHER'), this.oid, 'OTHER')
    },
    // Other 编辑
    editOther (row) {
      this.$refs.editOther.setOtherDialogVisible('itemedit', row, this.oid)
    },
    // Other 查看
    checkOther (row) {
      this.$refs.editOther.setOtherDialogVisible('itemview', row, this.oid)
    },
    // 编辑特殊需求
    editSpecialNeeds () {
      this.$refs.editSpecialNeeds.setspecialNeedsDialogDialogisible('edit', this.oid, this.envprotectionDocumentOid)
    },
    // fmd 上传数据
    fmdUpload () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], this.$t('huanbaoTable.detailTable.uploadData'), 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, 'FMD')
    },
    // rohs 上传数据
    ROHSUpload () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute(this.$store.state.filePath + '/files/upLoad', [], this.$t('huanbaoTable.detailTable.uploadData'), 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, 'RoHS')
    },
    // 更新 fmd 条目
    updateFMDData () {
      selectFMD(this.oid).then(r => {
        console.log('FMD', r)
        this.tableDataFMD = r.data
      })
    },
    // 更新 msds 条目
    updateMSDSData () {
      selectMSDS(this.oid).then(r => {
        console.log('MSDS', r)
        this.tableDataMSDS = r.data
      })
    },
    // 更新 rohs 条目
    updateRoHSData () {
      selectRoHS(this.oid).then(r => {
        console.log('RoHS', r)
        this.tableDataROHS = r.data
      })
    },
    // 更新 hf 条目
    updateHFData () {
      selectHF(this.oid).then(r => {
        console.log('HF', r)
        this.tableDataHF = r.data
      })
    },
    // 更新 reach 条目
    updateREACHData () {
      selectREACH(this.oid).then(r => {
        console.log('REACH', r)
        this.tableDataREACH = r.data
      })
    },
    // 更新 other 条目
    updateOtherData () {
      selectOTHER(this.oid).then(r => {
        console.log('OTHER', r)
        this.tableDataOTHER = r.data
        this.otherSubstances = []
        this.otherSubstances = r.data[0].extra
      })
    },
    // 更新 other2 条目
    updateOther2Data () {
      selectOTHER2(this.oid).then(r => {
        console.log('OTHER2', r)
        this.tableDataOTHER2 = r.data.items
        this.envprotectionDocumentOid = r.data.envprotectionDocumentOid
      })
    },
    // 文件路径传给后台
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      var types = this.$store.getters.guojihua === 'zh' ? 'Chinese' : 'English'
      if (type === 'FMD') {
        executeUploadFMDData(this.oid, e[0].path, types).then(r => {
          if (r.data.status === 'success') {
            this.getDataList(this.oid)
            this.ifEditAble(this.oid)
            var warn = ''
            if (r.data.warning) {
              warn = r.data.warning
              this.$message.warning({
                dangerouslyUseHTMLString: true,
                message: warn
              })
              if (r.data.warning2) {
                warn = r.data.warning + r.data.warning2
                this.$message.warning({
                  dangerouslyUseHTMLString: true,
                  message: warn
                })
              }
            } else {
              this.$message.success({
                dangerouslyUseHTMLString: true,
                message: this.$t('success.create_success')
              })
            }
          } else {
            this.$message.error({
              message: r.data.info
            })
          }
        })
      }
      if (type === 'RoHS') {
        executeUploadItemData(this.oid, e[0].path, types).then(r => {
          if (r.data.status === 'success') {
            this.getDataList(this.oid)
            this.ifEditAble(this.oid)
            this.$message.success({
              message: this.$t('success.create_success')
            })
          } else {
            this.$message.error({
              message: r.data.info
            })
          }
        })
      }
    },
    downloadNeeds (row) {
      downloadAttach(row.attachmentOid).then(r => {
        window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
      })
    },
    fmdDownload () {
      downloadEnvpTemplate('FMD').then(r => {
        if (r.data.flag) {
          window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    },
    downloadRoHS () {
      downloadEnvpTemplate('ROHS').then(r => {
        if (r.data.flag) {
          window.open(this.$store.state.filePath + '/files/getFile?route=' + encodeURIComponent(r.data.filePath) + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
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
    padding: 5px 30px 0px 15px;
    width: auto;
    height: 27px;
    color: #ffffff;
  }
</style>
