var circleOuter = document.getElementById("circle-outer")
var circle = document.getElementById("circle")
var text = document.getElementById("text")
var bool = "day"
circle.addEventListener("click", function() {
  if(bool == "day")
  {
    document.body.style.backgroundColor = "black"
    circleOuter.style.border = "10px solid white"
    bool = "night"
    text.style.color = "white"
    circle.style.backgroundColor = "white"
    circle.style.left = "130px"
  }
  else
  {
    document.body.style.backgroundColor = "white"
    circleOuter.style.border = "10px solid black"
    bool = "day"
    text.style.color = "black"
    circle.style.backgroundColor = "black"
    circle.style.left = "15px"
  }
})