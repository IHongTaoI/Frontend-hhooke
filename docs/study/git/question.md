# :boom: 一些开发中遇到的问题

## :dash: 回滚问题

在开发过程中，经常会遇到回滚问题。

### 回滚（回退）到某个版本

- 显示提交的log `git log`

  ```key
  commit 9ba39212b8d8ccfcd3310d954e5edc030d466963
  Author: hongtao <836717428@qq.com>
  Date:   Thu Jan 9 10:53:30 2020 +0800

      这是一个提交

  commit 0b2b6a4438ccb20a0f63baa13dbff1e4d1b369ce
  Author: hongtao <836717428@qq.com>
  Date:   Thu Jan 9 10:53:30 2020 +0800

      这是一个提交

  commit 5b4a78d93e7d2fd89aa4eea6629d505a05c93120
  Author: hongtao <836717428@qq.com>
  Date:   Fri Jan 3 09:38:15 2020 +0800

      update

  commit 0119008b7bd307e71b1d8536cf2c0ee5ad7ab558
  Author: unknown <836717428@qq.com>
  Date:   Wed Jun 26 10:05:14 2019 +0800
  ```

- 回滚到指定的版本

  `git reset --hard 5b4a78d93e7d2fd89aa4eea6629d505a05c93120`

- 强制提交

  `git push -f origin master`

> 注意：此操作会丢失之前的commit

### 恢复到之前某个 commit

如果我们享撤销之前的某一个版本，但是邮箱保留这个版本之后的commit。就可以用 `git revert`

例如,现在仓库里有3个文件 `版本1 --> test1文件`、`版本2 --> test2文件`、`版本3 --> test3文件`。我需要将版本2进行重做

```shell
3fdcce2b2f7a76a1307b17ae45fc0682870a68f9 (HEAD -> master, origin/master, origin/HEAD) 版本3
a451f370bc8aef766cdcdee688dc248f3b20bb12 版本2
a954afb1cba9b50420dc8346e6c971870fab1812 版本1
```

`git revert -n a451f370bc8aef766cdcdee688dc248f3b20bb12`

```key
2d27c026cb6ec32e0466b70171c5605527ad3aec (HEAD -> master) Revert "版本2"
3fdcce2b2f7a76a1307b17ae45fc0682870a68f9 (origin/master, origin/HEAD) 版本3
a451f370bc8aef766cdcdee688dc248f3b20bb12 版本2
a954afb1cba9b50420dc8346e6c971870fab1812 版本1
```

此时仓库中之前添加`test2`文件就不见了，只剩下`test1`和`test3`文件

## :dash: 文件名大小写问题
