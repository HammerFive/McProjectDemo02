<template>
    <el-form class="Addbook_container" ref="form" :model="form" :rules="rules" label-width="70px">
      <!--表单区-->
      <el-form-item prop="name" label="书名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="author" label="作者">
          <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item prop="publisher_id" label="出版社">
        <el-select v-model="form.publisher_id" placeholder="请选择出版社">
          <el-option label="新华出版社" value="1"></el-option>
          <el-option label="中国人民出版社" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="clazz_id" label="分类">
         <el-select v-model="form.clazz_id" placeholder="选择分类">
            <el-option label="小说" value="1"></el-option>
            <el-option label="科技" value="2"></el-option>
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
        <el-button type="primary" icon="el-icon-edit" circle  @click="submitForm('form')"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-form-item>
    </el-form>
     <!--按钮-->
</template>

<script>
export default {
  name: 'Bookupdate',
  props: ['searchVal', 'books', 'book'],
  data () {
    return {
      form: {
        name: this.book.name,
        author: this.book.author,
        publisher_id: undefined,
        category_id: undefined,
        storage: this.book.storage,
        digest: this.book.digest
      },
      rules: {
        name: [
          { required: true, message: '请输入书', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入作者', trigger: 'blur' }
        ],
        publisher_id: [
          { required: true, message: '请选择出版社', trigger: 'change' }
        ],
        clazz_id: [
          { required: true, message: '请选择类别', trigger: 'change' }
        ],
        number: [
          { required: true, message: '请输入添加数量', trigger: 'blur' },
          { type: 'number', message: '数量必须为数字', trigger: 'blur' }
        ],
        digest: [
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          this.axios.post('http://localhost:3000/users/bookadd', this.form).then(res => {
            console.log(res.data)
            if (res.data.code === 1) alert('添加成功!')
            else alert('添加失败')
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
.Addbook_container{
  width:700px;
  height:460px;
  box-shadow: 0 2px 4px rgba(207, 174, 174, 0.12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  margin-top:30px;
  margin-left:30%;
  margin-bottom:30px;
  padding-top:80px;
  box-sizing: border-box;
}
.el-form-item{
  display:inline-block;
  width:280px;
  margin-top:35px;
}
.btn{
  float: right;
  padding-bottom: 20px;
}
</style>
