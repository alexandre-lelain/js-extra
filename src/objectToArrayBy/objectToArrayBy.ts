import isCollection from '../isCollection'
/**
 * Turns a collection of objects into an array of objects. The property given to the function
 * will take the indexes of the **first** depth-level as a value.
 *
 * **Note**: this method does **not** mutate the given object.
 *
 * Ex: `objectToArrayBy({ 1: { name: 'js-extra' }}, 'id') => [{ id: '1', name: 'js-extra' }]`
 */
const objectToArrayBy = (obj: Record<string, unknown>, property: string): Record<string, unknown>[] => {
  if (!property || typeof property !== 'string') {
    throw new Error(
      `objectToArrayBy(obj, property) requires property to be defined and of type String. ${property} given.`,
    )
  }
  if (!obj || !isCollection(obj)) {
    throw new Error(`objectToArrayBy(obj, property) requires obj to be defined and of type Object. ${obj} given.`)
  }
  const array = []
  for (const itemIndex in obj) {
    const itemContent = obj[itemIndex]
    array.push({
      [property]: itemIndex,
      ...(isCollection(itemContent) ? (itemContent as Record<string, unknown>) : {}),
    })
  }
  return array
}

export default objectToArrayBy
