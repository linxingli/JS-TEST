// 改写数组的原有方法，并且不影响数组原型

// 1.使用Object.create继承数组原型
const arr = Object.create(Array.prototype)

// 2.更改arr的方法，由于是继承自数组原型，所以arr既有数组所有方法也可以修改现有方法，不影响数组原型
arr.pop = () => {
  console.log('pop方法已经被改写！！！')
}

let a1 = [1, 2, 3]

// 使用call调用
arr.pop.call(a1);
console.log('a1:', a1);
[].pop.call(a1);
console.log('a1:', a1);


arr.push = () => {
  console.log('push 已经被改写！！！')
}

// 使用apply调用
arr.push.apply(a1, [7, 8, 9]);
console.log('a1:', a1);
[].push.apply(a1, [7, 8, 9]);
console.log('a1:', a1);

let aa = {
  '1': 1,
  '2': 2,
  length: 2
};

[].pop.call(aa);
[].push.apply(aa, [4, 5, 6]);
console.log('aa:', aa);


// 动手实现一个bind（原理通过apply，call）
// 一句话概括：
// 1.bind()返回一个新函数，并不会立即执行。
// 2.bind的第一个参数将作为他运行时的this，之后的一系列参数将会在传递的实参前传入作为他的参数
// 3.bind返回函数作为构造函数，就是可以new的，bind时指定的this值就会消失，但传入的参数依然生效???

Function.prototype.my_bind = function () {
  let that = arguments[0]
  let arg = [].slice.call(arguments, 1)
  let fn = this
  return function () {
    fn.apply(that, [].concat.call(arg, arguments))
  }
}
// ps：这里不能用箭头函数, 因为箭头函数没有自己的arguments，箭头函数的this、arguments、super来自父作用域