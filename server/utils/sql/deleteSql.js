/**
 * @author:zs
 * @description:根据Id删除图书
 */
const DELETE_BOOK_BY_ID =
  'UPDATE book' +
  'SET removed = 1' +
  'WHERE book.id = ?'

module.exports = {
  DELETE_BOOK_BY_ID
}
