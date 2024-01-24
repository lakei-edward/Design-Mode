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

interface supermin {
  addRouters(path: string): void;
}

class SuperAdmin extends User implements supermin {
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

function getAbstractUserFactory(role: string, name: string): any {
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
UserClass.addRouters("path");
console.log(UserClass);

console.log("");
// 用户二
let UserClass2 = getAbstractUserFactory("common", "tom");
UserClass2.welcom();
UserClass2.editRouters(1, "home");
console.log(UserClass2);
