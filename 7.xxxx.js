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