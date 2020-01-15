# :shaved_ice: 工具封装

## :bookmark:  JavaScript 复制内容

```javascript
let inp = document.createElement('input')
    inp.style.position = 'absolute'
    inp.style.left = '-9999px'
    inp.style.top = '-9999px'
    inp.style.zIndex = '-9999'
    inp.type = 'text'
    inp.value = '需要复制的内容'
    document.body.appendChild(inp)
    inp.select()
    document.execCommand('copy', false, null)
    alert('复制成功')
    document.body.removeChild(inp)
```

## :bookmark:  获取元素距离页面的位置

```javascript
  getOffset: {
    left (obj) {
      return obj.offsetLeft + (obj.offsetParent ? this.left(obj.offsetParent) : 0)
    },
    top (obj) {
      return obj.offsetTop + (obj.offsetParent ? this.top(obj.offsetParent) : 0)
    }
  }
```
