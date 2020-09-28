var name = "The Window";
var object = {
  name: "My Object",
  getName: function () {
    return this.name;
  }
};

object.getName(); //"My Object"
(object.getName)(); //"My Object"
(object.getName = object.getName)(); //"The Window"，在非严格模式下（来自红宝书7.2.2）

// 第一行代码跟平常一样调用了 object.getName()，返回的是"My Object"，因为 this.name
// 就是 object.name。第二行代码在调用这个方法前先给它加上了括号。虽然加上括号之后，就好像只
// 是在引用一个函数，但 this 的值得到了维持，因为 object.getName 和(object.getName)的定义
// 是相同的。第三行代码先执行了一条赋值语句，然后再调用赋值后的结果。因为这个赋值表达式的值是
// 函数本身，所以 this 的值不能得到维持，结果就返回了"The Window"。


var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    return function () {
      return this.name;
    };
  }
};
alert(object.getNameFunc()()); //"The Window"（在非严格模式下）