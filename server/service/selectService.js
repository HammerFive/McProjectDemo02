const mysql = require('../config/mysql_config.js')
const selectSql = require('../utils/sql/selectSql.js')

/**
* @function 获取图书信息
* @description 通过出版社名获取图书信息
* @param publisherName
* @return bookList
* @author cxw 2020/11/3
 */
async function getBookByPublisher (publisherName) {
  const result = await mysql.query(
    selectSql.SELECT_BOOKS_BY_PUBLISHER,
    [publisherName]
  )
  return result
}

/**
 * @author lqz
 * @description 根据类型获取图书
 * @param  (clazz)
 * @returns 查询图书结果
 */
const getBookByclazz = function (clazz) {
  return mysql.query(sql.queryByClazz, [clazz])
}

/**
* @function 获取图书信息
* @description 根据书名获取图书
* @param bookName
* @return bookList
* @author Wang Ying 4/11/2020
 */
const getBookByName = function (bookName) {
  return mysql.query(sql.queryByName, [bookName])
}

/**
* @function 获取用户信息
* @description 根据用户ID获取用户信息
* @param userId
* @return user
* @author cxw 2020/11/4
 */
const getUserInfo = async function (userId) {
  return await mysql.query(selectSql.SELECT_USER_ID, [userId])
}

module.exports = {
  getUserInfo,
  getBookByPublisher
}
