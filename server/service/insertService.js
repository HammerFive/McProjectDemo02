/**
* @function 更新图书信息
* @description 添加图书
* @param book
* @return successmessage
* @author Wang Ying 4/11/2020
 */
const addBook = function (book) {
  return mysql.query(sql.addBook,
    [book.name, book.publisher_id, book.clazz_id, book.number,
      book.author, 1, book.digest, book.cover])
}



/**
* @function 借书
* @description 通过图书id和用户id借书
* @param bookId
* @param userId
* @return 借书结果
* @author Chen Xiaowu 3/11/2020
 */
async function borrowBook (bookId, userId) {
  let result = await mysql.query(sql.queryBookNumber, [bookId])
  if (result[0].number > 0) {
    const date = new Date().toLocaleDateString()
    await mysql.query(sql.insertBorrow, [bookId, userId, date])
      .then(async (data) => {
        await mysql.query(sql.updateBookNumber, [bookId])
        result = { msg: 'borrow book succeed', code: 1 }
      })
      .catch((error) => {
        console.log(error)
        result = { msg: 'borrow book failed!', code: 0 }
      })
  }
  return result
}