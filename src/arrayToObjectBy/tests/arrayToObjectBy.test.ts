import arrayToObjectBy from '../arrayToObjectBy'

const basicArray = [42, 'js', 'extra']
const mixedArray = [42, { js: 'extra' }, { hello: 'world' }]
const mixedComplexArray = [42, { js: 'extra', age: 25 }, { hello: 'world', age: 42 }]
const arrayOfObjects = [
  { id: '1', name: 'js', age: 25 },
  { id: '2', name: 'extra', age: 42 },
]
const objectOfArrays = {
  1: {
    name: 'js',
    age: 25,
  },
  2: {
    name: 'extra',
    age: 42,
  },
}

describe('arrayToObjectBy()', () => {
  test('arrayToObjectBy() should throw an error', () => {
    expect(() => arrayToObjectBy()).toThrow()
  })

  test('arrayToObjectBy(42) should throw an error', () => {
    expect(() => arrayToObjectBy(42)).toThrow()
  })

  test('arrayToObjectBy(42, "id") should throw an error', () => {
    expect(() => arrayToObjectBy(42, 'id')).toThrow()
  })

  test('arrayToObjectBy(basicArray, "id") should return {}', () => {
    expect(arrayToObjectBy(basicArray, 'id')).toEqual({})
  })

  test('arrayToObjectBy(mixedArray, "id") should return {}', () => {
    expect(arrayToObjectBy(mixedArray, 'id')).toEqual({})
  })

  test('arrayToObjectBy(mixedArray, "js") should return { extra: {}}', () => {
    expect(arrayToObjectBy(mixedArray, 'js')).toEqual({ extra: {} })
  })

  test('arrayToObjectBy(mixedComplexArray, "js") should return { extra: { age: 25 }}', () => {
    expect(arrayToObjectBy(mixedComplexArray, 'js')).toEqual({ extra: { age: 25 } })
  })

  test('arrayToObjectBy(arrayOfObjects, "unkown-key") should return {}', () => {
    expect(arrayToObjectBy(arrayOfObjects, 'unkown-key')).toEqual({})
  })

  test('arrayToObjectBy(arrayOfObjects, "id") should return objectOfArrays', () => {
    expect(arrayToObjectBy(arrayOfObjects, 'id')).toEqual(objectOfArrays)
  })
})
