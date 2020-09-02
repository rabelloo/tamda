import { infer } from '../function/infer';

/**
 * Creates a new object with only properties `prop` from the `source` object.
 * @param source Object to pick properties from.
 * @param props Properties to pick from source object.
 * @example
 * const source = { id: 1, original: true };
 * pick(source, 'id');
 * // { id: 1 }
 */
export function pick<T extends object>(
  source: T,
  ...props: (keyof T)[]
): Partial<T>;
/**
 * Returns a function that
 * creates a new object with only properties `prop` from the `source` object.
 * @param props Properties to pick from source object.
 * @example
 * const source = { id: 1, original: true };
 * const justId = pick('id');
 * justId(source);
 * // { id: 1 }
 */
export function pick<T extends object>(...props: (keyof T)[]): typeof deferred;
export function pick() {
  return inferred.apply(undefined, arguments);
}

/**
 * Creates a new object with only properties `prop` from the `source` object.
 * @param source Object to pick properties from.
 */
declare function deferred<T extends object>(source: T): Partial<T>;

const inferred = infer(
  <T extends object>(source: T, ...props: (keyof T)[]): Partial<T> =>
    props.reduce((obj, prop) => {
      // Faster than spreading, safe here
      obj[prop] = source[prop];
      return obj;
    }, {} as T),
  (args) => args[0] instanceof Object
);
