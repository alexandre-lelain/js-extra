# API

## count(array, toCount)

This function returns the number of occurrences of *toCount* in the *array* provided.
You can either use this function to count the number of occurrences of a simple-typed value (number, string or boolean),
or also use a predicate function if you want to count some complex-typed objects based on your own logic.

### Arguments

- **array (Array<number | string | boolean | object>)**: the array to process.
- **toCount (number | string | boolean | predicate: Function)**: the item to count or the predicate function to apply on each item.

### returns

- **(number)**: the number of occurrences of item in array or the number of items satisfying the predicate condition.

### Examples

```js
count([4, 2, 3, 4], 4);
// => 2
count([4, 2, 3, 4], 42);
// => 0
count(["js-extra", "rocks", "hello", "js-extra", "js-extra"], "js-extra");
// => 3
count([{ id: 1, name: "js" }, { id: 2, name: "extra" }, { id: 3, name: "js" }], (item) => item.name === "js");
// => 2
```

## isAlpha(value)

This function returns true if the string provided contains only alphabetical characters,
false else.

### Arguments

- **value (string)**: the string to process.

### returns

- **(boolean)**: returns *true* if values only contains alphabetical characters, *false* else.

### Examples

```js
isAlpha("jsextrarocks");
// => true
isAlpha("jsextrarocks42");
// => false
isAlpha(42);
// => false
```

## isDigit(value)

This function returns true if the string provided contains only digits,
false else.

### Arguments

- **value (string)**: the string to process.

### returns

- **(boolean)**: returns *true* if values only contains digits, *false* else.

### Examples

```js
isDigit("42");
// => true
isDigit("jsextrarocks42");
// => false
isDigit("");
// => false
```

## redesign(array, [options={}])

redesign is a function that allows you to shape & cut a given **array**. You can
give it a `filter` predicate function to filter the elements of your array.
You can also give it a `transform` function to transform the elements of your array.
And you can also chose to make the redesign `compact`, thus removing any falsey
values from it.

It will return an empty array of you haven't given any, or if you gave an empty array.

Important: the **array** given is **not** modified during the process.

### Arguments

- **array (Array<number | string | boolean | object>)**: the array to process.
- **[options={}]**: the options object.
- **[options.compact=false] (boolean)**: the options object.
- **[options.filter=()=>true] (predicate: Function)**: the predicate filter function to apply to the array.
- **[options.transform=noop] (Function)**: the transform function to apply to the array.

### returns

- **(Array<number | string | boolean | object>)**: returns the array redesigned.

### Examples

```js
redesign();
// => []
redesign([1, 2, 5, 15, 3 ,9], { filter: n => n > 3, transform: n => n - 1 });
// => [4, 14, 8]
redesign([42, 'js', null, 'extra', undefined, false], { transform: n => n + 42, compact: true });
// => [84, 'js42', 'extra42']

const array = [{ id: 1, name: "js" }, { id: 2, name: "extra" }, { id: 3, name: "js" }]
redesign(array, { filter: item => item.name === "js", transform: item => ({ ...item, name: item.name + '-extra' }) });
// => [{ id: 1, name: "js-extra" }, { id: 3, name: "js-extra" }]
```

## sortAsc(array)

This function sorts an array of number or string in ascending order. The strings
are compared using [localeCompare()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) function.

### Arguments

- **array (Array<number | string>)**: the array to process.

### returns

- **array (Array<number | string>)**: the array sorted in ascending order.

### Examples

```js
sortAsc([4, 2, 3, 5, 4]);
// => [2, 3, 4, 4, 5]
sortAsc(["a", "z", "e", "c", "h"]);
// => ["a", "c", "e", "h", "z"]
```

## sortDesc(array)

This function sorts an array of number or string in descending order. The strings
are compared using [localeCompare()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) function.

### Arguments

- **array (Array<number | string>)**: the array to process.

### returns

- **array (Array<number | string>)**: the array sorted in descending order.

### Examples

```js
sortDesc([4, 2, 3, 5, 4]);
// => [5, 4, 4, 3, 2]
sortDesc(["a", "z", "e", "c", "h"]);
// => [ "z", "h", "e", "c", "a" ]
```
