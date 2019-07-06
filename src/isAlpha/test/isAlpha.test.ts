import isAlpha from '..';

test('isAlpha("a") should return true', () => {
  expect(isAlpha('a')).toBe(true);
});

test('isAlpha("A") should return true', () => {
  expect(isAlpha('A')).toBe(true);
});

test('isAlpha("abc") should return true', () => {
  expect(isAlpha('abc')).toBe(true);
});

test('isAlpha("ABC") should return true', () => {
  expect(isAlpha('ABC')).toBe(true);
});

test('isAlpha("AbCd") should return true', () => {
  expect(isAlpha('AbCd')).toBe(true);
});

test('isAlpha("1") should return false', () => {
  expect(isAlpha('1')).toBe(false);
});

test('isAlpha("123") should return false', () => {
  expect(isAlpha('123')).toBe(false);
});

test('isAlpha("@") should return false', () => {
  expect(isAlpha('@')).toBe(false);
});

test('isAlpha("@++") should return false', () => {
  expect(isAlpha('@++')).toBe(false);
});

test('isAlpha("a1") should return false', () => {
  expect(isAlpha('a1')).toBe(false);
});

test('isAlpha("a b") should return false', () => {
  expect(isAlpha('a b')).toBe(false);
});

test('isAlpha("a@") should return false', () => {
  expect(isAlpha('a@')).toBe(false);
});
