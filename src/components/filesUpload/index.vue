<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible" width="60%" append-to-body>
    <div style="margin-top: 10px;text-align:right">
      <el-scrollbar style="height: 300px">
        <el-card>
          <el-upload
            class="upload-demo"
            :action="action"
            :name="name"
            :data = "ref"
            :on-success="success"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-card>
      </el-scrollbar>
      <span slot="footer" class="dialog-footer" >
        <el-button  size="mini" @click="dialogFormVisible = false">{{$t('formButton.cancel')}}</el-button>
        <el-button :loading="$store.getters.loading" size="mini" type="primary" @click="submit">{{$t('formButton.ensure')}}</el-button>
      </span>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'filesUpload',
  props: ['returnFilePath'],
  mounted: function () {
  },
  methods: {
    // 打开弹窗
    openDialog () {
      this.dialogFormVisible = true
    },
    // 打开弹窗
    closeDialog () {
      this.dialogFormVisible = false
    },
    // 初始化值
    setAttribute (aciton, fileList, title, name, ref, type) {
      this.action = aciton
      this.fileList = fileList
      this.title = title
      this.name = name
      this.ref = ref
      this.type = type
    },
    // 提交
    submit () {
      this.dialogFormVisible = false
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
    },
    success (response, file, fileList) {
      if (response.type === 'success') {
        this.fileList = []
        this.$props.returnFilePath(fileList, this.type)
      }
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      action: '', // 接口地址
      fileList: '',
      title: '',
      name: '',
      ref: '',
      type: ''
    }
  }
}
</script>
