import { prettyTestName } from 'utils'
import count from '../'
import { BOOLEAN_ARRAY, NUMBER_ARRAY, STRING_ARRAY, OBJECT_ARRAY, RANDOM_TYPED_ARRAY } from './mocks'

describe('count', () => {
  test(prettyTestName('count(%s, 1) to equal 2', NUMBER_ARRAY), () => {
    expect(count(NUMBER_ARRAY, 1)).toBe(2)
  })

  test(prettyTestName('count(%s, 42) to equal 0', NUMBER_ARRAY), () => {
    expect(count(NUMBER_ARRAY, 42)).toBe(0)
  })

  test(prettyTestName('count(%s, 5) to equal 3', NUMBER_ARRAY), () => {
    expect(count(NUMBER_ARRAY, 5)).toBe(3)
  })

  test(prettyTestName('count(%s, (item) => item.name === "js") to equal 0', NUMBER_ARRAY), () => {
    expect(count(NUMBER_ARRAY, (item) => item.name === 'js')).toBe(0)
  })

  test(prettyTestName('count(%s, (item) => item > 2) to equal 6', NUMBER_ARRAY), () => {
    expect(count(NUMBER_ARRAY, (item) => item > 2)).toBe(6)
  })

  // Array<string> tests
  test(prettyTestName('count(%s, "hello") to equal 2', STRING_ARRAY), () => {
    expect(count(STRING_ARRAY, 'hello')).toBe(2)
  })

  test(prettyTestName('count(%s, "js-extra") to equal 0', STRING_ARRAY), () => {
    expect(count(STRING_ARRAY, 'js-extra')).toBe(0)
  })

  test(prettyTestName('count(%s, "world") to equal 3', STRING_ARRAY), () => {
    expect(count(STRING_ARRAY, 'world')).toBe(3)
  })

  test(prettyTestName('count(%s, (item) => item.name === "js") to equal 0', STRING_ARRAY), () => {
    expect(count(STRING_ARRAY, (item) => item.name === 'js')).toBe(0)
  })

  test(prettyTestName("count(%s, (item) => item.indexOf('rocks') !== -1) to equal 2", STRING_ARRAY), () => {
    expect(count(STRING_ARRAY, (item) => item.indexOf('rocks') !== -1)).toBe(2)
  })

  // Array<boolean> tests
  test(prettyTestName('count(%s, true) to equal 3', BOOLEAN_ARRAY), () => {
    expect(count(BOOLEAN_ARRAY, true)).toBe(3)
  })

  test(prettyTestName('count(%s, 42) to equal 0', BOOLEAN_ARRAY), () => {
    expect(count(BOOLEAN_ARRAY, 42)).toBe(0)
  })

  test(prettyTestName('count(%s, false) to equal 1', BOOLEAN_ARRAY), () => {
    expect(count(BOOLEAN_ARRAY, false)).toBe(1)
  })

  test(prettyTestName('count(%s, (item) => item.name === "js") to equal 0', BOOLEAN_ARRAY), () => {
    expect(count(BOOLEAN_ARRAY, (item) => item.name === 'js')).toBe(0)
  })

  // Array<object> tests
  test(prettyTestName('count(%s, (item) => item.name === "js") to equal 2', OBJECT_ARRAY), () => {
    expect(count(OBJECT_ARRAY, (item) => item.name === 'js')).toBe(2)
  })

  test(prettyTestName('count(%s, 42) to equal 0', OBJECT_ARRAY), () => {
    expect(count(OBJECT_ARRAY, 42)).toBe(0)
  })

  test(prettyTestName('count(%s, () => null to equal 0', OBJECT_ARRAY), () => {
    expect(count(OBJECT_ARRAY, () => null)).toBe(0)
  })

  test(prettyTestName('count(%s, () => true to equal OBJECT_ARRAY.length', OBJECT_ARRAY), () => {
    expect(count(OBJECT_ARRAY, () => true)).toBe(OBJECT_ARRAY.length)
  })

  // any[]
  test(prettyTestName('count(%s, (item) => item.name === "js" to equal 2', RANDOM_TYPED_ARRAY), () => {
    expect(count(RANDOM_TYPED_ARRAY, (item) => item.name === 'js')).toBe(2)
  })

  test(prettyTestName('count(%s, "TS" to equal 2', RANDOM_TYPED_ARRAY), () => {
    expect(count(RANDOM_TYPED_ARRAY, 'TS')).toBe(1)
  })

  //Exceptions tests
  test('count("not an array", 42) to throw an error on 1st argument type', () => {
    expect(() => count('not an array', 42)).toThrow()
  })
})
