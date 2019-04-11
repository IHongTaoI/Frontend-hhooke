- <a href="#DOCTYPE1">DOCTYPE 有什么用</a>
- <a href="#DOCTYPE">HTML5 为什么只需要写`<!DOCTYPE HTML>`</a>
- <a href="#script">script、script async 和 script defer 的区别</a>
- <a href="#script2">为什么最好把 css 的 link 标签放在 head 标签中，而把 js 的 script 标签放在 body 标签前</a>
- <a href="#img">img 元素的 srcset 属性</a>
- <a href="#d1">什么是渐进式渲染</a>
- <a href="#d2">行内元素有哪些？块级元素有哪些？空(void)元素有那些？</a>
- <a href="#d3">常见的浏览器内核有哪些</a>
- <a href="#d4">介绍一下你对浏览器内核的理解</a>
- <a href="#d5">如何实现浏览器内多个标签页之间的通信?(阿里)</a>
- <a href="#d6">webSocket 如何兼容低浏览器</a>

<a name="DOCTYPE1" id="DOCTYPE1"></a>

## DOCTYPE 有什么用

1. WEB 世界中存在许多不同的文档，只有了解文档的类型，浏览器才能正确的把文档显示出来
2. HTML 也有多个不同的版本，只有确切知道页面使用的是哪个具体的 HTML 版本，浏览器才能完全正确地显示出 HTML 页面

   所以使用<!DOCTYPE>来解决这个问题，它不是 HTML 标签，只是为浏览器提供文档类型的声明。

   HTML5 类型文档的声明为：`<!DOCTYPE html>`

   `<!DOCTYPE>`声明位于位于 HTML 文档中的第一行，处于`<html>`标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现

   标准模式的排版和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作

<a name="DOCTYPE" id="DOCTYPE"></a>

## HTML5 为什么只需要写`<!DOCTYPE HTML>`

HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；而 HTML4.01 基于 SGML,所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。

# cookie，session，sessionStorage，localStorage 对比

| 操作/名        | session                                             | cookie                                                                      | sessionStorage                                                                     | localStorage |
| -------------- | --------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------ |
| 由谁初始化     | 服务器                                              | 客户端或者服务器(一般是服务器)，如果客户端创建则默认关闭浏览器 cookies 失效 | 客户端                                                                             | 客户端       |
| 存储位置       | 服务器，但是 sessionId 会返回客户端存储在 cookie 中 | 客户端                                                                      | 客户端                                                                             | 客户端       |
| 生命周期       | 设定超时时间（默认关闭浏览器失效）                  | 手动设置                                                                    | 当前会话有效(同源同窗口)关闭页面或浏览器被清除，刷新或者进入另一个同源页面没有影响 | 永久         |
| 容量           | 不宜过大，否则会给服务器性能造成影响                | 4kb                                                                         | 5mb                                                                                | 5mb          |
| 与服务器端通信 | 服务器操作                                          | 每次都会携带在 http 头中，保存过多的数据会带来性能                          | 仅在客户端保存，不参与服务器通信                                                   | 当前页面窗口 | 不与服务器通信 |
| 访问权限       | 任意窗口（因为 sessionId 存在 cookie 中）           | 任意窗口                                                                    | 任意窗口                                                                           |

<a name="script" id="script"></a>

# `<script>`、`<script async>`和`<script defer>`的区别

- `<script>` : 遇到该标签将导致 HTML 解析中断，然后去提取对应脚本并立即执行，执行结束 HTML 才能继续解析。

* `<script async>` : 遇到该标签 HTML 并不会停止解析，而是与脚本的提取和执行工作同时进行，脚本执行完毕时间不确定，可能在 HTML 解析完成之前或之后，所以只有当脚本与其他脚本独立时才使用该标签，否则可能导致后续脚本访问不到前面脚本情况。

- `<script defer>` : 脚本提取过程与 HTML 解析过程并行，但执行过程必须等到 HTML 解析完毕，如果有多个 defer，脚本的执行顺序与在文档中的出现顺序执行。

  > 注：没有 src 属性的脚本，async 与 defer 属性会被忽略。

<a name="script2" id="script2"></a>

# 为什么最好把 css 的`<link>`标签放在`<head>`标签中，而把 js 的`<script>`标签放在`</body>`标签前？

1. css 标签应该放在<head></head>标签之间，因为如果放在</body>标签的前面，那么当 DOM 树构建完成了，渲染树才构建，那么当渲染树构建完成，浏览器不得不再重新渲染整个页面，这样造成了资源的浪费，效率也不高。如果放在<head></head>之间，浏览器边构建边渲染，效率要高的多。将样式表放在文档底部附近一些浏览器会阻止渲染，以避免在页面样式发生变化时，重新绘制页面中的元素。所以将<link>标签放在<head>标签中这种做法可以防止呈现给用户空白的页面或没有样式的内容。

2. 当 js 文件放在<head>中时，浏览器构建 DOM 树的时候遇到 js 文件加载会阻塞，也就是说，浏览器不会加载 body 中的标签，一旦这个 js 文件的数量和内容都比较大，那么就会造成页面空白的情况，导致较差的用户体验。（js 文件之所以会阻塞后续加载是因为在当前 JS 加载和执行完成前，后续所有资源的下载有可能是没必要的）。所以 script 标签最好放在</body>标签的前面，因为放在所有 body 中的标签后面就不会出现网页加载时出现空白的情况，可以持续的给用户提供视觉反馈，同时在有些情况下，会降低错误的发生。

<a name="img" id="img"></a>

## img 元素的 srcset 属性

```html
<img src="small.jpg " srcset="big.jpg 1440w, middle.jpg 800w, small.jpg 1x" />
```

上面的例子表示浏览器宽度达到 800px 则加载 middle.jpg ，达到 1400px 则加载 big.jpg。注意：像素密度描述只对固定宽度图片有效。

img 元素的 size 属性给浏览器提供一个预估的图片显示宽度。

```html
<img
  src="images/gun.png"
  srcset="images/bg_star.jpg 1200w, images/share.jpg 800w, images/gun.png 320w"
  sizes="(max-width: 320px) 300w, 1200w"
/>
```

上面的例子表示浏览器视口为 320px 时图片宽度为 300px，其他情况为 1200px。

**css 属性 image-set()支持根据用户分辨率适配图像。**

```css
body {
  background-image: -webkit-image-set(
    url(../images/pic-1.jpg) 1x,
    url(../images/pic-2.jpg) 2x,
    url(../images/pic-3.jpg) 600dpi
  );
  background-image: image-set(
    url(../images/pic-1.jpg) 1x,
    url(../images/pic-2.jpg) 2x,
    url(../images/pic-3.jpg) 600dpi
  );
}
```

述代码将会为普通屏幕使用 pic-1.jpg，为高分屏使用 pic-2.jpg，如果更高的分辨率则使用 pic-3.jpg，比如印刷。

<a name="d1" id="d1"></a>

## 什么是渐进式渲染

渐进式渲染是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。

<a name="d2" id="d2"></a>

## 行内元素有哪些？块级元素有哪些？空(void)元素有那些？

首先：CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值，如 div 的 display 默认值为“block”，则为“块级”元素；span 默认 display 属性值为“inline”，是“行内”元素

1. 行内元素有：a b span img input select strong（强调的语气）

2. 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p

3. 常见的空元素：br hr img input link meta

<a name="d3" id="d3"></a>

## 常见的浏览器内核有哪些

- Trident 内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称 MSHTML]

- Gecko 内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等

- Presto 内核：Opera7 及以上。 [Opera 内核原为：Presto，现为：Blink;]

- Webkit 内核：Safari,Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

**编写 css 的时候兼容不同内核** ：

```css
/* 设置文字不可选取 */
* {
  -moz-user-select: none; /* 火狐 浏览器 */
  -webkit-user-select: none; /* Webkit 浏览器 */
  -o-user-select: none; /* Opera 浏览器 */
  -ms-user-select: none; /* IE10 浏览器 */
  -khtml-user-select: none; /* 早期浏览器 */
  user-select: none; /* 默认 */
}
```

<a name="d4" id="d4"></a>

## 介绍一下你对浏览器内核的理解

主要分成两部分：渲染引擎(layoutengineer 或 RenderingEngine)和 JS 引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS 引擎则：解析和执行 javascript 来实现网页的动态效果。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。

[内核笔记](https://github.com/WebUnion-core/anthill/blob/master/WJT20/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%AC%94%E8%AE%B0.md)

| 引擎/浏览器 | Chrome | Firefox      | Safari | IE      |
| ----------- | ------ | ------------ | ------ | ------- |
| 渲染引擎    | Blink  | Gecko        | Webkit | Trident |
| js 引擎     | V8     | SpiderMonkey | Nitro  | Chakra  |

<a name="d5" id="d5"></a>

## 如何实现浏览器内多个标签页之间的通信?(阿里)

WebSocket、SharedWorker；

也可以调用 localstorge、cookies 等本地存储方式；

localstorge 另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，

我们通过监听事件，控制它的值来进行页面信息通信；

注意 quirks：Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常

[实现多个标签页之间通信的几种方法(sharedworker)](https://www.jianshu.com/p/31facd4934d7)

<a name="d6" id="d6"></a>

## webSocket 如何兼容低浏览器

Adobe Flash Socket 、

ActiveX HTMLFile (IE) 、

基于 multipart 编码发送 XHR 、

基于长轮询的 XHR
