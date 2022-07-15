// 1st : Start Index
// 2nd : Deletion Count
// 3rd : Elements To Be Inserted

var arr = [1, 2, 3, 7, 8, 9]
arr.splice(3, 0, 4, 5, 6) // This Will Start From 3rd Index Delete Zero Elements And Insert 4, 5, 6 at 3rd, 4th and 5th index respectively.
console.log(arr)
arr.splice(2, 3, 5, 6) // This Will Start From 2nd Index Delete Three Elements And Insert 5 And 6 at 2nd and 3rd index respectively.
console.log(arr)
arr.splice(2) // This Will Start From 2nd Index Delete All The Elements.
console.log(arr)