function fn1(v1) {
    return function (v2) {
        return function (v3) {
            return v1 + v2 + v3;
        }
    }
}
console.log(fn1(1)(2)(3))