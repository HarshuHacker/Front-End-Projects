class Vehicle{
  constructor (doors, wheels)
  {
      this.doors = doors;
      this.wheels = wheels;
  }
}
class bus extends Vehicle
{
  constructor(windows)
  {
    super(2, 6)
    this.windows = windows;
  }
}
var b = new bus(10);
console.log(b.windows);