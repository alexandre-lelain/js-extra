import redesign from '../';

import {
  BOOLEAN_ARRAY,
  COMPACT_ARRAY,
  FALSY_ARRAY,
  NUMBER_ARRAY,
  NUMBER_ODD_ARRAY,
  NUMBER_TRANSFORMED_ARRAY,
  STRING_ARRAY,
  OBJECT_ARRAY,
  RANDOM_TYPED_ARRAY,
  REDESIGNED_ARRAY,
  REDESIGNED_ARRAY_WITH_IDS,
} from './mocks';

// With no parameters
test('redesign() to equal []', () => {
  expect(redesign()).toEqual(expect.arrayContaining([]));
});

// With empty array
test('redesign([]) to equal []', () => {
  expect(redesign([])).toEqual(expect.arrayContaining([]));
});

// With number array and no parameters
test('redesign(NUMBER_ARRAY) to equal NUMBER_ARRAY', () => {
  expect(redesign(NUMBER_ARRAY)).toEqual(NUMBER_ARRAY);
});

// With falsy array and compact: true
test('redesign(FALSY_ARRAY, { compact }) to equal COMPACT_ARRAY', () => {
  expect(redesign(FALSY_ARRAY, { compact: true })).toEqual(COMPACT_ARRAY);
});

// With number array and filter function that keeps odd numbers only
test('redesign(NUMBER_ARRAY, { filter: item => item % 2 !== 0 }) to equal NUMBER_ODD_ARRAY', () => {
  expect(redesign(NUMBER_ARRAY, { filter: item => item % 2 !== 0 })).toEqual(NUMBER_ODD_ARRAY);
});

// With number array and transform function that set items to 42
test('redesign(NUMBER_ARRAY, { transform: item => 42 }) to equal NUMBER_TRANSFORMED_ARRAY', () => {
  expect(redesign(NUMBER_ARRAY, { transform: item => 42 })).toEqual(NUMBER_TRANSFORMED_ARRAY);
});

// With array of objects, filter, transform & compact options
test('redesign(OBJECT_ARRAY, { filter: someFunc, transform: someFunc, compact: true }) to equal REDESIGNED_ARRAY', () => {
  expect(
    redesign(OBJECT_ARRAY, {
      filter: item => item.name === 'js',
      transform: item => ({ name: item.name + '-extra' }),
      compact: true,
    }),
  ).toEqual(REDESIGNED_ARRAY);
});

// With array of objects, filter, transform & compact options
test('redesign(OBJECT_ARRAY, { filter: someFunc, transform: someFunc, compact: true }) to equal REDESIGNED_ARRAY_WITH_IDS', () => {
  expect(
    redesign(OBJECT_ARRAY, {
      filter: item => item.name === 'js',
      transform: item => ({ ...item, name: item.name + '-extra' }),
      compact: true,
    }),
  ).toEqual(REDESIGNED_ARRAY_WITH_IDS);
});
