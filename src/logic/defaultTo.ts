/**
 * Returns the supplied value if the actual value is `null`, `undefined` or `NaN`,
 * otherwise returns the actual value itself.
 */
export function defaultTo<T>(value: T): (actual: unknown) => T {
  return (actual: any) =>
    actual == null || Number.isNaN(actual) ? value : actual;
}
