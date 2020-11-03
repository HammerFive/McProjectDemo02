<template>
  <div style="border-bottom:1px solid #e6e6e6; height: 100px; margin-left:100px">
    <el-image
      style="width: 100px; height: 100px; float:left"
      :src="url"></el-image>
      <Search style="float: left"></Search>
    <el-menu style="float:left" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">查询</el-menu-item>
      <el-menu-item index="2">书库</el-menu-item>
      <el-menu-item index="3">管理</el-menu-item>
      <el-menu-item index="4">借书</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Search from '@/components/Search'
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604401429016&di=a252f5f8e008af0c6da5a6de9f52d534&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2Fd315fef58164e5fe19eb7e7d7da381523283f6ca.jpg'
    }
  },
  components: {
    Search
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-item {
  height:80px;
  margin-top: 20px;
  font-size: 20px;
}
</style>
