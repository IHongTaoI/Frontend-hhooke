### Getting Started

使用npm 安装 mongoose : 

> $ npm install mongoose

首先，建立连接，连接mongoDB数据库，前提是保证你已经安装了该数据库并运行成功

```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```

然后需要监听是否有连接成功

```javascript
var db = mongoose.connection;
/**
 * 连接成功
 */
db.on('connected', function () {
    console.log('mongoose 连接成功 ' + DB_URL);
});

/**
 * 连接异常
 */
db.on('error', function (err) {
    console.log('mongoose 连接错误: ' + err);
});

/**
 * 连接断开
 */
db.on('disconnected', function () {    
    console.log('Mongoose 连接断开');  
});  
```

在Mongoose中，所有的东西都来自于 Schema,先部追究其原理，首先看看怎么使用它.

```javascript
var userSchema = mongoose.Schema({
    name: String
})
```

目前一切都很顺利，我们有了一个带有属性的 Schema “name” , 他是一个字符串 , 下一步我们将Schema 编译成Model。

```javascript
var User = mongoose.model('user', UserSchema)

var hongtao = new User({ name: 'hongtao' })
console.log(hongtao.name) // 'Silence'
```

接下来就是将这条数据保存到数据库中，调用save() 方法保存.

```javascript
hongtao.save((err, data)=>{
    if(err) console.log(err);
    console.log(data);
})
```