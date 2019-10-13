import sortAsc from '../';
import { 
  NUMBER_ARRAY,
  NUMBER_ARRAY_TO_COMPACT,
  STRING_ARRAY,
  SORTED_NUMBER_ARRAY,
  SORTED_NUMBER_ARRAY_COMPACTED,
  SORTED_STRING_ARRAY,
} from './mocks';

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

test('sortAsc(NUMBER_ARRAY_TO_COMPACT, { compact: true }) should sort the array in acending order and remove falsy values except 0', () => {
  expect(sortAsc(NUMBER_ARRAY_TO_COMPACT, { compact: true })).toStrictEqual(SORTED_NUMBER_ARRAY_COMPACTED);
});

