import { infer } from '../function/infer';
import { Indexable } from '../indexable';

/**
 * Transforms a `source` object based on specified functions for each property in an object `mapper`.
 * @note Specify type param `T` to get TypeScript inference on `mapper`, e.g. `transform<MyInterface>()`.
 * @param source Object to transform.
 * @param mapper Object with key/value pairs of property names and transforming functions.
 * @example ```typescript
 * const source = { order: 5, foo: 'bar' };
 * transform(source, { order: o => o + 1 });
 * // { order: 6, foo: 'bar' } ```
 */
export function transform<T>(source: T, mapper: Mapper<T>): T;

/**
 * Returns a function that
 * transforms a `source` object based on specified functions for each property in an object `mapper`.
 * @note Specify type param `T` to get TypeScript inference on `mapper`, e.g. `transform<MyInterface>()`.
 * @param mapper Object with key/value pairs of property names and transforming functions.
 * @example ```typescript
 * const incrementOrder = transform({ order: o => o + 1 });
 * incrementOrder({ order: 5, foo: 'bar' })
 * // { order: 6, foo: 'bar' } ```
 */
export function transform<T>(mapper: Mapper<T>): typeof deferred;
export function transform() {
  return inferred.apply(undefined, arguments);
}

export type Mapper<T> = { [K in keyof T]?: (p: T[K]) => T[K] };

/**
 * Transforms a `source` object based on specified functions for each property in an object `mapper`.
 * @param source Object to transform.
 */
declare function deferred<T>(source: T): T;

const inferred = infer(
  <T extends Indexable>(source: T, mapper: Mapper<T>): T =>
    Object.entries(mapper).reduce(
      (clone, [key, fn]) => {
        // Faster than spreading, safe here
        (clone as any)[key] = fn!(clone[key]);
        return clone;
      },
      { ...source }
    )
);
