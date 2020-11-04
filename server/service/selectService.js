/**
* @function 获取图书信息
* @description 通过出版社名获取图书信息
* @param publisherName
* @return bookList
* @author Chen Xiaowu 2020/11/3
 */
async function getBookByPublisher (publisherName) {
  const result = await mysql.query(sql.queryByPublisher, [publisherName])
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

const getUserInfo = async function (userId) {
  const result = await mysql.query(sql.queryUserById, [userId])
  console.log(result)
  return result
}