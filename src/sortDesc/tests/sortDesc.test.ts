import sortDesc from '../';
import {
  NUMBER_ARRAY,
  NUMBER_ARRAY_TO_COMPACT,
  STRING_ARRAY,
  SORTED_NUMBER_ARRAY,
  SORTED_NUMBER_ARRAY_COMPACTED,
  SORTED_STRING_ARRAY,
} from './mocks';

test('sortDesc(NUMBER_ARRAY) should sort the NUMBER_ARRAY in descending order', () => {
  expect(sortDesc(NUMBER_ARRAY)).toStrictEqual(SORTED_NUMBER_ARRAY);
});

test('sortDesc(STRING_ARRAY) should sort the STRING_ARRAY in descending order', () => {
  expect(sortDesc(STRING_ARRAY)).toStrictEqual(SORTED_STRING_ARRAY);
});

test('sortDesc([]]) should return an empty array', () => {
  expect(sortDesc([])).toStrictEqual([]);
});

test('sortDesc(42) should throw an error', () => {
  expect(() => sortDesc(42)).toThrow();
});

test('sortDesc(NUMBER_ARRAY_TO_COMPACT, { compact: true }) should sort the array in descending order and remove falsy values except 0', () => {
  expect(sortDesc(NUMBER_ARRAY_TO_COMPACT, { compact: true })).toStrictEqual(SORTED_NUMBER_ARRAY_COMPACTED);
});
