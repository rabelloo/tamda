import { infer } from '../function/infer';
import { Unary } from '../operators';

export function exclude<T extends object>(
  obj: T,
  ...props: (keyof T)[]
): Partial<T>;
export function exclude<T extends object>(
  ...props: (keyof T)[]
): Unary<T, Partial<T>>;
/**
 * Creates a new object with all but the specified properties from the source object.
 *
 * @example
 * ```typescript
 * const source = { id: 1, original: true };
 * exclude(source, ['original']);
 * // { id: 1 }
 * ```
 */
export function exclude(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _exclude(...args);
}

// tslint:disable-next-line: variable-name
const _exclude = infer(
  <T extends object>(source: T, ...props: (keyof T)[]): Partial<T> =>
    props.reduce(
      (clone, prop) => {
        // Faster than iterating entries or keys, safe here
        delete clone[prop];
        return clone;
      },
      { ...source } as any
    ),
  args => args[0] instanceof Object
);
