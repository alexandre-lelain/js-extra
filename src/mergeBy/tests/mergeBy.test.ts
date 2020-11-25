import mergeBy from '../mergeBy'

const destination = [
  {
    id: '1',
    name: 'js-extra',
    avatar: 'totocap',
    location: {
      city: 'Berlin',
      country: 'Germany',
    },
  },
  {
    abc: 'something',
    ok: 'doh',
  },
  {
    id: '2',
    name: 'Totocap',
  },
  {
    id: '4',
    name: 'Voyou',
    notes: 'something',
  },
]

const source = [
  {
    id: '1',
    name: 'New JsExtra',
    location: {
      city: 'Munich',
    },
  },
  {
    id: '2',
    name: 'Totocap',
  },
  {
    id: '3',
    name: 'User',
  },
  {
    id: '4',
    name: 'NewVoyou',
  },
]

const merged = [
  {
    id: '1',
    name: 'New JsExtra',
    avatar: 'totocap',
    location: {
      city: 'Munich',
      country: 'Germany',
    },
  },
  {
    id: '2',
    name: 'Totocap',
  },
  {
    id: '3',
    name: 'User',
  },
  {
    id: '4',
    name: 'NewVoyou',
    notes: 'something',
  },
]

describe('mergeBy()', () => {
  test('mergeBy() should throw an error', () => {
    expect(() => mergeBy()).toThrow()
  })

  test('mergeBy("id", destination, source) should return merged', () => {
    expect(mergeBy('id', destination, source)).toEqual(merged)
  })
})
