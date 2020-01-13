# 更多

## :boom: git commit --amend

改写提交，例如目前我有一个刚刚提交的更改，这时候我发现少打了一个字符，需要更改这个提交这时候我们就可以更改这个提交

![avatar](/hhooke/git/1.png)

修改好test.md文件后

![avatar](/hhooke/git/2.png)

这时候查看 git 日子 发现之前的 `一个提交` 已经被替换成了 `这是一个新的提交`

![avatar](/hhooke/git/3.png)

## :boom: git stash

当我们在开发一个版本的时候，突然上一个版本出了一个bug需要修复。这时候一般的做法就是将当前代码提交一个`commit`然后新建一条分支修改`bug`,但是这样子无非是污染到了`commit`提交信息，因为我们新版本还未开发完。所以 `git stash`就能够解决这个问题

🍗 **保存当前的代码**

- `git stash` 直接将代码保存到stash中

- `git stash save "message"` 将代码保存到stash中,病对其加以注释(新文件会被忽略)

- `git stash save -a "message"` 包含新文件

🍗 **查看stash**

- `git stash list` 查看stash了哪些存储

- `git stash show` 查看第一条stash的改动信息

  如需查看其他stash的改动信息,如查看第二个 `git stash show stash@{1}`

  `-p` 显示具体改动 `git stash show -p`

🍗 **取回stash的代码**

- `git stash apply` 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}

  如需使用其他的 `git stash apply stash@{$num}`

- `git stash pop` 与 `apply` 差不多，只不过这个在取出之后会将此stash空间删除

- `git stash drop stash@{$num}` 丢弃stash@{$num}存储，从列表中删除这个存储

- `git stash clear` 删除所有缓存的stash

🍗 **举例说明**

当前我的git信息

![avatar](/hhooke/git/4.png)

当前我的分支修改状态 一个改动的文件，一个新增的文件

![avatar](/hhooke/git/5.png)

如果我们直接执行 `git stash` 新增的文件`testNew.md`是不会被添加进去的，需要执行 `git stash -a` 方可将两个文件都缓存进去

如果添加stash的时候不写备注，则会使用分支最近的一条log的备注

```key
PS C:\study\Frontend-hhooke> git stash list
stash@{0}: WIP on master: 8422a02 test文件
```

使用 `git stash save -a "这是备注"`

```key
PS C:\study\Frontend-hhooke> git stash list
stash@{0}: On master: 这是备注
```

## :boom: git log
