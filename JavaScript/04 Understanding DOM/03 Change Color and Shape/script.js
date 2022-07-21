var square = document.getElementById("square")
var circle = document.getElementById("circle")
var triangle = document.getElementById("triangle")

var shapeArray = [square, circle, triangle]
var backGround = ["green", "pink", "yellow", "black", "brown", "violet", "gray", "aqua", "red", "cyan"]

var container = document.getElementById("container")

var changeColour = document.getElementById("colour-button")
var changeShape = document.getElementById("shape-button")

changeColour.addEventListener("click", function() {
  container.style.backgroundColor = (backGround[Math.floor(Math.random() * 10)])
})

function makeDisplayNone(shapeName) {
  shapeName.style.display = "none"
}

changeShape.addEventListener("click", function() {
  shapeArray.forEach(makeDisplayNone)
  shapeArray[Math.floor(Math.random() * 3)].style.display = "block"
})