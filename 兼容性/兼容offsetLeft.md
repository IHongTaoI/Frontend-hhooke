### offsetLeft

是相对于父级定为元素来计算的，所以如下

```html
<body style="padding-top:200px">
    <div class="parent" style="positon:relative;">
        <div class="child"></div>
    </div>
</body>
```
获取child的offsetTop 是为0的，所以我们要写一套兼容写法;

```javascript
var offsetTop=function( elem ){ 
    var top = elem.offsetTop; 
    var parent = elem.offsetParent; 
    while(parent){ 
        top += parent.offsetTop; 
        parent = parent.offsetParent; 
    }
    return top; 
};
var offsetLeft=function( elem ){ 
    var left = elem.offsetLeft; 
    var parent = elem.offsetParent; 
    while( parent){ 
        left += parent.offsetLeft; 
        parent = parent.offsetParent; 
    }
    return left; 
};
```