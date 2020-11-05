<template>
  <div class="mySearch">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="图书ID">
        <el-input v-model="form.bookId"></el-input>
      </el-form-item>
      <el-form-item label="用户ID">
        <el-input v-model="form.userId"></el-input>
        <div>
          <i  v-bind:class="checkUserId.iClass"></i>
          <i>{{checkUserId.msg}}</i>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :disabled="ableToLend">借书</el-button>
        <el-button>取消</el-button>
      </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'reservation',
  props: ['searchVal', 'books', 'book'],
  data () {
    return {
      form: {
        bookId: '',
        userId: ''
      },
      timer: null,
      checkUserId: {
        iClass: '',
        msg: ''
      },
      ableToLend: true
    }
  },
  watch: {
    searchVal: function (val) {
      this.form.bookId = val.searchName
    },
    form: {
      handler: function (val, oldVal) {
        if (val.userId === '') {
          this.checkUserId.iClass = 'el-icon-warning-outline'
          this.checkUserId.msg = '请输入用户ID'
          return
        }
        this.checkUserId.iClass = 'el-icon-loading'
        this.checkUserId.msg = '验证中'
        const that = this
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.$axios.get('http://localhost:3000/users/user', {
            params: {
              userId: this.form.userId
            }
          })
            .then(function (response) {
              if (response.data.code === 1) {
                that.checkUserId.iClass = 'el-icon-check'
                that.checkUserId.msg = '用户ID正确'
                that.ableToLend = false
              } else {
                that.checkUserId.iClass = 'el-icon-close'
                that.checkUserId.msg = '用户ID不存在'
              }
            })
        }, 1500)
      },
      deep: true
    }
  },
  methods: {
    onSubmit: function () {
      this.$axios.post('http://localhost:3000/users/book/reservation', {
        bookId: this.form.bookId,
        userId: this.form.userId
      })
        .then(response => {
          alert('借书成功')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mySearch {
  box-shadow: 0 2px 4px rgba(207, 174, 174, 0.12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  width: 37%;
  height: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
