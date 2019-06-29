const count = (array: Array<number | string | boolean>, itemToCount: number | string | boolean): number | null => {
  try {
    return array.reduce(
      (itemCounts: number, item: number | string | boolean) => (itemCounts += item === itemToCount ? 1 : 0),
      0,
    );
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error(
        'The first argument of js-extra count() function must be of type Array<number | string | boolean>.',
      );
    }
    throw e;
  }
};

export default count;
