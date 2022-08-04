function greet(name, callback) {
  console.log(`Hi ${name}`)
  callback()
}

function ask() {
  console.log("How Are You ??")
}

greet("Harsh", ask)