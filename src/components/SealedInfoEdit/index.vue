<template>
      <el-dialog top="30px"  :title="$t('m.SealedInfoEdit')" :visible.sync="dialogFormVisible" width="800px">
        <el-scrollbar style="height: 450px">
          <el-card>
            <el-form  status-icon="true" :rules="rules" :label-position="$store.getters.guojihua==='en'?'top':'left'" size="mini" ref="editform" :model="model" label-width="120px">
              <el-form-item :label="$t('fengyangTable.detail.materialName')" prop="materialName">
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
                    <el-select style="width: 100%" v-model="model.lq_supplier_rank" placeholder="">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col span="2">&nbsp;</el-col>
                <el-col span="11">
                  <el-form-item :label="$t('fengyangTable.detail.lq_class_category')" prop="lq_class_category">
                    <el-select style="width: 100%" v-model="model.lq_class_category" placeholder="">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
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
                    <el-date-picker value-format="yyyy/MM/dd"  v-model="model.lq_fiction_time"></el-date-picker>
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
                    <el-date-picker value-format="yyyy/MM/dd"  v-model="model.lq_review_time"></el-date-picker>
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
                    <el-date-picker value-format="yyyy/MM/dd"  v-model="model.lq_approve_time"></el-date-picker>
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
                    <el-date-picker value-format="yyyy/MM/dd"  v-model="model.lq_courier_number_time"></el-date-picker>
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
              <!--<el-form-item :label="$t('fengyangTable.detail.lq_desc')" prop="lq_desc">-->
                <!--<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"  v-model="model.lq_desc"></el-input>-->
              <!--</el-form-item>-->
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
import { lqClassCategory, lqSupplierRank, editSealedDocInfo } from '@/api/index'
export default {
  name: 'sealeInfoEdit',
  mounted: function () {
  },
  props: ['restData'],
  methods: {
    openDialog (type, data) {
      this.dialogFormVisible = type
      if (data) {
        this.model = Object.assign({}, data)
        this.getlqClassCategory()
        this.getlqSupplierRank()
        this.$refs['editform'].clearValidate()
      }
    },
    getlqClassCategory () {
      var that = this
      lqClassCategory().then(r => {
        console.log(r)
        var sz = []
        r.data.forEach(function (value, index) {
          console.log('foreach:', value)
          for (var key in value) {
            sz.push({
              value: key,
              label: that.$t('app_enum.lqClassCategory.' + key)
            })
          }
        })
        this.options = sz
      })
    },
    getlqSupplierRank () {
      var that = this
      lqSupplierRank().then(r => {
        console.log(r)
        var sz = []
        r.data.forEach(function (value, index) {
          console.log('foreach:', value)
          for (var key in value) {
            sz.push({
              value: key,
              label: that.$t('app_enum.lq_supplier_rank.' + key)
            })
          }
        })
        this.options2 = sz
      })
    },
    submit () {
      this.$refs['editform'].validate((valid) => {
        if (valid) {
          var temp = {}
          temp.lq_size = this.model.lq_size
          temp.lq_monomers_weight = this.model.lq_monomers_weight
          temp.lq_supplier_rank = this.model.lq_supplier_rank
          temp.lq_class_category = this.model.lq_class_category
          temp.lq_fiction_preston = this.model.lq_fiction_preston
          temp.lq_fiction_time = this.model.lq_fiction_time
          temp.lq_reviewer = this.model.lq_reviewer
          temp.lq_review_time = this.model.lq_review_time
          temp.lq_approve = this.model.lq_approve
          temp.lq_approve_time = this.model.lq_approve_time
          temp.lq_courier_number = this.model.lq_courier_number
          temp.lq_courier_number_time = this.model.lq_courier_number_time
          temp.lq_sender = this.model.lq_sender
          temp.lq_tel = this.model.lq_tel
          temp.lq_desc = this.model.lq_desc
          console.log('this.model------------>', this.model)
          this.$store.commit('SET_LOADING', true)
          editSealedDocInfo(temp, this.model.oid).then(r => {
            console.log('r->', r)
            var mesg = this.$store.getters.guojihua === 'zh' ? r.data.zh : r.data.en
            if (r.data.state === 'success') {
              this.dialogFormVisible = false
              this.$props.restData()
              this.$message({
                message: mesg,
                type: 'success',
                duration: 5 * 1000
              })
            } else {
              this.$message({
                message: mesg,
                type: 'error',
                duration: 5 * 1000
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      rules: {
        materialName: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_supplier_rank: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_class_category: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_size: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_monomers_weight: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_fiction_preston: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_fiction_time: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_approve: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_approve_time: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_courier_number: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_courier_number_time: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_sender: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_reviewer: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_review_time: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ],
        lq_tel: [
          { required: true, message: this.$t('error.required'), trigger: 'blur' }
        ]
      },
      model: {lq_class_category: '', lq_supplier_rank: ''},
      options: [],
      options2: []
    }
  }
}
</script>
