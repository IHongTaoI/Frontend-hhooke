## cached方法的疑惑

它的实现原理：创建一个对象，将我们所写的东西保存到这个对象中，如果说我们后面再次用到了这个东西，那么 JavaScript 就不需要再计算一遍了，直接将这个对象中我们需要的东西提取出来
```js
function cached (fn){
  const cache = Object.create(null)
  return function cachedFn (str: string): any {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}
var fk = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
var cacheFk = cached(fk)
// 1 step
cacheFk('ui') 
//2 step
cacheFk('ui')
```
// 原理函数闭包
1 step 把 执行 函数 得到结果 result, 并且 此时 把 ‘ui’作为key, reault 作为value, 放到 cache 对象里， 2 step 再调 这个函数， 结果直接 取 chche['ui'] ,及相当于少走一步 fk 函数。

----

## makeMap 方法的疑惑

```js
function makeMap(
        str,
        expectsLowerCase
    ) {
        var map = Object.create(null); // 创建一个空对象
        var list = str.split(','); // 将传入的字符串变成数组
        for (var i = 0; i < list.length; i++) { //将数组中的每一项存入map中
            map[list[i]] = true;
        }
        return expectsLowerCase //返回一个方法,区分大小写或者不区分大小写
            ? function (val) { return map[val.toLowerCase()]; }
            : function (val) { return map[val]; }
    }

// 我们来调用一下。
// 比如我们用它来检测我们的名字

let isMyName = makMap('hongtao,帅哥,超级帅,洪涛',true); //设定一个检测是否是我的名字的方法，第二个参数不区分大小写

isMyName('洪涛'); //true

```