### ES6 静态方法Static
```javascript
  class A {
    fn(){
      console.log('不是静态方法，实例可调用')
    }
    static fn2(){
      console.log('静态方法，实例不可调用')
    }
  }

  var a = new A()
  a.fn()//不是静态方法，实例可调用
  a.fn2()//error : a.fn2 is not a function
  A.fn2()// 静态方法，实例不可调用
```