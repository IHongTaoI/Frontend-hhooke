
# :boom: 常用 git 操作指南

[:blue_book: git图形界面操作软件](https://www.sourcetreeapp.com/)

## :dash: 开发流程

- `git clone` 拉取项目代码，不必多说

- `git branch <分支名>` 创建开发分支
  
  `git checkout <分支名>` 切换到新分支

  `git checkout -b <分支名>` 上面两个命令合为一个。
  
  `git push` 通常创建分支之后就将当前分支提交到远程仓库

- `git status` 查看当前分支工作区、暂存区的工作状态。

- `git diff` 此操作一般借助工具查看文件的修改,个人比较喜欢vscode

- `git add xx` 把xx文件添加到暂存区去

- `git commit .` 提交修改

  `git commit -m '这是注释'` 提交修改并打上注释

  `git commit -am(-a -m)`

- `git fetch --all` 拉取所有远端的最新代码，养成好习惯经常fetch代码

- `git pull` push之前先拉代码看看有没有冲突

- `git pull origin/master` 或者 `git merge origin/master` 经常更新master分支代码。保证分支不落后与master

- `git push` 推送当前分支到远端仓库

## :dash: 更多常用命令

- `git version` 查看git版本

- `git branch <-a | -r>` 查看本地所有的分支

  `-r` 查看所有远程分支

  `-a` 查看所有远程分支和本地分支

- `git branch -d <分支名>` 删除本地分支

  `git push origin -d <分支名>` 删除远程分支

- `git branch <分支名>` 创建分支

  `git checkout <分支名>` 切换分支

  `git checkout -b <分支名>` 创建并切换分支

- **`git commit --amend`**
  
  更改上一次提交

  [具体说明](./more.md#git-commit-amend)

- **`git stash`**

  当我们在开发一个版本的时候，突然上一个版本出了一个bug需要修复。这时候一般的做法就是将当前代码提交一个`commit`然后新建一条分支修改`bug`,但是这样子无非是污染到了`commit`提交信息，因为我们新版本还未开发完。所以 `git stash`就能够解决这个问题
  
  [具体说明](./more.md#git-stash)

- **`git log`**[具体使用](./more.md#git-log)
