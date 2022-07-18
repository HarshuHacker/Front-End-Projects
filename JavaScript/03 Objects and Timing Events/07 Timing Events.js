function sayHello()
{
  console.log("Hello :)")
}

sec = 1
function sayBye()
{
  console.log("After ", sec, " Second")
  sec += 1
  if(sec == 6)
  {
    // Stop SetInterval
    clearInterval(id)
  }
}

setTimeout(sayHello, 5000)
var id = setInterval(sayBye, 1000)