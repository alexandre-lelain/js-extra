import { prettyTestName } from 'utils'
import redesign from '../'

import {
  COMPACT_ARRAY,
  FALSY_ARRAY,
  NUMBER_ARRAY,
  NUMBER_ODD_ARRAY,
  NUMBER_TRANSFORMED_ARRAY,
  OBJECT_ARRAY,
  REDESIGNED_ARRAY,
  REDESIGNED_ARRAY_WITH_IDS,
} from './mocks'

describe('redesign', () => {
  test('redesign("42") should throw an error', () => {
    expect(() => redesign(42)).toThrowError()
  })

  // With no parameters
  test('redesign() to equal []', () => {
    expect(redesign()).toEqual(expect.arrayContaining([]))
  })

  // With empty array
  test('redesign([]) to equal []', () => {
    expect(redesign([])).toEqual(expect.arrayContaining([]))
  })

  // With number array and no parameters
  test(prettyTestName('redesign(%s) to equal %s', NUMBER_ARRAY, NUMBER_ARRAY), () => {
    expect(redesign(NUMBER_ARRAY)).toEqual(NUMBER_ARRAY)
  })

  // With falsy array and compact: true
  test(prettyTestName('redesign(%s, { compact }) to equal %s', FALSY_ARRAY, COMPACT_ARRAY), () => {
    expect(redesign(FALSY_ARRAY, { compact: true })).toEqual(COMPACT_ARRAY)
  })

  // With number array and filter function that keeps odd numbers only
  test(
    prettyTestName('redesign(%s, { filter: item => item % 2 !== 0 }) to equal %s', NUMBER_ARRAY, NUMBER_ODD_ARRAY),
    () => {
      expect(redesign(NUMBER_ARRAY, { filter: (item) => item % 2 !== 0 })).toEqual(NUMBER_ODD_ARRAY)
    },
  )

  // With number array and transform function that set items to 42
  test(
    prettyTestName('redesign(%s, { transform: item => 42 }) to equal %s', NUMBER_ARRAY, NUMBER_TRANSFORMED_ARRAY),
    () => {
      expect(redesign(NUMBER_ARRAY, { transform: () => 42 })).toEqual(NUMBER_TRANSFORMED_ARRAY)
    },
  )

  // With array of objects, filter, transform & compact options
  test(
    prettyTestName(
      'redesign(%s, { filter: someFunc, transform: someFunc, compact }) to equal %s',
      OBJECT_ARRAY,
      REDESIGNED_ARRAY,
    ),
    () => {
      expect(
        redesign(OBJECT_ARRAY, {
          filter: (item) => item.name === 'js',
          transform: (item) => ({ name: item.name + '-extra' }),
          compact: true,
        }),
      ).toEqual(REDESIGNED_ARRAY)
    },
  )

  // With array of objects, filter, transform & compact options
  test(
    prettyTestName(
      'redesign(%s, { filter: someFunc, transform: someFunc, compact }) to equal %s',
      OBJECT_ARRAY,
      REDESIGNED_ARRAY_WITH_IDS,
    ),
    () => {
      expect(
        redesign(OBJECT_ARRAY, {
          filter: (item) => item.name === 'js',
          transform: (item) => ({ ...item, name: item.name + '-extra' }),
          compact: true,
        }),
      ).toEqual(REDESIGNED_ARRAY_WITH_IDS)
    },
  )
})
