/**
 * 还是要写一个类，这个类不直接生成具体的实例，根据不同的产品，返回不同的类
 * 便于各自类的扩展、开放，修改和关闭
 */

class User {
  constructor(name, role, pages) {
    this.routers = [];
    this.name = name;
    this.role = role;
    this.pages = pages;
  }
  welcom() {
    console.log("回应回来" + this.name);
  }
}

class SuperAdmin extends User {
  constructor(name) {
    super(name, "superadmin", [1, 2, 3, 4, 5]);
  }
  addRouters(path) {
    this.routers.push(path);
  }
}
class CommonAdmin extends User {
  constructor(name) {
    super(name, "commonadmin", [1, 2, 3]);
  }
  editRouters(index, path) {
    this.routers.splice(index, 1, path);
  }
}

function getAbstractUserFactory(role) {
  switch (role) {
    case "superadmin":
      return SuperAdmin;
    case "commonadmin":
      return CommonAdmin;
    default:
      throw new Error("参数错误");
  }
}

// 用户一
let UserClass = getAbstractUserFactory("superadmin");
let myUser = new UserClass("lakei");
myUser.welcom();
myUser.addRouters("login");
console.log(myUser);

// 用户二
let UserClass2 = getAbstractUserFactory("commonadmin");
let myUser2 = new UserClass2("edward");
myUser2.welcom();
myUser2.editRouters(1, "home");
console.log(myUser2);
