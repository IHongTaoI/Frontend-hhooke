# :shaved_ice: 浏览器h5开发坑位

## :boom: 百度浏览器 中fixed被隐藏的问题

在开发浏览器h5的页面中，发现百度浏览器下，如果页面有 元素 是用的 fixed定位，并且fixed内容中含有图片，或者是一整张图片的情况下，会被百度浏览器识别为广告。

[具体详情](https://www.jianshu.com/p/01410a7b6183)

## :boom: ios 调起键盘后点击不了

```html
  <input type="number" pattern="[0-9]*" class="r" placeholder="请填写手机号" v-model="phone" @blur="scrollto0">
```

```javascript
methods: {
  scrollto0 () {
    window.scrollTo(0, 0);
  }
}
```

[具体详情](https://www.jianshu.com/p/a53c40e8a0b9)
