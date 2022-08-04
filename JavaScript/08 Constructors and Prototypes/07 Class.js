class Person {
  constructor(name) 
  { 
    this.name = name; 
  }

  getName()
  {
    return this.name
  }
}

var p1 = new Person("Harsh")
console.log("Hi", p1.getName())