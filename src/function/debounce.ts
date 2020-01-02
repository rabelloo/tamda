/**
 * Creates a function that debounces function `fn` so that it is only invoked
 * when `time` in milliseconds has passed without any calls to the generated function.
 * @note Calling the generated function will reset the timer.
 * @param fn Function to invoke.
 * @param time Amount of milliseconds to debounce. Default: `0`
 * @example
 * let count = 0;
 * const debounced = debounce(() => count++);
 * debounced();
 * debounced();
 * console.log(count);
 * // 0
 * setTimeout(() => console.log(count));
 * // 1
 */
// tslint:disable-next-line: ban-types
export function debounce<F extends Function>(fn: F, time = 0): F {
  let timeout: number;

  // tslint:disable-next-line: only-arrow-functions
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(fn as any, time, ...arguments);
  } as any;
}
