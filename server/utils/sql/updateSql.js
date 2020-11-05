/**
 * @author:cxw
 * @description:更新图书数量
 */
const UPDATE_BOOK_RESERVASTION = 'UPDATE book SET storage=storage-1 WHERE id = ?'

/**
 * @author:lqz
 * @description:更新图书
 */
const UPDATE_BOOK =
  'UPDATE book ' +
  'SET name=?,number=?,author=?,digest=?,cover=?,publisher_id=?,category_id=? ' +
  'WHERE book.id = ?'

module.exports = {
  UPDATE_BOOK_RESERVASTION
}
