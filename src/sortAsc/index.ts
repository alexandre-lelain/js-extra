import compactArray from '../compact';
/**
 * This function sorts an array of number or string in ascending order.
 */

type ArrayToSortType = (number | string)[];

const sortAsc = (
  array: ArrayToSortType = [],
  { compact = false }: { compact?: boolean } = {},
): ArrayToSortType | null => {
  try {
    const sortedArray = array.sort((a: any, b: any) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
      }
      return a - b;
    });
    return compact ? compactArray(sortedArray) : sortedArray;
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument of js-extra sortAsc() function must be of type Array<number | string>.');
    }
    throw e;
  }
};

export default sortAsc;
