const sortDesc = (array: Array<number | string>): Array<number | string> => {
  try {
    return array.sort((a: any, b: any) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return b.localeCompare(a);
      }
      return b - a;
    });
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument of js-extra sortAsc() function must be of type Array<number | string>.');
    }
    throw e;
  }
};

export default sortDesc;
