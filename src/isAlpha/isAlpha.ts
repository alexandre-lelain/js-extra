/**
 * isAlpha(string)
 * True- If all characters in the string are alphabet.
 * False- If the string contains 1 or more non-alphabets.
 */
const isAlpha = (str: string): boolean => {
  const strType = typeof str
  if (strType !== 'string') {
    throw new Error(`isAlpha() is expecting a string, but ${strType} was given.`)
  }
  return /^[a-zA-Z]+$/.test(str)
}

export default isAlpha
