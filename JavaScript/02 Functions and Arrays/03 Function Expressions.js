console.log(factorial1)
console.log(factorial2)
// console.log(factorial1(5)) Because Of Hoisting This Is Just A Undefined Variable And Not A Function
// console.log(factorial2(5)) Because Of Hoisting This Is Just A Undefined Variable And Not A Function

var factorial1 = function fact(n)
{
  var ans = 1
  for(var i = 1; i <= n; i++)
  {
    ans = ans * i
  }
  return ans
}

var factorial2 = function(n)
{
  var ans = 1
  for(var i = 1; i <= n; i++)
  {
    ans = ans * i
  }
  return ans
}

console.log(factorial1(5))
console.log(factorial2(5))
// console.log(fact(5)) We Cannot Call A Function By Its Name If We Use Function Expression. The Function Name Can Only Be Called Within The Function