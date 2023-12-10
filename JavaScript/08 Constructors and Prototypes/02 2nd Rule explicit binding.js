// const CN = 
// {
//   name: "Coding Ninjas"
// };

// function print()
// {
//   console.log(this) ;
// }

// print.bind(CN)() ;

// ###########################################

var raj = {
  name: 'Raj'
}

function ask() {
  console.log(this, this.name)
}

ask()
// Output
// Window Object

ask.apply(raj)
// Output
// { name: 'Raj' } Raj

ask.call(raj)
// Output
// { name: 'Raj' } Raj


var raj = {
  name: 'Raj',
  greet: function () {
    console.log('Hello', this.name)
    console.log(this)
    console.log()
  }
}

var localAsk = raj.greet
localAsk()
// Output
// Hello undefined
// Window Object

var localAsk2 = raj.greet.bind(raj)
localAsk2()
// Output
// Hello Raj
// { name: 'Raj', greet: [Function: greet] }