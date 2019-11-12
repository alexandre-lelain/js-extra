import compact from '../compact';
/**
 * sortCompact sorts the given array using native JS sort function, and by default it also
 * compacts the given array before the sortFunction is executed. You can chose to compact the array
 * after if you set the `before` option to false. If you don't want to keep the zeros, you can also
 * set the option `withZero` to true.
 */
const sortCompact = (
  array: any[],
  sortFunction?: (left: any, right: any) => number,
  { before = true, withZero = false }: { before?: boolean; withZero?: boolean } = {},
): any[] => {
  try {
    if (before) {
      const compactedArray = compact(array, withZero);
      return compactedArray.sort(sortFunction);
    }
    return compact(array.sort(sortFunction), withZero);
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error(`The first argument of js-extra.sortCompact() must be of type array. ${array} given. ${e}`);
    } else if (typeof sortFunction !== 'function') {
      throw new Error(
        `The second argument of js-extra.sortCompact() must be of type function. ${sortFunction} given. ${e}`,
      );
    }
    throw e;
  }
};

export default sortCompact;
