import { use } from './use';

describe('use', () => {
  it('should create an object with methods compose() and pipe()', () => {
    const withValue = use(1);

    expect(withValue.compose).toBeInstanceOf(Function);
    expect(withValue.pipe).toBeInstanceOf(Function);
  });

  describe('use().compose()', () => {
    it('should compose the supplied functions then immediately invoke it with the previously supplied value', () => {
      const sum = (b: number) => (a: number) => a + b;

      const result = use(1).compose(sum(1));

      expect(result).toBe(2);
    });
  });

  describe('use().pipe()', () => {
    it('should pipe the supplied functions then immediately invoke it with the previously supplied value', () => {
      const sum = (b: number) => (a: number) => a + b;

      const result = use(1).pipe(sum(1));

      expect(result).toBe(2);
    });
  });
});
