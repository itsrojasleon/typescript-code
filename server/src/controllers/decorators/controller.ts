import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      const mehtod: Methods = Reflect.getMetadata(
        'method',
        target.prototype,
        key
      );

      if (path) {
        router[mehtod](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
