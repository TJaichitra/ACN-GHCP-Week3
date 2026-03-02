#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 * Supports the following operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (x)
 *   - Division (÷)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *   Example: node calculator.js add 2 3
 */

const { add, subtract, multiply, divide } = require('./calculator.functions');

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  console.log('Operations: add (+), subtract (-), multiply (x), divide (÷)');
  console.log('Example: node calculator.js add 2 3');
}

if (!operation || !num1 || !num2) {
  printUsage();
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);
if (isNaN(a) || isNaN(b)) {
  console.error('Both operands must be valid numbers.');
  process.exit(1);
}

let result;
switch (operation.toLowerCase()) {
  case 'add':
  case '+':
    result = add(a, b);
    break;
  case 'subtract':
  case '-':
    result = subtract(a, b);
    break;
  case 'multiply':
  case 'x':
  case '*':
    result = multiply(a, b);
    break;
  case 'divide':
  case '÷':
  case '/':
    try {
      result = divide(a, b);
    } catch (e) {
      console.error('Error: ' + e.message);
      process.exit(1);
    }
    break;
  case 'mod':
  case 'modulo':
  case '%':
    try {
      result = modulo(a, b);
    } catch (e) {
      console.error('Error: ' + e.message);
      process.exit(1);
    }
    break;
  case 'pow':
  case 'power':
  case '^':
    result = power(a, b);
    break;
  case 'sqrt':
  case 'squareroot':
    try {
      result = squareRoot(a);
    } catch (e) {
      console.error('Error: ' + e.message);
      process.exit(1);
    }
    break;
  default:
    console.error('Unknown operation:', operation);
    printUsage();
    process.exit(1);
}

console.log(result);
