/* 
    装饰器模式能够很好的对已有的功能进行拓展，这样不会更改原有的代码，
    对其他的业务产生影响，这方便我们在较少的改动下对软件功能进行拓展
*/

interface Function {
  before(beforeFn: Function): Function;
  after(beforeFn: Function): Function;
}

Function.prototype.before = function (beforeFn: Function): Function {
  let _this = this;
  return function () {
    // @ts-ignore
    beforeFn.apply(this, arguments);
    // @ts-ignore
    return _this.apply(this, arguments);
  };
};
Function.prototype.after = function (afterFn: Function): Function {
  let _this = this;
  return function () {
    // @ts-ignore
    let result = _this.apply(this, arguments);
    // @ts-ignore
    afterFn.apply(this, arguments);
    return result;
  };
};

// 在执行test函数的时候，该函数内部没有影响，在之前或者之后增加了一些功能
function test() {
  console.log("111111111111");
}

// 可以直接调用test原生的代码，而不需要其他的
test();

// 使用了装饰器的，多了一些其他的功能
let test1 = test
  .before(function () {
    console.log("00000000");
  })
  .after(function () {
    console.log("22222222");
  });
console.log(test1);
test1(1, 2, 3);
