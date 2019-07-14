class Vehicle {
  constructor(public color: string) {}
}

const vehicle = new Vehicle('orange');

console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car = new Car();

// car.startDrivingProcess();
