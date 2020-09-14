// 改写数组的原有方法，并且不影响数组原型

// 1.使用Object.create继承数组原型
const arr = Object.create(Array.prototype)

// 2.更改arr的方法，由于是继承自数组原型，所以arr既有数组所有方法也可以修改现有方法，不影响数组原型
arr.pop = () => {
  console.log('pop方法已经被改写！！！')
}

let a1 = [1, 2, 3]

// 使用call调用
arr.pop.call(a1)
console.log('a1:', a1);
[].pop.call(a1)
console.log('a1:', a1);


arr.push = () => {
  console.log('push 已经被改写！！！')
}

// 使用apply调用
arr.push.apply(a1, [7, 8, 9])
console.log('a1:', a1);
[].push.apply(a1, [7, 8, 9])
console.log('a1:', a1);

let aa = {
  '1': 1,
  '2': 2,
  length: 2
};

[].pop.call(aa);
[].push.apply(aa, [4, 5, 6]);
console.log('aa:', aa);