<template>
      <el-dialog top="30px"  :title="$t('m.SealedInfoEdit')" :visible.sync="dialogFormVisible" width="750px">
        <el-scrollbar style="height: 450px">
          <el-card>
            <el-form  status-icon="true" :rules="rules" :label-position="$store.getters.guojihua==='en'?'top':'left'" size="mini" ref="editUserform" :model="model" label-width="100px">
              <el-form-item :label="$t('fengyangTable.detail.materialName')" prop="name">
                <el-input :disabled="true"  v-model="model.materialName"></el-input>
              </el-form-item>
              <el-row>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_size')" prop="lq_size">
                    <el-input   v-model="model.lq_size"></el-input>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_monomers_weight')" prop="lq_monomers_weight">
                    <el-input   v-model="model.lq_monomers_weight"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_supplier_rank')" prop="lq_supplier_rank">
                    <el-input   v-model="model.lq_supplier_rank"></el-input>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_class_category')" prop="lq_class_category">
                    <el-input   v-model="model.lq_class_category"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_fiction_preston')" prop="lq_fiction_preston">
                    <el-input   v-model="model.lq_fiction_preston"></el-input>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_fiction_time')" prop="lq_fiction_time">
                    <el-date-picker   v-model="model.lq_fiction_time"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_reviewer')" prop="lq_reviewer">
                    <el-input   v-model="model.lq_reviewer"></el-input>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_review_time')" prop="lq_review_time">
                    <el-date-picker   v-model="model.lq_review_time"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_approve')" prop="lq_approve">
                    <el-input   v-model="model.lq_approve"></el-input>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_approve_time')" prop="lq_approve_time">
                    <el-date-picker   v-model="model.lq_approve_time"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_courier_number')" prop="lq_courier_number">
                    <el-input   v-model="model.lq_courier_number"></el-input>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_courier_number_time')" prop="lq_courier_number_time">
                    <el-date-picker   v-model="model.lq_courier_number_time"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_sender')" prop="lq_sender">
                    <el-input   v-model="model.lq_sender"></el-input>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_tel')" prop="lq_tel">
                    <el-input   v-model="model.lq_tel"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item :label="$t('fengyangTable.detail.lq_desc')" prop="lq_tel">
                <el-input   v-model="model.lq_tel"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-scrollbar>
        <div style="margin-top: 10px;text-align:right">
          <el-button  size="mini" @click="dialogFormVisible = false">{{$t('formButton.cancel')}}</el-button>
          <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="submit">{{$t('formButton.submit')}}</el-button>
        </div>
      </el-dialog>
</template>
<script>
import { lqClassCategory, lqSupplierRank } from '@/api/index'
export default {
  name: 'sealeInfoEdit',
  mounted: function () {
  },
  methods: {
    openDialog (type, data) {
      this.dialogFormVisible = type
      if (data) {
        this.model = Object.assign({}, data)
        this.getlqClassCategory()
        this.getlqSupplierRank()
      }
    },
    getlqClassCategory () {
      lqClassCategory().then(r => {
        console.log(r)
      })
    },
    getlqSupplierRank () {
      lqSupplierRank().then(r => {
        console.log(r)
      })
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      rules: [],
      model: {}
    }
  }
}
</script>
