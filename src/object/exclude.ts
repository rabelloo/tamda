import { infer } from '../function/infer';

/**
 * Creates a new object with all properties but `props` from the `source` object.
 * @param source Object to pick properties from.
 * @param props Properties to exclude from the resulting object.
 * @example
 * const source = { id: 1, original: true };
 * exclude(source, 'original');
 * // { id: 1 }
 */
export function exclude<T extends object>(
  source: T,
  ...props: (keyof T)[]
): Partial<T>;
/**
 * Creates a new object with all properties but `props` from the `source` object.
 * @param props Properties to exclude from the resulting object.
 * @example
 * const source = { id: 1, original: true };
 * const justId = exclude('original');
 * justId(source);
 * // { id: 1 }
 */
export function exclude<T extends object>(
  ...props: (keyof T)[]
): typeof deferred;
export function exclude() {
  return inferred.apply(undefined, arguments);
}

/**
 * Creates a new object with all properties but previously specified `props` from the `source` object.
 * @param source Object to pick properties from.
 */
declare function deferred<T extends object>(source: T): Partial<T>;

const inferred = infer(
  <T extends object>(source: T, ...props: (keyof T)[]): Partial<T> =>
    props.reduce(
      (clone, prop) => {
        // Faster than iterating entries or keys, safe here
        delete clone[prop];
        return clone;
      },
      { ...source }
    ),
  args => args[0] instanceof Object
);
