async function x() 
{
  try
  {
    console.log("Try Block")
    await Promise.reject("Rejected!!")
  } 
  catch(e) 
  {
    console.log("Catch Block")
    console.log(e)
  }
}

x()