/**
 * isDigit(string)
 * True- If all characters in the string are digits.
 * False- If the string contains 1 or more non-digits.
 */
const isDigit = (str: string): boolean => {
  const strType = typeof str
  if (strType !== 'string') {
    throw new Error(`isDigit() is expecting a string, but ${strType} was given.`)
  }
  return /^[0-9]+$/.test(str)
}

export default isDigit
