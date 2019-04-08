/**
 * A plain JavaScript object that is similar to a native Map, but always has strings as keys.
 */
export interface ObjectMap<T> {
  [key: string]: T;
}
