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
 * @author lqz 2020/11/4
 * @param  category
 * @returns 查询图书结果
 * @description 根据类型获取图书
 */
async function getBookByCategory (category) {
  return await mysql.query(sql.SELECT_BOOKS_BY_CATEGORY, [category])
}


/**
* @function 获取图书信息
* @description 根据书名获取图书
* @param bookName
* @return bookList
* @author Wang Ying 4/11/2020
 */
async function getBookByName (bookName) {
  return await mysql.query(selectSql.SELECT_BOOKS_BY_BOOKNAME, [bookName])
}

const getUserInfo = async function (userId) {
  const result = await mysql.query(sql.queryUserById, [userId])
  console.log(result)
  return result
}