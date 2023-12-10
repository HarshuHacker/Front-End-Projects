function Student(name){
  this.name = name ;
  console.log(this) ;
}
var student1 = new Student("Raj") ;
console.log(student1.name);

// Output
// Student { name: 'Raj' }
// Raj