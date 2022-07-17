var student = {
  "name": "Harsh Prasad", // Object Is A Collection Of Key Value Pairs Where Every Key Is Og Type String
  age: 21,
  marks: 92,
  "2": "two"
}

console.log(student.name)
console.log(student["name"])

// Situations Where Only Sqaure Brackets Work

// Situation 1
// console.log(student."2") This Will Throw An Error
// console.log(student.2) This Will Also Throw An Error

console.log(student["2"])

// Situation 2

// function print(obj, prop)
// {
//   console.log(obj.prop.)
// }

function print(obj, prop)
{
  console.log(obj[prop])
}

// print(student, name) This Will Not Work Here
print(student, "name")