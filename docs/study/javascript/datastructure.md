# :watermelon: 数据结构

## :boom: 列表

- ### 定义

列表是一组有序的数据，每个列表中的数据项目成为元素。**在javascript中，列表的元素可以是任意数据类型**。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制。

在本章的实现中，我们使用一个数组dataStore 来存储元素

下表：列表的抽象数据类型定义

| Tables              |                Are                 |
|---------------------|:----------------------------------:|
| listSize （属性）   |           列表的元素个数           |
| pos （属性）        |           列表的当前位置           |
| length （属性）     |        返回列表中元素的个数        |
| clear （方法）      |        清空列表中的所有元素        |
| show （方法）       |        返回列表的字符串形式        |
| getElement （方法） |         返回当前位置的元素         |
| insert （方法）     |       在现有元素后插入新元素       |
| append （方法）     |       在列表的末尾添加新元素       |
| remove （方法）     |          从列表中删除元素          |
| front （方法）      | 将列表的当前位置设移动到第一个元素 |
| end （方法）        | 将列表的当前位置移动到最后一个元素 |
| prev （方法）       |         将当前位置后移一位         |
| next （方法）       |         将当前位置前移一位         |
| currPos （方法）    |         返回列表的当前位置         |
| moveTo （方法）     |      将当前位置移动到指定位置      |

- ### 实现列表类

```javascript
class List {
  constructor() {
    this.listSize = 0 // 列表长度
    this.dataStore = [] // 列表数据
    this.pos = 0 // 指针
  }
  // 清除列表
  clear() {
    this.dataStore = []
    this.listSize = this.pos = 0
  }
  // 搜索列表中的元素
  findIndex(el) {
    return this.dataStore.findIndex(v => {
      return v === el
    })
  }
  show() {
    return this.dataStore
  }
  /**
   * 向列表内添加元素
   * @param el 添加的元素
   * @param after 在哪个元素之前添加
   */
  insert(el, after) {
    let insPos = this.findIndex(after)
    if (~insPos) {
      this.listSize += 1
      this.dataStore.splice(insPos, 0, el)
    }
  }
  getElement() {
    return this.dataStore[this.pos]
  }
  append(el) {
    this.dataStore[this.listSize++] = el
  }
  remove(el) {
    let inpPos = this.findIndex(el)
    if (~inpPos) {
      return this.dataStore.splice(inpPos, 1)
    }
    throw new Error("元素不存在")
  }
  front() {
    this.pos = 0
  }
  end() {
    this.pos = this.listSize - 1
  }
  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }
  length() {
    return this.listSize
  }
  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }
  moveTo(p) {
    this.pos = p
  }
  get length() {
    return this.listSize
  }
}
```

## :boom: 栈

- ### 定义

  栈（stack）又名堆栈，它是一种运算受限的线性表。其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。

  ![avatar](/hhooke/javascript/datastructure1.png)
