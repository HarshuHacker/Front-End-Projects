// This Will Print "Hi, I am Harsh" In Chrome But Its Not Working Here

var juliet = {
  name: "Juliet",
  hello: function(){
      console.log("Hi, I am " + this.name);
  }
}
var globalHello = juliet.hello;
var name = "Harsh"
globalHello()