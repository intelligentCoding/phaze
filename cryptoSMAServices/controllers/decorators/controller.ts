import 'reflect-metadata';
import { AppRouter } from '../../appRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { bodyValidator, bodyTypeValidator } from '../middlewares';

export function controller(routePrefix: string) {
    return function (target: Function) {
        const router = AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

            const validator = bodyValidator(requiredBodyProps);

            const validateBodyType = bodyTypeValidator(target.name);

            if(path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validator, validateBodyType, routeHandler);
            }
        }
    }
}