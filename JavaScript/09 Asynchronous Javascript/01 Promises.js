var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      message: "success"
    })
  }, 3000)
})

promise
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log("Error : ", error)
  })