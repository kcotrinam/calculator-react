import operate from '../../logic/operate';

describe('Operate Method', () => {
  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });

  it('Should not be a object', () => {
    expect(typeof operate).not.toEqual('object');
  });

  it('Should return the result of 5+5', () => {
    const result = operate('5', '5', "+");
    expect(result * 1).toBe(10)
  });

  it('Should not return 25', () => {
    const result = operate('5', '5', "+");
    expect(result * 1).not.toBe(25)
  });

  it('Should return 0', () => {
    const result = operate('5', '5', "-");
    expect(result * 1).toBe(0)
  });

  it('Should not return 1', () => {
    const result = operate('5', '5', "-");
    expect(result * 1).not.toBe(1)
  });

  it('Should return 25', () => {
    const result = operate('5', '5', "x");
    expect(result * 1).toBe(25)
  });

  it('Should not return 1', () => {
    const result = operate('5', '5', "x");
    expect(result * 1).not.toBe(1)
  });

  it('Should return 1', () => {
    const result = operate('5', '5', "/");
    expect(result * 1).toBe(1)
  });

  it('Should not return 1', () => {
    const result = operate('5', '5', "/");
    expect(result * 1).not.toBe(0)
  });
});