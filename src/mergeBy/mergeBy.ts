import arrayToObjectBy from '../arrayToObjectBy'
import merge from '../merge'
import objectToArrayBy from '../objectToArrayBy'
/**
 * Deep merge arrays of objects based on the given property. Source arrays are applied from left to right, so
 * the last array given as an argument to the function will have the higher priority. For example, it can
 * be useful when you want to merge multiple arrays containing objects that represent the same entity type.
 *
 * **Notes:** the function does **not** mute the given arrays.
 *
 * Ex: `mergeBy('id', [{ id: 1, name: 'js-extra'}], [{ id: 1, isCool: true }]) => [{ id: 1, name: 'js-extra', isCool: true }]`
 */
const mergeBy = (property: string, ...arrays: Record<string, unknown>[][]): Record<string, unknown>[] => {
  if (!property || typeof property !== 'string') {
    throw new Error(
      `mergeBy(...arrays, property) requires property to be defined and of type String. ${property} given.`,
    )
  }
  const objects = arrays.map((array) => {
    if (!array || !Array.isArray(array)) {
      throw new Error(`mergeBy(...arrays, property) requires arrays to be defined and of type Array. ${array} given.`)
    }
    return arrayToObjectBy(array, property)
  })
  const mergedObjects = merge(...objects)
  return objectToArrayBy(mergedObjects, property)
}

export default mergeBy
