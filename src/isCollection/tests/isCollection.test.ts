import isCollection from '../isCollection'

const aNumber = 42
const aString = 'js-extra'
const anArray = [42]
const aNull = null
const aBoolean = true
const aCollection = { js: 'extra' }

describe('isCollection()', () => {
  test('isCollection() should return false', () => {
    expect(isCollection()).toEqual(false)
  })

  test('isCollection(aNumber) should return false', () => {
    expect(isCollection(aNumber)).toEqual(false)
  })

  test('isCollection(aString) should return false', () => {
    expect(isCollection(aString)).toEqual(false)
  })

  test('isCollection(anArray) should return false', () => {
    expect(isCollection(anArray)).toEqual(false)
  })

  test('isCollection(aBoolean) should return false', () => {
    expect(isCollection(aBoolean)).toEqual(false)
  })

  test('isCollection(aNull) should return false', () => {
    expect(isCollection(aNull)).toEqual(false)
  })

  test('isCollection(aCollection) should return true', () => {
    expect(isCollection(aCollection)).toEqual(true)
  })
})
