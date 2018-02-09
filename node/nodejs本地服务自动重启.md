## 1. nodemon

首先为了是这个命令全局可用，最好我们进行全局安装: 
> npm install -g nodemon 

然后dos界面进入你的项目根目录:
> nodemon  server.js 

## 2.supervisor 

> npm install supervisor -g

这里注意一点的就是，supervisor必须安装到全局，如果你不安装到全局，错误命令会提示你安装到全局。

假设你的Node.js程序主入口是server.js，那么dos进入到你程序入口js的路径下执行

> supervisor node server.js

只需要执行（记住dos界面不能关闭），即可开始监控文件变化。