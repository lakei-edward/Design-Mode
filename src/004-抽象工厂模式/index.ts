/**
 * 还是要写一个类，这个类不直接生成具体的实例，根据不同的产品，返回不同的类
 * 便于各自类的扩展、开放，修改和关闭
 */

class User {
  routers: Array<string>;
  name: string;
  role: string;
  pages: Array<number>;
  constructor(name: string, role: string, pages: Array<number>) {
    this.routers = [];
    this.name = name;
    this.role = role;
    this.pages = pages;
  }
  welcom(): void {
    console.log("欢迎回来" + this.name);
  }
}

class SuperAdmin extends User {
  constructor(name: string) {
    super(name, "super", [1, 2, 3, 4, 5]);
  }
  addRouters(path: string): void {
    this.routers.push(path);
  }
}
class CommonAdmin extends User {
  constructor(name: string) {
    super(name, "common", [1, 2, 3]);
  }
  editRouters(index: number, path: string): void {
    this.routers.splice(index, 1, path);
  }
}

function getAbstractUserFactory(
  role: string,
  name: string
): SuperAdmin | CommonAdmin {
  switch (role) {
    case "super":
      return new SuperAdmin(name);
    case "common":
      return new CommonAdmin(name);
    default:
      throw new Error("参数错误");
  }
}

let UserClass = getAbstractUserFactory("super", "lakei");
UserClass.welcom();
console.log(UserClass.addRouters("lakei"));

// 用户二
// let UserClass2 = getAbstractUserFactory("common");
// let myUser2 = new UserClass2("edward");
// myUser2.welcom();
// myUser2.editRouters(1, "home");
// console.log(myUser2);
