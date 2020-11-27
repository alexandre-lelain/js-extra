import merge from '../merge'
import { destination, source, otherSource, merged, otherMerged } from './mocks'

describe('merge()', () => {
  test('merge() should return {}', () => {
    expect(merge()).toEqual({})
  })

  test('merge({ name: "js-extra" }, { name: undefined }) should return { name: "js-extra" }', () => {
    expect(merge({ name: 'js-extra' }, { name: undefined })).toEqual({ name: 'js-extra' })
  })

  test('merge({ name: "js-extra"}, { name: "42" }, { project: "github" }) should return { name: "42", project: "github" }', () => {
    expect(merge({ name: 'js-extra' }, { name: '42' }, { project: 'github' })).toEqual({
      name: '42',
      project: 'github',
    })
  })

  test('merge(destination) should return destination', () => {
    expect(merge(destination)).toEqual(destination)
  })

  test('merge(destination, source) should return merged', () => {
    expect(merge(destination, source)).toEqual(merged)
  })

  test('merge(destination, source, otherSource) should return otherMerged', () => {
    expect(merge(destination, source, otherSource)).toEqual(otherMerged)
  })
})
