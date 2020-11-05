const router = require('koa-router')()
const selectService = require('../service/selectService.js')
const insertService = require('../service/insertService.js')
const updateService = require('../service/updateService.js')
router.prefix('/users')

/**
 * 根据出版社获取图书
 */
router.get('/book/publisher', async ctx => {
  const books =
    await selectService.getBookByPublisher(ctx.request.query.publisherName)
  ctx.response.body = {
    books,
    code: 1
  }
})

/**
 * 借书
 */
router.post('/book/reservation', async ctx => {
  const { bookId, userId } = ctx.request.body
  ctx.body = await insertService.borrowBook(bookId, userId)
})

/**
 * 根据类型获取图书
 */
router.get('/book/category', async ctx => {
  const category = ctx.query.category
  const books = await selectService.getBookByCategory(category)
  ctx.response.body = {
    books,
    code: 1
  }
})

/**
 * 根据书名获取图书
 */
router.get('/book/bookName', async (ctx) => {
  const bookname = ctx.query.name
  const results = await selectService.getBookByName(bookname)
  ctx.body = {
    books: results,
    code: 1
  }
})

/**
 * 更新图书
 */
router.put('/book', async ctx => {
  const book = ctx.request.body
  await updateService.updateBook(book)
  ctx.response.body = {
    msg: 'update book successfully!',
    code: 1
  }
})

/**
 * 添加图书
 */
router.post('/book', async (ctx) => {
  const bookname = ctx.request.body.name
  const book = ctx.request.body
  // 先查看是否已经存在
  const results1 = await selectService.getBookByName(bookname)
  if (results1.length === 0 ||
     (results1.length === 1 && results1[0].removed === 1)) {
    await insertService.addBook(book).then(results => {
      if (results.affectedRows === 1) {
        ctx.response.body = { msg: 'successful', code: 1 }
      } else ctx.response.body = { msg: 'error', code: 0 }
    })
  } else ctx.response.body = { msg: 'Book already exist', code: 0 }
})

/**
 * 获取用户
 */
router.get('/user', async ctx => {
  const userId = ctx.request.query.userId
  const userInfo = await selectService.getUserInfo(userId)
  const result = { userInfo, code: 0 }
  if (userInfo.length !== 0) {
    result.code = 1
  }
  ctx.response.body = result
})
module.exports = router
