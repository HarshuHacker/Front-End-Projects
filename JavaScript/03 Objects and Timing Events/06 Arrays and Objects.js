var arr = [1, 2, 3, 4, 5, 6]

var obj = {
  "0" : 1,
  "1" : 2,
  "2" : 3,
  "3" : 4,
  "4" : 5,
  "5" : 6
}

// Arrays Are Objects Except For Array Has Some Extra Properties Like Length, etc.

for (var i in arr){
  console.log(arr[i])
}
for (var i in obj){
  console.log(obj[i])
}

// The Way The Length Of An Array Is Found Out Is Maximum Integer Key + 1

arr.ele = "Hello"
console.log(arr)
console.log(arr.length)
arr[50] = 51
console.log(arr)
console.log(arr.length)