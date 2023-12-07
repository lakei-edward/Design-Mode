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
