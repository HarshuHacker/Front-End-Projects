const CN = 
{
  name: "Coding Ninjas"
};

function print()
{
  console.log(this) ;
}

print.bind(CN)() ;