# :shaved_ice: pm2实践

## :boom: 概述

### 定义

  `pm2`是常用的node进程管理工具，它可以提供node.js应用管理、性能监控、负载均衡等。因为在工作中遇到服务器重启后，需要一个个去重新启动每个服务，这样不仅繁琐、效率低，而且容易遗忘开启一些服务

### PM2的主要特效

- 内建负载均衡（使用 Node cluster 集群模块）
- 后台运行
- 0 秒停机重载，我理解大概意思是维护升级的时候不需要停机.
- 具有 Ubuntu 和 CentOS 的启动脚本
- 停止不稳定的进程（避免无限循环）
- 控制台检测
- 提供 HTTP API
  -远程控制和实时的接口 API ( Nodejs 模块,允许和 PM2 进程管理器交互 )

## :boom: 安装

  `npm install -g pm2`

  安装成功后，会自动创建以下目录

  ```key
    $HOME/.pm2/logs // 包括所有应用的日志
    $HOME/.pm2/pids // 包括所有应用的 pids
    $HOME/.pm2/dump.pm2 // 开机自启动配置
    $HOME/.pm2/pm2.log // pm2 日志
    $HOME/.pm2/pm2.pid // pm2 pid
  ```

 > `$HOME`指的是桌面目录

## :boom: 使用

- 命名别名 `testStart` , 启动脚本为 `npm run start`

  `pm2 start npm --watch --name testStart -- run start`

- 命令行参数

  - `--watch`：监听应用目录的变化，一旦发生变化，自动重启。

  - `-i or --instance`：启用多少个实例，可用于负载均衡，如果 -i 0 或者 -i max，则根据当前机器核数确定实例数目。

  - `--ignore-watch`：排除监听的目录或文件，可以是特定的文件名，也可以是正则。

  - `-n or --name`：应用的名称，查看应用信息的时候可以用到。

  - `-o or --output path`：标准输出日志文件的路径

  - `-e or --error path`：错误输出日志文件的路径。
