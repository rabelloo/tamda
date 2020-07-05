/**
 * Creates a function that caches the result of function `fn` for each set of arguments,
 * avoiding computation when a matching set is invoked again.
 * @param fn Function to memoize.
 */
export function memoize<F extends (...args: Args) => R, Args extends Arr, R>(
  fn: F
): F {
  const cache: OpaqueMap = new Map();

  return ((...args: Args) => navigate(cache, fn, args)) as F;
}

const resultKey = Symbol('~result~');

function navigate(cache: OpaqueMap, fn: Fn, args: Arr) {
  const leaf = args.reduce(
    (branch: OpaqueMap, arg) => get(branch, arg, () => new Map()),
    cache
  ) as OpaqueMap;

  return get(leaf, resultKey, () => fn(...args));
}

const get = (map: OpaqueMap, key: unknown, computeValue: () => unknown) =>
  map.has(key) ? map.get(key) : map.set(key, computeValue()).get(key);

type Arr = readonly unknown[];
type Fn = (...args: Arr) => unknown;
type OpaqueMap = Map<unknown, unknown>;
