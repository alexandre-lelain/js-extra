import { prettyTestName } from 'utils'

import sortCompact from '..'
import {
  NO_FALSEY_NUMBER_ARRAY,
  FALSEY_ARRAY,
  FALSEY_NUMBER_ARRAY_SORTED,
  FALSEY_NUMBER_ARRAY_SORTED_DEFAULT,
  FALSEY_NUMBER_ARRAY_SORTED_WITHOUT_ZERO,
  FALSEY_NUMBER_ARRAY_SORTED_WITHOUT_ZERO_DEFAULT,
  NO_FALSEY_NUMBER_ARRAY_SORTED,
  sortByDescendingOrder,
} from './mocks'

describe('sortCompact', () => {
  test('sortCompact({}, () => {}) throws an error on the array type.', () => {
    expect(() => sortCompact({}, () => {})).toThrow()
  })

  test(prettyTestName('sortCompact(%s) should return %s', FALSEY_ARRAY, FALSEY_NUMBER_ARRAY_SORTED_DEFAULT), () => {
    expect(sortCompact(FALSEY_ARRAY)).toStrictEqual(FALSEY_NUMBER_ARRAY_SORTED_DEFAULT)
  })

  test(
    prettyTestName(
      'sortCompact(%s, { withZero: true }) should return %s',
      FALSEY_ARRAY,
      FALSEY_NUMBER_ARRAY_SORTED_WITHOUT_ZERO_DEFAULT,
    ),
    () => {
      expect(sortCompact(FALSEY_ARRAY, { withZero: true })).toStrictEqual(
        FALSEY_NUMBER_ARRAY_SORTED_WITHOUT_ZERO_DEFAULT,
      )
    },
  )

  test(
    prettyTestName(
      'sortCompact(%s, (a, b) => b-a) should return %s',
      NO_FALSEY_NUMBER_ARRAY,
      NO_FALSEY_NUMBER_ARRAY_SORTED,
    ),
    () => {
      expect(sortCompact(NO_FALSEY_NUMBER_ARRAY, sortByDescendingOrder)).toStrictEqual(NO_FALSEY_NUMBER_ARRAY_SORTED)
    },
  )

  test(
    prettyTestName('sortCompact(%s, (a, b) => b-a) should return %s', FALSEY_ARRAY, FALSEY_NUMBER_ARRAY_SORTED),
    () => {
      expect(sortCompact(FALSEY_ARRAY, sortByDescendingOrder)).toStrictEqual(FALSEY_NUMBER_ARRAY_SORTED)
    },
  )

  test(
    prettyTestName(
      'sortCompact(%s, (a, b) => b-a, { withZero: true }) should return %s',
      FALSEY_ARRAY,
      FALSEY_NUMBER_ARRAY_SORTED_WITHOUT_ZERO,
    ),
    () => {
      expect(sortCompact(FALSEY_ARRAY, sortByDescendingOrder, { withZero: true })).toStrictEqual(
        FALSEY_NUMBER_ARRAY_SORTED_WITHOUT_ZERO,
      )
    },
  )

  test(prettyTestName('sortCompact(%s) should return %s', FALSEY_ARRAY, FALSEY_NUMBER_ARRAY_SORTED_DEFAULT), () => {
    expect(sortCompact(FALSEY_ARRAY)).toStrictEqual(FALSEY_NUMBER_ARRAY_SORTED_DEFAULT)
  })
})
