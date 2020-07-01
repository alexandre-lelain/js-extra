import { prettyTestName } from 'utils'
import sortAsc from '../'
import {
  NUMBER_ARRAY,
  NUMBER_ARRAY_TO_COMPACT,
  STRING_ARRAY,
  SORTED_NUMBER_ARRAY,
  SORTED_NUMBER_ARRAY_COMPACTED,
  SORTED_STRING_ARRAY,
} from './mocks'

describe('sortAsc', () => {
  test(
    prettyTestName('sortAsc(%s) should sort the given array in ascending order: %s', NUMBER_ARRAY, SORTED_NUMBER_ARRAY),
    () => {
      expect(sortAsc(NUMBER_ARRAY)).toStrictEqual(SORTED_NUMBER_ARRAY)
    },
  )

  test(
    prettyTestName(
      'sortAsc(%s) should sort the given string array in alphabetical order: %s',
      STRING_ARRAY,
      SORTED_STRING_ARRAY,
    ),
    () => {
      expect(sortAsc(STRING_ARRAY)).toStrictEqual(SORTED_STRING_ARRAY)
    },
  )

  test('sortAsc([]]) should return an empty array', () => {
    expect(sortAsc([])).toStrictEqual([])
  })

  test('sortAsc(42) should throw an error', () => {
    expect(() => sortAsc(42)).toThrow()
  })

  test(
    prettyTestName(
      'sortAsc(%s, { compact: true }) should sort the array in ascending order and remove falsy values except 0',
      NUMBER_ARRAY_TO_COMPACT,
    ),
    () => {
      expect(sortAsc(NUMBER_ARRAY_TO_COMPACT, { compact: true })).toStrictEqual(SORTED_NUMBER_ARRAY_COMPACTED)
    },
  )
})
