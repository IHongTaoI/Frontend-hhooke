var arr = [2, 6, 4, 12, 7, 8, 123, 8, 7];

//冒泡排序
function maopaoSort(arr) {
    for (let i = 0; i < arr.length + 1; i++) {
        let temp = null;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


//快速排序
function quickSort(arr, start, end) {
    if (start > end) {
        return;
    }
    let i = start,
        j = end,
        pivot = arr[start]; //存放基准数
    while (i !== j) {
        // 从右边开始，找第一个小于基准的位置
        while (arr[j] >= pivot && i < j) {
            j--;
        }
        // 从左边开始，找第一个大于基准的位置
        while (arr[i] <= pivot && i < j) {
            i++
        }
        // 交换两个数
        if (i < j) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    // 最后把基准数归位
    arr[start] = arr[i];
    arr[i] = pivot;
    // 递归处理左边
    quickSort(arr, start, i - 1);
    // 递归处理右边
    quickSort(arr, i + 1, end);
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
