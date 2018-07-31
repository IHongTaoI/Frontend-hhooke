### ejs模板引擎
我之前被坑了很久

```javascript
// 后台
let data = {user: "ssaqe"};
    await ctx.render('index', { data })
// 前端
var homeData = '<%= data%>'

// homeData &#34;user&#34;:&#34;ssaqe&#34;
```

然后在网上查阅了很多文档

```javascript

var homeData = '<%- data%>'

这样子写就能显示正常了

```