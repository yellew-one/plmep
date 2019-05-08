/**
* Created by yaoyuan on 2019/5/6.
*/
<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-row style="margin-top: -10px;">
        <el-col :span="6">
          <el-input placeholder="" size="mini" v-model="tFilters"></el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { } from '@/api/index'
export default {
  components: {
  },
  name: 'HelloWorld',
  activated: function () {
  },
  mounted: function () {
  },
  data () {
    return {
      tableData: [],
      tFilters: '456'
    }
  },
  methods: {
  }
}
</script>
