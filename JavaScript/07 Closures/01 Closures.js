var i = 10
function outer() 
{
  var j = 20
  var inner = function () 
  {
    var k = 30
    console.log(i, j, k)
    i++
    j++
    k++
  }
  return inner
}
var inner = outer()
inner()
inner = outer()
inner()