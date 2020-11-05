/**
 * @author:zs
 * @description:根据Id删除图书
 */
const DELETE_BOOK_BY_ID =
  'DELETE a.id, a.name, a.storage, a.author, a.digest, a.cover_url, b.name as publisher, c.name as category' +
  'FROM book a,publisher b,category c' +
  'WHERE a.id = ? and b.id = a.publisher_id and c.id = a.category_id and a.removed = 0'

module.exports = {
  DELETE_BOOK_BY_ID
}
