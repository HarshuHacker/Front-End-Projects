sec = 10
function counter()
{
  if(sec == 0)
  {
    console.log("Time's Up !!")
    clearInterval(id)
    return
  }
  console.log(sec)
  sec -= 1
}

var id = setInterval(counter, 1000)