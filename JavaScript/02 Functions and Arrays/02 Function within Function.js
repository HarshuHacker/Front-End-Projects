function outer()
{
  function inner()
  {
    console.log("Inner")
    return
  }
  console.log("Outer 1")
  inner()
  console.log("Outer 2")
}

outer()
// inner() This Cannot Be Called Because Its Available Only Inside The Scope Of Outer And Not Globally