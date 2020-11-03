const mysql = require('../utils/query.js')
const sql = require('../utils/sql.js')

async function getBookByPublisher (publisherName) {
  const result = await mysql.query(sql.queryByPublisher, [publisherName])
  return result
}

async function borrowBook (bookId, userId) {
  let result = await mysql.query(sql.queryBookNumber, [bookId])
  if (result[0].number > 0) {
    const date = new Date().toLocaleDateString()
    await mysql.query(sql.insertBorrow, [bookId, userId, date])
      .then(async (data) => {
        await mysql.query(sql.updateBook, [bookId])
        result = { msg: 'borrow book succeed', code: 1 }
      })
      .catch((error) => {
        console.log(error)
        result = { msg: 'borrow book failed!', code: 0 }
      })
  }
  return result
}

module.exports = {
  getBookByPublisher,
  borrowBook
}
