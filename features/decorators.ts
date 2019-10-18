class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('Swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
}
