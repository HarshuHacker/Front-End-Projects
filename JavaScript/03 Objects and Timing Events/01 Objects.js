var student1 = {}
console.log(student1)
console.log(typeof(student1))

var student = {
  name: "Harsh Prasad", // Object Is A Collection Of Key Value Pairs Where Every Key Is Og Type String
  age: 21,
  marks: 92
}

console.log(student)
console.log(student.name)
console.log(student.sem) // If The Key Is Not Present In The Object Then Instead Of Throwing Error It Will Give The Value As Undefined

student.sem = 7 // We Can Add A Key Value Pair To An Object Like This
console.log(student)
console.log(student.name)
console.log(student.sem)