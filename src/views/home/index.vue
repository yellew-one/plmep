<template>
    <div class="app-container">
    </div>
</template>
<script>
// import { showSealedSampleTasks, expiredSealedSampleTasks, showEnvProtectionTasks } from '@/api/index'
export default {
  components: {},
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
      /* showSealedSampleTasks().then(r => {
        this.$store.commit('SET_FENGYANGTASKNUM', r.data.length)
      })
      expiredSealedSampleTasks().then(r => {
        this.$store.commit('SET_FENGYANGDAOQINUM', r.data.length)
      })
      showEnvProtectionTasks().then(r => {
        this.$store.commit('SET_HUANBAOTASKNUM', r.data.length)
      }) */
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
