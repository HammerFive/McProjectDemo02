// 根据出版社查询图书信息
const queryByPublisher =
  'SELECT a.id, a.name, a.number, a.author, a.digest, a.cover, b.name as publisher, c.name as clazz ' +
  'FROM book a,publisher b,clazz c ' +
  'WHERE a.publisher_id = b.id and a.clazz_id = c.id and b.name = ?'

// 根据图书id和用户id借书
const queryBookNumber = 'select number from book where id = ?'
const insertBorrow = 'insert into `borrow` (book_id, user_id, borrow_date) values (?,?,?)'
const updateBook = 'update book set number=number-1 where id = ?'

// 根据书名查询图书信息 wy
const queryByName =
  'SELECT a.id, a.name, a.number, a.author, a.digest, a.cover, b.name as publisher, c.name as clazz ' +
  'FROM book a,publisher b,clazz c ' +
  'WHERE a.publisher_id = b.id and a.clazz_id = c.id and a.name = ? and a.exist=1'

// 添加图书 wy
const addBook =
  'INSERT INTO `Book`(name,publisher_id,clazz_id,number,author,exist,digest,cover)VALUES(?,?,?,?,?,?,?,?)'
  
module.exports = {
  queryByPublisher,
  queryBookNumber,
  insertBorrow,
  updateBook,
  queryByName,
  addBook
}
