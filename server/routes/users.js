const router = require('koa-router')()
const dbService = require('../service/db.js')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
/**
 *  author:
 *  name :
 */
router.get('/books/publisher', async ctx => {
  const publisherName = ctx.request.query.publisherName
  console.log(publisherName)
  const obj = {}
  obj.boos = await dbService.getBookByPublisher(publisherName)
  obj.code = 1
  ctx.response.body = obj
})

router.get('/books/borrow', async ctx => {
  const bookId = '2'
  const userId = '3'
  const result = await dbService.borrowBook(bookId, userId)
  ctx.response.body = result
})

module.exports = router
