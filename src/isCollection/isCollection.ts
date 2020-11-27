/**
 * Since everything is an object in JS, it's pretty hard to check if a
 * given object is a collection: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object.
 * This function will return true if the given value is a collection with a set of properties.
 *
 * Ex: isCollection({ js: 'extra' }) => true
 */
const isCollection = (obj: unknown): boolean => {
  if (typeof obj === 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf === 'function') {
      const prototype = Object.getPrototypeOf(obj)
      return prototype === Object.prototype || prototype === null
    }

    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  return false
}

export default isCollection
