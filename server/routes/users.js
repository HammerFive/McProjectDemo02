const router = require('koa-router')()
const dbService = require('../service/db.js')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
/**
 *  author:hjgjgjh
 *  name :
 */
router.get('/books/publisher', async ctx => {
  const publisherName = ctx.request.query.publisherName
  console.log(publisherName)
  const obj = {}
  obj.boos = await dbService.getBookByPublisher(publisherName)
  obj.code = 
  ctx.response.body = obj
})

router.post('/books/borrow', async ctx => {
  const obj = ctx.request.body
  const result = await dbService.borrowBook(obj.bookId, obj.userId)
  ctx.response.body = result
})

/**
 * @author lqz
 * @param
 * @returns
 * @description 根据类型获取图书
 */
router.get('/books/clazz', async ctx => {
  const clazz = ctx.query.clazz

  console.log(clazz)

  const results = await dbService.getBookByclazz(clazz)
  const obj = {}
  obj.data = results
  obj.code = 1
  ctx.response.body = obj
})

/**
 * @author lqz
 * @param
 * @returns
 * @description 更新图书
 */
router.post('/bookupdate', async ctx => {
  let book = {}

  book = ctx.request.body
  await dbService.updateBook(book)
  ctx.response.body = {
    msg: 'update book successfully!',
    code: 1
  }
})

module.exports = router
