/**
 * Debounces the specified function so that it is only invoked
 * once the specified amount of time passes without any calls.
 * @note Calling the function will reset the timer.
 * @param time Amount of milliseconds to debounce. Default: `0`
 * @example
 * ```typescript
 * let count = 0;
 * const debounced = debounce(() => count++);
 * debounced();
 * debounced();
 * console.log(count);
 * // 0
 * setTimeout(() => console.log(count));
 * // 1
 * ```
 */
// tslint:disable-next-line: ban-types
export function debounce<F extends Function>(fn: F, time = 0): F {
  let timeout: NodeJS.Timeout;

  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn as any, time, ...args);
  }) as any;
}
