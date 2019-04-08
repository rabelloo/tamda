/**
 * Compares two values, `a` and `b`, on equality, greater than or lesser than.
 * @returns
 * - 1 if `a > b`
 * - -1 if `b > a`
 * - 0 otherwise
 */
export function compareValue(a: any, b: any): 0 | 1 | -1 {
  if (a == null) {
    if (b == null) {
      return 0;
    }
    return -1;
  }
  if (b == null || a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }

  return 0;
}
