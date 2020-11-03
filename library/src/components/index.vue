<template>
  <div>
    <el-container>
    <el-header>Header</el-header>
    <el-main id="main">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item>
                  <el-select style="width:110px" id="selectItem" size="mini" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>Footer</el-footer>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: [{
        value: 'bookName',
        label: '书名'
      }, {
        value: 'publisherName',
        label: '出版社名'
      }, {
        value: 'className',
        label: '分类名'
      }],
      value: ''

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  width: 50%;
  margin-left:20%;
  border:1px solid rgb(238,238,238);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
