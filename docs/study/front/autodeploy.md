---
sidebarDepth: 2
---

# :shaved_ice: 手写自动化部署

## :boom: 一、搭建git服务器

> 本人使用的是 cenos 系统的腾讯云服务器

----

- ### 1. **服务器安装git**

    ```bash
    yum install -y git
    ```

    安装完了之后使用命令查看版本，检验是否安装成功。

    ```bash
    git --version
    ```

- ### 2. **创建一个系统用户进行git仓库的管理**

    我起的是 htgit(先检测这个用户是否存在)

    ```bash
    [root@VM_183_60_centos hongtao]# id htgit
    ```

    如果存在会出现:

    ```bash
    uid=1001(htgit) gid=1001(htgit) groups=1001(htgit)
    ```

    如果不存在则提示

    ```bash
    id: htgit: no such user
    ```

    就可以创建用户了,输入以下命令

    ```bash
    useradd htgit
    ```

    创建完成使用`id htgit`检测是否创建成功

- ### 3. **创建项目仓库**

    创建一个项目文件夹

    ```bash
    mkdir -p <文件夹名字>
    # 比如我的是
    mkdir -p mypro
    ```

    创建git仓库

    ```bash
    mkdir -p myblog.git
    ```

    初始化git仓库

    ```bash
    git init --bare myblog.git
    ```

    使用 `ll`命令查看目录信息

    ```bash
    # ll
    drwxr-xr-x  2 root root 4096 Jan 29 16:19 myblog.git
    ```

    myblog.git 是归属root用户的，现在修改成我们之前新建的htgit用户。

    ```bash
    sudo chown -R htgit:htgit myblog.git
    ```

    服务器拉取服务器git仓库的代码

    ```bash
    git clone ./myblog.git
    ```

    `ll`查看当前文件夹

    ```bash
    drwxr-xr-x  3 root  root  4096 Jan 29 16:34 myblog
    drwxr-xr-x  7 htgit htgit 4096 Jan 29 16:26 myblog.git
    ```

    > 注意：把`myblog`目录也要改成`htgit`用户的权限，否则git钩子在操作的时候会没有权限

## :boom: 二、配置sshd 免密码连接

----

- ### 1. **服务器上建立ssh验证**

    使用 `cd ~htgit` 或者 `cd /home/htgit` 进入到我们htgit的用户目录,创建.ssh文件夹。

    ```bash
    mkdir .ssh
    ```

    更改权限

    ```bash
    chown -R htgit:htgit .ssh
    chmod -R 700 .ssh
    ```

    进入.ssh/

    ```bash
    cd .ssh
    ```

    创建 authorized_keys

    ```bash
    vim authorized_keys
    ```

    > 一会需要将客户端的公钥填写到这个文件上

    更改此文件的权限

    ```bash
    chmod 600 authorized_keys
    ```

- ### 2. **客户端配置ssh**

    ```bash
    ssh-keygen -t rsa -C '你的邮箱'
    ```

    如果之前创建过直接使用就行了

    > 本人客户端是 windows 系统

    找到系统盘下一般是
    `C:\Users\用户名\.ssh`的`id_rsa.pub`文件。用编辑器将它打开，将里面的内容复制到之前我们在服务器上创建的那个authorized_keys文件里去。

## :boom: 三、创建客户端本地项目

----

- ### 1. **客户端拉取代码**

    比如我是在window系统上，你得安装了git，打开git bash， 输入之前我们在服务器装的git仓库的路径

    ```bash
    git clone htgit@[你的服务器ip地址]:[你的git仓库路径]
    ```

    比如我的:

    ```bash
    git clone htgit@139.199.72.20:/usr/hongtao/myblog.git
    ```

- ### 2. **配置本地代码**

    本人还是以iview-admin项目为例子

    [iview-admin代码地址](https://github.com/iview/iview-admin)

    进入上一步骤我们`git clone`下来的目录`myblog`里

    这里我就不做演示了，直接将iview-admin的代码拷贝进来。然后提交上传

- ### 3. **服务器运行代码**

    上一步的操作使得我们服务器上的 `myblog.git`仓库上有了我们客户端推送过来的代码了，之前我们在服务器上 `git clone ./myblog.git`的时候也生成了一个myblog的文件夹。进入这个文件夹输入`git pull`即可获取当前服务器git仓库的最新代码。然后执行

    ```bash
    npm i
    npm run dev
    ```

    之后即可在服务器跑起来了。

    到了这一步之后我们便知道了如何手动的去运行前端代码了。

    在服务器上运行前端项目有很多种方式。如：

  - nginx静态资源服务器
  - nodeJs服务器
  - php服务
  - 。。。等等

    > 本文以nodejs运行的前端项目为例子。直接使用webpack的热更新运行项目。

## :boom: 四、编写git钩子

----

进入我们的服务器git仓库文件夹里

```bash
cd /usr/hongtao/myblog.git
```

该目录下有一个hooks目录`cd hooks`进入

编写一个叫post-receive的文件

```bash
vim post-receive
```

写入如下内容

```bash
#!/bin/bash
DIR=/usr/hongtao/myblog
cd $DIR
echo $DIR
echo '服务器代码更新'
unset $(git rev-parse --local-env-vars)
git fetch --all
git reset --hard origin/master
git pull
npm install
```

添加可执行权限

```bash
chmod +x post-receive
```

每当我们客户端提交一次代码，这个钩子就会运行一次。由于我们的前端代码是热更新的作用，当代码更新了，我们直接访问的就是我们最新的页面。

如有问题请联系 qq：836717428
