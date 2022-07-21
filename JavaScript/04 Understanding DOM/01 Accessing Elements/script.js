var div1 = document.getElementById("demo")
div1.style.border = "1px solid green"

var div23 = document.querySelectorAll(".demo")
div23[0].style.border = "1px solid blue"
div23[1].style.border = "1px solid blue"
div23[1].innerText = "Second Elements of Class"