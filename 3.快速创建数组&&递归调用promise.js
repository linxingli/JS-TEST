const sleep = (id) => {
  return new Promise(res => {
    setTimeout(() => {
      console.log(id);
      res()
    }, 300)
  })
}

// 快速创建确定数量数组的方法
let arr = Array.from({
  length: 3
}).map((v, index) => {
  return () => sleep(index)
})

console.log(arr);

arr.reduce((prev, cur) => {
  return prev.then(() => cur())
}, Promise.resolve())