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