import sortAsc from '../';
import { NUMBER_ARRAY, STRING_ARRAY, SORTED_NUMBER_ARRAY, SORTED_STRING_ARRAY } from './mocks.ts';

test('sortAsc(NUMBER_ARRAY) should sort the NUMBER_ARRAY in ascending order', () => {
  expect(sortAsc(NUMBER_ARRAY)).toStrictEqual(SORTED_NUMBER_ARRAY);
});

test('sortAsc(STRING_ARRAY) should sort the STRING_ARRAY in ascending order', () => {
  expect(sortAsc(STRING_ARRAY)).toStrictEqual(SORTED_STRING_ARRAY);
});

test('sortAsc([]]) should return an empty array', () => {
  expect(sortAsc([])).toStrictEqual([]);
});

test('sortAsc(42) should throw an error', () => {
  expect(() => sortAsc(42)).toThrow();
});
