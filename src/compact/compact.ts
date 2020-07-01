/**
 * compacts a given array. It removes all falsey values EXCEPT the number 0 by default.
 * You can also filter the 0 values by setting the `withZero` arg to true.
 */
const compact = (array: any[] = [], withZero?: boolean): any[] => {
  try {
    return array.filter((item: number | string) => {
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
