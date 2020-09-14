// 递归实现深拷贝
const deepClone = (data) => {
  if (data instanceof Array) {
    // 数组
    let arr = []
    data.forEach((v, i) => {
      arr[i] = deepClone(v)
    })
    return arr
  } else if (data instanceof Object) {
    // 对象
    let obj = {}
    Object.keys(data).forEach(key => {
      obj[key] = deepClone(data[key])
    })
    return obj
  } else {
    return data
  }
}

// let arr = [
//   {
//     '111': 111
//   }
// ]

// let temp = deepClone(arr)
// temp[0]['111'] = 222
// console.log(temp, arr)


// 题目：求斐波那契数列（兔子数列） 1,1,2,3,5,8,13,21,34,55,89...中的第 n 项

// 普通版本
const fn1 = (n) => {
  let count = 0
  let _fn = (n) => {
    count++
    if (n === 1 || n === 2) {
      return 1
    } else {
      return _fn(n - 1) + _fn(n - 2)
    }
  }
  return _fn(n) + `count: ${count}`
}

// 优化版本
const fn = (n) => {
  let temp = {}
  let count = 0
  let _fn = (n) => {
    count++
    if (n === 1 || n === 2) {
      return 1
    } else {
      let prev = temp[n - 1]
      let next = temp[n - 2]
      if (!prev) {
        temp[n - 1] = _fn(n - 1)
      }
      if (!next) {
        temp[n - 2] = _fn(n - 2)
      }
      return temp[n - 1] + temp[n - 2]
    }
  }
  return _fn(n) + `count: ${count}`
}

console.log(fn(11));
console.log(fn1(11));
