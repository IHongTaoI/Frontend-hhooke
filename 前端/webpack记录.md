<a id="TOC"></a>

| 目录                   |
| ---------------------- |
| [关于 CSS loader](#d3) |

<a id="d3"></a>

### 关于 CSS loader

[目录](#TOC)

CSS loader 会把把非根路径的 url 解释为相对路径,加~前缀才会解释成模块路径。
在使用时加上~,告诉加载器它是一个模块，而不是相对路径。

```html
<img src="~assimg/ava.png" alt="" />
```

```html
<style>
  .logo {
    background: url(~asset/images/bg.jpg);
  }
</style>
```

这个时候，我们在打包的时候，就会根据我们配置的 alias 查找：

```js
...
  resolve: {
    alias: {
      'assimg': resolve('static/img'),
    }
  },
...
```
