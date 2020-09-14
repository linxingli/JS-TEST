class Event {
  constructor() {
    this.eventList = {}
    // 结构如下
    // {
    //   'xxx': [cb, cb]
    // }
  }
  // 绑定事件
  addEvent (name, cb) {
    if (this.eventList[name]) {
      this.eventList[name].push(cb)
    } else {
      this.eventList[name] = [cb]
    }
    return this
  }
  // 解绑事件
  delEvent (name, cb) {
    if (cb) {
      const index = this.eventList[name].findIndex(v => v === cb)
      this.eventList[name].splice(index, 1)
    } else {
      // 删除全部
      delete this.eventList[name]
    }
    return this
  }
  // 派发事件
  emitEvent (name, param) {
    this.eventList[name].forEach(cb => {
      cb(param)
    })
    return this
  }
}

let event = new Event()
const fn = (data) => {
  console.log(data + ': hello word!')
}
const fn1 = (data) => {
  console.log(data + ': hello girl!')
}
event.addEvent('say', fn).addEvent('say', fn1)

setTimeout(() => {
  event.emitEvent('say', 'wing').delEvent('say', fn)
  setTimeout(() => {
    event.emitEvent('say', 'wing')
  }, 2000)
}, 3000)