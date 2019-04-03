import { infer } from '../function/infer';
import { Unary } from '../operators';

export function transform<T>(obj: T, mapper: Mapper<T>): T;
export function transform<T>(mapper: Mapper<T>): Unary<T, T>;
/**
 * Transforms an object based on the specified function for each property.
 *
 * @note Specify type param `T` to get TypeScript inference on `mapper`,
 * e.g. `transform<MyInterface>()`.
 *
 * @example
 * ```typescript
 * interface Ordered {
 *   order: number;
 *   foo: string;
 * }
 *
 * const incrementOrder = transform<Ordered>({ order: o => o + 1 });
 * incrementOrder({ order: 5, foo: 'bar' })
 * // { order: 6, foo: 'bar' }
 * ```
 */
export function transform(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _transform(...args);
}

// tslint:disable-next-line: variable-name
const _transform = infer(
  <T>(source: T, mapper: Mapper<T>): T =>
    Object.entries(mapper).reduce(
      (obj: any, [key, fn]) => {
        // Faster than spreading, safe here
        obj[key] = fn(obj[key]);
        return obj;
      },
      { ...source }
    )
);

export type Mapper<T> = { [K in keyof T]?: (p: T[K]) => T[K] };
