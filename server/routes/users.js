const router = require('koa-router')()
const dbService = require('../service/db.js')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
/**
 * 查询书籍：根据出版社
 */
router.get('/book/publisher', async ctx => {
  const publisherName = ctx.request.query.publisherName
  console.log(publisherName)
  const obj = {}
  obj.books = await dbService.getBookByPublisher(publisherName)
  obj.code = 1
  ctx.response.body = obj
})
/**
 * 借书
 */
router.post('/book/borrow', async ctx => {
  const obj = ctx.request.body
  console.log(obj)
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

/*
 *  author:wy
 *  name : getBookByName
 */

router.get('/book', async (ctx) => {
  const bookname = ctx.query.name
  console.log(bookname)
  const results = await dbService.getBookByName(bookname)
  console.log(results)
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

/*
 *  author:wy
 *  name : bookadd
 */
router.post('/bookadd', async (ctx) => {
  console.log(ctx.request.body)
  const bookname = ctx.request.body.name
  const book = ctx.request.body
  // 先查看是否已经存在
  const results1 = await dbService.getBookByName(bookname)
  console.log(results1)
  const obj = {
    code: 0
  }
  if (results1.length === 0 ||
     (results1.length === 1 && results1[0].exist === 0)) {
    await dbService.addBook(book).then(results => {
      console.log(results)
      if (results.affectedRows === 1) {
        obj.code = 1
        obj.msg = 'successful'
        ctx.response.body = JSON.stringify(obj)
      } else ctx.response.body = JSON.stringify(obj)
    })
  } else ctx.response.body = JSON.stringify(obj)
})

/**
 * author: cxw
 * descirption: get user by id
 */
router.get('/user', async ctx => {
  const userId = ctx.request.query.userId
  const userInfo = await dbService.getUserInfo(userId)
  const result = { userInfo, code: 0 }
  if (userInfo.length !== 0) {
    result.code = 1
  }
  ctx.response.body = result
})
module.exports = router
