<template>
    <div class="app-container">
      <el-card shadow="hover" class="card">
      <div class="longcheer_hr">
        <span class="longcheer_hr_span">{{$t('pcn.title.information')}}</span>
      </div>
      <el-row style="margin-top: 20px;margin-left: 20px">
        <el-col :span="12">
          <el-form ref="form" label-position="left" size="mini" :model="tmp" label-width="120px">
            <el-form-item :label="$t('pcn.form.ChangeType')">
              <el-select v-model="tmp.changeType" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('pcn.form.RequireCompletionTime')">
              <el-date-picker
                v-model="tmp.requireCompletionTime"
                type="date"
                placeholder="">
              </el-date-picker>
            </el-form-item>
            <el-form-item :label="$t('pcn.form.Name')">
              <el-input v-model="tmp.name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('pcn.form.project')">
              <el-input v-model="tmp.project"></el-input>
            </el-form-item>
            <el-form-item :label="$t('pcn.form.DetailedDescription')">
              <el-input type="textarea" v-model="tmp.DetailedDescription"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      </el-card>
    </div>
</template>
<script>
export default {
  name: 'createPcn',
  mounted: function () {
  },
  methods: {},
  data () {
    return {
      tmp: {changeType: ''},
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
