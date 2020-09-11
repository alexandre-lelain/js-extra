import createArray from '../createArray'

const ARRAY_WITH_UNDEFINED_VALUES = [undefined, undefined, undefined]
const ARRAY_WITH_42_VALUES = [42, 42, 42]
const ARRAY_WITH_OBJECT_VALUES = [{ jsExtra: 'rocks' }, { jsExtra: 'rocks' }, { jsExtra: 'rocks' }]

describe('createArray()', () => {
  test('createArray() should return an empty new Array of length 0 by default', () => {
    expect(createArray()).toEqual([])
  })

  test('createArray(0) should return an empty new Array of length 0', () => {
    expect(createArray(0)).toEqual([])
  })

  test('createArray("42") should throw an error', () => {
    expect(() => createArray('42')).toThrow()
  })

  test('createArray(3) should return a new Array of length 3 filled with undefined values', () => {
    expect(createArray(3)).toEqual(ARRAY_WITH_UNDEFINED_VALUES)
  })

  test('createArray(3, 42) should return a new Array of length 3 filled with 42 values', () => {
    expect(createArray(3, 42)).toEqual(ARRAY_WITH_42_VALUES)
  })

  test('createArray(3, { jsExtra: "rocks" }) should return a new Array of length 3 filled with { jsExtra: "rocks" } objects', () => {
    expect(createArray(3, { jsExtra: 'rocks' })).toEqual(ARRAY_WITH_OBJECT_VALUES)
  })
})
