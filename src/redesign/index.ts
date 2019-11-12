import compactArray from '../compact';
/**
 * redesign is a function that allows you to do shape & cut a given array.
 * You can give it a `filter` predicate function to filter the elements of your array.
 * You can also give it a `transform` function to transform the elements of your array.
 * And you can also chose to make the redesign compact, thus removing any null values from it.
 */
const redesign = (
  array: Array<number | string | boolean | object> = [],
  {
    filter = () => true,
    transform = item => item,
    compact = false,
  }: {
    filter?: (item: number | string | boolean | object) => boolean;
    transform?: (item: number | string | boolean | object) => number | string | boolean | object;
    compact?: boolean;
  } = {},
): Array<number | string | boolean | object> => {
  const deepCopiedArray = JSON.parse(JSON.stringify(array));
  const compactedDeepCopiedArray = compact ? compactArray(deepCopiedArray) : deepCopiedArray;
  const filteredArray = compactedDeepCopiedArray.filter(filter);
  const transformedArray = filteredArray.map(transform);
  const compactedArray = compact ? compactArray(transformedArray) : transformedArray;
  return compactedArray;
};

export default redesign;
