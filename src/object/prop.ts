import { infer } from '../function/infer';
import { Indexable } from '../indexable';

/**
 * Extracts the value of the property `prop` in a `source` object.
 * @param source Object to pick property from.
 * @param prop Property name/key to extract value from `source`.
 */
export function prop<T extends Indexable, K extends keyof T>(
  source: T,
  prop: K
): T[K];
/**
 * Returns a function that
 * extracts the value of the property `prop` in a `source` object.
 * @param prop Property name/key to extract value from `source`.
 */
export function prop<T extends Indexable>(prop: keyof T): typeof deferred;
export function prop() {
  return inferred.apply(undefined, arguments);
}

/**
 * Extracts the value of the property `prop` in a `source` object.
 * @param source Object to pick property from.
 */
declare function deferred<T extends Indexable, K extends keyof T>(source: T): T[K];

const inferred = infer(
  <T extends Indexable, K extends keyof T>(source: T, key: K): T[K] => source[key]
);
