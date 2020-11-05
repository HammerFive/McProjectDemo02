
/**
 * @author:cxw
 * @description:借书
 */
const INSERT_RESERVASTION = 'insert into `borrow` (book_id, user_id, borrow_date) values (?,?,?)'

/**
 * @author:wy
 * @description:添加图书
 */
const INSERT_BOOK =
  'INSERT INTO `Book`(name,publisher_id,category_id,storage,author,removed,digest,cover_url)VALUES(?,?,?,?,?,?,?,?)'

module.exports = {
  INSERT_BOOK,
  INSERT_RESERVASTION
}
