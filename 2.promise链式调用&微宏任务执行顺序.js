// 期望id按顺序打印 0 1 2 3 4 ，且只能修改 start 函数。

function start(id) {
  //  execute(id)
  //  方法1
  //  this.promise = this.promise ? this.promise.then(() => execute(id)) : execute(id)

  // 第二种：先用数组存储异步函数，利用事件循环的下一个阶段，
  //  即 setTimeout 的回调函数中执行 promise 的链式调用，这方法本质上和第一种是一样的
  //  this.list = this.list ? this.list : []
  //  this.list.push(() => execute(id))
  //  this.t;
  //  if (this.t) clearTimeout(this.t)
  //  console.log(id, this.t);
  //  this.t = setTimeout(() => {
  //    console.log(111111);
  //    this.list.reduce((re, fn) => re.then(() => fn()), Promise.resolve())
  //  })

  // 第三种：数组存储id的值，在通过 await 异步执行 execute 函数
  this.list = this.list ? this.list : []
  this.list.push(id)
  clearTimeout(this.t)
  this.t = setTimeout(async () => {
    let _id = this.list.shift()
    while (_id !== undefined) {
      await execute(_id);
      _id = this.list.shift()
    }
  })
}

for (let i = 0; i < 5; i++) {
  start(i);
}


function sleep() {
  const duration = Math.floor(Math.random() * 500);
  return new Promise(resolve => setTimeout(resolve, duration));
}

function execute(id) {
  return sleep().then(() => {
    console.log("id", id);
  });
}