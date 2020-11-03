<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="demo-input-size">
      <el-button type="primary" @click="getBookByPubName">查书（出版社）</el-button>
      <el-input id="pubName" size="mini" v-model="publisherName" placeholder="请输入出版社名"></el-input>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      publisherName: ''
    }
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
  margin-top: 60px;
}
#pubName {
  width: 300px;
  margin-top: 10px;
}
</style>
