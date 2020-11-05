const mysql = require('../config/mysql_config.js')
const insertSql = require('../utils/sql/insertSql.js')
const selectSql = require('../utils/sql/selectSql.js')
const updateSql = require('../utils/sql/updateSql.js')
/**
* @function 更新图书信息
* @description 添加图书
* @param book
* @return successmessage
* @author Wang Ying 4/11/2020
 */
const addBook = function (book) {
  return mysql.query(sql.addBook,
    [book.name, book.publisher_id, book.category_id, book.number,
      book.author, 1, book.digest, book.cover])
}

/**
* @function 借书
* @description  通过图书id和用户id借书
* @param bookId 图书ID
* @param userId 用户ID
* @return 借书结果
* @author Chen Xiaowu 3/11/2020
 */
async function borrowBook (bookId, userId) {
  let result = await mysql.query(selectSql.SELECT_BOOK_NUMBER, [bookId])
  if (result[0].number > 0) {
    const date = new Date().toLocaleDateString()
    await mysql.query(insertSql.INSERT_RESERVASTION, [bookId, userId, date])
      .then(async (data) => {
        await mysql.query(updateSql.UPDATE_BOOK_RESERVASTION, [bookId])
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
  borrowBook
}