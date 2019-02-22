<template>
  <el-dialog title="接口人编辑" :visible.sync="dialogFormVisible" width="600px">
    <dhr value="接口人信息"></dhr>
  </el-dialog>
</template>
<script>
import Dhr from '../utils/Dhr'
export default {
  name: 'userInfoEdit',
  // this.$props.data
  props: ['data'],
  components: {
    Dhr
  },
  mounted: function () {
  },
  methods: {
    dialogVisibleChange (type) {
      this.dialogFormVisible = type
    }
  },
  data () {
    return {
      dialogFormVisible: false
    }
  }
}
</script>
