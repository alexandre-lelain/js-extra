import { prettyTestName } from 'utils'
import sortDesc from '../'
import {
  NUMBER_ARRAY,
  NUMBER_ARRAY_TO_COMPACT,
  STRING_ARRAY,
  SORTED_NUMBER_ARRAY,
  SORTED_NUMBER_ARRAY_COMPACTED,
  SORTED_STRING_ARRAY,
} from './mocks'

describe('sortDesc', () => {
  test(
    prettyTestName(
      'sortDesc(%s) should sort the given array in descending order: %s',
      NUMBER_ARRAY,
      SORTED_NUMBER_ARRAY,
    ),
    () => {
      expect(sortDesc(NUMBER_ARRAY)).toStrictEqual(SORTED_NUMBER_ARRAY)
    },
  )

  test(
    prettyTestName(
      'sortDesc(%s) should sort the given string array in descending order: %s',
      STRING_ARRAY,
      SORTED_STRING_ARRAY,
    ),
    () => {
      expect(sortDesc(STRING_ARRAY)).toStrictEqual(SORTED_STRING_ARRAY)
    },
  )

  test('sortDesc([]]) should return an empty array', () => {
    expect(sortDesc([])).toStrictEqual([])
  })

  test('sortDesc(42) should throw an error', () => {
    expect(() => sortDesc(42)).toThrow()
  })

  test(
    prettyTestName(
      'sortDesc(%s, { compact: true }) should sort the array in descending order and remove falsy values except 0',
      NUMBER_ARRAY_TO_COMPACT,
    ),
    () => {
      expect(sortDesc(NUMBER_ARRAY_TO_COMPACT, { compact: true })).toStrictEqual(SORTED_NUMBER_ARRAY_COMPACTED)
    },
  )
})
