### 如果需要进行dom操作

```javascript
mounted: function() {
    this.$nextTick(function() {
      //对DOM的操作放在这
      console.log(document)
    });
  }
```