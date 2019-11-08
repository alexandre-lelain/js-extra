import { prettyTestName } from 'utils';
import compact from '..';
import {
  NO_FALSEY_ARRAY,
  FALSEY_ARRAY,
  FALSEY_ARRAY_WITH_ZERO,
  FALSEY_ARRAY_COMPACTED,
  FALSEY_ARRAY_WITH_ZERO_COMPACTED,
} from './mocks';

describe('compact unit testing', () => {
  test('compact(null) should return throw an error to the user', () => {
    expect(() => compact(null)).toThrow();
  });

  test('compact({}) should return throw an error to the user', () => {
    expect(() => compact({})).toThrow();
  });

  test(prettyTestName('compact(%s) should return %s', NO_FALSEY_ARRAY, NO_FALSEY_ARRAY), () => {
    expect(compact(NO_FALSEY_ARRAY)).toStrictEqual(NO_FALSEY_ARRAY);
  });

  test(prettyTestName('compact(%s) should return %s', FALSEY_ARRAY, FALSEY_ARRAY_COMPACTED), () => {
    expect(compact(FALSEY_ARRAY)).toStrictEqual(FALSEY_ARRAY_COMPACTED);
  });

  test(prettyTestName('compact(%s) should return %s', FALSEY_ARRAY_WITH_ZERO, FALSEY_ARRAY_WITH_ZERO_COMPACTED), () => {
    expect(compact(FALSEY_ARRAY_WITH_ZERO)).toStrictEqual(FALSEY_ARRAY_WITH_ZERO_COMPACTED);
  });

  test(prettyTestName('compact(%s, true) should return %s', FALSEY_ARRAY_WITH_ZERO, FALSEY_ARRAY_COMPACTED), () => {
    expect(compact(FALSEY_ARRAY_WITH_ZERO, true)).toStrictEqual(FALSEY_ARRAY_COMPACTED);
  });
});
