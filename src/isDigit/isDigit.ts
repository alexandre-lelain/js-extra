/**
 * isDigit(string)
 * True- If all characters in the string are digits.
 * False- If the string contains 1 or more non-digits.
 */
const isDigit = (str: string): boolean => {
  if (typeof str !== 'string') {
    return false
  }
  return /^[0-9]+$/.test(str)
}

export default isDigit
