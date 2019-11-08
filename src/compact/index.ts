/**
 * compacts a given array. It removes all falsey values EXCEPT the number 0.
 */
const compact = (array: Array<any> = [], withZero?: boolean = false): Array<any> => {
  try {
    return array.filter((item: number | string) => {
      if (withZero) {
        return !!item;
      }
      return item === 0 || !!item;
    });
  } catch (e) {
    if (!Array.isArray(array)) {
      throw `First argument of js-extra.compact() should be an array. ${array} given.`;
    }
    throw e;
  }
};

export default compact;
