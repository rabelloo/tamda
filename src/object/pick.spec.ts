import { pick } from './pick';

describe('pick', () => {
  it(`should clone an object with only the specified properties`, () => {
    const obj = { id: 1, foo: 'bar' };
    const prop = 'id';

    const results = [
      pick(obj, prop),
      pick (prop) (obj),
    ];

    results.forEach(result => {
      expect(result).toEqual({ id: 1 });
    });
  });
});
