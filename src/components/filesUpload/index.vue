<template>
  <el-dialog top="30px"  :title="title" :visible.sync="dialogFormVisible" width="800px">
    <div style="margin-top: 10px;text-align:right">
      <el-scrollbar style="height: 400px">
        <el-card>
          <el-upload
            class="upload-demo"
            :action="action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-card>
      </el-scrollbar>
      <el-button  size="mini" @click="dialogFormVisible = false">{{$t('formButton.cancel')}}</el-button>
      <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="submit">{{$t('formButton.submit')}}</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'filesUpload',
  mounted: function () {
  },
  methods: {
    // 打开弹窗
    openDialog () {
      this.dialogFormVisible = true
    },
    // 初始化值
    setAttribute (aciton, fileList, title) {
      this.aciton = aciton
      this.fileList = fileList
      this.title = title
    },
    // 提交
    submit () {
      console.log()
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePreview (file) {
      console.log('file', file)
    },
    // 移除文件钩子
    handleRemove (file, fileList) {
      console.log('file', file)
      console.log('fileList', fileList)
    },
    // 删除文件之前的钩子
    beforeRemove (file, fileList) {
      console.log('file', file)
      console.log('fileList', fileList)
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      action: '', // 接口地址
      fileList: '',
      title: ''
    }
  }
}
</script>
