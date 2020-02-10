import compactArray from '../compact';
/**
 * This function sorts an array of number or string in descending order.
 */

type ArrayToSortType = (number | string)[];

const sortDesc = (array: ArrayToSortType = [], { compact = false }: { compact?: boolean } = {}): ArrayToSortType => {
  try {
    const sortedArray = array.sort((a: any, b: any) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return b.localeCompare(a);
      }
      return b - a;
    });
    return compact ? compactArray(sortedArray) : sortedArray;
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument of js-extra sortDesc() function must be of type Array<number | string>.');
    }
    throw e;
  }
};

export default sortDesc;
