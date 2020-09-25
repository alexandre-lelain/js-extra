import compact from '../compact'

export type SortCompactItemType = number | string | boolean | null | undefined
export type SortCompactArrayType = SortCompactItemType[]

export interface IOptions {
  before?: boolean
  withZero?: boolean
}

/**
 * sortCompact sorts the given array using native JS sort function, and by default it also
 * compacts the given array before the sortFunction is executed. You can chose to compact the array
 * after if you set the `before` option to false. If you don't want to keep the zeros, you can also
 * set the option `withZero` to true.
 */
const sortCompact = (
  array: SortCompactArrayType,
  sortFunction?: ((left: SortCompactItemType, right: SortCompactItemType) => number) | IOptions,
  options: IOptions = {},
): SortCompactArrayType => {
  try {
    if (sortFunction && typeof sortFunction !== 'function') {
      return sortCompactGeneric(array, undefined, sortFunction)
    }
    return sortCompactGeneric(array, typeof sortFunction === 'function' ? sortFunction : undefined, options)
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error(`The first argument of js-extra.sortCompact() must be of type array. ${array} given. ${e}`)
    }
    throw e
  }
}

const sortCompactGeneric = (
  array: SortCompactArrayType,
  sortFunction?: (left: SortCompactItemType, right: SortCompactItemType) => number,
  options: IOptions = {},
): SortCompactArrayType => {
  const { before = true, withZero = false } = options
  if (before) {
    const compactedArray = compact(array, withZero)
    return compactedArray.sort(sortFunction)
  }
  return compact(array.sort(sortFunction), withZero)
}

export default sortCompact
