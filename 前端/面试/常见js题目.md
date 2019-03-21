[TOC]

# 写一个js函数，实现对一个数字每3位加一个逗号，如输入100000， 输出100,000（不考虑负数，小数）—百度前端面试题

```js
var ret = []

function format(arr) {
  if (arr.length > 3) {
    ret.unshift(arr.slice(-3))
    format(arr.slice(0, -3))
  } else {
    ret.unshift(arr)
  }
}

function main(num) {
  var gold = '123146161'

  format(gold)
  console.log(ret.join(','))
}

main()

```

# 给定一个字符串，找出其中无重复字符的最长子字符串长度

```js
var str = 'asgggaaassfagahqqq';

function reStr(str) {
	let ret = [];
	for (let v of str) {
		if (!ret.includes(v)) {
			ret.push(v);
		}
	}
	console.log(ret.join(''));
}

reStr(str);

```

# 实现超出整数存储范围的两个大正整数相加—腾讯前端面试题

```js
function addBigInt(a, b) {
  var ara = a.split('');
  var arb = b.split('');
  var carry;
  let result = '';
  while (ara.length || arb.length) {
    let adda = ~~ara.pop();
    let addb = ~~arb.pop();
    let ret = adda + addb;
    let Digits = ret % 10;
    if (carry) {
      Digits += 1;
    }
    result = Digits + '' + result;
    if (ret > 10) carry = true;
    else carry = false;
  }
  return result;
}

let ret = addBigInt('2124', '124');

console.log(ret); // 2248

```