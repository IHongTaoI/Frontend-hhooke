let arr = [1, 1, 2, 3, 4, 5, 3, 4, 3, 4, 5, 5, 66, 1, 123, 4];

// 双层嵌套循环
function arrFliter1(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                i++;
                j = i;
            }
        }
        result.push(arr[i]);
    }
    return result;
}

//使用splice
function arrFliter2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

//利用对象的建不能重复
function arrFliter3(arr) {
    let obj = {},
        result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
            result.push(arr[i])
        }
    }
    return result;
}

// indexOf方法
function arrFliter4(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isHave = arr.indexOf(arr[i], i + 1);
        if (isHave === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// ES6 set方法
function arrFliter5(arr) {
    let aSet = new Set(arr);
    return Array.from(aSet);
}

console.log(arrFliter5(arr));