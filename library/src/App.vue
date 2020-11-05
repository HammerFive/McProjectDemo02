<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view/>
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
