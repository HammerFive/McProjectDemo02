


/**
 * @author lqz
 * @description 更新图书id和类型id
 * @param  (book)
 * @returns
 */
const updateBook = function (book) {
  return mysql.query(
    sql.updateBook,
    [
      book.name,
      book.number,
      book.author,
      book.digest,
      book.cover,
      book.publisher_id,
      book.clazz_id,
      book.id
    ]
  )
}

module.exports = {
  updateBook
}