import isDigit from '..';

test('isDigit("0") should return true', () => {
  expect(isDigit('1')).toBe(true);
});

test('isDigit("012") should return true', () => {
  expect(isDigit('123')).toBe(true);
});

test('isDigit("a") should return false', () => {
  expect(isDigit('a')).toBe(false);
});

test('isDigit("A") should return true', () => {
  expect(isDigit('A')).toBe(false);
});

test('isDigit("abc") should return true', () => {
  expect(isDigit('abc')).toBe(false);
});

test('isDigit("ABC") should return true', () => {
  expect(isDigit('ABC')).toBe(false);
});

test('isDigit("AbCd") should return true', () => {
  expect(isDigit('AbCd')).toBe(false);
});

test('isDigit("@") should return false', () => {
  expect(isDigit('@')).toBe(false);
});

test('isDigit("@++") should return false', () => {
  expect(isDigit('@++')).toBe(false);
});

test('isDigit("0a") should return false', () => {
  expect(isDigit('0a')).toBe(false);
});

test('isDigit("0 1") should return false', () => {
  expect(isDigit('0 1')).toBe(false);
});

test('isDigit("a@") should return false', () => {
  expect(isDigit('a@')).toBe(false);
});
