var ninja = 
{
  name: 'Ninja',
  getName: function() 
  {
    var name = this.name;
    return name;
  }
};
var funcName = function(snack, hobby) 
{
  console.log(this.getName() + ' loves ' + snack + ' and ' + hobby);
};
funcName.call(ninja,'sushi', 'algorithms'); // Here We Dont Need To Pass In Form Of Array
funcName.apply(ninja,['sushi', 'algorithms']); // In Apply We Need To Pass Arguments In Form Of Array