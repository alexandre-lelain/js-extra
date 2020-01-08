<div id="api-content">

# **API**

## **Array**

### compact(array, withZero)

This function compacts the values of the given *array*, meaning all falsey values EXCEPT number 0 are removed from it by default.
Falsey values can be **null**, **''**, **undefined**, **false** and **NaN**. If you also want **0** to be removed, you can
set the 2nd parameter *withZero* to **true**.

#### Arguments

- **array *(Array<any>)***: the array to process.
- **withZero=false *(boolean)***: set to true to also remove the number 0 from the array.

#### returns

- ***(Array<any>)***: the compacted array.

#### Examples

```js
compact([4, null, 3, 4, 0]);
// => [4, 3, 4, 0]
compact([4, null, 3, 4, 0], true);
// => [4, 3, 4]
compact([4, null, undefined, 3, '', 4, 0]);
// => [4, 3, 4, 0]
```

### count(array, toCount)

This function returns the number of occurrences of *toCount* in the *array* provided.
You can either use this function to count the number of occurrences of a simple-typed value (number, string or boolean),
or also use a predicate function if you want to input specific rules to count your items.

#### Arguments

- **array *(Array<number | string | boolean | object>)***: the array to process.
- **toCount *(number | string | boolean | predicate: Function)***: the item to count or the predicate function to apply on each item.

#### returns

- ***(number)***: the number of occurrences of **toCount** in **array** or the number of items satisfying the predicate condition.

#### Examples

```js
count([4, 2, 3, 4], 4);
// => 2
count([4, 2, 3, 4], 42);
// => 0
count(["js-extra", "rocks", "hello", "js-extra", "js-extra"], "js-extra");
// => 3
count([{ id: 1, name: "js" }, { id: 2, name: "extra" }, { id: 3, name: "js" }], item => item.name === "js");
// => 2
count([1, 2, 3, 4, 5], item => item > 2);
// => 3
```

### redesign(array, [options={}])

redesign is a function that allows you to shape & cut a given **array**. You can
give it a `filter` predicate function to filter the elements of your array.
You can also give it a `transform` function to transform the elements of your array.
And you can also chose to make the redesign `compact`, thus removing any falsey
values from it.

It will return an empty array of you haven't given any, or if you gave an empty array.

Important: the **array** given is **not** modified during the process.

#### Arguments

- **array *(Array<number | string | boolean | object>)***: the array to process.
- **[options={}] *(Object)***: the options object.
- **[options.compact=false] *(boolean)***: the options object.
- **[options.filter=()=>true] *(predicate: Function)***: the predicate filter function to apply to the array.
- **[options.transform=noop] *(Function)***: the transform function to apply to the array.

#### returns

- ***(Array<number | string | boolean | object>)***: returns the array redesigned.

#### Examples

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

### sortAsc(array, [options={}])

This function sorts an array of number or string in ascending order. The strings
are compared using [localeCompare()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) function.

#### Arguments

- **array *(Array<number | string>)***: the array to process.
- **[options={}] *(Object)***: the options object.
- **[options.compact=false] *(boolean)***: set to *true* if you want to compact the array.

#### returns

- **array *(Array<number | string>)***: the array sorted in ascending order.

#### Examples

```js
sortAsc([4, 2, 3, 5, 4]);
// => [2, 3, 4, 4, 5]
sortAsc(["a", "z", "e", "c", "h"]);
// => ["a", "c", "e", "h", "z"]
sortAsc([4, 0, 2, null, 5, undefined, 4], { compact: true });
// => [0, 2, 4, 4, 5]
```

### sortCompact(array, sortFunction, [options={}])

sortCompact sorts the given array using native JS [sort function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort), and by default it also
compacts the given array before the *sortFunction* is executed. You can chose to compact the array
after if you set the *before* option to false. If you don't want to keep the zeros in the array, you can also
set the option *withZero* to true.

#### Arguments

- **array *(Array<any>)***: the array to process.
- **sortFunction=null *(Function)***: the sort function. Optional.
- **[options={}] *(Object)***: the options object.
- **[options.before=true] *(boolean)***: set to *false* if you want to compact the array after the sortFunction is executed.
- **[options.withZero=false] *(boolean)***: set to *true* to compact including 0 values.

#### returns

- **array *(Array<any>)***: the array sorted and compacted.

#### Examples

```js
sortCompact([1, 5, 7, null, 9, 4, undefined, 6, NaN, 0 ]);
// => [ 0, 1, 4, 5, 6, 7, 9 ]
sortCompact([1, 5, 7, null, 9, 4, undefined, 6, NaN, 0 ], { withZero: true });
// => [ 1, 4, 5, 6, 7, 9 ]
sortCompact([1, 5, 7, null, 9, 4, undefined, 6, NaN, 0 ], (a, b) => b - a);
// => [ 9, 7, 6, 5, 4, 1, 0 ];
```

### sortDesc(array, [options={}])

This function sorts an array of number or string in descending order. The strings
are compared using [localeCompare()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) function.

#### Arguments

- **array *(Array<number | string>)***: the array to process.
- **[options={}] *(Object)***: the options object.
- **[options.compact=false] *(boolean)***: set to *true* if you want to compact the array.

#### returns

- **array *(Array<number | string>)***: the array sorted in descending order.

#### Examples

```js
sortDesc([4, 2, 3, 5, 4]);
// => [5, 4, 4, 3, 2]
sortDesc(["a", "z", "e", "c", "h"]);
// => [ "z", "h", "e", "c", "a" ]
sortDesc([4, 0, 2, null, 5, undefined, 4], { compact: true });
// => [5, 4, 4, 2, 0]
```

## **String**


### isAlpha(value)

This function returns *true* if the string provided contains only alphabetical characters,
*false* else.

#### Arguments

- **value *(string)***: the string to process.

#### returns

- ***(boolean)***: returns *true* if **value** only contains alphabetical characters, *false* else.

#### Examples

```js
isAlpha("jsextrarocks");
// => true
isAlpha("jsextrarocks42");
// => false
isAlpha(42);
// => false
```

### isDigit(value)

This function returns *true* if the string provided contains only digits,
*false* else.

#### Arguments

- **value *(string)***: the string to process.

#### returns

- ***(boolean)***: returns *true* if **value** only contains digits, *false* else.

#### Examples

```js
isDigit("42");
// => true
isDigit("jsextrarocks42");
// => false
isDigit("");
// => false
```

</div>