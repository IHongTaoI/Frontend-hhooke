**方法说明：**
同步版的 fs.mkdir() 。

```javascript
fs.mkdirSync(path, [mode])
```

**接收参数：**
- path  将创建的目录路径
- mode  目录权限（读写权限），默认0777

**例子：**
```javascript
var fs = require('fs');
var creats = fs.mkdirSync('creatdir2', 0777);
console.log(creats);
```

