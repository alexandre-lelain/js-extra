import objectToArrayBy from '../objectToArrayBy'

const simpleObject = { js: 'extra' }
const complexObject = {
  1: { name: 'js', nestedProperty: { hello: 'world' } },
  something: { name: 'hello-world' },
  2: { name: 'extra' },
}
const complexArrayById = [
  {
    id: '1',
    name: 'js',
    nestedProperty: { hello: 'world' },
  },
  {
    id: '2',
    name: 'extra',
  },
  {
    id: 'something',
    name: 'hello-world',
  },
]

describe('objectToArrayBy()', () => {
  test('objectToArrayBy() should throw an error', () => {
    expect(() => objectToArrayBy()).toThrow()
  })

  test('objectToArrayBy(42) should throw an error', () => {
    expect(() => objectToArrayBy(42)).toThrow()
  })

  test('objectToArrayBy(42, "id") should throw an error', () => {
    expect(() => objectToArrayBy(42, 'id')).toThrow()
  })

  test('objectToArrayBy({}, "id") should return []', () => {
    expect(objectToArrayBy({}, 'id')).toEqual([])
  })

  test('objectToArrayBy(simpleObject, "id") should return [{ id: "js" }]', () => {
    expect(objectToArrayBy(simpleObject, 'id')).toEqual([{ id: 'js' }])
  })

  test('objectToArrayBy(simpleObject, "js") should return [{ js: "js" }]', () => {
    expect(objectToArrayBy(simpleObject, 'js')).toEqual([{ js: 'js' }])
  })

  test('objectToArrayBy(complexObject, "id") should return complexArrayById', () => {
    expect(objectToArrayBy(complexObject, 'id')).toEqual(complexArrayById)
  })
})
