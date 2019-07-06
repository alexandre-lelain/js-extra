/**
 * isAlpha(string)
 * True- If all characters in the string are alphabet.
 * False- If the string contains 1 or more non-alphabets.
 */
const isAlpha = (str: string): boolean => {
  if (typeof str !== 'string') {
    return false;
  }
  return /^[a-zA-Z]+$/.test(str);
};

export default isAlpha;
