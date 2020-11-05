const mysql = require('../utils/query.js')
const insertSql = require('../utils/sql/insertSql.js')
const selectSql = require('../utils/sql/selectSql.js')
const updateSql = require('../utils/sql/updateSql.js')

/**
* @function 更新图书信息
* @description 添加图书
* @param book
* @return 添加结果
* @author Wang Ying 4/11/2020
 */
async function addBook (book) {
  return await mysql.query(
    insertSql.INSERT_BOOK,
    [
      book.name,
      book.publisher_id,
      book.category_id,
      book.storage,
      book.author,
      0,
      book.digest,
      book.cover_url
    ]
  )
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
  const result = await mysql.query(selectSql.SELECT_BOOK_STOREGE, [bookId])
  /*   if (result[0].storage > 0) {
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
  } */
  if (result[0].storage > 0) {
    const date = new Date().toLocaleDateString()
    try {
      await mysql.query(insertSql.INSERT_RESERVASTION, [bookId, userId, date])
      await mysql.query(updateSql.UPDATE_BOOK_RESERVASTION, [bookId])
    } catch (error) {
      console.log(error)
    }
    return result
  }
}

module.exports = {
  borrowBook,
  addBook
}
