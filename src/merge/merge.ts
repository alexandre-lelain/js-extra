/* eslint @typescript-eslint/no-explicit-any: 0 */
import isCollection from '../isCollection'

export interface ObjectI {
  [key: string]: any
}

export type TUnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

/**
 * Deep merge multiple objects and their enumerable properties. Source objects are applied from left to right, so
 * the last object given as an argument to the function will have the higher priority.
 *
 * **Note:** this function does **not** mutate the given objects.
 */
const merge = <T extends ObjectI[]>(...objects: T): TUnionToIntersection<T[number]> =>
  objects.reduce((result, current) => {
    Object.keys(current).forEach((key) => {
      if (Array.isArray(result[key]) && Array.isArray(current[key])) {
        result[key] = Array.from(new Set(result[key].concat(current[key])))
      } else if (isCollection(result[key]) && isCollection(current[key])) {
        result[key] = merge(result[key], current[key])
      } else {
        result[key] = current[key]
      }
    })

    return result
  }, {}) as TUnionToIntersection<T[number]>

export default merge
