import { infer } from '../function/infer';
import { Unary } from '../operators';

export function pick<T extends object>(
  obj: T,
  ...props: (keyof T)[]
): Partial<T>;
export function pick<T extends object>(
  ...props: (keyof T)[]
): Unary<T, Partial<T>>;
/**
 * Creates a new object with only the specified properties from the source object.
 *
 * @example
 * ```typescript
 * const source = { id: 1, original: true };
 * pick(source, ['id']);
 * // { id: 1 }
 * ```
 */
export function pick(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _pick(...args);
}

// tslint:disable-next-line: variable-name
const _pick = infer(
  <T extends object>(source: T, ...props: (keyof T)[]): Partial<T> =>
    props.reduce(
      (obj, prop) => {
        // Faster than spreading, safe here
        obj[prop] = source[prop];
        return obj;
      },
      {} as any
    ),
  args => args[0] instanceof Object
);
