const UPDATE_BOOK_RESERVASTION = 'update book set number=number-1 where id = ?'

/**
 * @author:lqz
 * @description:更新图书
 */
const UPDATE_BOOK =
  'UPDATE book ' +
  'SET name=?,number=?,author=?,digest=?,cover=?,publisher_id=?,category_id=? ' +
  'WHERE book.id = ?'
