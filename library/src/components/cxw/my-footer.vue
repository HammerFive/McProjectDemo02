<template>
  <div id="footer" style="border-top:1px solid #e6e6e6; height: 100px; margin-left:100px">
    <p>版权所有：西安电子科技大学图书馆 Copyright © 2007-2016.西安电子科技大学图书馆 All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604401429016&di=a252f5f8e008af0c6da5a6de9f52d534&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2Fd315fef58164e5fe19eb7e7d7da381523283f6ca.jpg'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  font-size:10px
}
</style>
