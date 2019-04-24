import { defaultTo } from './defaultTo';

describe('defaultTo', () => {
  it('should return the result itself when not null, undefined or NaN', () => {
    const obj = {};
    const array: any[] = [];

    const withDefault = defaultTo(1);

    expect(withDefault(-1)).toBe(-1);
    expect(withDefault(0)).toBe(0);
    expect(withDefault(2)).toBe(2);
    expect(withDefault('')).toBe('');
    expect(withDefault(false)).toBe(false);
    expect(withDefault(true)).toBe(true);
    expect(withDefault(obj)).toBe(obj);
    expect(withDefault(array)).toBe(array);
  });

  it('should return the supplied argument when null, undefined or NaN', () => {
    const withDefault = defaultTo(1);

    expect(withDefault(undefined)).toBe(1);
    expect(withDefault(null)).toBe(1);
    expect(withDefault(NaN)).toBe(1);
  });
});
