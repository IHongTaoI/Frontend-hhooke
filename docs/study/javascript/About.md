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
