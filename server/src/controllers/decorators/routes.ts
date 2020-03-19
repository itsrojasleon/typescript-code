import 'reflect-metadata';

function routerBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routerBinder('get');
export const put = routerBinder('put');
export const post = routerBinder('post');
export const del = routerBinder('del');
export const patch = routerBinder('patch');
