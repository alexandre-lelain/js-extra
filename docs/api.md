# API

## count(array, toCount)

This function returns the number of occurrences of the specified value in the array provided.

### Arguments

- **array (Array<number | string | boolean | object>)**: the array to process.
- **toCount (number | string | boolean | Function)**: the item to count or the predicate function to apply on each item.

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
