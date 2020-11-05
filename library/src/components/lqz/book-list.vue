<!--
 * @FileDescription: 展示查询出来的图书列表组件
 * @Author: lqz
 * @Date: 2020年11月4日 16:19:13
 * @LastEditors: lqz
 * @LastEditTime: 2020年11月4日 16:19:13
 -->
<template>
  <el-table
    :data="bookList"
    height="500"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="165">
    </el-table-column>
    <el-table-column
      prop="name"
      label="书名"
      width="165">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="165">
    </el-table-column>
    <el-table-column
      prop="category"
      label="分类"
      width="165">
    </el-table-column>
    <el-table-column
      prop="publisher"
      label="出版社"
      width="165">
    </el-table-column>
    <el-table-column
      prop="storage"
      label="库存"
      width="165">
    </el-table-column>
    <el-table-column
      label="操作"
      width="240"
      show-overflow-tooltip>
      <template slot-scope="scope">
        <el-button @click="toManage(scope.row)" round>
        编辑
        </el-button>
        <el-button @click="toBorrow(scope.row)" round>
        借书
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'book-list',
  props: ['searchVal', 'books', 'book'],
  data () {
    return {
      bookList: this.books
    }
  },
  methods: {
    toManage: function (val) {
      this.$emit('getBook', val)
      this.$router.push('/bookupdate')
    },
    toBorrow: function (val) {
      this.$emit('getBook', val)
      this.$router.push('/reservation')
    }
  }
}
</script>
