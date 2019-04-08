/**
 * Creates a function that returns the supplied `value` if the actual value is `null`, `undefined` or `NaN`,
 * otherwise returns the actual value itself.
 */
export function defaultTo<T>(value: T) {
  return (actual: unknown) =>
    actual == null || isNaN(actual as any) ? value : actual;
}
