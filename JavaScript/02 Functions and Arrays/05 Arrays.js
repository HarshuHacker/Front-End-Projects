var arr1 = [1, 2, 3, 4]
var arr2 = new Array(1, 2, 3, 4, 5)
var arr3 = new Array() // If We Pass No Argument Then It Will Create An Empty Array
var arr4 = new Array(5) // If We Pass One Argumnet Then It Will Create An Array Of The Size Passed In The Argument

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

console.log(arr2[3])
console.log(arr2[9]) // If We Try To Use Elements At Index Out Of The Range Of The Array Then We Don't Get An Error Rather We Get Undefined

arr2[3] = 10
console.log(arr2)

arr2[9] = 25
console.log(arr2)
console.log(arr2.length)