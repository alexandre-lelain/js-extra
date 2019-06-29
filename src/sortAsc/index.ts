const sortAsc = (array: Array<number | string>): Array<number | string> | null => {
  try {
    return array.sort((a: any, b: any) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
      }
      return a - b;
    });
  } catch (e) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument of js-extra sortAsc() function must be of type Array<number | string>.');
    }
    throw e;
  }
};

export default sortAsc;
