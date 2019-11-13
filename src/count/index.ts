/**
 * This function counts and returns the number of occurences of the value
 * itemToCount in the array provided.
 */

const count = (
  array: Array<number | string | boolean | object>,
  toCount: number | string | boolean | ((item: number | string | boolean | object) => boolean),
): number | null => {
  try {
    if (toCount instanceof Function) {
      return countByPredicate(array, toCount);
    }

    const arrayOfBasicType = array as Array<number | string | boolean>;
    const itemToCount = toCount as number | string | boolean;
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

const countByPredicate = (
  array: Array<number | string | boolean | object>,
  toCount: (item: number | string | boolean | object) => boolean,
): number | null => {
  return array.reduce(
    (itemCounts: number, item: number | string | boolean | object) => (itemCounts += toCount(item) ? 1 : 0),
    0,
  );
};

const countElement = (
  array: Array<number | string | boolean | object>,
  itemToCount: number | string | boolean,
): number | null => {
  return array.reduce(
    (itemCounts: number, item: number | string | boolean | object) => (itemCounts += item === itemToCount ? 1 : 0),
    0,
  );
};

export default count;
