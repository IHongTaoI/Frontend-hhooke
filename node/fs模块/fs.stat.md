**方法说明：**
获取文件信息。

```javascript
fs.stat(path, [callback(err, stats)])
```

> 由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）

**接收参数：**
- path:文件路径
- callback  回调，传递两个参数，异常参数err, 文件信息数组 stats
- stats包含以下信息：(以下信息为案例中读取的文件信息，非默认值)
```json
{
 dev : 0 ,
 mode : 33206 ,
 nlink : 1 ,
 uid : 0 ,
 gid : 0 ,
 rdev : 0 ,
 ino : 0 ,
 size : 378(字节) ,
 atime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间> ,
 mtime : Tue Jun 13 2014 09:48:31 GMT +0800 <中国标准时间> ,
 ctime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间>
}
```

**例子：**
```javascript
var fs = require('fs');
fs.stat('content.txt', function(err, stats){
 if(err){
  throw err;
 }else{
  console.log(stats);
 }
})
```

**源码：**
```javascript
fs.stat = function(path, callback) {
  callback = makeCallback(callback);
  if (!nullCheck(path, callback)) return;
  binding.stat(pathModule._makeLong(path), callback);
};
```