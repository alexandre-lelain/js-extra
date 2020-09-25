import compactArray from '../compact'

export type ArrayItemDescType = number | string | boolean | null | undefined
export type ArrayToSortDescType = ArrayItemDescType[]

/**
 * This function sorts an array of number or string in descending order.
 */
const sortDesc = (
  array: ArrayToSortDescType = [],
  { compact = false }: { compact?: boolean } = {},
): ArrayToSortDescType => {
  try {
    const sortedArray = array.sort((a: ArrayItemDescType, b: ArrayItemDescType) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return b.localeCompare(a)
      }
      return (b as number) - (a as number)
    })
    return compact ? compactArray(sortedArray) : sortedArray
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument of js-extra sortDesc() function must be of type Array<number | string>.')
    }
    throw e
  }
}

export default sortDesc
