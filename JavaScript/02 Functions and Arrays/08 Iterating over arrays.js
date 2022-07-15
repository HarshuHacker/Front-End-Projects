arr = [1, 2, 3, 4, 5, 6]
for(var i = 0; i < arr.length; i++)
{
  console.log(arr[i])
}

console.log()

function printFunction(element) // Except For element we can pass index and array as 2nd and 3rd argument respectively.
{
  console.log(element)
}

arr.forEach(printFunction) // This Will Call The Function For Each Element Of The Array.