var subtract = function (a, b) {
  return a-b;
}

var op = function (func) {
  var x = 20;
  var y = 3;
  return func(x, y);
}
console.log(op(subtract));