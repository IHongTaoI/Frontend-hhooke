### get
```javascript
// 获取get值
router.get('/b', async(ctx, next) => {
    ctx.state = {
        title: 'Koa2',
        name: '小明-list'
    }

    let url = ctx.url

  // 从上下文中直接获取
  let ctx_query = ctx.query
  
  ctx.body = {
    url,
    ctx_query
  }
    // await ctx.render('b', ctx.state)
})

```

### post
```javascript
// post
router.post('/c', async(ctx, next) => {

    console.log("-----------body-----",ctx.request.body);

    console.log("-----------userName-----",ctx.request.body.userName);
    console.log("-----------nickName-----",ctx.request.body.nickName);
    // ctx.body = 'Hello World';
  
   // 发送到页面
     // return  await ctx.render('index')
})
```