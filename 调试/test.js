Number.prototype.toBinarySys = function () {
  let val = this.valueOf().toString();
  for (let i = val.length - 1; i >= 0; i--) {
    console.log(val[i])
  }
}

new Number(123).toBinarySys();