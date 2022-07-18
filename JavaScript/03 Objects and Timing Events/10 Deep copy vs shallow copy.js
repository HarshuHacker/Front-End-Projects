obj1 = {
  name: "Harsh",
  age: 21
}

var obj2 = obj1

obj2.age = 22

console.log(obj1)
console.log(obj2)

// Here I Have Made Changes In Obj2 Only But The Changes Are Reflected In Obj1 As Well.
// This Is Shallow Copy

obj3 = {
  name: "Ayush",
  age: 20
}

obj4 = {...obj3}
obj4.name = "Chetan"

console.log(obj3)
console.log(obj4)

// Here I Have Made Changes In Obj4 And The Changes Are Reflected In Obj4 Only.
// This Is Deep Copy

// Same Goes With Array

arr1 = [1, 2, 3, 4, 5]
arr2 = arr1
arr2.push(6)
console.log(arr1)
console.log(arr2)

// This Is Shallow Copy

arr3 = [1, 2, 3, 4, 5]
arr4 = [...arr3]
arr4.push(6)
console.log(arr3)
console.log(arr4)

// This Is Deep Copy