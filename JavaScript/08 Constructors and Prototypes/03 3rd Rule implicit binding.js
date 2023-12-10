// var juliet = {
//   name: "Juliet",
//   hello: function(){
//       console.log("Hi, I am " + this.name);
//   }
// }
// juliet.hello();

// ###########################################

var raj = {
  name: 'Raj',
  greet: function () {
    console.log('Hello', this.name)
    console.log(this)
    console.log()
  }
}
raj.greet()
// Output
// Hello Raj
// { name: 'Raj', greet: [Function: greet] }

var localAsk = raj.greet
localAsk()
// Output
// Hello undefined
// Window Object