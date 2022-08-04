function Person(age) 
{
  this.age = age;
}
var p1 = new Person(9);
console.log(Person.hasOwnProperty("address"));
console.log(Person.hasOwnProperty("name"));
console.log(Person.hasOwnProperty("prototype"));

console.log();

console.log(p1.hasOwnProperty("age"));
console.log(p1.hasOwnProperty("name"));
console.log(p1.hasOwnProperty("address"));
console.log(p1.hasOwnProperty("prototype"));