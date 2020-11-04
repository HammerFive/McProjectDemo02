const mysql = require('../utils/query.js')
const sql = require('../utils/sql.js')

/**
* @function 获取图书信息
* @description 通过出版社名获取图书信息
* @param publisherName
* @return bookList
* @author Chen Xiaowu 3/11/2020
 */
async function getBookByPublisher (publisherName) {
  const result = await mysql.query(sql.queryByPublisher, [publisherName])
  return result
}

/**
* @function 借书
* @description 通过图书id和用户id借书
* @param bookId
* @param userId
* @return 借书结果
* @author Chen Xiaowu 3/11/2020
 */
async function borrowBook (bookId, userId) {
  let result = await mysql.query(sql.queryBookNumber, [bookId])
  if (result[0].number > 0) {
    const date = new Date().toLocaleDateString()
    await mysql.query(sql.insertBorrow, [bookId, userId, date])
      .then(async (data) => {
        await mysql.query(sql.updateBook, [bookId])
        result = { msg: 'borrow book succeed', code: 1 }
      })
      .catch((error) => {
        console.log(error)
        result = { msg: 'borrow book failed!', code: 0 }
      })
  }
  return result
}

/**
 * @author lqz
 * @description 根据类型获取图书
 * @param  (clazz)
 * @returns 查询图书结果
 */
const getBookByclazz = function (clazz) {
  return mysql.query(sql.queryByClazz, [clazz])
}

/**
 * @author lqz
 * @description 更新图书id和类型id
 * @param  (book)
 * @returns 
 */
const updateBook = function (book) {
  return mysql.query(sql.updateBook,
    [book.name, book.number, book.author,
      book.digest, book.cover, book.publisher_id, book.clazz_id, book.id])
}

module.exports = {
  getBookByPublisher,
  borrowBook,
  getBookByclazz,
  updateBook
}
