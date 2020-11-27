import mergeBy from '../mergeBy'
import { destination, destinationMergedById, source, merged } from './mocks'

describe('mergeBy()', () => {
  test('mergeBy() should throw an error', () => {
    expect(() => mergeBy()).toThrow()
  })

  test('mergeBy(42) should throw an error', () => {
    expect(() => mergeBy(42)).toThrow()
  })

  test('mergeBy("id", 42) should throw an error', () => {
    expect(() => mergeBy('id', 42)).toThrow()
  })

  test('mergeBy("id", [], {}) should throw an error', () => {
    expect(() => mergeBy('id', [], {})).toThrow()
  })

  test('mergeBy("id", [], []) should return []', () => {
    expect(mergeBy('id', [], [])).toEqual([])
  })

  test('mergeBy("id", [{ id: 1, name: "js-extra" }], [{ id: 1, name: undefined }]) should return [{ id: 1, name: "js-extra" }]', () => {
    expect(mergeBy('id', [{ id: 1, name: 'js-extra' }], [{ id: 1, name: undefined }])).toEqual([
      { id: '1', name: 'js-extra' },
    ])
  })

  test('mergeBy("unknown-key", destination) should return []', () => {
    expect(mergeBy('unknown-key', destination)).toEqual([])
  })

  test('mergeBy("id", destination) should return destinationMergedById', () => {
    expect(mergeBy('id', destination)).toEqual(destinationMergedById)
  })

  test('mergeBy("id", destination, source) should return merged', () => {
    expect(mergeBy('id', destination, source)).toEqual(merged)
  })
})
