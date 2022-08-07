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