/**
 * Takes an array of objects, and the property you want to use as the indexes
 * to convert it into a collection of objects. Useful, for example, when you want to convert
 * an array of entities into a collection with the entities'id as indexes.
 *
 * **Note**: this method does **not** mutate the given array.
 *
 * Ex: `arrayToObjectBy([{ id: 1, name: 'js-extra' }], 'id') => { 1: { name: 'js-extra' } }`
 */
const arrayToObjectBy = (array: Record<string, unknown>[], property: string): Record<string, unknown> => {
  if (!property || typeof property !== 'string') {
    throw new Error(
      `arrayToObjectBy(array, property) requires property to be defined and of type String. ${property} given.`,
    )
  }
  if (!array || !Array.isArray(array)) {
    throw new Error(`arrayToObjectBy(array, property) requires array to be defined and of type Array. ${array} given.`)
  }
  return array.reduce((object, arrayItem) => {
    const { [property]: itemProperty, ...rest } = arrayItem
    return {
      ...object,
      ...(itemProperty
        ? {
            [itemProperty as string]: {
              ...rest,
            },
          }
        : {}),
    }
  }, {})
}

export default arrayToObjectBy
