class Singleton {
  static instance: Singleton;
  name;
  age;
  constructor(name: string, age: number) {
    if (!Singleton.instance) {
      this.name = name;
      this.age = age;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

let cls = new Singleton("tom", 10);
let cls2 = new Singleton("jerry", 20);
console.log(cls);
console.log(cls2);
console.log(cls === cls2); // true
