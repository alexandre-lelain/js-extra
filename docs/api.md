<div id='api-content'>

# **API**

This page lists all the functions **js-extra** offers.

## **Glossary**

- **primitive**: refers to any primitive type: `number | string | boolean | null | undefined`

## **Array**

### arrayToObjectBy(array, property)

Takes an **array** of objects, and the **property** you want to use as the **key** to convert it into a
collection of objects. Useful, for example, when you want to convert an array of entities into a
collection with the entities'id as key.

**Note**: this method does **not** mutate the given array.

#### Arguments

- **array *(Array)***: the array to turn into a collection.
- **property *(string)***: the property to use as a key in the first level of the resulted collection.

#### returns

- ***(Object)***: returns the resulted **Collection** made of the array's objects, minus the given property.

#### Examples

```js
arrayToObjectBy([{ id: 1, name: 'js-extra' }], 'id');
// => { 1: { name: 'js-extra' } }
arrayToObjectBy([
  { userId: 1, name: 'js-extra' },
  { userId: 2, name: '42' },
], 'userId');
/* => { 
  1: { name: 'js-extra' },
  2: { name: '42' }
}*/
```

### compact(array, withZero)

This function compacts the values of the given *array*, meaning all falsey values EXCEPT number 0 are removed from it by default.
Falsey values can be **null**, **''**, **undefined**, **false** and **NaN**. If you also want **0** to be removed, you can
set the 2nd parameter *withZero* to **true**.

#### Arguments

- **array *(Array\<primitive>)***: the array to process.
- **withZero=false *(boolean)***: set to true to also remove the number 0 from the array.

#### returns

- ***(Array\<primitive>)***: the compacted array.

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
You can either use this function to count the number of occurrences of a primitive value (`number | string | boolean | null | undefined`),
or also use a `predicate` function if you want to input specific rules to count your items.

#### Arguments

- **array *(Array<primitive | object>)***: the array to process.
- **toCount *(primitive | predicate: Function)***: the item to count or the predicate function to apply on each item.

#### returns

- ***(number)***: the number of occurrences of **toCount** in **array** or the number of items satisfying the predicate condition.

#### Examples

```js
count([4, 2, 3, 4], 4);
// => 2
count([4, 2, 3, 4], 42);
// => 0
count(['js-extra', 'rocks', 'hello', 'js-extra', 'js-extra'], 'js-extra');
// => 3
count([{ id: 1, name: 'js' }, { id: 2, name: 'extra' }, { id: 3, name: 'js' }], item => item.name === 'js');
// => 2
count([1, 2, 3, 4, 5], item => item > 2);
// => 3
```

### createArray(length, content)

Creates and returns an new Array of **length** and **content** given as parameters.
If no **length** is specified, it returns an *empty* Array.
If no **content** is specified, it returns an array of length **length** with `undefined` values in it.

> **Note:** if you provide an `object` as **content**, they will all share the same refererence in the created array. Please see
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill for more details.

#### Arguments

- **length *(number)***: the length of the array to create.
- **content *(primitive | object)***: the content to fill the new array with.

#### returns

- ***(Array<primitive | object>)***: the new Array created, of length **length** and filled with **content**.

#### Examples

```js
createArray();
// => []
createArray(3);
// => [undefined, undefined, undefined]
createArray(3, 42);
// => [42, 42, 42]
createArray(3, { jsExtra: 'rocks' });
// => [{ jsExtra: 'rocks' }, { jsExtra: 'rocks' }, { jsExtra: 'rocks' }]
```

### mergeBy(property, ...arrays)

**Deep** merge arrays of objects based on the given **property**. Source arrays are applied from left to right, so
the last array given as an argument to the function will have the higher priority. For example, it can
be useful when you want to merge multiple arrays containing objects that represent the same entity type.

**Notes:** the function does **not** mute the given arrays.

#### Arguments

- **property *(string)***: the property that identifies your arrays' objects, which is used to know to deep merge them.
- **...Array**: the arrays of objects you want to merge.

#### returns

- ***(Array)***: returns the array of deep-merged objects.

#### Examples
```js
mergeBy('id', [{ id: 1, name: 'js-extra'}], [{ id: 1, isCool: true }]);
// => [{ id: 1, name: 'js-extra', isCool: true }]
mergeBy('projectId',
  [
    { projectId: 1, name: 'js-extra', project: 'github' },
    { projectId: 2, name: '42', project: 'secret' }
  ],
  [
    { projectId: 1, name: 'new-js-extra' },
    { projectId: 2, project: 'not-so-secret' }
    { projectId: 3, name: 'extra-js', project: 'gitlab' }
  ]
);
/* => [
  { projectId: 1, name: 'new-js-extra', project: 'github' }, 
  { projectId: 2, name: '42', project: 'not-so-secret' },
  { projectId: 3, name: 'extra-js', project: 'gitlab' }
]*/
```

### redesign(array, [options={}])

Redesign is a function that allows you to shape & cut a given **array**. You can
give it a `filter` predicate function to filter the elements of your array.
You can also give it a `transform` function to transform the elements of your array.
And you can also chose to make the redesign `compact`, thus removing any falsey
values from it.

It will return an empty array of you haven't given any, or if you gave an empty array.

> Important: the **array** given is **not** modified during the process.

#### Arguments

- **array *(Array<primitive | object>)***: the array to process.
- **[options={}] *(Object)***: the options object.
- **[options.compact=false] *(boolean)***: the options object.
- **[options.filter=()=>true] *(predicate: Function)***: the predicate filter function to apply to the array.
- **[options.transform=noop] *(Function)***: the transform function to apply to the array.

#### returns

- ***(Array<primitive | object>)***: returns the array redesigned.

#### Examples

```js
redesign();
// => []
redesign([1, 2, 5, 15, 3 ,9], { filter: n => n > 3, transform: n => n - 1 });
// => [4, 14, 8]
redesign([42, 'js', null, 'extra', undefined, false], { transform: n => n + 42, compact: true });
// => [84, 'js42', 'extra42']

const array = [{ id: 1, name: 'js' }, { id: 2, name: 'extra' }, { id: 3, name: 'js' }]
redesign(array, { filter: item => item.name === 'js', transform: item => ({ ...item, name: item.name + '-extra' }) });
// => [{ id: 1, name: 'js-extra' }, { id: 3, name: 'js-extra' }]
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
sortAsc(['a', 'z', 'e', 'c', 'h']);
// => ['a', 'c', 'e', 'h', 'z']
sortAsc([4, 0, 2, null, 5, undefined, 4], { compact: true });
// => [0, 2, 4, 4, 5]
```

### sortCompact(array, sortFunction, [options={}])

sortCompact sorts the given array using native JS [sort function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort), and by default it also
compacts the given array before the *sortFunction* is executed. You can chose to compact the array
after if you set the *before* option to false. If you don't want to keep the zeros in the array, you can also
set the option *withZero* to true.

#### Arguments

- **array *(Array\<primitive>)***: the array to process.
- **sortFunction=null *(Function)***: the sort function. Optional.
- **[options={}] *(Object)***: the options object.
- **[options.before=true] *(boolean)***: set to *false* if you want to compact the array after the sortFunction is executed.
- **[options.withZero=false] *(boolean)***: set to *true* to compact including 0 values.

#### returns

- **array *(Array\<number | string>)***: the array sorted and compacted.

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
sortDesc(['a', 'z', 'e', 'c', 'h']);
// => [ 'z', 'h', 'e', 'c', 'a' ]
sortDesc([4, 0, 2, null, 5, undefined, 4], { compact: true });
// => [5, 4, 4, 2, 0]
```

## **Browser**

### isHexColor(text)

This function returns *true* if the string provided is an [hex color](https://www.w3schools.com/colors/colors_hexadecimal.asp),
*false* else. **Note:** The first `#` character of the string is not mandatory.

#### Arguments

- **text *(string)***: the string to process.

#### returns

- ***(boolean)***: returns *true* if **text** is an hex color, *false* else.

#### Examples

```js
isHexColor('fff');
// -> true
isHexColor('#e4e4e4');
// -> true
isHexColor('#e4');
// -> false
isHexColor('#e123');
// -> false
```

### isSSR()

Returns *true* if you're compiling JS code into HTML code or running JS code on a server.
*false* else.

This function will come handy when you're working with server-side-rendering front-ends.

#### Arguments

No arguments.

#### returns

- ***(boolean)***: returns *true* if the global **window** object is undefined, *false* else.

#### Examples

```js
isSSR(); // if typeof window === 'undefined'.
// => true
isSSR(); // if you're running JS code in the browser (or any environment with the global window object defined).
// => false
```

## **Collection**

### isCollection(value)

Since everything is an object in JavaScript, it's pretty hard to check accurately and easily if a given object is a **Collection**:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object.

This is why **isCollection()** was made: it will return *true* if the given **value** is a Collection with a set of properties. *false*, else.

#### Arguments

- **value *(any)***: the value to process.

#### returns

- ***(boolean)***: returns *true* if **value** is a **Collection**, *false* else.

#### Examples

```js
isCollection(42);
// => false
isCollection(['js', 'extra']);
// => false
isCollection({ name: 'js-extra' });
// => true
```

### merge(...collections)

**Deep merge** multiple objects and their enumerable properties. Source objects are applied from left to right, so
the last object given as an argument to the function will have the higher priority.

**Note:** this function does **not** mutate the given objects.

#### Arguments

- **...Object**: the collections to merge.

#### returns

- ***(Object)***: returns the deep merge of all the collections provided.

#### Examples

```js
merge({ name: 'js-extra'}, { name: '42' }, { project: 'github' });
// => { name: '42', project: 'github' }
merge(
  { id: 1, name: 'js-extra', project: 'github', location: { planet: 'moon', street: 'noop' } },
  { id: 1, name: '42', project: 'github', location: { planet: 'earth', number: 16 } }
);
/* => {
  id: 1, name: '42', project: 'github', location: { planet: 'earth', street: 'noop', number: 16 }
}*/
// => true
```

### objectToArrayBy(collection, property)

Turns a collection of objects into an array of objects. The **property** given to the function will take the keys
of the collection's **first** level as a value.

**Note**: this method does **not** mutate the given object.

For **TypeScript** users, if your collection's type is `Record<string, UserInterface>`, then the resulting array will be of type:

```typescript
interface ResultedUserInterface extends UserInterface {
  [property]: string
}

type ResultedArrayType = ResultedUserInterface[]
```

#### Arguments

- **collection *(Object)***: the collection to turn into an array.
- **property *(string)***: the property to assign the 1st-level keys to.

#### returns

- ***(Array\<Object\>)***: returns the formatted array made of objects which now also contain the given `property`.

#### Examples

```js
objectToArrayBy({ 1: { name: 'js-extra' }}, 'id');
// => [{ id: '1', name: 'js-extra' }]
objectToArrayBy({ 
  1: { firstName: 'js', givenName: 'extra' },
  2: { firstName: '42', givenName: 'none' }
}, 'userId');
/** => 
[
  { userId: '1', firstName: 'js', givenName: 'extra' },
  { userId: '2', firstName: '42', givenName: 'none' },
]
*/
```

## **String**

### isAlpha(text)

This function returns *true* if the string provided contains only alphabetical characters,
*false* else.

#### Arguments

- **text *(string)***: the string to process.

#### returns

- ***(boolean)***: returns *true* if **text** only contains alphabetical characters, *false* else.

#### Examples

```js
isAlpha('jsextrarocks');
// => true
isAlpha('jsextrarocks42');
// => false
isAlpha(42);
// => false
```

### isDigit(text)

This function returns *true* if the string provided contains only digits,
*false* else.

#### Arguments

- **text *(string)***: the string to process.

#### returns

- ***(boolean)***: returns *true* if **text** only contains digits, *false* else.

#### Examples

```js
isDigit('42');
// => true
isDigit('jsextrarocks42');
// => false
isDigit('');
// => false
```

### slugify(text, [withHash=false])

Slugifies a text to make it a valid url hash. Can be pretty useful when you are compiling
markdown code to HTML and want to make your titles become anchors, with a valid
and standard url hash.

For example, if you have a title `'The best number: 42'`, **slugify** will transform it
into `'the-best-number-42'`.

It will return an **empty string** if you provide it with a *falsy* text.

#### Arguments

- **text *(string)***: the string to process.
- **[withHash = false] *(boolean)***: Pass `true` if you want to prefix the slug with `#`.

#### returns

- ***(string)***: returns the slug.

#### Examples

```js
slugify();
// => ''
slugify('hello.world')
// => 'hello-world'
slugify('Hello, World ?')
// => 'hello-world'
slugify('$Hello? World$ ,Space', true)
// => '#hello-world-space'
```

</div>