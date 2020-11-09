<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view
      :searchVal="searchVal"
      :books="books"
      :book="book"
      :publisher="publisher"
      :rules="rules"
      :category="category"
      @getSearchVal="showSearchVal"
      @getBooks="showBooks"
      @getBook="showBook"
      @putBook="clearBook"
      />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/cxw/my-header'
import Footer from '@/components/cxw/my-footer'
export default {
  name: 'App',
  data () {
    return {
      searchVal: '',
      books: '',
      book: '',
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
      ],
      rules: {
        name: [
          { required: true, message: '请输入书', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入作者', trigger: 'blur' }
        ],
        storage: [
          { required: true, message: '请输入添加数量', trigger: 'blur' },
          { type: 'number', message: '数量必须为数字', trigger: 'blur' }
        ],
        digest: [
        ]
      }
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    showSearchVal: function (val) {
      this.searchVal = val
    },
    showBooks: function (val) {
      this.books = val
    },
    showBook: function (val) {
      this.book = val
    },
    clearBook: function (val) {
      this.book = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  height:550px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pubName {
  width: 300px;
  margin-top: 10px;
}
</style>
