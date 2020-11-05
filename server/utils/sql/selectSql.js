/**
 * @author:cxw
 * @description:根据出版社查询图书
 */
const SELECT_BOOKS_BY_PUBLISHER =
  'SELECT a.id, a.name, a.storage, a.author, a.digest, a.cover_url, b.name as publisher, c.name as category ' +
  'FROM book a,publisher b,category c ' +
  'WHERE a.publisher_id = b.id and a.category_id = c.id and a.removed = 0 and b.name = ?'

const SELECT_BOOK_STOREGE = 'SELECT storage FROM book WHERE id = ?'

/**
 * @author:cxw
 * @description:查询用户是否存在
 */
const SELECT_USER_ID = 'SELECT * FROM user WHERE id = ?'

/**
 * @author:wy
 * @description:根据书名查询booklist
 */
const SELECT_BOOKS_BY_BOOKNAME =
  'SELECT a.id, a.name, a.storage, a.author, a.digest, a.cover_url, b.name as publisher, c.name as category ' +
  'FROM book a, publisher b, category c ' +
  'WHERE a.publisher_id = b.id and a.category_id = c.id and a.name = ? and a.removed = 0'

/**
 * @author:lqz
 * @description:根据类型查询图书
 */
const SELECT_BOOKS_BY_CATEGORY =
'SELECT b.id, b.name, b.storage, b.author, b.digest, b.cover_url, p.name as publisher, c.name as category ' +
'FROM book b,publisher p,category c ' +
'WHERE b.publisher_id = p.id and b.category_id = c.id and c.name = ? and b.removed = 0'

/**
 * @author:zs
 * @description:查询所有图书
 */
const SELECT_BOOKS_ALL =
'SELECT a.id, a.name, a.storage, a.author, a.digest, a.cover_url, b.name as publisher, c.name as category ' +
'FROM book a,publisher b,category c '
'WHERE a.publisher_id = b.id and a.category_id = c.id and a.exist = 1'


module.exports = {
  SELECT_BOOKS_BY_BOOKNAME,
  SELECT_BOOKS_BY_PUBLISHER,
  SELECT_BOOKS_BY_CATEGORY,
  SELECT_BOOK_STOREGE,
  SELECT_USER_ID
}
