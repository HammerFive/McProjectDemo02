<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view
      :searchVal="searchVal"
      :books="books"
      :book="book"
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
      book: ''
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
