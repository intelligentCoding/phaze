import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';


export function bodyValidator(...keys: string[]) {
    //factor decorator
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
    }
}