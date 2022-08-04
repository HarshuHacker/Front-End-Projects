class Person {
  constructor(name) 
  { 
    this.name = name; 
  }

  getName() // We Can Create A Function Like This Inside Class
  {
    return this.name
  }
}

var p1 = new Person("Harsh")
console.log("Hi", p1.getName())