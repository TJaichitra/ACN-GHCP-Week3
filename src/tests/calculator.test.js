const { add, subtract, multiply, divide } = require('../calculator.functions');

describe('Calculator', () => {
  // Addition
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  // Subtraction
  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  // Multiplication
  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  // Division
  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  // Edge cases
  test('Division by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('Negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(subtract(-2, -3)).toBe(1);
    expect(multiply(-2, 3)).toBe(-6);
    expect(divide(-6, 3)).toBe(-2);
  });

  test('Floating point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(subtract(1.5, 0.5)).toBeCloseTo(1.0);
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
    expect(divide(5.5, 2)).toBeCloseTo(2.75);
  });
});
