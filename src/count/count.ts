export type CountType = number | null
export type ObjectType = Record<string, ItemToCountType>
export type CountArrayType = (ItemToCountType | ObjectType)[]
export type ItemToCountType = number | string | boolean | null | undefined

/**
 * This function counts and returns the number of occurences of the value
 * itemToCount in the array provided.
 */
const count = (
  array: CountArrayType,
  toCount: ItemToCountType | ((item: ItemToCountType | ObjectType) => boolean),
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

const countByPredicate = (
  array: CountArrayType,
  toCount: (item: ItemToCountType | ObjectType) => boolean,
): CountType => {
  return array.reduce(
    (itemCounts: number, item: ItemToCountType | ObjectType) => (itemCounts += toCount(item) ? 1 : 0),
    0,
  )
}

const countElement = (array: CountArrayType, itemToCount: ItemToCountType): CountType => {
  return array.reduce(
    (itemCounts: number, item: ItemToCountType | ObjectType) => (itemCounts += item === itemToCount ? 1 : 0),
    0,
  )
}

export default count
