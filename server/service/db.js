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
        await mysql.query(sql.updateBookNumber, [bookId])
        result = { msg: 'borrow book succeed', code: 1 }
      })
      .catch((error) => {
        console.log(error)
        result = { msg: 'borrow book failed!', code: 0 }
      })
  }
  return result
}

module.exports = {
  getBookByPublisher,
  borrowBook
}
