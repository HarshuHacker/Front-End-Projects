var student = {
  "name": "Harsh Prasad",
  age: 21,
  marks: 92,
  "200": "Two Hundred"
}

for (var i in student){
  console.log(i, student.i)
  console.log(i, student[i])
  console.log()
}

var keys = Object.keys(student)
console.log(keys)
var keys = Object.getOwnPropertyNames(student)
console.log(keys)