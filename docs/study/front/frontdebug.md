---
sidebarDepth: 2
---

# :shaved_ice: 前端调试

## 一.为什么需要调试

解决 bug 通常要对代码进行调试，这样才能比较容易的找出关键性问题。掌握一个好的调试技巧是一个开发人员必备的基本技能。

## 二.基本调试（pc 端）

这里我们拿一套 iview-admin 的源码来进行调试

- ### 肉眼调试

所谓肉眼调试就是指直接看代码进行调试，这种方式效率非常低下。

- ### 2.console

  - **log(...)**

    查看 console.log(...)打印出的日志应该是目前大多数前端惯用的调试方法。但是这种方式对于缕清程序运行的步骤和过程来说是比较困难的。
    比如，我要查看一个函数被调用的位置，这就比较难找出。查看下面代码

    ![1](/hhooke/front/debug1.png)

    我们需要找到 updateMenulist() 被调用了几次，在哪被调用的。当然，被调用了几次我们很容易查看，只需要在函数内打印一下即可。

    ```js
    updateMenulist (state) {
      console.log("我被调用了")
    }
    ```

    浏览器控制台中就会显示出来

    ![1](/hhooke/front/debug2.png)

    但是我们想知道它是在哪里被调用的，这时我们会想到，直接在文件夹里搜索这个函数不就可以了吗，如

    ![1](/hhooke/front/debug3.png)

    搜索到的结果是有 4 个地方调用了这个函数，但是控制台里只打印了两次，那么，继续往下看。

  - **trace(...)**
    这个 console.trace()的概述是：向 Web 控制台输出一个堆栈跟踪。意思就是打印当前执行位置到 console.trace()的路径信息.使用 console.trace()可以打印出详细的调用堆栈：
    ![1](/hhooke/front/debug4.png)
    ![1](/hhooke/front/debug5.png)

  - **table(...)**（此处摘抄至别的文章）
    我们经常会遇到这样的场景：获取到一个用户列表，每个用户有很多属性，但是我们只想查看其中的某些属性，在用 console.log 打印出来的时候需要把每个用户对象展开一个个查看，非常麻烦。而 console.table 完美的解决这个问题

- ### 3.断点调试

> 如果是使用 webpack 打包了需要将打开 map 模式，否则断点断不到具体文件。

- **浏览器中断点**

  之前我们 console.log()打印的时候，后面会出现打印的具体文件位置。

  ![1](/hhooke/front/debug6.png)

  点击之后会跳到这个文件的具体位置。之后点击我箭头所指的位置就断点了

  ![1](/hhooke/front/debug7.png)

  之后就可以按 F5 刷新断点调试了，程序运行到这个地方会被卡住，然后你就可以查看当前的环境中的一些信息，如下

  ![1](/hhooke/front/debug8.png)

  查看调用栈

  ![1](/hhooke/front/debug9.png)

  我们可以很明显的查看函数第一次是在 main.js 的 34 行调用的。

  然后我们可以按下 F11 或者：

  ![1](/hhooke/front/debug10.png)

  于是我们再次点击，就又跳到了第二次执行这个函数的地方。

  ![1](/hhooke/front/debug11.png)
  ![1](/hhooke/front/debug12.png)
  ![1](/hhooke/front/debug13.png)

- **代码中的断点**

  有时候我们不想用 console.log()去打印然后在浏览器中找到文件设置断点，那还有一种方法可以快速的实现断点

  > 使用 debugger 关键之

  在代码中直接使用 debugger 关键字可以快速的实现断点。

  ![1](/hhooke/front/debug14.png)

  效果和浏览器中的断点效果是一样的。

- ### 4.vscode 调试

  使用 vscode 的朋友们可以很方便的在 vscode 上面进行调试

  - **配置 launch.json**

    在项目根目录配置.vscode 文件夹。下有个 launch.json 文件

    文件内容

    ```js
    {
        // 使用 IntelliSense 了解相关属性。
        // 悬停以查看现有属性的描述。
        // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "启动程序",
                "program": "${workspaceFolder}/HT/javascript/test.js"
            }
        ]
    }
    ```

    点击 F5 或者：

    ![1](/hhooke/front/debug15.png)

    关于 vscode 调试的 查阅 [官方文档](https://go.microsoft.com/fwlink/?linkid=830387)， 一般是进行服务端后台开发的用 vscode 调试的比较多。

- ### 5.chrome 插件调试

  首先，下载 vscode 插件

  ![1](/hhooke/front/debugc.png)

  然后点击调试按钮

  ![1](/hhooke/front/debug16.png)

  找到你的项目添加配置

  ![1](/hhooke/front/debug17.png)

  如我的是 MyApp，点击添加

  然后会跳到一个文件里

  ![1](/hhooke/front/debug18.png)

  将 url 改成你的项目开发环境调试的地址，
  然后 驱动项目 一般的启动命令配置都是 npm run dev，具体的启动命令自行查看 package.json 文件中。

  启动完成之后 按 f5 启动 chorme 调试，这样就可以在 vscode 中打断点进行调试了。

- ### 6.vue devTools

  vue devTools 使用 chrome 内核的浏览器可以下载 vue devTools 拓展来调试 vue 单页应用，这使得 vue 项目调试起来非常的方面。

  [安装地址](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh)

  如我写的一个后台管理的 vue 页面。启动项目后。

  ![1](/hhooke/front/debug19.png)

  然后按 f12 打开开发者工具，找到我们工具栏中的 vue 选项。于是乎便能清晰的看到我们的 vue 组件。

  ![1](/hhooke/front/debug20.png)

## 三.DOM 调试

- ### 1.Event Listener Breakpoints(事件监听器断点)

  当有事件被触发的时候，事件监听器会断点到具体的事件位置。

  例子：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="cli">测试点击</div>
  </body>

  <script>
    var cli = document.querySelector('#cli');
    cli.addEventListener('click', function() {
    console.log('点击了');
    });
  </script>
  </html>
  ```

  在浏览器中打开文件，然后按 f12 找到 sources 选项卡，比如我要监听点击事件。选择 mouse 将 click 打上钩。

  ![1](/hhooke/front/debug21.png)

  然后我们测试点击事件。便可以发现事件被拦截了。

  ![1](/hhooke/front/debug22.png)

- ### 2.Dom breakpoints

  - subtree modifications : 当子节点发生变化的时候发生断点
  - attribute modifications : 当属性发生变法的时候触发断点
  - node removal : 当元素被移除的时候发生断点

  此处我举个 node removal 的例子

  ![1](/hhooke/front/debug23.png)

  当我们点击测试点击的时候，会将一个 DOM 给删除。于是会在删除的代码中实现断点

  ![1](/hhooke/front/debug24.png)

## 三.ajax 请求调试

- ### 1.XHR Breakpoints

  > 注：此小结从别人文章中摘要。

  这几年前端开发发生了翻天覆地的变化，从当初的名不见经传到如今的盛极一时，Ajax 驱动 Web 富应用，移动 WebApp 单页应用风生水起。这一切都离不开 XMLHttpRequest 对象，而“XHR Breakpoints”正是专为异步而生的断点调试功能。

  ![1](/hhooke/front/debug25.png)

  我们可以通过“XHR Breakpoints”右侧的“+”号为异步断点添加断点条件，当异步请求触发时的 URL 满足此条件，JS 逻辑则会自动产生断点。演示动画中并没有演示到断点位置，这是因为，演示使用的是 jQuery 封装好的 ajax 方法，代码已经过压缩，看不到什么效果，而事实上 XHR 断点的产生位置是”xhr.send()”语句。

  XHR 断点的强大之处是可以自定义断点规则，这就意味着我们可以针对某一批、某一个，乃至所有异步请求进行断点设置，非常强大。但是，似乎这个功能在日常开发中用得并不多，至少我用得不多。想想原因大概有两点：其一，这类型的断点调试需求在日常业务中本身涉及不多；其二，现阶段的前端开发大多基于 JS 框架进行，最基本的 jQuery 也已经对 Ajax 进行了良好封装，极少有人自己封装 Ajax 方法，而项目为了减少代码体积，通常选择压缩后的代码库，使得 XHR 断点跟踪相对不那么容易了。

## 四.性能调试工具 performance

  使用 Chrome DevTools 的 performance 面板可以记录和分析页面在运行时的所有活动。

  ![1](/hhooke/front/debug26.png)

  在火焰图上看到的圈起来的三条虚线，分别是:

  - 蓝线代表 DOMContentLoaded 事件。
  - 绿线代表首次绘制的时间。
  - 红线代表 load 事件。
