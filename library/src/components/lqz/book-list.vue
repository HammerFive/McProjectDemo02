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
      prop="price"
      label="价格"
      width="165">
    </el-table-column>
    <el-table-column
      prop="storage"
      label="数量"
      width="165">
    </el-table-column>
    <el-table-column
      width="175">
      <el-button round>
        编辑
      </el-button>
    </el-table-column>
    <el-table-column
      width="175">
      <el-button round>
        借书
      </el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      bookList: [{
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: '时间简史',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }, {
        id: 1,
        name: 'end',
        author: '霍金',
        category: '小说',
        publisher: '西安出版社',
        price: 10,
        storage: 20
      }]
    }
  },
  methods: {

  }
}
</script>
