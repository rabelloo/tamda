import { infer } from '../function/infer';

/**
 * Determines whether a number `num` is between a `min` and a `max`.
 * @note Inclusive, i.e. `between(0, 0, 0) === true`
 * @param num Target number.
 * @param min Minimum value.
 * @param max Maximum value.
 */
export function between(num: number, min: number, max: number): number[];
/**
 * Returns a function that
 * determines whether a number `num` is between a `min` and a `max`.
 * @note Inclusive, i.e. `between(0, 0)(0) === true`
 * @param min Minimum value.
 * @param max Maximum value.
 */
export function between(min: number, max: number): typeof deferred;
export function between() {
  return inferred.apply(undefined, arguments);
}

/**
 * Determines whether a number `num` is between both previously specified `min` and `max`.
 * @note Inclusive, i.e. `between(0, 0)(0) === true`
 * @param num Target number.
 */
declare function deferred(num: number): boolean;

const inferred = infer(
  (num: number, min: number, max: number): boolean => min <= num && num <= max
);
