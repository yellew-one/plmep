<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    if (this.$store.getters.guojihua) {
      this.$i18n.locale = this.$store.getters.guojihua
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      if (newVal.indexOf('/createPcn/createPcn') !== -1) {
        this.$store.commit('SET_IFPCN', true)
      } else {
        this.$store.commit('SET_IFPCN', false)
      }
    }
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/

::-webkit-scrollbar{
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 10px;
  background-color: #C7C9CC;
  /*background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);*/
}
/*::-webkit-scrollbar-track {!*滚动条里面轨道*!
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  !*border-radius: 10px;*!
  background: #EDEDED;
}*/
.el-form-item label:before {
  content: "\2002";
  width: 100%;
}
</style>
