"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routerBinder('get');
exports.put = routerBinder('put');
exports.post = routerBinder('post');
exports.del = routerBinder('del');
exports.patch = routerBinder('patch');
