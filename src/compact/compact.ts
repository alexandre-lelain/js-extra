export type CompactItemType = number | string | boolean | null | undefined
export type CompactArrayType = CompactItemType[]

/**
 * compacts a given array. It removes all falsey values EXCEPT the number 0 by default.
 * You can also filter the 0 values by setting the `withZero` arg to true.
 */
const compact = (array: CompactArrayType = [], withZero?: boolean): CompactArrayType => {
  try {
    return array.filter((item: CompactItemType) => {
      if (withZero) {
        return !!item
      }
      return item === 0 || !!item
    })
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error(`First argument of js-extra.compact() should be an array. ${array} given. ${e}`)
    }
    throw e
  }
}

export default compact
