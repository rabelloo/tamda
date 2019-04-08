import { infer } from '../function/infer';

/**
 * Maps the extracted value of a property `key` of each object in an `array`.
 * @note Same as `map(prop())`
 * @param array Array to map over.
 * @param key Key to pick from each item.
 */
export function pluck<T extends object, K extends keyof T>(
  array: T[],
  key: K
): T[K][];
/**
 * Returns a function that
 * maps the extracted value of a property `key` of each object in an `array`.
 * @note Same as `map(prop())`
 * @param key Key to pick from each item.
 */
export function pluck<T extends object>(key: keyof T): typeof deferred;
export function pluck() {
  return inferred.apply(undefined, arguments);
}

/**
 * Maps the extracted value of a previously specified property `key` of each object in an `array`.
 * @note Same as `map(prop())`
 * @param array Array to map over.
 */
declare function deferred<T extends object>(array: T[]): T[keyof T][];

const inferred = infer(
  <T extends object, K extends keyof T>(array: T[], key: K): T[K][] =>
    array.map(obj => obj[key])
);
