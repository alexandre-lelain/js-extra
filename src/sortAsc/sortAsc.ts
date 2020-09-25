import compactArray from '../compact'

export type ArrayItemAscType = number | string | boolean | null | undefined
export type ArrayToSortAscType = ArrayItemAscType[]

/**
 * This function sorts an array of number or string in ascending order.
 */
const sortAsc = (
  array: ArrayToSortAscType = [],
  { compact = false }: { compact?: boolean } = {},
): ArrayToSortAscType | null => {
  try {
    const sortedArray = array.sort((a: ArrayItemAscType, b: ArrayItemAscType) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b)
      }
      return (a as number) - (b as number)
    })
    return compact ? compactArray(sortedArray) : sortedArray
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument of js-extra sortAsc() function must be of type Array<number | string>.')
    }
    throw e
  }
}

export default sortAsc
