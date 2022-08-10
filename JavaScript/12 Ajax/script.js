function fetchRandomDogImage() {

  // Vanilla Js Code

  // var xhrRequest = new XMLHttpRequest()

  // xhrRequest.onload = function() {
  //   var responseJSON = JSON.parse(xhrRequest.response)
  //   var imgURL = responseJSON.message
  //   $("#dog-image").attr("src", imgURL)
  // }
  // xhrRequest.onerror = function(){
  //   console.log("Request Failed")
  // }
  // xhrRequest.open("get", "https://dog.ceo/api/breeds/imagee/random")
  // xhrRequest.send("")

  // Ajax Using jQuery

  // $.ajax({
  //   url: "https://dog.ceo/api/breeds/images/random",
  //   method: "GET",
  //   success: function(data) {
  //     var imgURL = data.message
  //     $("#dog-image").attr("src", imgURL)
  //   }
  // }).fail(function() {
  //   console.log("Request Failed")
  // })

  // Get Using jQuery

  $.get("https://dog.ceo/api/breeds/images/random", function(data) {
    var imgURL = data.message
    $("#dog-image").attr("src", imgURL)
  }).fail(function() {
    console.log("Request Failed")
  })
}

$("#fetch-dog-image-button").on("click", fetchRandomDogImage)