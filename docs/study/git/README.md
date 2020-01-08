# :boom: 常用 git 操作指南

[:blue_book: git图形界面操作软件](https://www.sourcetreeapp.com/)

## :dash: 开发流程

- `git clone` 拉取项目代码，不必多说

- `git checkout -b develop`
  
  创建开发分支，一般开发不会在master分支上面。
  
  `git push` 通常创建分支之后就将当前分支提交到远程仓库

- `git status` 查看当前分支工作区、暂存区的工作状态。

- `git diff` 此操作一般借助工具查看文件的修改,个人比较喜欢vscode

- `git commit .` 提交修改

- `git fetch --all` 拉取所有远端的最新代码，养成好习惯经常fetch代码

- `git pull` push之前先拉代码看看有没有冲突

- `git pull origin/master` 或者 `git merge origin/master` 经常更新master分支代码。保证分支不落后与master

- `git push` 推送当前分支到远端仓库

## :dash: 更多常用命令

- `git version` 查看git版本

- `git branch <-a | -r>` 查看本地所有的分支

  `-r` 查看所有远程分支

  `-a` 查看所有远程分支和本地分支
