class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();

car.startDrivingProcess();
