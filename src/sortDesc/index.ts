/**
 * This function sorts an array of number or string in descending order.
 */
const sortDesc = (array: Array<number | string> = [], { compact = false }: { compact?: boolean } = {}): Array<number | string> => {
  try {
    const sortedArray = array.sort((a: any, b: any) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return b.localeCompare(a);
      }
      return b - a;
    });
    return compact ? compactArray(sortedArray) : sortedArray
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument of js-extra sortDesc() function must be of type Array<number | string>.');
    }
    throw e;
  }
};

const compactArray = (array: Array<number | string> = []) => array.filter((item: number | string) => item === 0 || !!item)

export default sortDesc;
