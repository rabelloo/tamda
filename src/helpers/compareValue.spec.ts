import { compareValue } from './compareValue';

describe('compareValue', () => {
  it(`should return 0 when valueA and valueB are equal`, () => {
    const result = compareValue(1, 1);

    expect(result).toBe(0);
  });

  it(`should return- 1 when valueA > valueB`, () => {
    const result = compareValue(1, 2);

    expect(result).toBe(-1);
  });

  it(`should return 1 when valueB > valueA`, () => {
    const result = compareValue(2, 1);

    expect(result).toBe(1);
  });

  it(`should return 0 when both values are null or undefined`, () => {
    const result = compareValue(null, undefined);

    expect(result).toBe(0);
  });

  it(`should return -1 when valueA is null or undefined`, () => {
    const result = compareValue(null, 1);

    expect(result).toBe(-1);
  });
});
