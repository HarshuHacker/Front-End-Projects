// Var is defined in global scope so the value of i changes for every iteration whereas in case if let its defined in block scope so fo every iteration of i there will be different value

for (let i = 1; i <= 5; i++)
{
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

setTimeout(() => {
  console.log()
}, 1000)

for (var i = 1; i <= 5; i++)
{
  setTimeout(() => {
    console.log(i)
  }, 1000)
}