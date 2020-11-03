<template>
  <div id="app">
    <Header></Header>
    <img src="./assets/logo.png">
    <div class="demo-input-size">
      <el-button type="primary" @click="getBookByPubName">查书（出版社）</el-button>
      <el-input id="pubName" size="mini" v-model="publisherName" placeholder="请输入出版社名"></el-input>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  data () {
    return {
      publisherName: ''
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    getBookByPubName: function () {
      this.$axios.get('http://localhost:3000/users/books/publisher', {
        params: {
          publisherName: this.publisherName
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
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
#pubName {
  width: 300px;
  margin-top: 10px;
}
</style>
