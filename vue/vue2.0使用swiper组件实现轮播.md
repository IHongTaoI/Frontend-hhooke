## vue2.0使用swiper组件实现轮播

1.安装swiper

> npm install swiper@3.4.1 --save-dev

2.引用组件

```javascript
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
```

3.html页面代码
```html
 <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,$index) in detail.imgs">
        <a v-on:click="showPreview($index,detail.imgs,swiperObj)">
            <figure class="wp-avatar banner">
            <img v-cloak :src="item | toQiNiuImg"/>
            </figure>
        </a>
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
</div>
```
4.初始化组件，并设置参数
```javascript
 setTimeout(function () {
    state.swiperObj =  new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        paginationClickable: true
    });
}, 100)
```