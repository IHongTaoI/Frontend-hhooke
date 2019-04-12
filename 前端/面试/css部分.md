<a name="TOC" id="TOC"></a>

| 参考目录                                               |
| ------------------------------------------------------ |
| [写出 5 种 css 隐藏元素的方法](#d1)                    |
| [CSS 选择符有哪些？哪些属性可以继承？](#d2)            |
| [CSS 优先级算法如何计算](#d3)                          |
| [关于居中](#d4)                                        |
| [css3 新特性](#d5)                                     |
| [用纯 CSS 创建一个三角形](#d6)                         |
| [超链接访问过后 hover 样式就不出现的问题如何解决](#d7) |
| [什么是 Css Hack?ie6,7,8 的 hack 分别是什么](#d8)      |
| [标准盒子模型](#d9)                                    |
| [经常遇到的浏览器的兼容性](#d10)                       |
| [什么是 CSS 预处理器 / 后处理器](#d11)                 |

<a name="d1" id="d1"></a>

### 写出 6 种 css 隐藏元素的方法

```css
opacity: 0;
visibility: hidden;
position: absolute;
top: -9999px;
left: -9999px;
z-index: -99999;
clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);
```

<a name="d2" id="d2"></a>

### CSS 选择符有哪些？哪些属性可以继承？

[目录](#TOC)

```
*   1.id选择器（ #myid）
    2.类选择器（.myclassname）
    3.标签选择器（div, h1, p）
    4.相邻选择器（h1 + p）
    5.子选择器（ul > li）
    6.后代选择器（li a）
    7.通配符选择器（ * ）
    8.属性选择器（a[rel = "external"]）
    9.伪类选择器（a:hover, li:nth-child）

*   可继承的样式： font-size font-family color, UL LI DL DD DT;

*   不可继承的样式：border padding margin width height ;
```

<a name="d3" id="d3"></a>

### CSS 优先级算法如何计算

[目录](#TOC)

- 优先级就近原则，同权重情况下样式定义最近者为准;

- 载入样式以最后载入的定位为准;

* 优先级为:
  - 同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
  - !important > id > class > tag (important 比 内联优先级高)

<a name="d4" id="d4"></a>

### 关于水平垂直居中

[目录](#TOC)

- **水平居中**

  ```css
  div {
    width: 200px;
    margin: 0 auto;
  }
  ```

- **固定宽高水平垂直居中**

  ```css
  div {
    position: relative; /*或者 绝对定位*/
    width: 300px;
    height: 200px;
    background: salmon;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -100px;
  }
  ```

  或者 ：

  ```css
  .wrap {
    position: absolute;
    width: 50px;
    height: 90px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  ```

- **未知宽高的元素水平垂直居中**
  可利用 js 进行控制，或者用 transform

  ```html
  <div>asasfa按时大苏打 啊是大</div>
  ```

  ```css
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    background: salmon;
    transform: translate(-50%, -50%);
  }
  ```

- **flex 布局水平垂直居中**
  需要两层 div

  ```html
  <div class="wrap">
    <div class="cont">垂直居中</div>
  </div>
  ```

  ```css
  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ```

- **display: tabel 水平垂直居中**
  只能用于行内元素

  ```html
  <div class="tabel">
    <div class="cell">123123</div>
  </div>
  ```

  ```css
  .tabel {
    display: table;
    width: 100%;
    height: 100%;
  }
  .cell {
    vertical-align: middle;
    text-align: center;
  }
  ```

<a name="d5" id="d5"></a>

### css3 新特性

[目录](#TOC)

- 新增各种 CSS 选择器 （: not(.input)：所有 class 不是“input”的节点）
- 圆角 （border-radius:8px）
- 多列布局 （multi-column layout）
- 阴影和反射 （Shadow\Reflect）
- 文字特效 （text-shadow、）
- 文字渲染 （Text-decoration）
- 线性渐变 （gradient）
- 旋转 （transform）
- 缩放,定位,倾斜,动画,多背景
- 例如:transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:

<a name="d6" id="d6"></a>

### 用纯 CSS 创建一个三角形

[目录](#TOC)

```css
#triangle {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

<a name="d7" id="d7"></a>

#### 超链接访问过后 hover 样式就不出现的问题如何解决？

[目录](#TOC)

被点击访问过的超链接样式不再具有 hover 和 active 了，解决方式是改变 CSS 属性的排列顺序：L-V-H-A（linked, visited, hover, active）。

<a name="d8" id="d8"></a>

### 什么是 Css Hack?ie6,7,8 的 hack 分别是什么

[目录](#TOC)

针对不同的浏览器写不同的 CSS Code 的过程，就是 CSS Hack。实例如下：

```css
#test {
  width: 300px;
  height: 300px;

  background-color: blue;
  background-color: red\9; /*  all ie */
  background-color: yellow\0; /* ie8 */
  +background-color: pink; /* ie7 */
  _background-color: orange; /* ie6  */
  :root #test {
    background: purple\9; /* ie9 */
  }

  @media all and {
    min-width: 0px;
  }
  #test {
    background-color: black\0;
  } /* opera */
  @media screen and {
    -webkit-min-device-pixel-ratio: 0;
  }
   {
    #test {
      background-color: gray;
    }
  } /* chrome and safari */
}
```

<a name="d9" id="d9"></a>

### 标准盒子模型

[目录](#TOC)

- 标准的 w3c 盒子模型的范围包括 margin、border、padding、content，并且 content 部分不包含其他部分。

- IE 盒子模型的范围也包括 margin、border、padding、content，和标准 w3c 盒子模型不同的是：ie 盒子模型的 content 部分包含了 border 和 padding。

<a name="d10" id="d10"></a>

### 经常遇到的浏览器的兼容性

[目录](#TOC)

- png24 位的图片在 iE6 浏览器上出现背景，解决方案是做成 PNG8.

- 浏览器默认的 margin 和 padding 不同。解决方案是加一个全局的\*{margin:0;padding:0;}来统一。

* IE6 双边距 bug:块属性标签 float 后，又有横行的 margin 情况下，在 ie6 显示 margin 比设置的大。

  - 浮动 ie 产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}

  - 这种情况之下 IE 会产生 20px 的距离，解决方案是在 float 的标签样式控制中加入 —\_display:inline;将其转化为行内属性。(\*这个符号只有 ie6 会识别)

  * **渐进识别的方式，从总体中逐渐排除局部。**

    - 巧妙的使用“\9”这一标记，将 IE 游览器从所有情况中分离出来。

    - 再次使用“+”将 IE8 和 IE7、IE6 分离开来，这样 IE8 已经独立识别。

      ```css
      .bb{
        background-color:red;/_所有识别_/
        background-color:#00deff\9; /_IE6、7、8 识别_/
        +background-color:#a200ff;/_IE6、7 识别_/
        _background-color:#1e0bd1;/_IE6 识别_/
        }
      ```

- IE 下,可以使用获取常规属性的方法来获取自定义属性,
  也可以使用 getAttribute()获取自定义属性;
  Firefox 下,只能使用 getAttribute()获取自定义属性。
  解决方法:统一通过 getAttribute()获取自定义属性。

* IE 下,even 对象有 x,y 属性,但是没有 pageX,pageY 属性;
  Firefox 下,event 对象有 pageX,pageY 属性,但是没有 x,y 属性。

- CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？
  当一个元素的 visibility 属性被设置成 collapse 值后，对于一般的元素，它的表现跟 hidden 是一样的。但例外的是，如果这个元素是 table 相关的元素，例如 table 行，table group，table 列，table column group，它的表现却跟 display: none 一样，也就是说，它们占用的空间也会释放。

  - 在谷歌浏览器里，使用 collapse 值和使用 hidden 值没有什么区别。

  - 在火狐浏览器、Opera 和 IE11 里，使用 collapse 值的效果就如它的字面意思：table 的行会消失，它的下面一行会补充它的位置。

<a name="d11" id="d11"></a>

### 什么是 CSS 预处理器 / 后处理器

[目录](#TOC)

- 预处理器例如：LESS、Sass、Stylus，用来预编译 Sass 或 less，增强了 css 代码的复用性，
  还有层级、mixin、变量、循环、函数等，具有很方便的 UI 组件模块化开发能力，极大的提高工作效率。

* 后处理器例如：PostCSS，通常被视为在完成的样式表中根据 CSS 规范处理 CSS，让其更有效；目前最常做的
  是给 CSS 属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。
