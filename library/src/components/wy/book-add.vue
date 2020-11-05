<template>
    <el-form class="Addbook_container" ref="form" :model="form" :rules="rules" label-width="70px">
      <el-form-item prop="name" label="书名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="author" label="作者">
          <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item prop="publisher_id" label="出版社">
        <el-select v-model="form.publisher_id" filterable placeholder="选择出版社">
          <el-option
            v-for="item in publisher"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
      </el-form-item>
      <el-form-item prop="category_id" label="分类">
         <el-select v-model="form.category_id" filterable placeholder="选择分类">
            <el-option
              v-for="item in category"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="storage" label="数量">
        <el-input v-model="form.storage"></el-input>
      </el-form-item>
      <el-form-item prop="digest" label="摘要" class="digest">
        <el-input v-model="form.digest" type="textarea"></el-input>
      </el-form-item>
      <!--按钮-->
      <el-form-item class="btn">
        <el-button type="primary" plain @click="submitForm('form')">确认添加</el-button>
      </el-form-item>
    </el-form>
     <!--按钮-->
</template>

<script>
export default {
  name: 'book_add',
  props: ['publisher', 'category', 'rules'],
  data () {
    return {
      form: {
        name: '',
        author: '',
        publisher_id: undefined,
        category_id: undefined,
        storage: undefined,
        digest: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('http://localhost:3000/users/book', this.form).then(res => {
            console.log(res.data)
            if (res.data.code === 1) alert('添加成功!')
            else alert('添加失败' + res.data.msg)
            this.$refs.form.resetFields()
          })
        } else {
          console.log('表单提交错误!!')
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
