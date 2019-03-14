<template>
    <div class="app-container">
      <!--<el-button @click="gongao" type="primary" icon="el-icon-warning">公告</el-button>-->
    </div>
</template>
<script>
import { showSealedSampleTasks, expiredSealedSampleTasks, showEnvProtectionTasks } from '@/api/index'
export default {
  name: 'HelloWorld',
  mounted: function () {
    //      { path: '*', redirect: '/404', hidden: true }])
    this.getNum()
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
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
