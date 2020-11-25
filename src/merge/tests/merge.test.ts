import merge from '../merge'

const destination = {
  id: 1,
  name: 'js-extra',
  age: 25,
  dislikes: 'grass',
  location: {
    city: 'moon',
    street: 'noop',
  },
}

const source = {
  id: 1,
  name: 'hello-world',
  age: 42,
  likes: 'lasagnas',
  location: {
    city: 'earth',
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
  dislikes: 'grass',
  likes: 'lasagnas',
  location: {
    city: 'earth',
    street: 'noop',
    number: 16,
  },
}

const otherMerged = { ...merged, id: 42 }

describe('merge()', () => {
  test('merge() should return {}', () => {
    expect(merge()).toEqual({})
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
