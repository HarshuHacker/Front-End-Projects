// var p1 = Person() Class Expressions Are Not Hoisted

var Person = class{
  constructor() {}
  sayHello() 
  {
    return 'Hello!';
  }
};
var instance = new Person();
console.log(instance.sayHello()+" "+Person.name);