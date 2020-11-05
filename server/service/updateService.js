const mysql = require('../config/mysql_config.js')
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

module.exports = {
  updateBook
}
