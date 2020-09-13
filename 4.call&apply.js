// 改写数组的原有方法，并且不影响数组原型

const arr = Object.create(Array.prototype)

arr.pop = () => {
  console.log('pop方法已经被改写！！！')
}

let a1 = [1, 2, 3]

arr.pop.call(a1)
console.log('a1:', a1);
[].pop.call(a1)
console.log('a1:', a1);


arr.push = () => {
  console.log('push 已经被改写！！！')
}

arr.push.apply(a1, [7, 8, 9])
console.log('a1:', a1);
[].push.apply(a1, [7, 8, 9])
console.log('a1:', a1);