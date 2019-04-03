import { merge } from './merge';

describe('merge', () => {
  it(`should merge two objects (i.e. { ...objA, ...objB })`, () => {
    const objA = { id: 1, foo: 'bar' };
    const objB = { id: 2, bar: 'foo' };

    const results = [
      merge(objA, objB),
      merge (objB) (objA),
    ];

    results.forEach(result => {
      expect(result).toEqual({ id: 2, foo: 'bar', bar: 'foo' });
    });
  });
});
