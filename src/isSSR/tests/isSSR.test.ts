import isSSR from '../isSSR'

describe('isSSR', () => {
  test('isSSR() should return true when window is not defined', () => {
    expect(isSSR()).toEqual(true)
  })

  test('isSSR() should return false when window is defined', () => {
    global.window = jest.fn(() => 42)
    expect(isSSR()).toEqual(false)
  })
})
