import compact from '../compact';
/**
 * sortCompact sorts the given array using native JS sort function, and by default it also
 * compacts the given array before the sortFunction is executed. You can chose to compact the array
 * after if you set the `before` option to false. If you don't want to keep the zeros, you can also
 * set the option `withZero` to true.
 */

interface IOptions {
  before?: boolean;
  withZero?: boolean;
}

const sortCompact = (
  array: any[],
  sortFunction?: ((left: any, right: any) => number) | (IOptions),
  options: IOptions = {},
): any[] => {
  const { before = true, withZero = false } = options;
  try {
    if (sortFunction && typeof sortFunction !== 'function') {
      return sortCompactGeneric(array, undefined, sortFunction.before, sortFunction.withZero);
    }
    return sortCompactGeneric(array, typeof sortFunction === 'function' ? sortFunction : undefined, before, withZero);
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error(`The first argument of js-extra.sortCompact() must be of type array. ${array} given. ${e}`);
    }
    throw e;
  }
};

const sortCompactGeneric = (
  array: any[],
  sortFunction?: (left: any, right: any) => number,
  before: boolean = true,
  withZero: boolean = false,
): any[] => {
  if (before) {
    const compactedArray = compact(array, withZero);
    return compactedArray.sort(sortFunction);
  }
  return compact(array.sort(sortFunction), withZero);
};

export default sortCompact;
