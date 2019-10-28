import 'reflect-metadata';

const plane = {
  color: 'red'
};

Reflect.defineMetadata('note', 'hi there', plane);

Reflect.getMetadata('note', plane);
