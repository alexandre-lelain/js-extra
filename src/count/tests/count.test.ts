import count from '../';
import { BOOLEAN_ARRAY, NUMBER_ARRAY, STRING_ARRAY } from './mocks';

// Array<number> tests
test('count(NUMBER_ARRAY, 1) to equal 2', () => {
  expect(count(NUMBER_ARRAY, 1)).toBe(2);
});

test('count(NUMBER_ARRAY, 42) to equal 0', () => {
  expect(count(NUMBER_ARRAY, 42)).toBe(0);
});

test('count(NUMBER_ARRAY, 5) to equal 3', () => {
  expect(count(NUMBER_ARRAY, 5)).toBe(3);
});

// Array<string> tests
test('count(STRING_ARRAY, "hello") to equal 2', () => {
  expect(count(STRING_ARRAY, 'hello')).toBe(2);
});

test('count(STRING_ARRAY, "js-extra") to equal 0', () => {
  expect(count(STRING_ARRAY, 'js-extra')).toBe(0);
});

test('count(STRING_ARRAY, "world") to equal 3', () => {
  expect(count(STRING_ARRAY, 'world')).toBe(3);
});

// Array<boolean> tests
test('count(BOOLEAN_ARRAY, true) to equal 3', () => {
  expect(count(BOOLEAN_ARRAY, true)).toBe(3);
});

test('count(BOOLEAN_ARRAY, 42) to equal 0', () => {
  expect(count(BOOLEAN_ARRAY, 42)).toBe(0);
});

test('count(BOOLEAN_ARRAY, false) to equal 1', () => {
  expect(count(BOOLEAN_ARRAY, false)).toBe(1);
});

//Exceptions tests
test('count("not an array", 42) to throw an error on 1st argument type', () => {
  expect(() => count('not an array', 42)).toThrow();
});
