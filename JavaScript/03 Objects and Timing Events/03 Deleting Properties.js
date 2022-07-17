var student = {
  "name": "Harsh Prasad", // Object Is A Collection Of Key Value Pairs Where Every Key Is Og Type String
  age: 21,
  marks: 92,
  "200": "Two Hundred"
}

delete student[200] // To Delete A Non String Data Type We Need To Use Square Bracket
console.log(student)

delete student.name
console.log(student)