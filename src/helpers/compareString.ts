/**
 * Compares two strings on equality, greater than or lesser than.
 *
 * @returns -
 * - 1 if `a` > `b`
 * - -1 if `b` > `a`
 * - 0 otherwise
 */
export function compareString(a: string, b: any): -1 | 0 | 1 {
  return a.localeCompare(b) as any;
}
