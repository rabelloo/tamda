import { transform } from './transform';

describe('transform', () => {
  it(`should transform an object's properties based on a set of functions`, () => {
    const obj: O = { id: 1, foo: 'bar' };

    const results = [
      transform<O>(obj, { id: (id) => id + 1 }),
      transform<O>({ id: (id) => id + 1 })(obj),
    ];

    results.forEach((result) => {
      expect(result).toEqual({ ...obj, id: 2 });
    });
  });
});

interface O {
  id: number;
  foo: string;
}
