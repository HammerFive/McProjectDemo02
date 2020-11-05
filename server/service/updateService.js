const mysql = require('../utils/query.js')
const updateSql = require('../utils/sql/updateSql.js')

/**
 * @author lqz
 * @param  book
 * @returns
 * @description 更新图书id和类型id
 */
const updateBook = function (book) {
  return mysql.query(
    updateSql.UPDATE_BOOK,
    [
      book.name,
      book.storage,
      book.author,
      book.digest,
      book.cover_url,
      book.publisher_id,
      book.category_id,
      book.id
    ]
  )
}

/**
* @function 删除图书信息
* @description 根据唯一标识bookId删除书籍
* @param bookId
* @return
* @author Zhang Sheng 4/11/2020
*/
async function deleteBook(bookId){
  return await mysql.query(sql.deleteBook,[bookId])
}

module.exports = {
  updateBook,
  deleteBook
}
