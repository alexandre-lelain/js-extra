export const destination = {
  id: 1,
  name: 'js-extra',
  age: 25,
  project: 'github',
  location: {
    planet: 'moon',
    street: 'noop',
  },
}

export const source = {
  id: 1,
  name: 'hello-world',
  age: 42,
  likes: 'lasagnas',
  location: {
    planet: 'earth',
    number: 16,
  },
}

export const otherSource = {
  id: 42,
}

export const merged = {
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

export const otherMerged = { ...merged, id: 42 }
