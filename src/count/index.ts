/**
 * This function counts and returns the number of occurences of the value
 * itemToCount in the array provided.
 */

const count = (
  array: Array<number | string | boolean | object>,
  toCount: number | string | boolean | ((item: object) => boolean),
): number | null => {
  try {
    if (isArrayContainingSomeObjects(array) && toCount instanceof Function) {
      const arrayOfObject = array as object[];
      return countByPredicate(arrayOfObject, toCount);
    }

    const arrayOfBasicType = array as Array<number | string | boolean>;
    const itemToCount = toCount as (number | string | boolean);
    return countElement(arrayOfBasicType, itemToCount);
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error(
        'The first argument of js-extra count() function must be of type Array<number | string | boolean>.',
      );
    }
    throw e;
  }
};

const countByPredicate = (array: object[], toCount: (item: object) => boolean): number | null => {
  return array.reduce((itemCounts: number, item: object) => (itemCounts += toCount(item) ? 1 : 0), 0);
};

const countElement = (
  array: Array<number | string | boolean>,
  itemToCount: number | string | boolean,
): number | null => {
  return array.reduce(
    (itemCounts: number, item: number | string | boolean) => (itemCounts += item === itemToCount ? 1 : 0),
    0,
  );
};

const isArrayContainingSomeObjects = (array: Array<number | string | boolean | object>): boolean => {
  return Array.isArray(array) && array.length > 0 && array.some(item => typeof item === 'object');
};

export default count;
