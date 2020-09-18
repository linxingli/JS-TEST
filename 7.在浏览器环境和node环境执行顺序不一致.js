// 字符串内包含_.但不包含_.isEmpty _.each  _.map的数据

// 数字 + 对象， 优先调用对象的valueOf -> toString
// 数字 + boolean/null -> 数字
// 数字 + undefined -> NaN
// [1].toString() === '1'
// { }.toString() === '[object object]'

// 数组乱序：
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
  return Math.random() - 0.5;
});
// console.log(arr)
// 数组拆解: flat: [1,[2,3]] --> [1, 2, 3]
Array.prototype.flat = function () {
  return this.toString().split(',').map(item => +item)
}



// 以下代码在浏览器环境和node环境执行顺序不一致
setTimeout(() => {
  console.log('time1');
  Promise.resolve().then(() => {
    console.log('p1');
  })
}, 1000)

setTimeout(() => {
  console.log('time2');
  Promise.resolve().then(() => {
    console.log('p2');
  })
}, 1000)


// 示例1 仅浏览器出效果
function add (a) {
  function sum (b) { // 使用闭包
    a = b ? a + b : a; // 累加
    return sum;
  }
  sum.toString = function () { // 只在最后一次调用
    return a;
  }
  return sum; // 返回一个函数 因为输出的时候要转成字符串，所以调用toString
}
add(1)

// 示例2
let fnn = (data) => {
  fnn.toString = () => {
    console.log('toString111')
  }
  return fnn
}

fnn(111)

