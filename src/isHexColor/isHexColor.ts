/**
 * Takes a string, and if it's a valid HEX color, returns true. false else.
 * The first '#' character of the string is not mandatory.
 * Ex: isHexColor('fff') -> true.
 */
const isHexColor = (str: string): boolean => {
  const strType = typeof str
  if (strType !== 'string') {
    throw new Error(`isHexColor() is expecting a string, but ${strType} was given.`)
  }
  const trimmedStr = str.replace('#', '')
  if ([3, 6].includes(trimmedStr.length)) {
    const hexColorRegex = new RegExp(/^[a-z,0-9]{3}|[a-z,0-9]{6}$/gi)
    return hexColorRegex.test(trimmedStr)
  }
  return false
}

export default isHexColor
