<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="">
        <el-select v-model="formInline.type" placeholder="类别">
          <el-option label="书名" value="name"></el-option>
          <el-option label="分类" value="class"></el-option>
          <el-option label="出版社" value="publisher"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="formInline.searchName" @keyup.enter.native="search" prefix-icon="el-icon-search"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      formInline: {
        searchName: '',
        type: ''
      }
    }
  },
  methods: {
    search: function () {
      console.log(this.formInline)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-form {
  margin-top:30px;margin-left:240px;padding-right:15px
}
.el-select {
  width: 90px;
}
</style>
