<template>
  <el-row>
    <el-col :span="24">
      <div class="line"><b></b><span>{{$props.value}}</span><b></b></div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'Dhr',
  props: ['value'],
  mounted: function () {
  },
  methods: {},
  data () {
    return {
    }
  }
}
</script>
<style>
  .line{
    width:600px;
  }
  .line{
    overflow: hidden;
    _zoom: 1;
  }
  .line b {
    background: #ddd;
    margin-top: 8px;
    float: left;
    width: 26%;
    height: 1px;
    _overflow: hidden;
  }
</style>
