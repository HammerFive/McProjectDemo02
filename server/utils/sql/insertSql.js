
/**
 * @author:cxw
 * @description:借书
 */
const INSERT_RESERVASTION = 'insert into `borrow` (book_id, user_id, borrow_date) values (?,?,?)'

// 添加图书 wy
const INSERT_BOOK =
  'INSERT INTO `Book`(name,publisher_id,clazz_id,number,author,exist,digest,cover)VALUES(?,?,?,?,?,?,?,?)'
