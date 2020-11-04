<template>
  <div class="mySearch">
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
  name: 'MainSearch',
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
      if (this.formInline.type === 'publisher') {
        this.$axios.get('http://localhost:3000/users/book/publisher', {
          params: {
            publisherName: this.formInline.searchName
          }
        })
          .then(response => {
            console.log(response.data)
          })
      } else if (this.formInline.type === 'class') {
        this.$axios.get('http://localhost:3000/users/books/clazz', {
          params: {
            clazz: this.formInline.searchName
          }
        })
          .then(response => {
            console.log(response.data)
          })
      } else {
        this.$axios.get('http://localhost:3000/users/book', {
          params: {
            name: this.formInline.searchName
          }
        })
          .then(response => {
            console.log(response.data)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-select {
  width: 90px;
}

.mySearch {
  box-shadow: 0 2px 4px rgba(207, 174, 174, 0.12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  width: 37%;
  height: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
