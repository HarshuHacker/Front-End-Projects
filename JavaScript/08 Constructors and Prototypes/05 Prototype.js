function Person(name) 
{
  this.name = name;
}
var p1 = new Person("Joy");
var p2 = new Person("Julie");
Person.prototype.getName = function() // This Creates A Prototype Which Is Shared By All The Objects Of The Class And Avoid Usage Of Extra Space
{ 
  return this.name 
};
console.log(p1.getName() + " is friend with " + p2.getName());