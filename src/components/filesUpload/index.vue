<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible" width="60%" append-to-body>
    <div style="margin-top: 0px;text-align:right">
      <el-scrollbar style="height: 300px;width: 100%">
        <el-card>
          <!--:http-request="myUpload"-->
          <!--:on-change="handleChange"-->
          <!--:before-upload="beforeUpload"-->
          <!--:auto-upload="false"-->
          <!---->
          <el-upload
            style="width: 90%"
            class="upload-demo"
            ref="myUpload"
            :on-change="handleChange"
            :action="action"
            :name="name"
            :data = "ref"
            :http-request="myUpload"
            :on-success="success"
             multiple
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :file-list="fileList">
            <el-button  size="small" type="primary">{{$t('huanbaoTable.detailTable.fileUpload')}}</el-button>
          </el-upload>
          <el-progress v-if="progcount!==0 && progcount!==100" status="success" :percentage="progcount"></el-progress>
        </el-card>
      </el-scrollbar>
      <!--<span slot="footer" class="dialog-footer" >-->
        <!--<el-button   size="mini" @click="dialogFormVisible = false">{{$t('formButton.cancel')}}</el-button>-->
        <el-button   @click="onClickUpload" :loading="$store.getters.loading" size="mini" type="primary" >{{$t('formButton.ensure')}}</el-button>
      <!--</span>-->
    </div>
  </el-dialog>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
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
      this.file = []
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
    handleRemove (Nfile, fileList) {
      console.log('file', Nfile)
      console.log('fileList', fileList)
      var index = -1
      this.file.forEach(function (v, i) {
        if (v.name === Nfile.name) {
          index = i
        }
      })
      if (index !== -1) {
        this.file.splice(index, 1)
      }
    },
    // 删除文件之前的钩子
    beforeRemove (file, fileList) {
      console.log('file', file)
      console.log('fileList', fileList)
    },
    // 上传文件，获取文件流
    handleChange (file) {
      this.file.push(file.raw)
      if (this.file.indexOf(file.raw) === -1) {
        this.file.push(file.raw)
      }
    },
    myUpload (file) {
      console.log('fileData--->', this.fileData)
    },
    onClickUpload (fiel) {
      if (this.file.length === 0) { return 1 }
      var that = this
      // var myUpload = this.$refs.myUpload
      var url = this.$store.state.filePath + '/files/upLoad'
      var reader = new FormData()
      this.file.forEach(function (value, item) {
        reader.append('fileList', value)
      })
      reader.append('number', this.$store.getters.huanbaoNum)
      reader.append('userName', this.$store.getters.userInfo.username)
      this.$store.commit('SET_LOADING', true)
      axios.post(url, reader, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          let percent = (progressEvent.loaded / progressEvent.total * 100) | 0
          that.progcount = percent
        }
      }).then(function (r) {
        console.log('s', arguments)
        if (r.data.type === 'success') {
          var Info = []
          that.file = []
          r.data.data.forEach(function (v, i) {
            var sz = v.split('/')
            Info.push({name: sz[sz.length - 1], path: v})
          })
          console.log('info', Info)
          that.$props.returnFilePath(Info, that.type)
        } else {
          that.file = []
          this.$message({
            message: '文件上传失败! 请联系管理员; 注:文件不得超过50M',
            type: 'warning',
            duration: 5 * 1000
          })
        }
        that.$store.commit('SET_LOADING', false)
      }).catch(function (r) {
        console.error(r)
        that.$store.commit('SET_LOADING', false)
      })
    },
    /* beforeUpload (file) {
      console.log('f---->', file)
      if (file.name.indexOf(' ') !== -1) {
        this.$message({
          message: '文件名称不能包含空格',
          type: 'warning',
          duration: 5 * 1000
        })
        return false
      }
      if (file.name.indexOf('+') !== -1) {
        this.$message({
          message: '文件名称不能包含 + 号',
          type: 'warning',
          duration: 5 * 1000
        })
        return false
      }
      return true
    }, */
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
      fileList: [],
      fileData: new FormData(),
      title: '',
      name: '',
      ref: '',
      type: '',
      progcount: 0,
      file: [],
      form: ''
    }
  }
}
</script>

<style scoped>
  ::-webkit-scrollbar{
    width: 10px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.2);
    /*border-radius: 10px;*/
  }
</style>
