/**
 * Creates a function that caches the result of the specified function for each set of arguments,
 * avoiding computation when a matching cache has already been stored.
 */
// tslint:disable-next-line: ban-types
export function memoize<F extends Function>(fn: F): F {
  const cache = new Map();

  return ((...args: any[]) => navigate(cache, fn, args)) as any;
}

const resultKey = '~result~';

// tslint:disable-next-line: ban-types
function navigate(cache: Map<any, any>, fn: Function, args: any[]) {
  const leaf = args.reduce(
    (branch, arg) => getOrSet(branch, arg, () => new Map()),
    cache
  );
  return getOrSet(leaf, resultKey, () => fn(...args));
}

function getOrSet(map: Map<any, any>, key: any, computeValue: () => any) {
  return map.has(key) ? map.get(key) : map.set(key, computeValue()).get(key);
}
