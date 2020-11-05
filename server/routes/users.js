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
  const books =
    await dbService.getBookByPublisher(ctx.request.query.publisherName)
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
  ctx.body = await dbService.borrowBook(bookId, userId)
})

/**
 * @author lqz
 * @param  
 * @returns JSON
 * @description 根据类型获取图书
 */
router.get('/book/category', async ctx => {
  const category = ctx.query.category
  const books = await dbService.getBookBycategory(category)
  ctx.response.body = {
    books,
    code: 1
  }
})

/*
 *  author:wy
 *  name : getBookByName
 */

router.get('/book/bookName', async (ctx) => {
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
 * @returns JSON
 * @description 更新图书
 */
router.put('/book', async ctx => {
  let book = ctx.request.body
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
router.post('/book', async (ctx) => {
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
