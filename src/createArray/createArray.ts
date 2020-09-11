export type PrimitiveType = number | string | boolean | null | undefined
export type ContentType = PrimitiveType | Record<string, unknown>
export type ArrayCreatedType = ContentType[]
/**
 * Creates and returns an new Array of length and content given as parameters.
 * If no length is specified, it returns an empty Array.
 * If no content is specified, it returns an array of length n with undefined values in it.
 */
const createArray = (length?: number, content?: ContentType): ArrayCreatedType => {
  const lengthType = typeof length
  if (length && lengthType !== 'number') {
    throw new Error(`createArray(length, content) expects length to be a number, ${lengthType} given.`)
  }
  if (!length) {
    return []
  }
  return new Array(length).fill(content)
}

export default createArray
