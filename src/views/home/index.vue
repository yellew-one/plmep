<template>
    <div class="app-container">
      <el-button @click="download" type="primary" >下载</el-button>
      <el-button @click="upload" type="primary" >上传</el-button>
      <input v-model="value"/>
      <files-upload ref="fileUpload"
                    :returnFilePath="returnFilePath"></files-upload>
    </div>
</template>
<script>
import { showSealedSampleTasks, expiredSealedSampleTasks, showEnvProtectionTasks } from '@/api/index'
import { download, upload } from '@/api/huanbaoAPI'
import FilesUpload from '../../components/filesUpload/index'
export default {
  components: {FilesUpload},
  name: 'HelloWorld',
  mounted: function () {
    //      { path: '*', redirect: '/404', hidden: true }])
    // this.getNum()
    var tagsView = this.$store.state.tagsView.visitedViews
    this.nowTags = tagsView[tagsView.length - 1]
    if (tagsView.length !== 1) {
      var last = tagsView[tagsView.length - 1]
      if (last.name === 'home') {
        last = tagsView[tagsView.length - 2]
      }
      console.log('last', last)
      this.$router.push({name: last.name, params: last.params})
    }
  },
  activated: function () {
    this.value = ''
    this.filePath = ''
    // var tagsView = this.$store.state.tagsView.visitedViews
    // this.nowTags = tagsView[tagsView.length - 1]
  },
  methods: {
    getNum () {
      showSealedSampleTasks().then(r => {
        this.$store.commit('SET_FENGYANGTASKNUM', r.data.length)
      })
      expiredSealedSampleTasks().then(r => {
        this.$store.commit('SET_FENGYANGDAOQINUM', r.data.length)
      })
      showEnvProtectionTasks().then(r => {
        this.$store.commit('SET_HUANBAOTASKNUM', r.data.length)
      })
    },
    handleClick () {
      this.$router.push({ path: '/404' })
    },
    gongao () {
      window.open('http://plmtest.longcheer.com/Windchill/ptc1/ext/longcheer/helpDoc/helpDocSS', '_blank')
    },
    closePage () {
      this.$router.replace({name: 'fMytasks'})
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
    download () {
      download().then(r => {
        if (r.data.flag) {
          window.open('http://172.16.9.169:8080/files/getFile?route=' + r.data.filePath + '&userName=' + this.$store.getters.userInfo.username, '_blank')
        }
      })
    },
    upload () {
      this.$refs.fileUpload.openDialog()
      this.$refs.fileUpload.setAttribute('http://172.16.9.169:8080/files/upLoad', [], '测试上传', 'fileList', {
        number: this.$store.getters.huanbaoNum,
        userName: this.$store.getters.userInfo.username
      }, 'FMD')
    },
    returnFilePath (e, type) {
      this.$refs.fileUpload.closeDialog()
      this.value = e[0].name
      this.filePath = e[0].response.data[0]
      if (this.filePath !== '') {
        upload(this.filePath).then(r => {
          if (r.data.status === 'success') {
            this.$message.success({
              message: '上传成功'
            })
          }
        })
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      filePath: ''
    }
  }
}
</script>
