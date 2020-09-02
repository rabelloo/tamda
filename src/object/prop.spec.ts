import { prop } from './prop';

describe('prop', () => {
  it(`should return the object's property value`, () => {
    const obj: O = { id: 1 };
    const key = 'id';

    const results = [prop(obj, key), prop(key)(obj)];

    results.forEach((result) => {
      expect(result).toEqual(obj.id);
    });
  });
});

interface O {
  id: number;
}
