<!--
 * @FileDescription: 更新图书和删除图书的功能
 * @Author: wy
 * @Date: 2020年11月5日
 * @LastEditors: wy
 * @LastEditTime: 2020年11月5日
 -->
<template>
    <el-form class="Addbook_container update_color" ref="form" :model="form" :rules="rules" label-width="70px">
      <el-form-item prop="name" label="书名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="author" label="作者">
          <el-input v-model="form.author"></el-input>
      </el-form-item>
       <!--出版社选择器-->
      <el-form-item prop="publisher_id" label="出版社">
        <el-select v-model="publisher_id" filterable placeholder="选择出版社">
        <el-option
          v-for="item in publisher"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-form-item>
      <!--书类别选择器-->
      <el-form-item prop="category_id" label="分类">
        <el-select v-model="category_id" placeholder="请选择分类">
          <el-option
          v-for="item in category"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="storage" label="数量">
        <el-input v-model.number="form.storage"></el-input>
      </el-form-item>
      <el-form-item prop="digest" label="摘要" class="digest">
        <el-input v-model="form.digest" type="textarea"></el-input>
      </el-form-item>
      <!--按钮-->
      <el-form-item class="btn">
        <el-button type="primary" icon="el-icon-edit" circle  @click="updatebook('form')"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle  @click="deletebook()"></el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'book_update',
  props: ['searchVal', 'books', 'book', 'publisher', 'category', 'rules'],
  data () {
    return {
      form: {
        ...this.book
      },
      publisher_id: this.book.publisher,
      category_id: this.book.category
    }
  },
  methods: {
    updatebook (formName) {
      const that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!isNaN(this.publisher_id)) {
            this.form.publisher_id = this.publisher_id
          } else {
            for (const item of this.publisher) {
              if (item.label === this.form.publisher) {
                this.form.publisher_id = +item.value
                break
              }
            }
          }
          if (!isNaN(this.category_id)) {
            this.form.category_id = this.category_id
          } else {
            for (const item of this.category) {
              if (item.label === this.form.category) {
                this.form.category_id = +item.value
                break
              }
            }
          }
          this.$axios.put('http://localhost:3000/users/book', this.form).then(res => {
            console.log(res.data)
            if (res.data.code === 1) {
              alert('添加成功!')
              that.$axios.get('http://localhost:3000/users/books')
                .then(function (response) {
                  that.$emit('getBooks', response.data)
                  that.$emit('putBook', '')
                  that.$router.push('/books')
                })
            } else alert('添加失败')
          })
        } else {
          console.log('表单提交错误!!')
        }
      })
    },
    deletebook () {
      const that = this
      this.$axios.put(`http://localhost:3000/users/book/drop?id=${this.form.id}`).then(response => {
        if (response.data.code === 1) {
          alert(response.data.msg)
          that.$axios.get('http://localhost:3000/users/books')
            .then(function (response) {
              that.$emit('getBooks', response.data)
              that.$emit('putBook', '')
              that.$router.push('/books')
            })
        } else {
          alert('delete failed')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "./submitform.css"
</style>
