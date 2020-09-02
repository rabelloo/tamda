import { exclude } from './exclude';

describe('exclude', () => {
  it(`should clone an object that contains all properties but the ones specified`, () => {
    const obj: O = { id: 1, foo: false };
    const key = 'foo';

    const results = [exclude(obj, key), exclude(key)(obj)];

    results.forEach((result) => {
      expect(result).toEqual({ id: 1 });
    });
  });
});

interface O {
  id: number;
  foo: boolean;
}
