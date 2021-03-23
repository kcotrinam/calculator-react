import buttonOperations from '../../logic/calculate';

describe('ButtonOperations method', () => {
  it('Should be a function', () => {
    expect(typeof buttonOperations).toEqual('function');
  });

  it('Should not be an object', () => {
    expect(typeof buttonOperations).not.toEqual('object');
  });

  it('Should return an object', () => {
    const result = buttonOperations(7, { total: null, next: null, operation: null });
    expect(typeof result).toEqual('object');
  });

  it('Should return object with null values', () => {
    const result = buttonOperations('AC', { total: null, next: null, operation: null });
    expect(result).toStrictEqual({ total: 'Error', next: null, operation: null });
  });
});
