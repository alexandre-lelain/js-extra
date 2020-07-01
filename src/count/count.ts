export type CountType = number | null
export type CountArrayType = (number | string | boolean | object)[]
export type ItemToCountType = number | string | boolean

/**
 * This function counts and returns the number of occurences of the value
 * itemToCount in the array provided.
 */
const count = (
  array: CountArrayType,
  toCount: ItemToCountType | ((item: ItemToCountType | object) => boolean),
): CountType => {
  try {
    if (toCount instanceof Function) {
      return countByPredicate(array, toCount)
    }

    const arrayOfBasicType = array as ItemToCountType[]
    const itemToCount = toCount as ItemToCountType
    return countElement(arrayOfBasicType, itemToCount)
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error(
        'The first argument of js-extra count() function must be of type Array<number | string | boolean>.',
      )
    }
    throw e
  }
}

const countByPredicate = (array: CountArrayType, toCount: (item: ItemToCountType | object) => boolean): CountType => {
  return array.reduce((itemCounts: number, item: ItemToCountType | object) => (itemCounts += toCount(item) ? 1 : 0), 0)
}

const countElement = (array: CountArrayType, itemToCount: ItemToCountType): CountType => {
  return array.reduce(
    (itemCounts: number, item: ItemToCountType | object) => (itemCounts += item === itemToCount ? 1 : 0),
    0,
  )
}

export default count
