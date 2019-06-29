const count = (array: Array<number | string | boolean>, itemToCount: number | string | boolean) => {
  const DEFAULT_COUNT = 0;
  if (array) {
    return array.reduce(
      (itemCounts: number, item: number | string | boolean) => (itemCounts += item === itemToCount ? 1 : 0),
      DEFAULT_COUNT,
    );
  }
  return DEFAULT_COUNT;
};

export default count;
