import { use } from './use';

describe('use', () => {
  it('should create an object with methods compose() and pipe()', () => {
    const withValue = use(1);

    expect(withValue.compose).toBeInstanceOf(Function);
    expect(withValue.pipe).toBeInstanceOf(Function);
  });

  describe('use().compose()', () => {
    it('should compose the supplied functions then immediately invoke it with the previously supplied value', () => {
      const concat = (a: string) => (b: string) => a + b;

      const result = use('').compose(
        concat('Hello'),
        concat(' '),
        concat('World!')
      );

      expect(result).toBe('Hello World!');
    });
  });

  describe('use().pipe()', () => {
    it('should pipe the supplied functions then immediately invoke it with the previously supplied value', () => {
      const concat = (b: string) => (a: string) => a + b;

      const result = use('').pipe(
        concat('Hello'),
        concat(' '),
        concat('World!')
      );

      expect(result).toBe('Hello World!');
    });
  });
});
