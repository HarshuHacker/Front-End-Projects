var main = document.querySelector("main")
var toggleButton = document.getElementById("toggle-mode")
var lightMode = document.getElementById("light-mode")
var darkMode = document.getElementById("dark-mode")
var buttons = document.getElementsByClassName("buttons")
var screen = document.getElementById("screen")
var functionalButtons = document.getElementsByClassName("functional")
var acButton = document.getElementById("button-AC")
var equalButton = document.getElementById("button-equal")
var time = "night"

toggleButton.addEventListener("click", function () {
  if(time == "day")
  {
    time = "night"
    main.style.color = "white"
    lightMode.style.display = "block"
    darkMode.style.display = "none"
    Array.from(buttons).forEach(element => {
      element.style.backgroundColor = "rgb(35, 35, 38)"
    });
    Array.from(functionalButtons).forEach(element => {
      element.style.backgroundColor = "rgb(91, 133, 222)"
    });
    acButton.style.backgroundColor = "rgb(222, 91, 91)"
    equalButton.style.backgroundColor = "rgb(91 222 153)"
    main.style.backgroundColor = "rgb(28, 26, 31)"
    screen.style.backgroundColor = "rgb(48, 50, 61)"
  }
  else
  {
    time = "day"
    main.style.color = "black"
    darkMode.style.display = "block"
    lightMode.style.display = "none"
    Array.from(buttons).forEach(element => {
      console.log(element)
      element.style.backgroundColor = "rgb(220, 220, 220)"
    });
    Array.from(functionalButtons).forEach(element => {
      element.style.backgroundColor = "rgb(91, 133, 222)"
    });
    acButton.style.backgroundColor = "rgb(222, 91, 91)"
    equalButton.style.backgroundColor = "rgb(91 222 153)"
    main.style.backgroundColor = "rgb(171, 171, 171)"
    screen.style.backgroundColor = "rgb(240, 240, 240)"
  }
})