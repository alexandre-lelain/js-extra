import isHexColor from '..'

describe('isHexColor', () => {
  test('isHexColor() should throw an error', () => {
    expect(() => isHexColor()).toThrowError()
  })

  test('isHexColor([42]) should throw an error', () => {
    expect(() => isHexColor([42])).toThrowError()
  })

  test('isHexColor("") should return false', () => {
    expect(isHexColor('')).toEqual(false)
  })

  test('isHexColor("fff") should return true', () => {
    expect(isHexColor('fff')).toEqual(true)
  })

  test('isHexColor("0000cc") should return true', () => {
    expect(isHexColor('0000cc')).toEqual(true)
  })

  test('isHexColor("#fff") should return true', () => {
    expect(isHexColor('#fff')).toEqual(true)
  })

  test('isHexColor("fff") should return true', () => {
    expect(isHexColor('fff')).toEqual(true)
  })

  test('isHexColor("#0000cc") should return true', () => {
    expect(isHexColor('#0000cc')).toEqual(true)
  })

  test('isHexColor("0000cc") should return true', () => {
    expect(isHexColor('0000cc')).toEqual(true)
  })

  test('isHexColor("#0000CC") should return true', () => {
    expect(isHexColor('#0000CC')).toEqual(true)
  })

  test('isHexColor("#E4E4E4") should return true', () => {
    expect(isHexColor('#E4E4E4')).toEqual(true)
  })

  test('isHexColor("#e") should return false', () => {
    expect(isHexColor('#e')).toEqual(false)
  })

  test('isHexColor("e4") should return false', () => {
    expect(isHexColor('#e4')).toEqual(false)
  })

  test('isHexColor("#e4e4") should return false', () => {
    expect(isHexColor('#e4e4')).toEqual(false)
  })

  test('isHexColor("e4e4e") should return false', () => {
    expect(isHexColor('#e4e4e')).toEqual(false)
  })

  test('isHexColor("#e4e4e4e") should return false', () => {
    expect(isHexColor('#e4e4e4e')).toEqual(false)
  })
})
