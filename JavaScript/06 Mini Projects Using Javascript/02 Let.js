var a = 30
if(a < 10){
  var b = 20
}
else
{
  var c = 30
}
console.log(a, b, c)

let d = 30
if(d < 10){
  let e = 20
}
else
{
  // console.log(f) Cannot access 'f' before initialization
  let f = 30
}
// console.log(d, e, f) We Cannot Use f outside its scope (outside else block)