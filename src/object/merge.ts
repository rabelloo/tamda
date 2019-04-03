import { infer } from '../function/infer';
import { Unary } from '../operators';

export function merge<A extends object, B extends object>(
  objA: A,
  objB: B
): A & B;
export function merge<A extends object, B extends object>(
  objB: B
): Unary<A, A & B>;
/**
 * Merges two objects, A and B, with preference for B's properties.
 * @note Same as `{ ...objA, ...objB }`
 */
export function merge(...args: any[]) {
  // tslint:disable-next-line: no-use-before-declare
  return _merge(...args);
}

// tslint:disable-next-line: variable-name
const _merge = infer(
  <A extends object, B extends object>(objA: A, objB: B): A & B => ({
    ...objA,
    ...objB,
  })
);
