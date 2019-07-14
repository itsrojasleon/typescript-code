class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beep');
  }
}

const vehicle = new Vehicle('orange');

console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'red');

car.startDrivingProcess();
