var box = document.getElementById("box")
var count = document.getElementById("click-counts")

var increaseCount = function() {
  count.innerText = parseInt(count.innerText) + 1
}

box.addEventListener("click", increaseCount)