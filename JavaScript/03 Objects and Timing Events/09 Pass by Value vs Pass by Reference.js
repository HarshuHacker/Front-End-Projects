// All Primitive Types Are Passed By Value Except For Objects And Arrays(Arrays Are Also A Type Of Object)

function abc(a, b, c)
{
  a = 20
  b.push("Aditya")
  c.bool = false
}

var a = 10
var b = ["Harsh", "Ayush"]
var c = {bool: true}
abc(a, b, c)
console.log(a)
console.log(b)
console.log(c)