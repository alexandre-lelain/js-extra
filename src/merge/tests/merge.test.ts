import merge from '../merge'

const destination = {
  id: 1,
  name: 'js-extra',
  age: 25,
  project: 'github',
  location: {
    planet: 'moon',
    street: 'noop',
  },
}

const source = {
  id: 1,
  name: 'hello-world',
  age: 42,
  likes: 'lasagnas',
  location: {
    planet: 'earth',
    number: 16,
  },
}

const otherSource = {
  id: 42,
}

const merged = {
  id: 1,
  name: 'hello-world',
  age: 42,
  project: 'github',
  likes: 'lasagnas',
  location: {
    planet: 'earth',
    street: 'noop',
    number: 16,
  },
}

const otherMerged = { ...merged, id: 42 }

describe('merge()', () => {
  test('merge() should return {}', () => {
    expect(merge()).toEqual({})
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
