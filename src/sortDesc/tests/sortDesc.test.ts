import sortDesc from '../';
import { NUMBER_ARRAY, STRING_ARRAY, SORTED_NUMBER_ARRAY, SORTED_STRING_ARRAY } from './mocks.ts';

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
