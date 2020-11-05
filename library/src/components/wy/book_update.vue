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
  props: ['searchVal', 'books', 'book'],
  data () {
    return {
      form: {
        name: this.book.name,
        author: this.book.author,
        publisher: this.book.publisher,
        publisher_id: this.book.publisher_id,
        category_id: this.book.category_id,
        category: this.book.category,
        storage: this.book.storage,
        digest: this.book.digest
      },
      publisher_id: this.book.publisher,
      category_id: this.book.category,
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
        category_id: [
          { required: true, message: '请选择类别', trigger: 'change' }
        ],
        storage: [
          { required: true, message: '请输入添加数量', trigger: 'blur' },
          { type: 'number', message: '数量必须为数字', trigger: 'blur' }
        ],
        digest: [
        ]
      },
      publisher: [
        { value: '1', label: '科学出版社' },
        { value: '2', label: '高等教育出版社' },
        { value: '3', label: '机械工业出版社' },
        { value: '4', label: '新华出版社' },
        { value: '5', label: '中国农业出版社' },
        { value: '6', label: '人民邮电出版社' },
        { value: '7', label: '中国百科大全出版社' },
        { value: '8', label: '人民卫生出版社' },
        { value: '9', label: '中国财政经济出版社' },
        { value: '10', label: '中华书局' },
        { value: '11', label: '经济管理出版社' },
        { value: '12', label: '中国社会科学出版社' }
      ],
      category: [
        { value: '1', label: '青春' },
        { value: '2', label: '小说' },
        { value: '3', label: '文学' },
        { value: '4', label: '艺术' },
        { value: '5', label: '动漫' },
        { value: '6', label: '娱乐时尚' },
        { value: '7', label: '旅游' },
        { value: '8', label: '育儿' },
        { value: '9', label: '心理健康' },
        { value: '10', label: '经济' },
        { value: '11', label: '科学' }
      ]
    }
  },
  methods: {
    updatebook (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.publisher_id.length < 3) {
            this.form.publisher_id = this.publisher_id
          }
          if (this.category_id.length < 3) {
            this.form.category_id = this.category_id
          }
          this.$axios.put('http://localhost:3000/users/book', this.form).then(res => {
            console.log(res.data)
            if (res.data.code === 1) alert('添加成功!')
            else alert('添加失败')
          })
        } else {
          console.log('表单提交错误!!')
        }
      })
    },
    deletebook () {
      this.$axios.delete(`http://localhost:3000/data/${this.form.id}`).then(res => {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "./submitform.css"
</style>
