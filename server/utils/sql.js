/**
 * @author:cxw
 * @description:根据出版社查询图书
 */
const queryByPublisher =
  'SELECT a.id, a.name, a.number, a.author, a.digest, a.cover, b.name as publisher, c.name as clazz ' +
  'FROM book a,publisher b,clazz c ' +
  'WHERE a.publisher_id = b.id and a.clazz_id = c.id and a.exist = 1 and b.name = ?'

/**
 * @author:cxw
 * @description:借书
 */
const queryBookNumber = 'select number from book where id = ?'
const insertBorrow = 'insert into `borrow` (book_id, user_id, borrow_date) values (?,?,?)'
const updateBookNumber = 'update book set number=number-1 where id = ?'

/**
 * @author:lqz
 * @description:根据类型查询图书
 */
const queryByClazz =
  'SELECT b.id, b.name, b.number, b.author, b.digest, b.cover, p.name as publisher, c.name as clazz ' +
  'FROM book b,publisher p,clazz c ' +
  'WHERE b.publisher_id = p.id and b.clazz_id = c.id and c.name = ? and b.exist = 1'

/**
 * @author:lqz
 * @description:根据类型查询图书
 */
const updateBook =
  'UPDATE book ' +
  'SET name=?,number=?,author=?,digest=?,cover=?,publisher_id=?,clazz_id=? ' +
  'WHERE book.id = ?'

module.exports = {
  queryByPublisher,
  queryBookNumber,
  insertBorrow,
  updateBookNumber,
  updateBook,
  queryByClazz
}
