/**
 * @author:cxw
 * @description:根据出版社查询图书
 */
const SELECT_BOOKS_BY_PUBLISHER =
  'SELECT a.id, a.name, a.number, a.author, a.digest, a.cover, b.name as publisher, c.name as clazz ' +
  'FROM book a,publisher b,clazz c ' +
  'WHERE a.publisher_id = b.id and a.clazz_id = c.id and a.exist = 1 and b.name = ?'

const queryBookNumber = 'select number from book where id = ?'


/**
 * @author:cxw
 * @description:查询用户是否存在
 */
const queryUserById = 'select * from user where id = ?'

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
const queryByClazz =
'SELECT b.id, b.name, b.number, b.author, b.digest, b.cover, p.name as publisher, c.name as clazz ' +
'FROM book b,publisher p,clazz c ' +
'WHERE b.publisher_id = p.id and b.clazz_id = c.id and c.name = ? and b.exist = 1'

module.exports = {
  SELECT_BOOKS_BY_BOOKNAME,
  SELECT_BOOKS_BY_PUBLISHER
}
