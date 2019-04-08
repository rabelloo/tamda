import { infer } from '../function/infer';

/**
 * Extracts the value of the property `prop` in a `source` object.
 * @param source Object to pick property from.
 * @param prop Property name/key to extract value from `source`.
 */
export function prop<T extends object, K extends keyof T>(
  source: T,
  prop: K
): T[K];
/**
 * Returns a function that
 * extracts the value of the property `prop` in a `source` object.
 * @param prop Property name/key to extract value from `source`.
 */
export function prop<T extends object>(prop: keyof T): typeof deferred;
export function prop() {
  return inferred.apply(undefined, arguments);
}

/**
 * Extracts the value of the property `prop` in a `source` object.
 * @param source Object to pick property from.
 */
declare function deferred<T extends object, K extends keyof T>(source: T): T[K];

const inferred = infer(
  <T extends object, K extends keyof T>(source: T, key: K): T[K] => source[key]
);
