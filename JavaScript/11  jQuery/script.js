// $("#para2").hide()

$("#para3").html("Changed 3")

console.log($("#para1").width())

var a = $("p")
console.log(a)

var b = a.eq(0)
console.log(b)

var c = a[0]
console.log(c)

var d = $(c)
console.log(d)

$("p").css("backgroundColor", "black")

$("p").css({
  "color" : "white",
  "fontSize": "50px"
})

$("#box").css({
  "height" : "100px",
  "width" : "100px",
  "backgroundColor" : "red"
})

$("#box").click(function() {
  var element = $(this)
  element.width(element.width() + 10 + "px")
})

$("a").on("click", function(event) {
  event.preventDefault()
  // alert("Anchor Tag Clicked")
})